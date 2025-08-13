---
title: Testing in Production
createdAt: 2020-02-11
description: I've come to learn that I do not fear it, and have come instead to love it
---

When I think back to my humble roots in web development, there was only production. Editing files directly using an FTP client, or SSHing into a server to fix a bug - they were some cavalier moments.

Things have moved on a lot since then. Tools have been created, processes have been developed and we've now got this amazing thing called [continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery).

Some things haven't changed though. So many times I've found myself either in public or private projects where an API will only work *in production*. The strangest edge case you've ever heard of will only pop up *in production*. Your product manager will insist upon seeing a feature *in production*, sometimes right before canning it entirely.

And when we find ourselves in similar situations, we cover our eyes with our hand, peek through the gaps and press the big red "Ship it!" button, even though we are taught (usually through experience or by others who have had the misfortune) to **never do this**. Especially on a Friday.

You'll get it in the neck. You'll be up until 3am fixing it. You'll have to bug your tech-lead who is on holiday for a script to fix it. Yadda yadda yadda.

I have been on both ends of this (the fixer and the fixee) and what I can confidentally say, more confidentally than I know the sun will rise in the morning, that I will be on both ends again. 

> Happiness can only exist in acceptance - George Orwell.

I think the reason I'm so accepting of this is either that I have ripped the band aid off so many times the pain has made me numb, or I've tried to make testing in production relaxing experience - dare I say - a joy.

## Feature flags

Feature flags (or toggles) are truly amazing. If I'm being honest I wanted an excuse to write an article about feature flags and I've not-so covertly managed to sneak it into an article about testing in production.

Why are they so good? They allow you to "wrap" different sized parts of your application in conditions which can be dynamically turned on and off. There's a few platforms which handle the "server" part of this for you, such as [Unleash](https://unleash.github.io) and [Launch Darkly](https://launchdarkly.com) - you store the toggles and logic on these platforms, and they afford you different "strategies" in which these can be activated and an API (or SDK) to access them.

The simplest strategies are a binary on-off, but you can also have user-based strategies which can check an allow-list, ranging to gradual roll-outs (for example, a percentage of your visitors) right through to custom strategies.

This really shines when you've got a nice single page app which is driven by an API. So long as the feature you're wrapping doesn't inadvertantly break something else on the page (GraphQL - I'm looking at you) and you have set a sufficient strategy that means random visitors are *not* going to see the feature, you can pretty much test whatever you like in production.

This does not come without it's drawbacks though. There's a fair bit of investment to make - in terms of time for building these wrappers into your UI (and maybe building a proxy endpoint for grabbing the feature flags in your API), and also financially in that you will need somewhere to host the feature flag service (either yourself or paying for a platform). You can achieve a very basic and crude implementation of feature flags with environment variables so that's always an option if you want to give this a try.

Also there's the opportunity for a less-experienced developer to open massive security holes with this too. Oh, I checked the Network tab and saw that `newSuperSecretButUnsecureLoginPage` is `false`? What if I set that to `true`?

With feature flags though you get, which I think is their most criminally underrated feature, is the ability for *other people* to deploy your features for you. There's been a handful of times where I've had to stay late (or rise early) to push something out, usually sat around awaiting the "go-ahead". It wouldn't be so bad, but you've still got to actually get through the deployment ritual and it's usually when *something* in CD decides to change or break. Oops, didn't add that environment variable. Oh no, now a test broke. And now I've fixed it coverage has decreased. It's a spiral of doom, why would you not want to instead just flick a (virtual) switch?

## Logging

Feature flags are great on the front-end (and there's nothing to stop you using them elsewhere) but for back-ends it's hard to be as "visual" with your testing. What do you actually need to surface for testing?

Logs are your friend. I will be honest and say that it wasn't until I transitioned from web development into software development that I really used logs. Yeah there's the nginx logs or whatever - great, looks like I'm getting hacked. But actual application logging is super powerful and when used correctly allows you to build a very visual narrative to how your application is behaving.

Invest time in learning about your logger. Winston, the popular Node.js logger, is what we use day-to-day and a colleague of mine pointed out that you can create a parent logger and give it some attributes. This means you can search logs on an attribute and get all the subsequent logs back.

For example your application might look like this:

```javascript
import logger from 'winston';

function updateUser(userId) {
  logger.info(`Trying to update user ID: ${userId}`);

  try {
    // ...
    logger.info(`Successfully updated user ID: ${userId}`); 
  } catch (error) {
    // ...
    logger.info(`Failed to update user ID: ${userId} error: ${error.message}`); 
  }
}
```

and your log lines will look not dissimilar to:

```
Trying to update user ID: 123
Successfully updated user ID: 123
Trying to update user ID: 456
Successfully updated user ID: 456
Trying to update user ID: 789
Failed to update user ID: 789 error: Network request failed...
```

Not bad, but not great either. If we want to find out everything that happened to user `789` we have to do a fuzzy search which could throw up other things containing those numbers. However if we refactor to:

```javascript
import loggerFactory from 'winston';

const logger = loggerFactory.child({ userId });

function updateUser(userId) {
  logger.info(`Trying to update user`);

  try {
    // ...
    logger.info(`Successfully updated user`); 
  } catch (error) {
    // ...
    logger.info(`Failed to update user`, {
      errorMessage: error.message,
    }); 
  }
}
```

Our log lines now look like:

```
Trying to update user {"jsonPayload.userId": 123}
Successfully updated user {"jsonPayload.userId": 123}
Trying to update user {"jsonPayload.userId": 456}
Successfully updated user {"jsonPayload.userId": 456}
Trying to update user {"jsonPayload.userId": 789}
Failed to update user {"jsonPayload.userId": 789, "errorMessage": "Network request failed..."}
```

Much better! We can now do a search like `jsonPayload.userId=789` and get the full story.

Hopefully you didn't need to read this article to realise logging is ace. It doesn't come without it's pitfalls though. If you trawl the logs of most tech companies you're bound to find some kind of Personally Identifiable Information (PII) floating around in there. So be careful.

## Dry mode

If you're using logs to their potential then you can begin to use them to tell a story. Front-end work is, by it's visual nature, straightforward to demo to stakeholders, QAs or other engineers, but what do you do if you're a back-end engineer?

One thing I've tried to push when doing back-end work is being able to run things in some kind of "dry" mode (also called "shadow testing" or "toothless mode", etc.). When running in this mode a task would be carried out as it normally is, with lots of logging, however any calls to mutate any data are wrapped in a "are we running in dry mode?" check. These then just log what they would do (rather than actually doing it) and continue on.

Sounds simple I know but I love dry mode. I've had to deal with some extremely fiddly issues with a event-based distributed system and guess what... the data fetching only worked in production. We'd invested a lot of time creating an exact replica of the environment and thoroughly tested our code with several QAs, only to find several transient issues when ran in dry mode in production.

Again we have limitations as it's difficult to test any data which depends on any data that would have been mutated. You can use things like database factories or dependency injection to use fakes rather than the real rows but then you've got to justify this extra time investment for code you're probably going to delete at some point in the near future.

## Conclusion

It's about trade-offs, and common sense too. I may have painted a rosy picture about testing in production but would you do this if it were avoidable? Hell no. Invest your time in things like building proper CI/CD pipelines, blue-green deploys which allow you to hit that deploy button at 5pm on a Friday, beer in hand.
