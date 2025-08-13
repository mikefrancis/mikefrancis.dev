---
title: Quick project environments
createdAt: 2020-10-15
description: Do you know your Password Manager can (probably) do a lot more than store passwords?
featuredImage: https://images.ctfassets.net/w1rfv8jievsk/2yNN9I9gOzPcEFl3LWDFQW/864db350b067550ad530e12904266173/photo-1563370961-b01f7e9009e8.jpeg
---

I tend to try to keep as much free-space on my computer as possible. I'm not quite sure why, but if development on a project I'm working on has stalled I'll make sure that source-control is up-to-date and delete the entire folder.

Fast forward a few weeks and, "I wonder if I can use X library with this project?", or, "I should probably tweak this bit of UI...". So I dive into the terminal, clone the project to my computer and begin working away.

Except I can't begin working _right_ away. Like a good developer practicing [12factor](http://12factor.net) I'm not storing my secrets in source control, so there's always a good 5-10 minute round trip of all the websites I need to retrieve my secrets from. Suddenly that quick thing I wanted to do just doesn't seem worth it, and inevitably it can stop productivity in it's tracks.

But there's a piece of software you're probably (hopefully) using right now which can make this a breeze. Your password manager!

A lot of password managers ([LastPass](https://www.lastpass.com), [BitWarden](https://bitwarden.com), [1Password](https://1password.com) etc.) all have command line interfaces (CLI) which can be used to interact with your password vault. These are usually hosted on [Homebrew](https://brew.sh) and are free to download. I use BitWarden, so the following command installs the CLI to my computer:

```bash
brew install bitwarden-cli
```

Once installed, I can use the `bw` to interface with BitWarden. Great! Obviously most (if not all) commands require me to input my master password so it's super secure. Armed with the `bw` binary, I can then add the following to the `scripts` section of a Node project's `package.json`:

```json
{
  "get-env": "bw get item mikefrancis.github.io | jq -r '.notes' > .env" 
}
```

This uses the popular `jq` CLI (also installed through Homebrew) to dump a BitWarden note with the name `mikefrancis.github.io` into a `.env` file, by running the following command:

```bash
yarn get-env
```

So now rather than running around to different websites, grabbing API keys, I can just keep all these in a secure note in BitWarden. These API keys have no expiry so I only have to update these in one place.

This won't work for everyone but it's a pretty nice way of getting up and running quickly.
