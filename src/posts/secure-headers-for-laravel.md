---
title: "Secure Headers for Laravel"
slug: "/blog/secure-headers-for-laravel"
date: "2017-07-20"
description: "Presenting laravel-secureheaders, a Secure Headers wrapper for the Laravel framework"
---

After playing with [Aidan Wood’s amazing SecureHeaders library](https://github.com/aidantwoods/SecureHeaders), found on [/r/PHP](https://reddit.com/r/PHP), in a project, I looked for a Laravel port of this package only to find one didn’t exist  —  so I made one!

[https://github.com/mikefrancis/laravel-secureheaders](https://github.com/mikefrancis/laravel-secureheaders)

Aidan’s package aims to harden the security around HTTP headers, and with the following tiny bit of code:

```php
$headers = new SecureHeaders();
$headers->apply();
```

Can take a standard Laravel install from grade `F` to grade `B` on [SecurityHeaders.io](https://securityheaders.io), which is amazing.

With a little bit of configuration around Content Security Policy you can get a grade `A` . Here’s a brand new Laravel install where I have only required the package, added the service provider and registered the middleware:

[http://laravel-secureheaders-demo.herokuapp.com](http://laravel-secureheaders-demo.herokuapp.com)

And here’s the grade `A` on SecurityHeaders.io:

[https://securityheaders.io/?q=http://laravel-secureheaders-demo.herokuapp.com](https://securityheaders.io/?q=http://laravel-secureheaders-demo.herokuapp.com)

I’m still working on an issue with Cookies and the Symfony Response which the Laravel Responses are based on, but I’m confident this should bump up that grade even more.

Please feel free to [give it a try](https://github.com/mikefrancis/laravel-secureheaders) and let me know any feedback. Also bear in mind that this will unfortunately only be for Laravel 5.4+ projects due to the underlying version of `symfony/http-foundation` which the various Laravel framework requires.
