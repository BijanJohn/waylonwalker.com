---
cover: ''
date: 2022-01-05
datetime: 2022-01-05 00:00:00+00:00
description: tmux popups can be sized how you like based on the % width of the
edit_link: https://github.com/edit/main/pages/til/tmux-pop-size.md
jinja: false
long_description: tmux popups can be sized how you like based on the % width of the
now: 2022-10-29 15:54:38.066035
path: pages/til/tmux-pop-size.md
slug: tmux-pop-size
status: draft
super_description: tmux popups can be sized how you like based on the % width of the
tags:
- tmux
- linux
- bash
templateKey: til
title: Tmux Pop size
today: 2022-10-29
year: 2022
---

tmux popups can be sized how you like based on the % width of the
terminal on creation by using the flags (h, w, x, y) for height, width,
and position.

``` bash
# normal popup
tmux popup figlet "Hello"
# fullscreen popup
tmux popup -h 100% -w 100% figlet "Hello"
# 75% centered popup
tmux popup -h 100% -w 75% figlet "Hello"
# 75% popup on left side
tmux popup -h 100% -w 75% -x 0% figlet "Hello"
```

![example video running these commands](https://images.waylonwalker.com/tmux-popup-position.gif)
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
    
    <a class='prev' href='/tmux-popups'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>tmux popups</p>
        </div>
    </a>
    
    <a class='next' href='/tmux-next-prev-session'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>tmux next/prev session</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>