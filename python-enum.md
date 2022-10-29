---
cover: ''
date: 2022-01-11
datetime: 2022-01-11 00:00:00+00:00
description: Python comes with an enum module for creating enums.  You can make your
  Enum values can be auto incremented by importing auto, and calling Enum
edit_link: https://github.com/edit/main/pages/til/python-enum.md
jinja: false
long_description: Python comes with an enum module for creating enums.  You can make
  your Enum values can be auto incremented by importing auto, and calling Enum
now: 2022-10-29 15:54:38.066142
path: pages/til/python-enum.md
slug: python-enum
status: draft
super_description: Python comes with an enum module for creating enums.  You can make
  your Enum values can be auto incremented by importing auto, and calling Enum
tags:
- python
- python
- python
templateKey: til
title: Python Enum
today: 2022-10-29
year: 2022
---

Python comes with an enum module for creating enums.  You can make your
own enum by inheriting importing and inheriting from Enum.

```
from enum import Enum


class LifeCycle(Enum):
    configure = 1
    glob = 2
    pre_render = 3
    render = 4
    post_render = 5
    save = 6
```

## auto incrementing

Enum values can be auto incremented by importing auto, and calling
`auto()` as their value.

``` python
from enum import Enum, auto


class LifeCycle(Enum):
    configure = auto()
    glob = auto()
    pre_render = auto()
    render = auto()
    post_render = auto()
    save = auto()
```

## using the enum

Enum's are accessed directy under the class itself, and have primarily
two methods underneath each thing you make, `.name` and `.value`.

``` python
Lifecycle.glob
Lifecycle.glob.value
Lifecycle.glob.name
```

![using the Lifecycle Enum](https://images.waylonwalker.com/using-lifecycle-enum.png)
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
    
    <a class='prev' href='/python-find-available-port'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Python Find Available Port</p>
        </div>
    </a>
    
    <a class='next' href='/python-docstring-ast'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Get Python docstring with ast</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>