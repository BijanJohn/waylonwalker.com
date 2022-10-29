---
cover: ''
date: 2022-03-06
datetime: 2022-03-06 00:00:00+00:00
description: I recently found a really great  I have this added to my  In my workflow
  I open a tmux session for each project, so this First open neovim, but with the  If
  you
edit_link: https://github.com/edit/main/pages/til/nvr-open-files.md
jinja: false
long_description: 'I recently found a really great  I have this added to my  In my
  workflow I open a tmux session for each project, so this First open neovim, but
  with the  If you try to run '
now: 2022-10-29 15:54:38.066090
path: pages/til/nvr-open-files.md
slug: nvr-open-files
status: draft
super_description: 'I recently found a really great  I have this added to my  In my
  workflow I open a tmux session for each project, so this First open neovim, but
  with the  If you try to run '
tags:
- python
- vim
- tmux
templateKey: til
title: Open Files with Nvim Remote
today: 2022-10-29
year: 2022
---

I recently found a really great [plugin](https://github.com/mhinz/neovim-remote) by
[mhinz](https://github.com/mhinz) to open files in neovim from a
different tmux split, without touching neovim at all.

## Installation

[neovim-remote](https://github.com/mhinz/neovim-remote) is not a neovim
plugin at all, it's a python cli that you can install with pip.  Unlike
the repo suggests, I use pipx to install `nvr`.


``` bash
pipx install neovim-remote
```

## How I use it

I have this added to my `.envrc` that is in every one of my projects.
This will tie a neovim session to that directory, and all directories
under it.

``` bash
export NVIM_LISTEN_ADDRESS=/tmp/nvim-$(basename $PWD)
```

> In my workflow I open a tmux session for each project, so this
> essentially ties a neovim session to a tmux session.

### Open neovim

First open neovim, but with the `nvr` command.  This will open neovim,
and look pretty much the same as always.

``` bash
nvr
```

If you try to run `nvr` again in another shell nothing will happen as
its already runnin under that address, but if you give it a filename it
will open the file in the first instance of neovim that you opened.

``` bash
nvr readme.md
````

## Links

* [GitHub](https://github.com/mhinz/neovim-remote)
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
    
    <a class='prev' href='/obs-virtual-camera-on-boot'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>obs virtual camera on boot</p>
        </div>
    </a>
    
    <a class='next' href='/nvim-telescope-hidden-files'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Finding hidden (dotfiles) using Telescope in neovim</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>