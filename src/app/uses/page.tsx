import { Metadata } from 'next';

import PageTitle from '../../components/PageTitle';
import { Template } from '../../components/Template';

export const metadata: Metadata = {
  title: 'Uses',
};

const Page = () => {
  return (
    <Template>
      <article className="max-w-3xl mx-auto space-y-10">
        <div className="text-center">
          <PageTitle>Uses</PageTitle>
        </div>
        <div className="wysiwyg">
          <h2>Website</h2>
          <ul>
            <li>
              <a href="https://nextjs.org">Next.js</a> as a Static-Site
              Generator, pages are built using React written in TypeScript
            </li>
            <li>
              <a href="https://tailwindcss.com">Tailwind CSS</a> for styling
            </li>
            <li>
              <a href="https://fonts.google.com/specimen/Inter">Inter</a> as the
              main body copy font
            </li>
            <li>
              <a href="https://www.contentful.com">Contentful</a> as a headless
              Content Management System
            </li>
            <li>
              <a href="https://www.vercel.com">Vercel</a> for deployment and
              hosting
            </li>
          </ul>

          <h2>Editor</h2>
          <p>
            I use <a href="https://code.visualstudio.com">Visual Studio Code</a>{' '}
            with the excellent{' '}
            <a href="https://github.com/smlombardi/theme-slime">Slime theme</a>{' '}
            and <a href="https://www.jetbrains.com/lp/mono">JetBrains Mono</a>{' '}
            font.
          </p>
          <p>Here&apos;s some of the extensions I have enabled:</p>
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
            <a href="https://ohmyz.sh">ohmyzsh</a> shell. I use a system-wide
            summon key for iTerm which is the section sign key (<code>§</code>).
            This was a great tip I picked up from{' '}
            <a href="https://twitter.com/jeffrey_way">Jeffrey Way</a> - I found
            I wasn&apos;t using that key for anything so it made sense to map it
            to something I&apos;d use all the time.
          </p>
          <p>
            I use the{' '}
            <a href="https://github.com/agnoster/agnoster-zsh-theme">
              agnoster
            </a>{' '}
            shell theme - as I mainly use Git via the command line I find
            it&apos;s use of glyphs as visual indicators really useful. Also I
            use{' '}
            <a href="https://gist.github.com/stidges/352d18a724258e93f13bc48d4168d16b">
              tailwind
            </a>{' '}
            as the colour scheme and{' '}
            <a href="https://www.jetbrains.com/lp/mono">JetBrains Mono</a> as
            the font.
          </p>
          <p>
            I keep my dotfiles on{' '}
            <a href="https://github.com/mikefrancis/dotfiles">GitHub</a> for
            visibility and it also forces me to (try to) keep them up to date
          </p>

          <h2>Applications & Binaries</h2>
          <p>
            I try to install all of these using Homebrew, and as such they
            should all listed in my{' '}
            <a href="https://github.com/mikefrancis/dotfiles/blob/master/Brewfile">
              dotfile&apos;s Brewfile
            </a>
            .
          </p>

          <h2>Hardware</h2>
          <p>
            I&apos;m currently using a{' '}
            <a href="https://www.apple.com/macbook-pro">MacBook Pro</a>{' '}
            (14-inch, 2021). It&apos;s just the right size to stash in my bag
            for a train journey or trip to a coffee shop.
          </p>
          <p>
            I use an <a href="https://www.apple.com/iphone">iPhone 13 mini</a>{' '}
            for communication and taking pictures, and listen to music, podcasts
            and audio books using a pair of{' '}
            <a href="https://www.apple.com/airpods">AirPods Pro</a>.
          </p>

          <h2>Task management</h2>
          <p>
            In the past I have struggled to find a workflow which doesn&apos;t
            involve me learning a new piece of software. I&apos;d like to think
            my requirements for arbitrary task management are very minimal and
            unstructured.
          </p>
          <p>
            I&apos;m a <a href="https://www.raycast.com">Raycast</a> user, and
            have created a Trello workflow, so I use a workflow with the
            following format:
          </p>
          <pre>
            <code>trello *summary of the task*</code>
          </pre>
          <p>
            To a personal <a href="https://trello.com">Trello</a> kanban board.
            I only view the Trello board when I need a reminder, or at the
            start/end of each day. I have a butler set up which archives
            anything in &quot;Done&quot; each week.
          </p>
          <p>
            It&apos;s not perfect but I find this a very quick and non-intrusive
            way of creating tasks, and I can access this backlog from any
            device.
          </p>
        </div>
      </article>
    </Template>
  );
};

export default Page;
