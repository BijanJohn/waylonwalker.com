---
cover: ''
date: 2022-09-25
datetime: 2022-09-25 00:00:00+00:00
description: 'I have no experience in django, and in my exploration to become a better
  python If you found this at all helpful make sure you check out the  The first thing
  I '
edit_link: https://github.com/edit/main/pages/til/trying-out-django.md
jinja: false
long_description: I have no experience in django, and in my exploration to become
  a better python If you found this at all helpful make sure you check out the  The
  first thing I need to do is render out a template to start the project. Once I have
  the project I need a
now: 2022-10-29 15:54:38.066407
path: pages/til/trying-out-django.md
slug: trying-out-django
status: published
super_description: I have no experience in django, and in my exploration to become
  a better python If you found this at all helpful make sure you check out the  The
  first thing I need to do is render out a template to start the project. Once I have
  the project I need a venv for all of django and all of my If hatch is a bit bleeding
  edge for you, or it has died out by the time you Next up we need to start the webserver
  to start seeing that development I jumped over to that tmux session, killed the
  process and I was
tags:
- python
- django
- webdev
templateKey: til
title: Trying out django
today: 2022-10-29
year: 2022
---

I have no experience in django, and in my exploration to become a better python
developer I am dipping my toe into one of the most polished and widely used web
frameworks Django to so that I can better understand it and become a better
python developer.

If you found this at all helpful make sure you check out the [django tutorial](https://docs.djangoproject.com/en/4.1/intro/tutorial01/)


!["An atronaut working in a lab, there is a long snake working along side, shallow depth of field beakers, test tubes, volumetric lighting, pink lighting, by victo ngai, killian eng vibrant colours, dynamic lighting, digital art" -s50 -W768 -H448 -C7.5 -Ak_lms -S2250540408](https://stable-diffusion.waylonwalker.com/000243.2250540408.webp)
## install django

The first thing I need to do is render out a template to start the project.
For this I need the `django-admin` cli.  To get this I am going the route of
`pipx` it will be installed globally on my system in it's own virtual
environment that I don't have to manage.  This will be useful only for using
startproject as far as I know.

``` bash
pipx install django
django-admin startproject try_django
cd try_django
```

![django-startproject](https://screenshots.waylonwalker.com/django-startproject.webp)

## Make a venv

Once I have the project I need a venv for all of django and all of my
dependencies I might need for the project.  I have really been diggin `hatch`
lately, and it has a one line _"make a virtual environment and manage it for
me"_ command.

``` bash
hatch shell
```

![trydjango-venv](https://screenshots.waylonwalker.com/trydjango-venv.webp)

If hatch is a bit bleeding edge for you, or it has died out by the time you
read this.  The ol trusty venv will likely stand the test of time, this is what
I would use for that.

``` bash
python -m .venv --prmpt `basename $PWD`
. ./.venv/bin/activate
```

## Start the webserver

Next up we need to start the webserver to start seeing that development
content.  The first thing I did was run it as stated in the tutorial and find
it clashed with a currently running web server port.

``` bash
python manage.py runserver
```

![django-runserver-oops](https://screenshots.waylonwalker.com/django-runserver-oops.webp)

I jumped over to that tmux session, killed the process and I was up and running.

![trydjango-runserver](https://screenshots.waylonwalker.com/trydjango-runserver.webp)

## What's running

The default django hello world looks well designed.  You are first presented
with this page.

![trydjango-hello](https://screenshots.waylonwalker.com/trydjango-hello.webp)

## Next

I opened up the `urls.py` to discover that the only configured url was at
`/admin`. I tried to log in as admin, but was unable to as I have not yet
created a superuser.  Next time I play with django that is what I will explore.

![An astronaut working in a dimly lit labratory, it is almost black, heavy dark blacks, black space, heavy vingette, hacking on a computer terminal, htop is running, shallow depth of field beakers, test tubes, by Alphonse Mucha, dynamic lighting, digital art](https://stable-diffusion.waylonwalker.com/000250.526887289.webp)
<div class='prevnext'>

    <style type='text/css'>

    :root {
      --prevnext-color-text: #eefbfe;
      --prevnext-color-angle: #e1bd00c9;
      --prevnext-subtitle-brightness: 3;
    }
    [data-theme="light"] {
      --prevnext-color-text: #1f2022;
      --prevnext-color-angle: #ffeb00;
      --prevnext-subtitle-brightness: 3;
    }
    [data-theme="dark"] {
      --prevnext-color-text: #eefbfe;
      --prevnext-color-angle: #e1bd00c9;
      --prevnext-subtitle-brightness: 3;
    }
    .prevnext {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: flex-start;
    }
    .prevnext a {
      display: flex;
      align-items: center;
      width: 100%;
      text-decoration: none;
    }
    a.next {
      justify-content: flex-end;
    }
    .prevnext a:hover {
      background: #00000006;
    }
    .prevnext-subtitle {
      color: var(--prevnext-color-text);
      filter: brightness(var(--prevnext-subtitle-brightness));
      font-size: .8rem;
    }
    .prevnext-title {
      color: var(--prevnext-color-text);
      font-size: 1rem;
    }
    .prevnext-text {
      max-width: 30vw;
    }
    </style>
    
    <a class='prev' href='/twitter-deepdives'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Twitter deepdives</p>
        </div>
    </a>
    
    <a class='next' href='/trim-branches'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Trim unused git branches</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>