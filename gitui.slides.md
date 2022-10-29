---
cover: ''
date: 2021-01-17
datetime: 2021-01-17 00:00:00+00:00
description: Gitui is a terminal-based git user interface (TUI) that will change the
  way I have been a long-time user of the git cli, and it Go to their  It opens blazing
  fa
edit_link: https://github.com/edit/main/pages/blog/gitui.slides.md
jinja: false
long_description: Gitui is a terminal-based git user interface (TUI) that will change
  the way I have been a long-time user of the git cli, and it Go to their  It opens
  blazing fast. Sometimes I edit a number of files and want to commit them one at
  a time, this By defa
now: 2022-10-29 15:54:38.065341
path: pages/blog/gitui.slides.md
slug: gitui-slides
status: published
super_description: 'Gitui is a terminal-based git user interface (TUI) that will change
  the way I have been a long-time user of the git cli, and it Go to their  It opens
  blazing fast. Sometimes I edit a number of files and want to commit them one at
  a time, this By default,  pop open  use  glance at the diff to the right press enter
  to stage the file sc to switch focus to the saged files and commit write my commit
  message hit enter and q to quit I am in the  Let me know what ui you use for git,
  do you stick to the '
tags:
- git
templateKey: slides
title: Gitui is a blazing fast terminal git interface
today: 2022-10-29
year: 2021
---

## GitUI

Gitui is a terminal-based git user interface (TUI) that will change the way
that you work with git. 

## Works alongside the cli

I have been a long-time user of the git cli, and it's
been hard to beat, mostly because there is nothing that keeps my fingers on the
keyboard quite like it, except `gitui` which comes with some great ways to very
quickly walk through a git project.

## installation

Go to their [releases]https://github.com/extrawurst/gitui/releases) page,
download the latest build, and pop it on your PATH.  I have the following
stuffed away in some install scripts to get the latest version.


_<small>install latest release</small>_
``` bash
GITUI_VERSION=$(curl --silent https://github.com/extrawurst/gitui/releases/latest | tr -d '"' | sed 's/^.*tag\///g' | sed 's/>.*$//g' | sed 's/^v//')
wget https://github.com/extrawurst/gitui/releases/download/v${GITUI_VERSION}/gitui-linux-musl.tar.gz -O- -q | sudo tar -zxf - -C /usr/bin/
```

## run `gitui`

It opens blazing fast.

``` bash
gitui
```

## Quick Commits

Sometimes I edit a number of files and want to commit them one at a time, this
is painful in the git cli and my main use case for `gitui`.  `gitui` shows
unstaged changes at the top, staged changes on the bottom, and a diff on the
right.


![gitui status](https://images.waylonwalker.com/gitui-status.png)


## Navigate with hjkl

By default, `gitui` uses arrow keys, but simply copying
[vim_style_key_config.ron](https://github.com/extrawurst/gitui/blob/master/vim_style_key_config.ron)
to your config directory will get you vim-like keybindings.

## workflow

* pop open `gitui`, 
* use **j/k** to get to the file I want to commit,
* glance at the diff to the right
* press enter to stage the file
* sc to switch focus to the saged files and commit
* write my commit message hit enter and
* q to quit

## Keybindings

```
w/s:   to toggle focus between working and staged changes
j/k:   to scroll each section
h/l:   switch between left and right side
enter: toggle file from working or staging
c:     start a commit message
p:     push
<c-c>: quit
```

## Other Panes

I am in the `Status [1]` pane 90% of the time, but it also has three other
panes for `Log [2]`, `Stashing [3]`, and `Stashes [4]`.  I do not really use
the stashes panes, but the `Log [2]` pane is quite useful to quickly go through
the last set of commits and see the diff for each of them.

## What UI do you use for git

Let me know what ui you use for git, do you stick to the cli, use a gui, or use
a similar `TUI` interface?
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
    
    <a class='prev' href='/glances-docker'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Glances can watch docker processes</p>
        </div>
    </a>
    
    <a class='next' href='/gitui'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Gitui is a blazing fast terminal git interface</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>