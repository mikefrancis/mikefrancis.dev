---
title: "Unleash client for Laravel"
date: "2019-08-14"
description: "Creating a client for the popular, open-source feature toggle package"
---

Although I don't get paid to write PHP anymore, my full-time job is full-stack JavaScript/Node (TypeScript), I still like to dabble with [Laravel](https://laravel.com) as it's "batteries included" approach makes it really easy to knock together a concept in a matter of hours.

Something I've been using a lot at work at the moment is [Unleash](https://unleash.github.io). If you are unfamiliar, as I was until quite recently, it's an open-source feature toggle package which aims to be trivial to deploy yet fully features with a plethora of strategies.

If you are unfamiliar with feature toggles, I'd suggest reading up on them otherwise this package will not really make that much sense! A TL;DR regarding feature toggles/flag is hiding features in your codebase behind toggles that are controlled externally. Some of the benefits of this are:

- You can experiment with rolling these features out, great for measuring the impact of a particular feature.
- Non-technical people can choose when to roll out new features, for instance to coincide with a marketing push, taking the burden away from the developer.
- You can test things in production without having to worry about degrading the experience for actual users.

Doing a bit of searching on [Packagist](https://packagist.org), there didn't seem to be anything that was compatible with Laravel which I thought was a bit of a shame as Laravel's [Blade](https://laravel.com/docs/blade) syntax would lend itself perfectly to working with feature toggles.

So here's my attempt at an Unleash client:

https://github.com/mikefrancis/laravel-unleash

It's still very much a work in progress as I am still building strategies to handle all the default Unleash strategies.

If anyone would like to give it a whirl, I'm looking for testers at the moment to see how stable it and if any performance improvements can be made.

Happy feature toggling!