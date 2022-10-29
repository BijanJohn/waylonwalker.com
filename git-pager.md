---
cover: ''
date: 2022-03-16
datetime: 2022-03-16 00:00:00+00:00
description: Setting up your git pager to your liking can help you navigate diffs
  and logs You can set the pager right from your command line with the following command.
  You
edit_link: https://github.com/edit/main/pages/til/git-pager.md
jinja: false
long_description: 'Setting up your git pager to your liking can help you navigate
  diffs and logs You can set the pager right from your command line with the following
  command. You can also set your pager by editing your global  In my experience you
  need to turn colors '
now: 2022-10-29 15:54:38.066452
path: pages/til/git-pager.md
slug: git-pager
status: draft
super_description: 'Setting up your git pager to your liking can help you navigate
  diffs and logs You can set the pager right from your command line with the following
  command. You can also set your pager by editing your global  In my experience you
  need to turn colors off with nvim.  bat handles them and Here are some various configs
  that I tried.  For some reason line numbers in If you are afraid to try one of these
  settings, don The other option you have is to open your '
tags:
- git
- cli
templateKey: til
title: Set Your Git Pager Config
today: 2022-10-29
year: 2022
---

Setting up your git pager to your liking can help you navigate diffs and logs
much more efficiently.  You can set it to whatever pager you like so that your
keys feel nice and smooth and your fingers know exactly what to do.  You might
even gain a few extra features.

## Setting the pager

You can set the pager right from your command line with the following command.

``` bash
git config --global core.pager 'more'
```

You can also set your pager by editing your global `.gitconfig` file which by
default is set to `~/.gitconfig`.

``` bash
[core]
    pager = more
```

## Color

In my experience you need to turn colors off with nvim.  bat handles them and
looks good either way, but nvim will be plain white and display the color
codes as plain text if color is on.

``` bash
git config --global color.pager no
```

## Pagers I have tried

Here are some various configs that I tried.  For some reason line numbers in
bat really bothered me, but when in nvim they felt ok.  I am going to try
running both of them for a few days and see which I like better.  I think
having some of my nvim config could be really handy for things like yanking a
commit hash to the system clipboard without touching the mouse.

``` bash
# bat
git config --global core.pager 'bat'

# nvim in read only mode
git config --global core.pager 'nvim -R'

# turn colors off
git config --global color.pager no

# bat with no line numbers
git config --global core.pager 'bat --style=plain'

# nvim with no line numbers and a specific rc file
git config --global core.pager "nvim -R +'set nonumber norelativenumber' -u ~/.config/nvim/init-git.vim"
```

## reset back to the default

If you are afraid to try one of these settings, don't be you can always change
it back.  If you tried one and dont like it just `--unset` the config that you
just tried.

``` bash
git config --global --unset core.pager
git config --global --unset color.pager
```

The other option you have is to open your `.gitconfig` file and delete the
lines of config that set your pager.
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
    
    <a class='prev' href='/git-push-default-current'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Configure Git to Always Push to the Current Branch</p>
        </div>
    </a>
    
    <a class='next' href='/git-merge-ours'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>git merge ours</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>