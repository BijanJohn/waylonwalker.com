---
cover: ''
date: 2022-03-21
datetime: 2022-03-21 00:00:00+00:00
description: I love the freedom of writing in markdown.  It allows me to write content
  from I will most often just present right from the terminal using I sometimes also
  use
edit_link: https://github.com/edit/main/pages/til/lookatme-slides.md
jinja: false
long_description: I love the freedom of writing in markdown.  It allows me to write
  content from I will most often just present right from the terminal using I sometimes
  also use reveal.js, but that I leverage auto slides when I write my slides in markdown.  The
  large
now: 2022-10-29 15:54:38.066001
path: pages/til/lookatme-slides.md
slug: lookatme-slides
status: draft
super_description: I love the freedom of writing in markdown.  It allows me to write
  content from I will most often just present right from the terminal using I sometimes
  also use reveal.js, but that I leverage auto slides when I write my slides in markdown.  The
  largest lookatme is a python library that is available on pypi, you can install
  it with Since it I just run it with pipx. Note, I use a custom fork of lookatme.  It
  From Neovim I use a plugin I created for sending out commands to tmux called
tags:
- python
- cli
templateKey: til
title: How I Present Markdown Slides from the Terminal
today: 2022-10-29
year: 2022
---

I love the freedom of writing in markdown.  It allows me to write content from
the comfort of my editor with very little focus on page style.  It turns out
that markdown is also a fantastic tool for creating slides.

## Present from the terminal

I will most often just present right from the terminal using
[lookatme](https://lookatme.readthedocs.io/en/latest/index.html).  Presenting
from the terminal lets me see the results quick right from where I am editing.
It also allows me to pop into other terminal applications quickly.

## reveal.js

I sometimes also use reveal.js, but that's for another post.  It is handy that
it lives in the browser and is easier to share.

## New Slides

I leverage auto slides when I write my slides in markdown.  The largest
heading, usually an h2 for me, becomes the new slide marker.  Otherwise my
process is not much different, It just becomes a shorter writing style.

## Installation

lookatme is a python library that is available on pypi, you can install it with
the pip command.

```
python -m pip install lookatme
```

Since it's a command line application it works great with pipx.  This prevents
the need to manage virtual environments yourself or ending up with packages
clashing in your system python environment.

```
pipx install lookatme
```

## From my terminal

``` bash
lookatme {filepath}
```

I just run it with pipx.

``` bash
pipx run \
 --spec git+https://github.com/waylonwalker/lookatme \
 lookatme {filepath} \
 --live-reload \
 --style gruvbox-dark
```

> Note, I use a custom fork of lookatme.  It's schema validation did not like
> the date format of my blog posts, so I have a one line fix built into my
> fork that is pretty specific to me.

## From Neovim
_most often what I do_

From Neovim I use a plugin I created for sending out commands to tmux called
[telegraph](https://github.com/WaylonWalker/Telegraph.nvim).  This sends the
above command to a new session that I can bounce between quickly.

``` vim
nnoremap <leader><leader>s <cmd>lua require'telegraph'.telegraph({cmd='pipx run --spec git+https://github.com/waylonwalker/lookatme lookatme {filepath} --live-reload --style gruvbox-dark', how='tmux'})<CR>
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
    
    <a class='prev' href='/lookatme-styles'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Style Lookatme Slides a bit more Personal</p>
        </div>
    </a>
    
    <a class='next' href='/long-variable-names-are-good'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Long variable names are good</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>