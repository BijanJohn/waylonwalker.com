---
cover: ''
date: 2021-08-16
datetime: 2021-08-16 00:00:00+00:00
description: https://youtu.be/bw5 I recently switched over to using Ubuntu, it works
  well pretty much out of the I am still using the built in default gnome terminal,
  it jus
edit_link: https://github.com/edit/main/pages/blog/how-i-kedro.md
jinja: false
long_description: https://youtu.be/bw5 I recently switched over to using Ubuntu, it
  works well pretty much out of the I am still using the built in default gnome terminal,
  it just works.  It does One Dark Theme You can find my I use zsh as my default shell.  I
  like to
now: 2022-10-29 15:54:38.063762
path: pages/blog/how-i-kedro.md
slug: how-i-kedro
status: published
super_description: 'https://youtu.be/bw5 I recently switched over to using Ubuntu,
  it works well pretty much out of the I am still using the built in default gnome
  terminal, it just works.  It does One Dark Theme You can find my I use zsh as my
  default shell.  I like to use it as my I use the starship prompt for my shell.  It
  works well out of As a team lead I am in and out of many projects per day, tmux
  allows me to get I really like the raw speed and customizability of neovim.  You
  can see all the OneBuddy Theme '
tags:
- kedro
templateKey: blog-post
title: How I Kedro
today: 2022-10-29
year: 2021
---

https://youtu.be/bw5_FWDVRpU

## Ubuntu

I recently switched over to using Ubuntu, it works well pretty much out of the
box for me.  I am using gnome with a dark theme.


## Gnome Terminal

I am still using the built in default gnome terminal, it just works.  It does
all the things that I need it to do.  It supports transparency renders my fonts
and allows me to highlight things well.

* One Dark Theme

## dotfiles

 You can find my
 [dotfiles](https://github.com/waylonwalker/devtainer) on
 github.  Feel free to read through and take anything that you
 find useful.  I would encourage you not to steal them, but to
 integrate the parts that you want into your own dotfiles.
 dotfiles are a very personal thing. They are an extension of
 ones fingertips designed for how you think and type.

## zsh

I use zsh as my default shell.  I like to use it as my
interactive shell.  It works, and does a bit better with
things like tab completion out of the box.

## starship

I use the starship prompt for my shell.  It works well out of
the box.  It looks good and includes all of the information
that I would ever need.

![kedro-prompt](https://images.waylonwalker.com/kedro-prompt.png)

## tmux

As a team lead I am in and out of many projects per day, tmux allows me to get
in and out of these files with super speed.  I was using a mix of vscode and
tmux in until October 2020.  At this point I got moved development machines and
pushed myself to use only the terminal.  I felt that vscode was just getting
slower and slower, and I was getting less benefit from it.  Especially now that
the lsp is a part of nvim.

![tmux-prefix+c-j](https://images.waylonwalker.com/tmux-navigation-2021-prefix+c-j.gif)

## neovim

I really like the raw speed and customizability of neovim.  You can see all the
customization, and plugins I have added in my dotfiles.

* OneBuddy Theme
* pylsp
* kedro-lsp

![nvim-kedro](https://images.waylonwalker.com/nvim-kedro.png)

## ipython

I really like ipython, it lets me edit code in my code editor, then import it
or run it quickly.  Ipython gives me the right level of tooling.  I don't need
markdown mixed in my code, I put those notes into docstrings, a readme, or
wiki.  When I need to see plots I just store them as png or html and view them
in my browser.  

I do a bit of customization to my ipython session that you can find in my
dotfiles repo.  I use a custom prompt and use rich formatting and tracebacks if
rich is installed.

* custom prompt
* rich traceback

![kedro-ipython](https://images.waylonwalker.com/kedro-ipython.png)

## Links

* [tmux](https://github.com/tmux/tmux)
* [dotfiles](https://github.com/waylonWalker/devtainer)
* [starship.rs](https://starship.rs/)
* [kedro](https://github.com/quantumblacklabs/kedro)
* [ipython](https://ipython.readthedocs.io/en/6.5.0/index.html)
* [rich](https://github.com/willmcgugan/rich)
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
    
    <a class='prev' href='/how-python-tools-config'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>How python tools configure</p>
        </div>
    </a>
    
    <a class='next' href='/hatch-version'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Versioning Python Projects with Hatch</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>