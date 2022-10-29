---
cover: ''
date: 2022-01-09
datetime: 2022-01-09 00:00:00+00:00
description: 'Stow is an incredible way to manage your dotfiles.  It works by managing
  When using stow its easiest to keep your dotfiles directory (you may name it Then
  each '
edit_link: https://github.com/edit/main/pages/til/2-minutes-to-stow.md
jinja: false
long_description: Stow is an incredible way to manage your dotfiles.  It works by
  managing When using stow its easiest to keep your dotfiles directory (you may name
  it Then each application directory should reflet the same diretory structure as
  you Here is a simple ex
now: 2022-10-29 15:54:38.066372
path: pages/til/2-minutes-to-stow.md
slug: 2-minutes-to-stow
status: draft
super_description: Stow is an incredible way to manage your dotfiles.  It works by
  managing When using stow its easiest to keep your dotfiles directory (you may name
  it Then each application directory should reflet the same diretory structure as
  you Here is a simple example with my zshrc. You can pass in the --simulate if you
  wish, it will tell you if there are going Once your ready you can stow your zsh
  application. A slightly more complicated example is neovim since its diretory structure
  does !
tags:
- linux
- cli
- bash
templateKey: til
title: 2 minutes to stow
today: 2022-10-29
year: 2022
---

Stow is an incredible way to manage your dotfiles.  It works by managing
symlinks between your dotfiles directory and the rest of the system.  You can
then make your dotfiles directory a git repo and have it version controlled.  In
my honest opinion, when I was trying to get started the docs straight into deep
detail of things I frankly don't really care about and jumped right over how to
use it.

When using stow its easiest to keep your dotfiles directory (you may name it
what you want) in your home directory, with application directories inside of
it.

Then each application directory should reflet the same diretory structure as you
want in your home directory.

## zsh

Here is a simple example with my zshrc.

``` bash
mkdir ~/dotfiles
cd ~/dotfiles
mkdir zsh
mv ~/.zshrc zsh
stow --simulate zsh
```

You can pass in the --simulate if you wish, it will tell you if there are going
to be any more errors or not, but it wont give much more than that.

```
WARNING: in simulation mode so not modifying filesystem.
```

Once your ready you can stow your zsh application.

```
stow zsh
```

## nvim

A slightly more complicated example is neovim since its diretory structure does
not put configuration files directly in your home directory, but rather at a
deeper level.

``` bash
mkdir ~/dotfiles/nvim/.config/nvim/ -p
cd ~/dotfiles
mv ~/.config/nvim/ ~/dotfiles/nvim/.config/nvim/
stow zsh
```

> !notice how the nvim directory inside of dotfiles is structured like it would
> be in your $HOME directory.
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
    
    <a class='prev' href='/2018-retrospective'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>2018 Retrospective</p>
        </div>
    </a>
    
    <a class='next' href='/026'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>026.md</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>