---
cover: ''
date: 2022-01-21
datetime: 2022-01-21 00:00:00+00:00
description: I https://youtu.be/Rk-Y71P Run Mypy as is, don Next we will add  The
  final stage to this series is to add  Make sure that you watch Anthony https://www.youtube.
edit_link: https://github.com/edit/main/pages/til/gradual-typing-python.md
jinja: false
long_description: I https://youtu.be/Rk-Y71P Run Mypy as is, don Next we will add  The
  final stage to this series is to add  Make sure that you watch Anthony https://www.youtube.com/watch?v=Rk-Y71P
now: 2022-10-29 15:54:38.066302
path: pages/til/gradual-typing-python.md
slug: gradual-typing-python
status: draft
super_description: I https://youtu.be/Rk-Y71P Run Mypy as is, don Next we will add  The
  final stage to this series is to add  Make sure that you watch Anthony https://www.youtube.com/watch?v=Rk-Y71P
tags:
- python
templateKey: til
title: Gradual Typing in Python
today: 2022-10-29
year: 2022
---

I've referenced a video from Anthony Sotile in passing conversation several
times.  Walking through his gradual typing process has really helped me
understand typing better, and has helped me make some projects better over time
rather than getting slammed with typing errors.

https://youtu.be/Rk-Y71P_9KE

# Step 1

Run Mypy as is, don't get fancy yet.  This will not reach into any functions
unless they are alreay explicitly typed.  It will not enforce you to type them
either.

``` bash
pip install mypy
mypy .
# or your specific project to avoid .venvs
mypy src
# or a single file
mypy my-script.py
```

## Step 2

Next we will add `check-untyped-defs`, this will start checking inside
functions that are not typed.  To add this to your config create a
`setup.cfg` with the following.

``` toml
[mypy]
check_untyped_defs = True
```

## Step 3

The final stage to this series is to add `disallow_untyped_defs`.  This will
start requiring all of your functions to be type hinted.  This one is probably
the toughest, because as you type functions mypy can uncover more issues for
you to fix.  Often times the list of errors grows before it shrinks.

``` toml
[mypy]
check_untyped_defs = True
disallow_untyped_defs = True
```

## Anthony's video

Make sure that you watch Anthony's video, give him a sub, he deserves it
for all the great things he is doing for the python community.

https://www.youtube.com/watch?v=Rk-Y71P_9KE
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
    
    <a class='prev' href='/gratitude-009'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Gratitude 009</p>
        </div>
    </a>
    
    <a class='next' href='/gracefully-redirect'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Refactoring your blog urls</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>