---
title: Automated accessibility testing
createdAt: 2021-10-20
description: Learn how to use the popular cloud platform Vercel and the Cypress testing framework to automate away accessibility testing.
featuredImage: https://images.ctfassets.net/w1rfv8jievsk/1UX1hh8HjR96bK72A32nVw/ccab9fb7468c95f43ba3e507052997e6/tim-mossholder-oY5mX1aW72A-unsplash.jpg
---

I'm a huge fan of [Cypress](https://www.cypress.io), it's become a core part of my stack over the last few years. If you're not familiar with Cypress, it's an end-to-end testing solution which allows you to write descriptive and behavioural integration tests against your application.

Part of it's appeal is it's "pluggable" architecture, allowing developers to extend Cypress. A leader in the accessibility tooling arena is [Axe](https://www.deque.com/axe/), and what really helps with this use case is the Cypress plugin [cypress-axe](https://www.npmjs.com/package/cypress-axe).

After integrating Cypress and `cypress-axe` into your project (I won't cover this here as the [docs](https://www.npmjs.com/package/cypress-axe#installation) are complete enough), you get access to a special method on the main Cypress object: `cy.checkA11y()`. Calling this in your Cypress test means the test case will fail if it encounters a [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) accessibility violation.

Combined with Cypress' default functionality of being able to use your application like a real person, you can supercharge your CI/CD pipeline to catch things like accessiblity errors earlier in the development lifecycle.

I use [Vercel](https://vercel.com) to host and deploy most of my websites for a myriad of reasons, but for this exercise we're really interested in the [preview environments](https://vercel.com/docs/concepts/deployments/environments#preview) feature, allowing us to deploy potential changes to a safe testing area before merging these into the main codebase and deploying to production.

Using GitHub actions as a CI/CD platform, you get the standard benefits of being able to run your actions against an isolated pull request, and with a bit of [fiddling](https://github.com/mikefrancis/nosh/blob/main/.github/workflows/regression.yml#L26-L32) I've managed to introduce a `regression` step which will (crucially) wait for the Vercel "preview" deployment, then point my Cypress tests at this URL for testing. I've since turned this into a [GitHub action](https://github.com/mikefrancis/vercel-cypress) which you may use.

I can then see if anything in the current pull request has broken anything crucial: functionally or accessibly (or both!). With this kind of confidence in my CI/CD pipeline, I could set up something like [Kodiak](https://kodiakhq.com) to automatically merge things like security updates. I really like this quote from [Kent C. Dodds](https://twitter.com/kentcdodds/status/977018512689455106) about testing, and try to use this as a guiding principle for testing as a whole:

> The more your tests resemble the way your software is used, the more confidence they can give you.

As someone who has trouble with visual technology (I'm colourblind), I try to bake in an accessible approach to product development by default. It can often be an afterthought, which can jar with things that have already been designed or developed. Involve accessbility as early as you can (and at every stage) of your product design/development process 🙂
