---
cover: ''
date: 2022-04-08
datetime: 2022-04-08 00:00:00+00:00
description: 'I recently was unable to boot into my home Linux Desktop, it got stuck
  at https://twitter.com/ There Normally you have 6 TTY ctrl+alt+F1: login screen
  ctrl+alt+'
edit_link: https://github.com/edit/main/pages/til/linux-tty.md
jinja: false
long_description: 'I recently was unable to boot into my home Linux Desktop, it got
  stuck at https://twitter.com/ There Normally you have 6 TTY ctrl+alt+F1: login screen
  ctrl+alt+F2: Desktop ctrl+alt+F3: TTY 3 ctrl+alt+F4: TTY 4 ctrl+alt+F5: TTY 5 ctrl+alt+F6:
  TTY 6 In'
now: 2022-10-29 15:54:38.066600
path: pages/til/linux-tty.md
slug: linux-tty
status: draft
super_description: 'I recently was unable to boot into my home Linux Desktop, it got
  stuck at https://twitter.com/ There Normally you have 6 TTY ctrl+alt+F1: login screen
  ctrl+alt+F2: Desktop ctrl+alt+F3: TTY 3 ctrl+alt+F4: TTY 4 ctrl+alt+F5: TTY 5 ctrl+alt+F6:
  TTY 6 In my case the desktop manager neverstarted, so ctrl+alt+F1 brought me into
  a tty. Well after getting back in and having some time to reflect, I think my Desktop
  I tried a bunch of things like switching to lightdm, and manually running startx.
  The fina'
tags:
- linux
- linux
- linux
templateKey: til
title: A TTY Can Save Your Bacon
today: 2022-10-29
year: 2022
---

I recently was unable to boot into my home Linux Desktop, it got stuck at
diskcheck `fsck`.  I found that I was able to get in to a tty through a hotkey.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Did a sudo apt update &amp;&amp; upgrade last night, power got tripped off couldnt reboot, had to reinstall my display manager from a tty.</p>&mdash; Waylon Walker 🐍 (@_WaylonWalker) <a href="https://twitter.com/_WaylonWalker/status/1512281106120384519?ref_src=twsrc%5Etfw">April 8, 2022</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


## What's a TTY?

There's probably more to it, but to me its a full screen terminal with zero
gui, not even your gui fonts.  It does log into your default shell so if you
have a comfy command line setup it will be here for you even though it looks
much different without fonts and full colorspace.

## Normal setup

Normally you have 6 TTY's running, the first is dedicated to your desktop
manager, which is your login screen it might be something like gdm or lightdm.

* ctrl+alt+F1: login screen
* ctrl+alt+F2: Desktop
* ctrl+alt+F3: TTY 3
* ctrl+alt+F4: TTY 4
* ctrl+alt+F5: TTY 5
* ctrl+alt+F6: TTY 6

In my case the desktop manager neverstarted, so ctrl+alt+F1 brought me into a tty.

## What happened??

Well after getting back in and having some time to reflect, I think my Desktop
manager was installed or just broken, possibly during a update I ran a few days
prior.

I tried a bunch of things like switching to lightdm, and manually running startx.

## Getting back in

The final commands that ended up getting me back in were installing and starting gdm3.

``` bash
sudo apt install gdm3
sudo systemctl start gdm3
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
    
    <a class='prev' href='/linux-unzip-directory'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Unzip minecraft mods to their directory from the command line</p>
        </div>
    </a>
    
    <a class='next' href='/linux-swap'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Create a Swapfile on Your Linux Machine</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>