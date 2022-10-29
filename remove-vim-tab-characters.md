---
cover: ''
date: 2022-01-06
datetime: 2022-01-06 00:00:00+00:00
description: I It turns out they are tabs, and you can get rid of the little leading
edit_link: https://github.com/edit/main/pages/til/remove-vim-tab-characters.md
jinja: false
long_description: I It turns out they are tabs, and you can get rid of the little
  leading
now: 2022-10-29 15:54:38.065642
path: pages/til/remove-vim-tab-characters.md
slug: remove-vim-tab-characters
status: draft
super_description: I It turns out they are tabs, and you can get rid of the little
  leading
tags:
- vim
- linux
templateKey: til
title: Remove Vim Tab Characters
today: 2022-10-29
year: 2022
---

I've been stuck many times looking at a vim buffer with little question
marks at the beginning of each line and trying to get rid of them.  for
so long I didn't know what they were so trying to get rid of them was
impossible.

![example of what the tab character renders as in my editor](https://images.waylonwalker.com/vim-tab-characters.png)

It turns out they are tabs, and you can get rid of the little leading
question marks with this substitution command.

``` vim
:%s/\t/    /g
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
    
    <a class='prev' href='/reset-ipython'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Reclaim memory usage in Jupyter</p>
        </div>
    </a>
    
    <a class='next' href='/refactor-in-cli'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Large Refactor At The Command Line</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>