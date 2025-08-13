---
title: I Built A Thing Once and People Liked It
createdAt: 2016-05-13
description: How to deal with the fallout of building a semi-successful product
---

I helped build some [Free and Open Source Software](https://github.com/benchmarkstudios/slackbox) which had a brief moment in the sun. It’s no NPM or Composer, but it was trending on GitHub’s JavaScript repositories for a day or so, and managed to generate a bit of buzz on [ProductHunt](https://www.producthunt.com/tech/slackbox-2) and [TheNextWeb](http://thenextweb.com/dd/2015/06/23/a-new-way-to-control-spotify-through-slack-integration/#gref). Also dem stars! Everything should be measured in stars. You can have some just for making it to the end of this first paragraph. ✨

As amazing as this was to me personally, I very quickly began to learn what it meant to be a maintainer on a (briefly popular) open-source project so I thought I’d share my limited experience just in case it happens to you.

## Be slightly prepared, like now

If you’re anything like me, you’ll have an idea for something at about 3am after being jolted awake by dreams of Richard Blackwood telling you that he’s your best friend, so you’ll either scribble it down or try as best you can to remember it and get hacking away in the morning. With the plethora of frameworks, packages and other open source projects out there you can get a proof-of-concept together the same day if you can figure out how to type and eat a Turkish pizza roll at the same time (it’s a skill, trust me).

As much as I’m an advocate for things like TDD and sticking to a coding style, this all goes out of the window when you’re starting to edge closer towards a short-term vision. So inevitably if whatever you’re building hits you’re going to find that potential users become your unwitting QAs.

If you can, try and have some semblance of order set up to mitigate some of these things; for example you could use .editorconfig or tools like code-sniffers in your day-to-day work so any new project you create is treat like any other.

## You can’t please all the people all the time

Once the pull requests start rolling in, it’s easy to say yes to everything and get trigger-happy with the merge button, especially as the enthusiasm for people using your product masks your ability to make sensible decisions. But remember, this is your product. Truly the greatest aspect of open source is forking. If someone doesn’t like a particular project, or wants to take it in another direction, the hard work is already done for them and they can make whatever they want. So let them. If their vision doesn’t align with yours, you just have to be nice and say thanks but no thanks. Explain that different strokes are indeed for different folks and leave it there. Don’t bullshit anyone either — if there’s an issue it’s better to be up front about it and nip it in the bud, before someone discovers your email address and begins a slightly more intense dialogue.

Also, this is where things like proper testing and Continuous Integration can really come into their own. Without checking out the code yourself, you’re relying on very little to prove that the incoming code enriches your product.

## People won’t read the installation instructions

They just won’t. And who can blame them — I put together a coffee table the other day without once looking at the instruction booklet. You can yell at people to RTFM as much as you like but some people just won’t. I am one of these people and probably you are too. Great isn’t it?

## People won’t understand the installation instructions

Write installation instructions as if the person who will (maybe) be reading them thinks that the work “computer” is a buzzword. However, there’s a fine line between being explicit and patronising. Trying to get someone to create and configure their own Heroku app is not easy, especially if they’ve never done it before. Hold their hand a bit, hallway test your instructions or better still, if you’re using another service, link to their installation guides — saves you having to write one and you can tell your users where to get on and off the metaphorical bus.

## People won’t understand the product

There’s a reason you built what you built and I’m sure it makes total sense to you and maybe those close to you (they can probably repeat verbatim what you’ve told them again, and again, and again…). But whether the potential user is another developer or someone non-technical, people need to understand what it does.

A friend of mine who heads up a marketing department gets inundated with calls from companies who sell lots of tracking and monitoring tools. She tells them, “If you can’t sum up what you or your product does in one sentence, how am I going to understand it?”. She’s right — if your README isn’t loaded with a short and snappy description of what it does, people just aren’t going to invest their time in using it, no matter how awesome it might be. Sorry.
