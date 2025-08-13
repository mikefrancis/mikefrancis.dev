---
title: Upgrading Laravel
createdAt: 2024-05-18
description: Documenting my process of moving through major Laravel upgrades.
featuredImage: https://images.ctfassets.net/w1rfv8jievsk/3doqQ7q9fJaWo8I1oJKbcu/0108d3fb4174c8a330f5f1b4c66180e9/reinis-birznieks-t0mQSkfVCtM-unsplash.jpg
---

I have a few side projects written using the PHP framework [Laravel](https://laravel.com). If you've not given it a shot, I highly recommend building with it!

Laravel major releases tend to be fairly infrequent but can sometimes include a change in "paradigm", so moving between major releases can take a while for large apps.

Thankfully, the framework maintains extremely detailed [upgrade guides](https://laravel.com/docs/11.x/upgrade) between releases so it's usually just a matter of putting some time aside and following these.

I quite like keeping the framework drift to an absolute minimum, so I bring along any peripheral files for the ride too. These can include things like updates to the config files, Docker setup, front-end tooling etc. To be aware of these changes usually involves trawling the [source repo](https://github.com/laravel/laravel) or using a (very useful and worthwhile, by the way) tool such as [Laravel Shift](https://laravelshift.com).

As my apps tend not to be high traffic or in production, I can usually get away with keeping the process fairly low tech and make good use of Git. First off, I add the remote to my already cloned, local repository:

```
git remote add laravel git@github.com:laravel/laravel.git
git fetch laravel
```

This creates a new Git remote called `laravel` with branches containing the default Laravel starter files for each version. Sticking on the `main` branch of my own code I can then diff this against the "new" Laravel files:

```
git diff laravel/11.x -- .
```

This will show you everything that is different between the two. It's usually quite noisy as it contains everything that has been customised beyond the starter files (controllers, request, models, views etc.) so you can use exclusion patterns to help filter this out:

```
git diff laravel/11.x -- . \ 
  ':(exclude).github' \ 
  ':(exclude).fly' \ 
  ':(exclude).styleci.yml' \ 
  ':(exclude)*.md' \ 
  ':(exclude)app/Events' \ 
  ':(exclude)app/Http/Controllers' \ 
  ':(exclude)app/Http/Middleware' \ 
  ':(exclude)app/Http/Requests' \ 
  ':(exclude)app/Jobs' \ 
  ':(exclude)app/Models' \ 
  ':(exclude)app/Listeners' \ 
  ':(exclude)app/Notifications'
```

You can experiment removing some of these exclusions as some of the files may have changed (e.g. the default `App\Models\User` model) and you might want to scoop up these changes too.

To grab the updated files, say the updated Vite config, you can do the following:

```
git checkout laravel/11.x vite.config.js
```

Or another example might be grabbing all of the updated configuration files if you mainly use environment variables to switch between configs:

```
git checkout laravel/11.x config
```

(Note: This will __not__ remove any extra configuration files you've created, such as `./config/billing.php`.)

Once you're done, you can run:

```
git remote remove laravel
```

To clean up and get rid of the remote that you were tracking, removing some of the branch noise in your local repo.

If another new major version arrives, you can repeat this process again by changing which branch of the remote you `git diff` against.
