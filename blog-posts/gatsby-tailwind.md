---
title: Gatsby & Tailwind CSS
createdAt: 2019-05-17
description: Learn how to use the popular React framework with Tailwind CSS
---

Back again with another TailwindCSS + _X_ guide!

This time it's [Gatsby](https://www.gatsbyjs.org/)'s turn. Gatsby is a open-source framework for creating server rendered websites/apps. I'm a huge fan of Gatsby, so much so you are reading this
article on a site built using it!

Again, this not a comparison to Next.js, create-react-app or anything else - so now that's out of the way, let's get to work hooking these two up.

First start by creating a new Gatsby project if you don't already have one. I've taken the instructions from their [Quick start guide](https://www.gatsbyjs.org/docs/quick-start/):

```bash
npm install -g gatsby-cli
gatsby new myproject
cd myproject
```

Firstly, if you haven’t done already, you want to install the necessary Node modules in your project to achieve this:

```
npm install --save tailwindcss autoprefixer gatsby-plugin-postcss
```

**N.B:** you don’t _have_ to install `autoprefixer` but we use it below and the Tailwind docs advise using it with PostCSS, so who am I to argue!

Then, rather than creating any custom scripts, we can hook into the Gatsby plugin system. As TailwindCSS exports PostCSS directives, we can use it as a PostCSS plugin, so we need to tell Gatsby which
PostCSS plugins we would like to use. Open up `gatsby-config.js` and add the following plugin and options:

```javascript
module.exports = {
  //...
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")]
      }
    }
  ]
  //...
};
```

Nearly there! Now we need to set up our CSS “entry point”. You can do this wherever you like but here’s how I do it. Create `src/pages/index.css` and paste in the following:

```css
@tailwind base;

@tailwind components;

@tailwind utilities;

/* Your custom CSS here */
```

To make use of this file, just make sure that in your `src/pages/index.js` you have:

```javascript
import "index.css";
```

And you are good to go.

## Next steps

As detailed in the Tailwind docs, now we have PostCSS processing set up, we can take advantage of the many PostCSS plugins available!
