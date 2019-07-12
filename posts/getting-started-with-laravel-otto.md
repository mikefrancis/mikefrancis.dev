---
title: "Getting started with Laravel & Otto"
date: "2015-10-23"
description: "Learn how to spin up a Laravel site using HashiCorp's new Otto platform"
---

Yesterday morning I discovered [Otto](https://ottoproject.io) by HashiCorp. Billed as the successor to HashiCorp's popular Virtual Machine management software [Vagrant](http://vagrantup.com), it looks to further minimise the differences between local and production environment by wrapping your application (and it's dependencies) up into a container.

Being a PHP developer I naturally wanted to see how easy it would be to get a Laravel app up and running locally. Otto has a nice little [example](https://ottoproject.io/intro/getting-started/install.html) of setting up a Sinatra (Ruby) site, so I'd suggest doing that first to get a feel for the basic Otto commands.

To get started head to the Otto site, download the binary and follow the installation instructions.

_Edit: I actually thought the installation was missing a [vital step](https://github.com/hashicorp/otto/issues/94) which is detailed in this GitHub issue._

Once installed you should be able to run otto in a terminal and see the following:

```bash
usage: otto [--version] [--help] <command> [<args>]

Available commands are:
    build      Build the deployable artifact for the app
    compile    Prepares your project for being run.
    deploy     Deploy the application
    dev        Start and manage a development environment
    infra      Builds the infrastructure for the Appfile
    status     Status of the stages of this application
    version    Prints the Otto version
```

Now Otto is installed, create a new Laravel app by running laravel new otto-laravel-project (you'll need the [Laravel installer composer package](http://laravel.com/docs/4.2#install-laravel) installed globally to do this). Then dive into your project using cd otto-laravel-project and open the project in your favourite text editor.

We then need to create an Appfile. This is what will tell Otto what sort of infrastructure we require and of course is extremely configurable. Add the following:

```
application {
    name = "otto-laravel-project"
    type = "php"
}
```

Then run otto compile to build your infrastructure locally. At the time of writing, you need the Appfile as Otto can't tell the application is PHP and instead defaults to Node, which of course isn't right - this will probably be fixed fairly soon though.

Once this has completed you can run otto dev to spin up a quick Virtual Machine for viewing. It might take a while to download the machine image if it's your first time running Otto, but this is just a one-time thing so don't worry! 30 seconds or so later you'll see:

```
==> Development environment successfully created!
    IP address: 172.16.1.180

    A development environment has been created for writing a PHP app.

    Edit files locally on your machine, the file changes will be synced
    to the development environment automatically.

    To run and view your application, run 'otto dev ssh' to enter the
    development environment. You'll be placed directly into the working
    directory where you can run "composer", "php", etc.

    You can access the environment from this machine using the IP address above.
    For example, if you start your app with 'php -S 0.0.0.0:5000', then you can
    access it using the above IP at port 5000.
```

You can now ssh into the VM by doing `otto dev ssh`, which will take you straight into your project root - handy! From there you can either use `php -S 0.0.0.0:5000` to start a webserver or `php artisan serve --host=0.0.0.0 --port=5000` if you prefer using artisan. From here you can also run all your artisan/composer commands, or unit tests - anything that requires being inside the server.

Now you should be able to head to http://172.16.1.180:5000 in a browser and see the Laravel 5 welcome screen. If that isn't your app's IP address or you ever forget it, you can always run otto dev address to remind you. Neat, huh?

I've really enjoyed playing around with Otto and while technologies such as Docker and Vagrant will always offer a more powerful solution, I think Otto is great if you're simply just wanting to get something off the ground quickly.
