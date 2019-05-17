---
title: "create-react-app & Tailwind CSS"
date: "2018-01-01"
description: "Learn how to use the popular React boilerplate app with the utility-driven Tailwind CSS framework"
---

When [Tailwind CSS](https://tailwindcss.com) dropped I was eager to have a play as I loved the look of the syntax. The perfect opportunity arose while over the holidays when I thought my personal site could use a revamp.

I used the fantastic [create-react-app](https://github.com/facebookincubator/create-react-app) (CRA) to start a new React project and skip lots of tedious and confusing boilerplate:

```bash
create-react-app myproject
cd myproject
```

CRA is set up for using vanilla CSS out of the box and although there is an [official guide on using the Sass preprocessor](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc), I wanted to switch to use [PostCSS](http://postcss.org) as Tailwind exports directives for this.

After some Googling, I found that most people wanting to use PostCSS with CRA were having to “eject” CRA in order to edit the underlying [Webpack](https://webpack.js.org) configuration, which deals with all the necessary loaders for different filetypes (such as CSS).

Ejecting seemed a bit of a drastic measure given that I had only just started this project, so after a bit of trial and error bodging together different solutions, I got it working. Here’s how!

Firstly, if you haven’t done already, you want to install the necessary Node modules in your project to achieve this:

```
npm install --save-dev tailwindcss autoprefixer postcss-cli
```

**N.B:** you don’t _have_ to install `autoprefixer` but we use it below and the Tailwind docs advise using it with PostCSS, so who am I to argue!

Then initialise Tailwind with a new configuration file in the root of your project. I like to add the `.config` suffix to these files, so I know what they are for:

```
npx tailwind init tailwind.config.js
```

You’ll need to do the same for PostCSS so we can use it to transform the Tailwind directives into pure CSS — again, in the root of your project, create a file called `postcss.config.js` and add this code (taken straight from the [Tailwind docs](https://tailwindcss.com/docs/installation#webpack)):

```javascript
const tailwindcss = require("tailwindcss");

module.exports = {
  plugins: [tailwindcss("./tailwind.config.js"), require("autoprefixer")]
};
```

Nearly there! Now we need to set up our CSS “entry point”. You can do this wherever you like but here’s how I do it (if you change these paths, you will need to change them in the `package.json` scripts further down this article). Create `src/styles/index.css` and paste in the following:

```css
@tailwind base;

@tailwind components;

@tailwind utilities;

/* Your custom CSS here */
```

## Hooking it all together

Now all that is left is to edit the scripts in `package.json`  —  we still use the default CRA commands, but amend `start` and `build`, while adding `watch:css` and `build:css`:

```json
{
  "scripts": {
    "build:css": "postcss src/styles/index.css -o src/index.css",
    "watch:css": "postcss src/styles/index.css -o src/index.css -w",
    "start": "npm run watch:css & react-scripts start",
    "build": "npm run build:css && react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
}
```

(Notice the single `&` on the `start` script  —  we’re telling bash to run the `npm run watch:css` command in the background, while our original `react-scripts start` runs as normal.)

If you now run `npm run start` you should see `src/index.css` generated, containing the Tailwind CSS reset and utility classes, and your custom CSS below. Furthermore, if you edit the `src/styles/index.css` this should watch for changes and reload your app. Woo!

To make use of this file, just make sure that in `src/index.js` you have:

```javascript
import "index.css";
```

And you are good to go.

## Next steps

As detailed in the Tailwind docs, now we have PostCSS processing set up, we can take advantage of the many PostCSS plugins available!
