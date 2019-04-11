---
title: "Update default Bus binding in Lumen 5.2"
slug: "/blog/update-default-bus-binding-in-lumen-5-2"
date: "2018-01-01"
description: "Detailed steps on how to override the default Bus in Laravel's Lumen 5.2"
---

With Laravel’s [Lumen](https://lumen.laravel.com) 5.2, gone are the handy functions `dispatchFrom()` and `dispatchFromArray()` available in the default `Bus`.

After a bit of searching I found [AltThree’s Bus package](https://github.com/altthree/bus), which basically the old `Dispatcher`, just being maintained outside of the Laravel core components.

However, it’s not as straight forward as creating a `BusServiceProvider` and rebinding the Bus Contract to the new Service Provider. If you take a look at the source, the Bus bindings are registered in the base Lumen Application.

Following [advice from Graham Campbell](https://github.com/laravel/lumen-framework/issues/334#issuecomment-173157215https://github.com/laravel/lumen-framework/issues/334#issuecomment-173157215), I was able to extend the base Lumen Application and [override the registerBusBindings() method](https://github.com/laravel/lumen-framework/blob/5.2/src/Application.php#L249), so that any time the Bus’ Dispatcher Interface is requested, we return the AltThree implementation instead:

## app/Application.php

```php
<?php

namespace App;

use AltThree\Bus\Dispatcher;
use Illuminate\Contracts\Bus\Dispatcher as DispatcherContract;
use Illuminate\Contracts\Bus\QueueingDispatcher as QueueingDispatcherContract;
use Illuminate\Contracts\Queue\Factory;
use Laravel\Lumen\Application as LumenApplication;

class Application extends LumenApplication
{
    /**
     * Register container bindings for the application.
     *
     * @return void
     */
    protected function registerBusBindings()
    {
        $this->app->singleton(Dispatcher::class, function (Application $app) {
            return new Dispatcher($app, function ($connection = null) use ($app) {
                return $app->make(Factory::class)->connection($connection);
            });
        });

        $this->app->alias(Dispatcher::class, DispatcherContract::class);
        $this->app->alias(Dispatcher::class, QueueingDispatcherContract::class);
    }
}
```

You can of course just inject `AltThree\Bus\Dispatcher` however if, like me, you prefer the idea of injecting interfaces, this method just works.

If you discover a better method, please let me know and I’ll update.
