---
cover: ''
date: 2021-11-20
datetime: 2021-11-20 00:00:00+00:00
description: This is a listing of all the things that I use on a daily basis to build
  data Everything installed on my machines is done through ansible-playbooks.  It
  I run U
edit_link: https://github.com/edit/main/pages/blog/uses.md
jinja: false
long_description: 'This is a listing of all the things that I use on a daily basis
  to build data Everything installed on my machines is done through ansible-playbooks.  It
  I run Ubuntu, it works well for me without too much fuss.  For me the I use awesome
  wm.  Awesome '
now: 2022-10-29 15:54:38.063441
path: pages/blog/uses.md
slug: uses
status: draft
super_description: 'This is a listing of all the things that I use on a daily basis
  to build data Everything installed on my machines is done through ansible-playbooks.  It
  I run Ubuntu, it works well for me without too much fuss.  For me the I use awesome
  wm.  Awesome is a tiling window manager that alows me to navigate For the longest
  time I just used When I am on a windows terminal I use the  The shell is the interpreter
  that interprets the commands that you send to it I use '
tags:
- meta
templateKey: blog-post
title: Uses
today: 2022-10-29
year: 2021
---

This is a listing of all the things that I use on a daily basis to build data
pipelines, lead my team, and build this website.


## Installation

Everything installed on my machines is done through ansible-playbooks.  It's
been a long transformation to get here, but its so satisfying to boot a brand
new system, run a single command a have every single thing cofigured exactly to
my liking.


``` bash
# GET is available by default on Ubuntu
GET waylonwalker.com/bootstrap | bash

# For debian based systems without GET by default
sudo apt install curl
curl -F https://waylonwalker.com/bootstrap | bash
```

## OS

I run Ubuntu, it works well for me without too much fuss.  For me the
distribution does not really matter too much, I'm more interested in what's
inside.

## Window Manager

I use awesome wm.  Awesome is a tiling window manager that alows me to navigate
through 9 workspaces (technically called tags in awesomewm). I can script out
certain applications to open in a certain tag, move it to different tags, and
join tags super easy.  I really dont see myself going back to a floating window
manager where you have to place all your windows with the mouse by hand.  This
is probably one of the biggest selling points for me to move to a Linux
desktop.

## Terminal

### gnome-terminal

For the longest time I just used
[gnome-terminal](https://help.gnome.org/users/gnome-terminal/stable/).  It
works, for the most part it gets out of the way and lets me do what I want.  I
just want a terminal that runs tmux properly, runs without titltbars or
scrollbars, and lets me theme it without much effort.

### kitty

[Kitty](https://sw.kovidgoyal.net/kitty/) is my main terminal, these days, it's
nice, its easy to configure how I want it, but most of its fancier features do
not work inside of tmux.  It does render incredibly fast, If I accidently cat
out a massive file, it typically just handles it, compared to other terminals
that will be printing for 30s or so.

### Windows Terminal

When I am on a windows terminal I use the _new_
[Terminal](https://github.com/microsoft/terminal).  It's a massive improvement
over any other terminal that I have ever tired on windows.  Text looks good,
the built in themese look good, I use the One-Half-Dark Theme, and the built in
Cascadia Code font.  Also things like system clipboards, copy, and paste just
seem to work better, and integrate well with wsl.

![My Windows Terminal from may 2022](https://images.waylonwalker.com/Windows-Terminal-0522.webp)

## Shell

The shell is the interpreter that interprets the commands that you send to it
from the command line, unlike the terminal that displays the text.

### zsh

I use [zsh](https://www.zsh.org/) as my shell of choice.  I don't run
oh-my-zsh, I just need a few plugins for things like
[autosuggestions](https://github.com/zsh-users/zsh-autosuggestions)
[syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting)
[history-substring-search](https://github.com/zsh-users/zsh-history-substring-search).


## Tmux

## Text Editor

## Presentation / Slides

## Video Recording / Streaming

## Video Editing

## pager

## Image Editor

## Virtual Environments

## node


---

## Desk

## Monitor

## Keyboard

## Desktop PC

## Keyboard

## Microphone

## Audio Interface

## Headphones

## Chair
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
    
    <a class='prev' href='/variable-names-don-t-need-their-type'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Variables names don't need their type</p>
        </div>
    </a>
    
    <a class='next' href='/use-ipython-extensions'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>I've made my ipython config too complicated, let's fix it.</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>