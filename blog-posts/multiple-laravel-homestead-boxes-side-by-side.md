---
title: Multiple Laravel Homestead boxes side-by-side
createdAt: 2016-03-18
description: How to develop/test on different versions of PHP using Laravel's Homestead
---

As great as PHP 7 is, some of us just aren’t quite ready for such a major release bump. If that sounds like you and, like me, you’re a [Laravel Homestead](https://github.com/laravel/homestead) user, you’ll no doubt have a terribly out of date Vagrant box, stuck on PHP 5.6 which is your primary Virtual Machine (and maybe a PHP 7 box somewhere else for testing).

Back in the day, you would have used Composer to manage Homestead, however after checking the [docs](https://laravel.com/docs/5.2/homestead#installation-and-setup) the reliance on Composer seems to have vanished and now cloning directly from GitHub is the recommended install.

If you’d like to get your house in order and have the freedom to flip between a PHP 5.6 and 7 Virtual Machine then check out the guide below.

Firstly, you want to back up anything off your current Virtual Machines as with this stuff there’s always the chance you’ll just need to delete the Virtual Machine and start again. So this would be things like databases you don’t have migrations/seeds for, or that contain data you don’t want to lose, and make a note of any other software you’ve installed — for instance benchmarking or profiling tools, Node etc. Then power the box off by either running:

```bash
homestead halt
```

Or if this doesn’t work, navigate to the folder where the vagrant box is stored and run:

```bash
vagrant halt
```

Then we want to remove Composer from the equation, so if you’re old school and installed Homestead through here, run the following:

```bash
composer global remove laravel/homestead
```

Now we’re going to navigate into your user’s home directory and install Homestead, twice. Following the docs, run:

```bash
cd ~
git clone git@github.com:laravel/homestead.git Homestead-7
cd Homestead-7
bash init.sh
```

The installer will then ask you a bunch of questions about overwriting your existing config. If you don’t overwrite these files, then chances are you won’t have to do a whole lot of set up so unless you want to start from square 1, don’t overwrite these files.

Once that’s done, it’s time to boot the server and ssh in:

```bash
vagrant up
vagrant ssh
php -v
```

This box should tell you it has PHP version 7. Cool. Let’s leave this box alone, power it off and now set up the other:

```bash
exit
vagrant halt
```

I find it handy at this point to open VirtualBox and check that the machine name is `homestead-7`. If it isn’t then something has gone wrong, so try again or ask someone for some help.

Now for the 2nd box:

```bash
cd ~
git clone -b 2.0 git@github.com:laravel/homestead.git Homestead
cd Homestead
bash init.sh
```

This time we’re cloning an legacy branch of the Homestead project (the one containing the set up for PHP 5.6) and setting that up too. Again, the installer will ask you if you want to overwrite anything so say no and you’ll have the same config on both machines. Cool!

And again, let’s boot it up and check it out: 

```bash
vagrant up
vagrant ssh
php -v
```

This time you should see the PHP version as 5.6. Awesome. I would also switch back to VirtualBox and check that your `homestead-7` machine is powered off and there’s now another machine called `homestead` which is running.

At this point, you have the two boxes, which you can switch between by `cd`-ing into the two directories and boot by doing `vagrant up`.

The last step to make this process a little easier is to add 2 aliases which will help, so in your `.bashrc`, `.zshrc` or wherever you keep your aliases, add the following:

```bash
alias homestead7=’function **homestead7() { (cd ~/Homestead-7 && vagrant \$\*); unset -f **homestead7; }; **homestead7'
alias homestead=’function **homestead() { (cd ~/Homestead && vagrant \$\*); unset -f **homestead; }; **homestead’
```

So now all your PHP 7 homestead commands begin with `homestead7`, and the standard commands begin with the original `homestead`.

It’s worth bearing in mind that you will still need to provision both of these boxes separately (unless you write an alias for that too).

Theoretically, there’s nothing to stop you being able to run these simultaneously by introducing a `~/.homestead-7` folder for your config, which has a different IP address for the box, but that’s something I haven’t tested yet.
