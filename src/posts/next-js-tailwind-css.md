---
path: "/blog/next-js-tailwind-css"
date: "2018-10-27"
title: "next.js & Tailwind CSS"
description: "Learn how to use the popular SSR React framework with the utility-driven Tailwind CSS framework"
---

Following on from [my previous post regarding setting up the popular Create React App and Tailwind](https://medium.com/@mikeeeeeeey/create-react-app-tailwind-css-feat-postcss-631d9e33ba8c), I’ve been playing around with next.js made by the amazing people over at [Zeit](https://zeit.co). I’m still on my Atomic CSS tip for rapid building of UIs, so naturally the first thing I wanted to do was hook up my favourite CSS Toolkit.

**N.B:** This isn’t a post about whether to use Create React App or next.js, or which is better  —  different tools for different jobs. With that out of the way, let’s get to hooking them up.

Firstly, install next.js by following the [installation instructions](https://nextjs.org/docs). Then we just need to install a few extra dependencies for Tailwind:

```bash
npm install @zeit/next-css tailwindcss autoprefixer
```

Then initialise Tailwind with a new configuration file in the root of your project. I like to add the `.config` suffix to these files, so I know what they are for:

```bash
npx tailwind init tailwind.config.js
```

You’ll need to do the same for PostCSS so we can use it to transform the Tailwind directives into pure CSS — again, in the root of your project, create a file called `postcss.config.js` and add this code (taken straight from the [Tailwind docs](https://tailwindcss.com/docs/installation#webpack)):

```javascript
const tailwindcss = require("tailwindcss");

module.exports = {
  plugins: [tailwindcss("./tailwind.config.js"), require("autoprefixer")]
};
```

Nearly there! Now we need to set up our CSS “entry point”. Create `style.css` and paste in the following:

```css
@tailwind preflight;
@tailwind utilities;

/* Your custom CSS here */
```

We now just need to tell next.js that we want to add a CSS pipeline. This is done by creating `next.config.js` as detailed in the [example repo](https://github.com/zeit/next-plugins/tree/master/packages/next-css):

```javascript
const withCSS = require("@zeit/next-css");

module.exports = withCSS();
```

Finally to make use of this file, just make sure that in your `pages/index.js` you have:

```javascript
import "../style.css";
```

And you are good to go.

If you now run `npm run dev` and visit your site, you will see a CSS file being added in the document’s head containing the generated Tailwind CSS 🎉

## Next steps

As detailed in the Tailwind docs, now we have PostCSS processing set up, we can take advantage of the many PostCSS plugins available!
