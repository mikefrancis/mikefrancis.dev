---
title: The Ack Pattern
createdAt: 2023-09-14
description: A common but key pattern to establish in product/operations/engineering teams
featuredImage: https://images.ctfassets.net/w1rfv8jievsk/3hUrEx3v30TtZFn1HNYKJR/ce8e962a43e2794d8baf2d991b027946/christian-dubovan-gxsRL8B_ZqE-unsplash.jpg
---

In mainly remote organisations, we heavily rely on asynchronous (async) conversation to accomplish our daily tasks. However with using tools such as Slack to communicate async, it can be difficult to convey things like urgency or acknowledgement as you would in real life; a simple “nod” or a thumbs up to say, “I’m on this!”.

We've created a nice pattern using Slack reactions which can, with minimal effort, show your colleagues that: yes - we have acknowledged your message, and also use the same pattern to notify when a resolution might have been achieved.

By adding a simple 👀 `:eyes:` reaction, this shows anyone looking at the message (and also the original poster) that someone has acknowledged (ack’ed) receipt of this message. They then could be taking time to digest the contents or triage any possible issue before reporting back.

As mentioned above you can signify when you have finished or come to a resolution on the message by adding a ✅ `:white-tick:` emoji reaction. This means anyone else interested in the resolution to the original message can see that there is one, and that your colleagues can keep track of anything that has already been resolved.

After introducing this in our main company-facing Engineering channel where we collect bugs and questions, we got some good feedback and fixed a few issues with Slack automations we'd set up. Eventually we noticed that other departments in the company began to adopt this pattern in a similar way, which was great to see!
