---
title: Technical Leadership
createdAt: 2020-06-10
description: A whistle-stop tour of my interpretation of Technical Leadership, and the advice that got me to where I am today
featuredImage: https://images.ctfassets.net/w1rfv8jievsk/1P5zEjq6fc2UNVjPX8JvCu/5f9bde394ce9d2d49572bfc141fa2ff3/photo-1523875176340-1298db8ee216.jpeg
---

I've been fortunate in my career to have worked with some amazing folks who have each taught me a different aspect about technical leadership and management. Like many before me I try to emulate these people in my own day-to-day and "wear the right hat".

By no means is my learning on technical leadership over (on the contrary, I feel like every month/quarter is a new beginning) but I've hit a point where I want to start documenting these slivers of advice and have something to refer back to. I'd urge anyone to do the same thing.

*This will be a "living" blog post.*

You may have arrived at this juncture in your career as:

- The most senior engineer on your team
- The only engineer in your team/organisation
- The person bestowed the title of Tech Lead or Staff Engineer, etc.

Or another situation entirely 🤷‍♂️

It is likely to differ per organisation and industry, but technical leadership (for me) is being adept in the following spaces:

- Programming
- Architecture
- Project management
- Engineering management

I'll try to break down what I would expect to see from a technical leader in these spaces. It's important to note that these are all positions which would occupy a single person (or sometimes multiple people) so it's definitely a testing time but it gives you a flavour of what is to come if you would like to specialise in one of these areas. For example someone who specialises in Programming and has no particular interest in the other areas can progress to becoming a distinguished Individual Contributor. Technical leaders who enjoy engineering management and looking after people can go all-in on an engineering management track, etc.

## Programming

It was quite difficult to pick a heading here. It's changed from Development, to Programming, then to Coding, and back to Programming. What I mean here is the nuts and bolts, writing and shipping code.

The difference as a technical leader is you need to, and I'll use the same terminology verbatim as it was first said to me as I've not found a better way of saying it, **consistently nail everything you lay your hands upon**. Codebases should be left in a [positive sum](https://www.britannica.com/topic/positive-sum-game) state. Your work should be used as examples for the rest of the team. Leave `TODOs` but then make some time to go through and action these. Write tests that give your team confidence in being able to delete vast chunks of dead code. Improve the tooling on your project so it's quicker to ship code and makes feedback cycles shorter. Write detailed documentation and document debugging setups, and share all this knowledge with your peers and continually strive to make this better. Know "where to look". Leave lots of constructive comments in code reviews and prioritise code review over everything else as it is often a blocker to release. Expedite work which unblocks your colleagues. "Pull from the right", as in concentrate on getting things on the right of your Kanban board over the line, rather than starting new things and having lots of in-flight contexts to switch between.

Hopefully you have noticed that the amount of programming you are taking on now is decreasing, as you begin to explore other facets of Engineering, and well away from the critical path to delivery.

## Architecture

You will need to be an expert in every domain node your team owns and have deep understanding of any adjacent nodes and be able to sketch these systems out on napkins/whiteboards when needed. You'll be able to visualise chunks of this architecture and, especially when planning something new, where your gap/hole exists and any constraints involved.

With your years of experience you will have developed a deep "back pocket" of best-practice, abstracts solutions which you can delve into when minds go blank. Does a solution already exist to a similar problem? Keep things which follow the [Pareto principle](https://en.wikipedia.org/wiki/Pareto_principle) to hand.

Think in events and packets of data, and how these flow across your business. Security should not be an after-thought in these discussions, so try to keep a threat-modelling channel of your mind open or, even better, call upon a specialist who knows what they are talking about.

## Project Management

This was the main thing that blindsided me about Technical Leadership. It should be Project Management with an asterisk though as it's more of a "hat" - please still let the product manager do their job. There's a [great article by Tom Ashworth](https://tgvashworth.com/2016/07/20/technical-lead.html) which explains this role better than I ever could.

As a technical project manager you're going to be using the architecture skills mentioned above and apply them to a business need or requirement. When you do this hopefully a "unit of work" should appear, an example would be a task or a ticket (or maybe it's a collection of these things and it's something larger?). Can you measure the impact? Are you able to show this to your team in a simple, visual and digestable way to know if you're on the right path?

It's also your job as a technical leader to "front-load" your team with the learning you've done. Before the work starts, you'll have run ahead and scouted the area which you're hoping to have the impact in and hopefully noted edge cases and limitations before your team encounters these issues, and prepared or documented work arounds to unblock them. It's very hard to change things at the end of a project, even with the noblest of intentions, so I cannot stress enough how important this phase of a project is and that time should be set aside for it. If not you'll need to set time aside to deal with issues that pop up at the end, so adding the [cruft](https://martinfowler.com/bliki/TechnicalDebt.html) multiplier to this means it's much more economical and efficient to do this at the start, rather than at the end.

Project managers are often the busiest people on a team, in terms of the amount of meetings and knowledge they have to consistently have at the forefront of their minds, so ask if you can help them out. My previous Engineering Manager (thanks DJMC) encouraged and gave me the freedom to pluck responsibilities from the levels above me even though I hadn't been granted an official job title, rather than waiting for cycles of performance reviews to roll around. It was in doing this I started to take on some of the project management tasks such as leading Agile ceremonies that would help take the burden away from our project manager but also allow me to make that step up.

## Engineering Management

This is possibly the most alien part of technical leadership to Engineers. As [Camille Fournier](https://twitter.com/skamille) writes in The Managers Path, a lot of the time you'll find a Senior Engineer moving into this role and it's important to acknowledge that you're starting an entirely new career as a *manager*; technical mastery will not really help you in this field as you will need to learn empathy and galvanising people for your cause.

I have very limited experience in this area but I'm on my path. Something I've found useful, which may sound slightly creepy at first, is creating a living document of notes for each person on my team and filling it with feedback which I collect whenever I notice something which deserves praise, shows growth or demonstrates company values - and also for things which could be improved. I find this always gives something to talk about in 1-1s and is great for performance reviews, and is better than digging through scribbled notes or trying to pluck thoughts from the top of my head.

I also don't exclude myself from this process. In the same folder I have the same "brag" document for me - [Julia Evans wrote a great article about it](https://jvns.ca/blog/brag-documents). If there's anything which I feel needs shouting about at my next performance review I'll put it in there. If I feel like I didn't really handle something particularly well, it goes in there too as something I can share with my manager and we can hopefully figure out how to use it as a stepping stone.

In turbulent times lead from the front. When everything is going smoothly lead from the back. Don't forget that in your own quest for career growth that others will share the same goals, so make space for them to become their own experts. Give Senior(ish) Engineers their own projects, ask them what they aren't sure about and support them. Check in with them regulary. Encourage them to read up on best practices and produce work to high standards. Pair with them on programming, but also if they want to present work to the wider company or community especially if they may need a hand with a presentation or public speaking.
