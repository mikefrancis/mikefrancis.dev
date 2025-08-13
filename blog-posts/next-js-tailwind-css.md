---
title: next.js & Tailwind CSS
createdAt: 2018-10-27
description: Learn how to use the popular SSR React framework with the utility-driven Tailwind CSS framework
---

Following on from [my previous post regarding setting up the popular Create React App and Tailwind](https://mikefrancis.dev/blog/create-react-app-tailwind-css), I’ve been playing around with next.js made by the amazing people over at [Zeit](https://zeit.co). I’m still on my Atomic CSS tip for rapid building of UIs, so naturally the first thing I wanted to do was hook up my favourite CSS Toolkit.

**N.B:** This isn’t a post about whether to use Create React App or next.js, or which is better  —  different tools for different jobs. With that out of the way, let’s get to hooking them up.

Firstly, install next.js by following the [installation instructions](https://nextjs.org/docs). Then we just need to install a few extra dependencies for Tailwind:

```bash
npm install tailwindcss autoprefixer
```

Then optionally initialise Tailwind with a new configuration file in the root of your project. I like to add the `.config` suffix to these files, so I know what they are for:

```bash
npx tailwind init tailwind.config.js
```

You’ll need to do the same for PostCSS so we can use it to transform the Tailwind directives into pure CSS — again, in the root of your project, create a file called `postcss.config.js` and add this code (taken straight from the [Tailwind docs](https://tailwindcss.com/docs/installation#webpack)):

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

Nearly there! Now we need to set up our CSS “entry point”. Create `pages/style.css` and paste in the following:

```css
@tailwind base;

@tailwind components;

@tailwind utilities;

/* Your custom CSS here */
```

Finally to make use of this file, just make sure that in your `pages/index.js` you have:

```javascript
import "./style.css";
```

And you are good to go.

If you now run `npm run dev` and visit your site, you will see a CSS file being added in the document’s head containing the generated Tailwind CSS 🎉

## Next steps

As detailed in the Tailwind docs, now we have PostCSS processing set up, we can take advantage of the many PostCSS plugins available!
