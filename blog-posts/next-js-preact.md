---
title: Next.js + Preact
createdAt: 2021-01-04
description: A step-by-step walkthrough to replace React with Preact for smaller bundle sizes
featuredImage: https://images.ctfassets.net/w1rfv8jievsk/5e1P2CvTzdUs1a5Iyiectr/2812ea196a1c85ff73f52fb4580dff25/mathew-schwartz-sb7RUrRMaC4-unsplash.jpg
---

While perusing Twitter I stumbled across the following video by Lee Robinson:

[10 Next.js Tips You Might Not Know!](https://www.youtube.com/watch?v=R59e1Vl5lO8)

If you use Next.js or are just generally interested in it then I highly recommend giving it a watch, there's some great tips which as someone who has been using Next.js for a few years I personally was not aware of.

One of the things Lee covers in his video is replacing [React](https://reactjs.org) with [Preact](https://preactjs.com) at build time.

## Why would you do this?

Preact is a a much smaller alternative to React with virtually the same API. The main differences are that Preact does not come with a lot of the experimental features that are built into React, such as Suspense and Concurrent Mode. If you don't use any of these or the more advanced features of React, then you have a good case for swapping it out with Preact.

You could go all in with Preact in development too, but by swapping out React at build time means:

* You still get to use the familiar React API and ecosystem in development
* The change is incremental and easier to remove if you spot a problem
* Bigger bundles are generally __not__ a problem in development (React itself even has a development mode which is much larger than the production build) and you'll still get the smaller bundle size at the end

Sounds good doesn't it? I gave it a try and this website is now running on Preact 🚀

## Get started

The good news is there are only really 2 steps to this process, the first of which is installing `preact` and `preact-compat` as dependencies:

```
npm install preact preact-compat
```

Or if you're a `yarn` user like me:

```
yarn add preact preact-compat
```

Once installed we then need to tell Next.js when it compiles that we'd like to swap out React for Preact by using Webpack's [aliasing](https://webpack.js.org/configuration/resolve/#resolvealias) feature.

If you don't already have a `next.config.js` file, go ahead and create this and add the following:

```javascript
module.exports = {
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      });
    }

    return config;
  },
};
```

If you do have a Next.js config file, just make sure it contains the relevant `webpack` configuration from the above.

And that's it!

I highly recommend doing this as a reversible task on your codebase (like a Pull Request) and if you're using Vercel or Netlify to build Pull Request previews then you should be able to give your website a check to see if anything has broken.

If all is well then you should have shaved a considerable chunk from your main bundle (~20kb).
