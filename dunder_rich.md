---
cover: ''
date: 2021-12-23
datetime: 2021-12-23 00:00:00+00:00
description: 'Adding a '
edit_link: https://github.com/edit/main/pages/til/dunder_rich.md
jinja: false
long_description: 'Adding a '
now: 2022-10-29 15:54:38.065838
path: pages/til/dunder_rich.md
slug: dunder-rich
status: draft
super_description: 'Adding a '
tags:
- python
- rich
templateKey: til
title: Adding __rich__ methods to python classes
today: 2022-10-29
year: 2021
---

Adding a `__render__` method that returns a rich renderable to any python class
makes it display this output if printed with rich.  This also includes being
nested inside a rich Layout.


``` python
import rich
from rich.panel import Panel


class ShowMe:
    def __rich__(self):
        return Panel("hello", border_style="gold1")


if __name__ == "__main__":
    rich.print(ShowMe())
```

![results of printing ShowMe with rich](https://images.waylonwalker.com/dunder_rich_showme.png)
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
    
    <a class='prev' href='/dunk-is-my-new-diff-pager'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Dunk is my new diff pager</p>
        </div>
    </a>
    
    <a class='next' href='/drawing-ascii-boxes'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>drawing ascii boxes</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>