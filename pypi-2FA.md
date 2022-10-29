---
cover: ''
date: 2022-08-29
datetime: 2022-08-29 00:00:00+00:00
description: "I got all the pypi packages that I own behind 2 factor authentication.
  \U0001F4AA Recently this really made it I feel like this caused a bit of confusion
  as turning on 2"
edit_link: https://github.com/edit/main/pages/til/pypi-2FA.md
jinja: false
long_description: "I got all the pypi packages that I own behind 2 factor authentication.
  \U0001F4AA Recently this really made it I feel like this caused a bit of confusion
  as turning on 2FA does not mean that You might wonder what this means for my projects.
  It means that to e"
now: 2022-10-29 15:54:38.066400
path: pages/til/pypi-2FA.md
slug: pypi-2fa
status: published
super_description: "I got all the pypi packages that I own behind 2 factor authentication.
  \U0001F4AA Recently this really made it I feel like this caused a bit of confusion
  as turning on 2FA does not mean that You might wonder what this means for my projects.
  It means that to edit any This has very little change to my overall workflow as
  my CI system still This is one small thing that maintainers can do to prevent supply
  chain attacks When I log in I now get this extra screen asking for an auth token.
  Once I turned on 2FA "
tags:
- python
templateKey: til
title: I turned on 2FA for all of my pypi packages
today: 2022-10-29
year: 2022
---

I got all the pypi packages that I own behind 2 factor authentication. 💪

Recently this really made it's rounds in the python news since pypi was
requiring critical package maintainers to have 2FA on and even offering them
hardware tokens to help them turn this on.

I feel like this caused a bit of confusion as turning on 2FA does not mean that
you need to do anything different to deploy a package, and it **DOES NOT**
require a hardware token.  You can continue using your favorite 2FA app.

You might wonder what this means for my projects. It means that to edit any
_sensitive content_ such as pull a new api token, add/remove maintainers, or
deleting a release I need to use a TOPT (time based one time password)
application such as Google Authenticator, Microsoft Authenticator, Authy, or
FreeOTP.

This has very little change to my overall workflow as my CI system still
automatically deploys for me with the same api token as before.

This is one small thing that maintainers can do to prevent supply chain attacks
on their projects that they put so much work into.

## Login

When I log in I now get this extra screen asking for an auth token.

![pypi-2fa-code](https://screenshots.waylonwalker.com/pypi-2fa-code.webp)

## My packages

Once I turned on 2FA for my account I could then turn on 2FA requirement for
each project.  I am not sure how much safety there is in pypi, it might require
all maintainers to have it turned on before it allows packages to have it
turned on.

![my-pypi-packages-aug-2022](https://screenshots.waylonwalker.com/my-pypi-packages-aug-2022.webp)

Once turned on it requires anyone who maintains the project to have 2FA on to
be able to edit any sensitive content.
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
    
    <a class='prev' href='/pytest-capsys'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Pytest capsys</p>
        </div>
    </a>
    
    <a class='next' href='/pyflyby'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Smoother Python with automatic imports | pyflyby</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>