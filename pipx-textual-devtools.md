---
cover: ''
date: 2022-10-24
datetime: 2022-10-24 00:00:00+00:00
description: I really like having global cli command installed with pipx.  Since textual
  You can pipx install textual. But if you try to run any textual cli commands you
  wil
edit_link: https://github.com/edit/main/pages/til/pipx-textual-devtools.md
jinja: false
long_description: 'I really like having global cli command installed with pipx.  Since
  textual You can pipx install textual. But if you try to run any textual cli commands
  you will run into a In order to install optional dependencies with '
now: 2022-10-29 15:54:38.066021
path: pages/til/pipx-textual-devtools.md
slug: pipx-textual-devtools
status: published
super_description: 'I really like having global cli command installed with pipx.  Since
  textual You can pipx install textual. But if you try to run any textual cli commands
  you will run into a In order to install optional dependencies with '
tags:
- python
templateKey: til
title: pipx textual devtools
today: 2022-10-29
year: 2022
---

I really like having global cli command installed with pipx.  Since textual
`0.2.x` (the css release) is out I want to be able to pop into textual devtools
easily from anywhere.

!["rusting tape machine robot, cinematic lighting, detailed, cell shaded, 4 k, warm colours, concept art, by wlop, ilya kuvshinov, artgerm, krenz cushart, greg rutkowski, pixiv. cinematic dramatic atmosphere, sharp focus, volumetric lighting, cinematic lighting, studio quality" -s50 -W832 -H416 -C12.0 -Ak_lms -S2404332231](https://stable-diffusion.waylonwalker.com/000359.2404332231.webp)

## Pipx Install

You can pipx install textual.

``` bash
pipx install textual
```

But if you try to run any textual cli commands you will run into a
`ModuleNotFoundError`, because you need to install the optional `dev`
dependencies.

``` python
Traceback (most recent call last):
  File "/home/u_walkews/.local/bin/textual", line 5, in <module>
    from textual.cli.cli import run
  File "/home/u_walkews/.local/pipx/venvs/textual/lib/python3.10/site-packages/textual/cli/cli.py", line 4, in <module>
    import click
ModuleNotFoundError: No module named 'click'
```

## Pipx Inject

In order to install optional dependencies with `pipx` you need to first install
the library, then inject in the optional dependencies using the square bracket
syntax.

``` bash
pipx install textual
pipx inject textual 'textual[dev]'
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
    
    <a class='prev' href='/practice-python-online'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>🐍 Practice Python Online</p>
        </div>
    </a>
    
    <a class='next' href='/personal-url-shortener'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Personal URL shortener with Netlify Redirects</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>