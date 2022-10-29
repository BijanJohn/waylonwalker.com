---
cover: ''
date: 2022-10-17
datetime: 2022-10-17 00:00:00+00:00
description: I ran into an issue where I was unable to ask localstack for its status.
  I I would run this to ask for the status. And get this error It dawned on me that
  the f
edit_link: https://github.com/edit/main/pages/til/localstack-status-permission.md
jinja: false
long_description: I ran into an issue where I was unable to ask localstack for its
  status. I I would run this to ask for the status. And get this error It dawned on
  me that the first time I ran localstack was straight docker, not If you have sudo
  access to the machine
now: 2022-10-29 15:54:38.065498
path: pages/til/localstack-status-permission.md
slug: localstack-status-permission
status: published
super_description: I ran into an issue where I was unable to ask localstack for its
  status. I I would run this to ask for the status. And get this error It dawned on
  me that the first time I ran localstack was straight docker, not If you have sudo
  access to the machine you are on you can recursively change Running localstack status
  now gives me a nice status message rather than an
tags:
- aws
templateKey: til
title: localstack status permission
today: 2022-10-29
year: 2022
---

I ran into an issue where I was unable to ask localstack for its status. I
would run the command and it would tell me that it didn't have permission to
read files from my own home directory.  Let's fix it

## The issue

I would run this to ask for the status.

``` bash
localstack status
```

And get this error

``` bash
PermissionError: [Errno 13] Permission denied: '/home/waylon/.cache/localstack/image_metadata'
```

## What happened

It dawned on me that the first time I ran localstack was straight docker, not
the python cli.  When docker runs it typically runs as root unless the
Dockerfile sets up a user and group for it.

!["cell shaded, long, full body, shot of a cybernetic blue soldier with glowing pink eyes, llustration, post grunge, cinebatic dramatic atmosphere, sharp focus, pink glowing volumetric lighting, concept art by josan gonzales and wlop, by james jean, Victo ngai, David Rubín, Mike Mignola, Laurie Greasley, highly detailed, sharp focus,alien,Trending on Artstation, HQ, deviantart, art by artgem" -s50 -W832 -H416 -C12.0 -Ak_lms -S3517264680 ](https://stable-diffusion.waylonwalker.com/000364.3517264680.webp)

## How to fix it

If you have sudo access to the machine you are on you can recursively change
ownership to your user and group.  I chose to just give myself ownership of my
whole `~/.cache directory` you could choose a deeper directory if you want.  I
feel pretty safe giving myself ownership to my own cache directory on my own
machine.

``` bash
whoami
# waylon

chown -R waylon:waylon ~/.cache
```

## Now it's working

Running localstack status now gives me a nice status message rather than an
error.

``` bash
❯ localstack status
┌─────────────────┬───────────────────────────────────────────────────────┐
│ Runtime version │ 1.2.1.dev                                             │
│ Docker image    │ tag: latest, id: dbbfe0ce0008, 📆 2022-10-15T00:51:03 │
│ Runtime status  │ ✖ stopped                                             │
└─────────────────┴───────────────────────────────────────────────────────┘
```
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
    
    <a class='prev' href='/maintianing-multiple-git-remotes'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Maintianing multiple git remotes</p>
        </div>
    </a>
    
    <a class='next' href='/learn-early'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>What is something you should have learned or understood earlier?</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>