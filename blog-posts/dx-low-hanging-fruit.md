---
title: The Low Hanging Fruit of DX
createdAt: 2026-02-25
description: A collection of tips from 20 years of coding
featuredImage: https://images.ctfassets.net/w1rfv8jievsk/3hUrEx3v30TtZFn1HNYKJR/ce8e962a43e2794d8baf2d991b027946/christian-dubovan-gxsRL8B_ZqE-unsplash.jpg
---

I've been coding for a while. I don't profess to be the best (very far from it) but having worked at a wide range of companies (young, old, big, small, tech, non-tech, legacy, bleeding edge), I've seen things that work and things that don't.

When I say "work", I am talking about Developer Experience (DX). I am not going to attempt to define this in this post, but I think for now it's the best way I can group these items. They've been things that have stopped me in my tracks and genuinely made me question why this is the first time I'm putting them into practice.

So without further ado:

## 1. Alphabetise whatever you can

Environment variables. Config. CSS. Feature flags. You generally find after a while (like with linting/formatting) people have their own methods of doing sorting things. A classic example is CSS, ordering properties by layout -> appearance -> theme etc.

I've found these to be quite subjective and (again, like linting or formatting) you allow these personal preferences to bleed into code reviews which is a waste of time.

Sorting things A-Z is great because:

* It's completely objective
* It's easy to know exactly where to insert something (better diffs etc.)
* It can be automated

## 2. Stay close to the framework

Everyone hates a gnarly upgrade. I've worked at places with dedicated platform teams who provide you with very finely tuned starting templates which (I'm told) are supposed to speed things up.

Inevitably, these end up slowing you down in the longer term. Config is spread allover the place, dependencies start to go stale, no-one understands why particular decisions were made.

By keeping as close as you can to the framework (use their conventions, lean very heavily into out-of-the-box) you can avoid as much of this toil as possible.

Pick a framework which has detailed upgrade guides, or better still is backwards compatible.

## 3. Make the editing experience common

This is a great place to invest time and will get you payback well into the future.

I've lost count of the amount of times I've seen someone join a new company, submit some code and the files have no new-line endings. While this in itself is not a sin, on the flip side I remember joining companies with strong recommendations on editor setup and not only has this allowed me to push code that is non-controversial, I've actually learned a bunch of stuff too. It's also allowed less technical people (e.g. designers who have the impetus to change some front-end code) to operate independently, which has been super impactful.

Basically, remove whatever you can from a code review. Linters, agent skills, code quality tools and git tooling can catch a bunch of issues before they end up wasting another developers's time in code review.

Just make sure it doesn't "get in the way". If I want to push something experimental, I should be allowed to do this safely without my terminal screaming at me.

## 4. Your setup is a product

Has anyone used the acronym SaC (Setup as Code) yet? If your organsation uses common software (IDE, DMBS, HTTP client etc.) then make it easy for people to install the right version of these, preferably early into their role and in a low touch way.

Same goes for programming languages. Pin whatever version of the languages you are using to repositories, use version managers and allow automatic switching as folks move between repositories. These usually integrate really well with CI, so if you update versions in one place, you can also test and deploy with these versions too.

## 5. Avoid Hasty Abstractions

Software developers are great at creating questionable solutions for problems that don't exist yet. I know this because I have done this many times myself, and will continue to well into the future. Sometimes, you've just got to take a very big step back, talk to a Senior and ask, "Do I really need to do this?".

Also there's a time and a place right? If you are making abstractions on artefacts which might change quickly, such as a landing page for marketing, is your abstraction actually going to make it harder to experiment and iterate on at the speed required?

My advice in general is to keep things as flat as you can and just not worry about repetition until either it causes a problem or someone else brings it up. Until then, if it's covered by a test then you shouldn't have anything to lose sleep over, and can in general be a lot more nimble with the work you pick up.

## 6. Define "Done" clearly

