---
title: Modern full stack JavaScript
description: Thoughts about migrating this website from Next.js to Astro, and full stack development in general.
createdAt: 2024-02-20
featuredImage: https://images.ctfassets.net/w1rfv8jievsk/2rutHCEnbF2kaUh2CTTA35/1069311af5cd75b9f2fcdeae23e06c30/neom-XN6Z9g3DM4A-unsplash.jpg
---

I started off writing a post about migrating this website from [Next.js](https://nextjs.org/) to [Astro](https://astro.build/), however the more I thought about *why* I chose to do this, the deeper I wanted to go in explaining this, and address some of the prevalent topics in the area.

Like [others](https://blog.cassidoo.co/post/annoyed-at-react/), I've got a bit of React fatigue. Don't get me wrong, I absolutely love React and have used it (and will definitely continue to do so in some capacity) professionally since it's inception. I also class myself as a bit of a Vercel fanboy; I've got [the mug](https://edge-mug.vercel.app/edge) for doing some Open Source contributions, engage with the amazingly talented folks on Twitter whenever I can and went to [their first London meetup](https://twitter.com/vercel/status/1199636345041408000) (back when they were called Zeit).

I thought React and Vercel having some kind of business arrangement would be a recipe for world domination; the most ubiquitous UI library with tons and tons of community behind it working with folks who have created arguably the best framework to wrap around it. Vercel seems to deeply care about the same things I do as a developer - Developer Experience (DX) and shipping quality products, fast. A match made in heaven.

Although, in my opinion, on the face of it not a lot has changed, at least for the better. Subjectively, things like introduction of the Next.js App Router seemed to be trying to fix problems I’ve never really had. As a learning exercise I managed to successfully migrate this website to use the App Router, but the whole process felt very jarring. For a company who have done so much for DX, the App Router paradigm just feels clunky and a bit incomplete. I'm sure this wasn't the case but it felt deep down like a bit of a knee-jerk reaction to some of the things that [Remix](https://remix.run/) were doing.

## Woes

Yes, I too suffered from hydration warning after hydration warning. I'd like to think I'm a decent enough developer, but this never usually comes into it as most Vercel products usually have a really low learning curve. I found myself giving up most of the time and slapping `"use client";` at the top of every file and concentrate on shipping, which made the client/server rendering distinctions redundant.

What I loved about Next.js was: A new page is a new file, bosh. Want to render this on the server? Here, use `getServerSideProps` and export it, bosh. Same for generating a page statically. I was so productive and needed the barest of understanding as to how the framework actually worked until the hood to use it.

On the React side, I remember the anticipation for hooks, like some crazy end-of-year graduation party. Much like the aftermath of said party, I am waking up fuzzy headed and regretting the amount of kool-aid I had to drink; looking at a barrage of lint warnings and code that arguably is less easy to understand than it's class-based counterparts. Maybe I should write better code? Or maybe it shouldn't be so difficult to use things like `useEffect`? 🤔

All this culminated in needing a bit of a "stack detox", or at least really scrutinising what I was using it to achieve. I will __always__ bet on JavaScript; I’ve been writing it for 20 years and still do now professionally, so it’s a bet that pays off time and again. I just feel like I’ve got to the point where JavaScript (and to an extent React and Next.js) have become my hammer, and every problem that needs solving is a nail.

## Enter Astro

As a technologist I love learning new things, although the process seems to get slightly more begrudging the older I get! I'd heard on various forums about a framework called Astro which was making use of an [Islands](https://docs.astro.build/en/concepts/islands/) concept. I won't try and explain this here but the big selling points were:

- decreasing the amount of JavaScript you ship to the end user
- being able to mix and match UI frameworks, and not needing to have them wrap your whole app
- leaning more on standard HTML, CSS and modern JavaScript for interactivity

The last point really intrigued me, as JSX was the main reason I fell in love with React. There was no attempt to try and sprinkle magic attributes on HTML, someone just decided to create a completely new way of describing UIs, and I found the separation fantastic. For this to work, it would need to be super clear where the boundaries of my nice semantic, pure HTML layouts were and any islands (which themselves might use JSX); sprinklings were a no-no as far as I was concerned.

### SolidJS

There are 2 areas on this website that are "interactive": theme toggling and "heart"ing an article (at the bottom). Theme toggling, lo and behold, is actually [pretty trivial](https://docs.astro.build/en/tutorial/6-islands/2/) to do with vanilla JS. It almost made me feel bad for initially considering a UI framework to store some kind of global state for this.

The article hearts is a bit more complex as it involves some persistent state; I have a Vercel KV database which has a key for every article with a count as the value. When someone clicks the “heart”, it updates that count by one. In essence it’s the simplest of web forms but something I really liked having dynamically update, rather than refreshing the whole page, so knew made a good candidate for an interactive “island”.

Normally in the React world you would need to manage each part of this and its state yourself, or use a 3rd party library such as [SWR](https://swr.vercel.app/). Wanting to give something new a go, I looked into SolidJS. Solid first popped up on my radar as a React-like library which purported to be quite a bit faster at rendering and have some nice features. Kind of like with Next.js and Astro, Solid seems to have taken the really good bits from React and then carried on with its own paradigms. Built into Solid is an API called [createResource](https://docs.solidjs.com/reference/basic-reactivity/create-resource). This is basically built in handling of data fetching state - you give it your own fetching function and it affords you lots of nice properties that you can use within your UI. This API is very slick and is doing quite a lot to completely sell me on Solid!

## Quirks

The migration seemed to be going really well until it got to the point of deploying. I chose to continue deploying to Vercel as they natively support Astro builds and it’s also where the database and website are hosted currently. However due to the presence an Astro API endpoint, I needed to add a bunch of [configuration](https://docs.astro.build/en/guides/integrations-guide/vercel/) to tell Vercel what infrastructure to create. This was a very minor inconvenience and took a small amount of trial and error to get right.

One issue which I still haven’t solved is I need to pass some additional config to Solid’s `createResource`, otherwise I get a serialisation error when I try to deploy to Vercel. It’s very odd as this is definitely not happening locally but again solved by a bit of trial and error.

## Conclusion

This website now works without JavaScript! Well, 99% of it does, the “heart”ing of an article will not work unless JS is enabled, but that’s ok and I’m confident there’s some island hydration bits and bobs I can use in the future to make this work sans JS.

The loading speed has noticeably improved due to not needing the whole app to hydrate itself, and it feels cathartic to be closer to the DOM for such a simple website.

React and Next.js will always be remembered fondly, and probably still stands as the most “mature” solution for creating a reactive full stack application and will do for some time, but I definitely see a bright future for Astro and SolidJS for building on the web!
