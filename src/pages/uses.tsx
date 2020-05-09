import React from 'react';
import { NextPage } from 'next';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Page: NextPage = () => {
  return (
    <>
      <SEO title="Uses" />
      <Layout>
        <article className="max-w-3xl">
          <div className="mb-8">
            <h1 className="text-4xl mb-8">Uses</h1>
            <div className="wysiwyg mb-16">
              <h2>Website</h2>
              <ul>
                <li>
                  <a href="https://nextjs.org">Next.js</a> as a Static-Site
                  Generator. Pages are built using React written in TypeScript.
                </li>
                <li>
                  <a href="https://tailwindcss.com">TailwindCSS</a> for styling.
                </li>
                <li>
                  <a href="https://fonts.google.com/specimen/Work+Sans">
                    Work Sans
                  </a>{' '}
                  as the main body copy font.
                </li>
                <li>
                  <a href="https://www.contentful.com">Contentful</a> as a
                  headless Content Management System.
                </li>
                <li>
                  <a href="https://www.netlify.com">Netlify</a> for deployment
                  and hosting.
                </li>
              </ul>

              <h2>Editor</h2>
              <p>
                I use{' '}
                <a href="https://code.visualstudio.com">Visual Studio Code</a>{' '}
                with the excellent{' '}
                <a href="https://github.com/smlombardi/theme-slime">
                  Slime theme
                </a>{' '}
                and{' '}
                <a href="https://www.jetbrains.com/lp/mono">JetBrains Mono</a>{' '}
                font.
              </p>
              <p>Here's some of the extensions I have enabled:</p>
              <ul className="unstyled md:grid md:grid-cols-2">
                <li>
                  <a href="https://marketplace.visualstudio.com/search?term=advanced-new-file">
                    advanced-new-file
                  </a>
                </li>
                <li>
                  <a href="https://marketplace.visualstudio.com/search?term=Auto Rename Tag">
                    Auto Rename Tag
                  </a>
                </li>
                <li>
                  <a href="https://marketplace.visualstudio.com/search?term=Code Spell Checker">
                    Code Spell Checker
                  </a>
                </li>
                <li>
                  <a href="https://marketplace.visualstudio.com/search?term=Debugger for Chrome">
                    Debugger for Chrome
                  </a>
                </li>
                <li>
                  <a href="https://marketplace.visualstudio.com/search?term=Docker">
                    Docker
                  </a>
                </li>
                <li>
                  <a href="https://marketplace.visualstudio.com/search?term=DotENV">
                    DotENV
                  </a>
                </li>
                <li>
                  <a href="https://marketplace.visualstudio.com/search?term=EditorConfig for VS Code">
                    EditorConfig for VS Code
                  </a>
                </li>
                <li>
                  <a href="https://marketplace.visualstudio.com/search?term=ES7 React/Redux/GraphQL/React-Native snippets">
                    ES7 React/Redux/GraphQL snippets
                  </a>
                </li>
                <li>
                  <a href="https://marketplace.visualstudio.com/search?term=ESLint">
                    ESLint
                  </a>
                </li>
                <li>
                  <a href="https://marketplace.visualstudio.com/search?term=File Utils">
                    File Utils
                  </a>
                </li>
                <li>
                  <a href="https://marketplace.visualstudio.com/search?term=GitLens">
                    GitLens
                  </a>
                </li>
                <li>
                  <a href="https://marketplace.visualstudio.com/search?term=GraphQL for VSCode">
                    GraphQL for VSCode
                  </a>
                </li>
                <li>
                  <a href="https://marketplace.visualstudio.com/search?term=hadolint">
                    hadolint
                  </a>
                </li>
                <li>
                  <a href="https://marketplace.visualstudio.com/search?term=npm Intellisense">
                    npm Intellisense
                  </a>
                </li>
                <li>
                  <a href="https://marketplace.visualstudio.com/search?term=PostCSS syntax">
                    PostCSS syntax
                  </a>
                </li>
                <li>
                  <a href="https://marketplace.visualstudio.com/search?term=Prettier">
                    Prettier
                  </a>
                </li>
                <li>
                  <a href="https://marketplace.visualstudio.com/search?term=Sublime Text Keymap">
                    Sublime Text Keymap
                  </a>
                </li>
                <li>
                  <a href="https://marketplace.visualstudio.com/search?term=Terraform">
                    Terraform
                  </a>
                </li>
                <li>
                  <a href="https://marketplace.visualstudio.com/search?term=TODO Highlight">
                    TODO Highlight
                  </a>
                </li>
                <li>
                  <a href="https://marketplace.visualstudio.com/search?term=vscode-styled-components">
                    vscode-styled-components
                  </a>
                </li>
                <li>
                  <a href="https://marketplace.visualstudio.com/search?term=YAML">
                    YAML
                  </a>
                </li>
              </ul>

              <h2>Terminal</h2>
              <p>
                I use <a href="https://www.iterm2.com">iTerm2</a> with the{' '}
                <a href="https://ohmyz.sh">ohmyzsh</a> shell. I use a
                system-wide summon key for iTerm which is the section sign key (
                <code>§</code>). This was a great tip I picked up from{' '}
                <a href="https://twitter.com/jeffrey_way">Jeffrey Way</a> - I
                found I wasn't using that key for anything so it made sense to
                map it to something I'd use all the time.
              </p>
              <p>
                I use the{' '}
                <a href="https://github.com/agnoster/agnoster-zsh-theme">
                  agnoster
                </a>{' '}
                shell theme - as I mainly use Git via the command line I find
                it's use of glyphs as visual indicators really useful. Also I
                use{' '}
                <a href="https://gist.github.com/stidges/352d18a724258e93f13bc48d4168d16b">
                  tailwind
                </a>{' '}
                as the colour scheme and{' '}
                <a href="https://www.jetbrains.com/lp/mono">JetBrains Mono</a>{' '}
                as the font.
              </p>
              <p>
                I keep my dotfiles on{' '}
                <a href="https://github.com/mikefrancis/dotfiles">GitHub</a> for
                visibility and it also forces me to (try to) keep them up to
                date
              </p>

              <h2>Applications & Binaries</h2>
              <p>
                I try to install all of these using Homebrew, and as such they
                should all listed in my{' '}
                <a href="https://github.com/mikefrancis/dotfiles/blob/master/Brewfile">
                  dotfile's Brewfile
                </a>
                .
              </p>

              <h2>Hardware</h2>
              <p>
                I'm currently using a{' '}
                <a href="https://www.apple.com/macbook-pro-13">MacBook Pro</a>{' '}
                (13-inch, 2018). I'm not a fan of wider laptops as I like to be
                able to stash my laptop into my bag for a long train journey or
                trip to a coffee shop.
              </p>
              <p>
                When I'm at my desk I use a{' '}
                <a href="https://www.apple.com/uk/shop/product/MLA22B/A/magic-keyboard-british-english">
                  Magic Keyboard
                </a>{' '}
                and{' '}
                <a href="https://www.apple.com/uk/shop/product/MJ2R2Z/A/magic-trackpad-2-silver">
                  Trackpad
                </a>
                . I mainly use the keyboard as it's the same size and layout as
                my laptop keyboard. I switched from a mouse to a trackpad for
                the same reason and found using a trackpad a bit less movement
                for my wrist on a long day.
              </p>
              <p>
                I use an <a href="https://www.apple.com/iphone">iPhone X</a> for
                communication and taking pictures, and listen to music, podcasts
                and audio books using a pair of{' '}
                <a href="https://www.bose.co.uk/en_gb/products/headphones/over_ear_headphones/quietcomfort-35-wireless-ii.html">
                  Bose QC-35s
                </a>
                .
              </p>

              <h2>Task management</h2>
              <p>
                I've been struggling to find a workflow which doesn't involve me
                learning a new piece of software. I'd like to think my
                requirements for arbitrary task management are very minimal and
                unstructured, so up until recently post-it notes have sufficed.
              </p>
              <p>
                However I don't always have them to hand and it's not a
                sustainable way to keep track of tasks so I've ditched that idea
                in favour of the following.
              </p>
              <p>
                I'm an <a href="https://www.alfredapp.com">Alfred</a> user, and
                have purchased the powerpack, so I use a workflow to post the
                following format:
              </p>
              <pre>
                <code>trello *summary of the task*</code>
              </pre>
              <p>
                To a personal kanban <a href="https://trello.com">Trello</a>{' '}
                board. I only view the Trello board when I need to, or at the
                start/end of each day, and it has a butler set up which archives
                anything in "Done" each week.
              </p>
              <p>
                It's not perfect but I find this "fire <s>and forget</s>" way of
                creating tasks very non-intrusive and I can access this backlog
                from anywhere.
              </p>
            </div>
          </div>
        </article>
      </Layout>
    </>
  );
};

export default Page;
