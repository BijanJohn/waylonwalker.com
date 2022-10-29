---
cover: ''
date: 2022-01-14
datetime: 2022-01-14 00:00:00+00:00
description: 'functools.total From the Docs: The class must define one of  Here is
  an example using the Enum I was working on the other day.'
edit_link: https://github.com/edit/main/pages/blog/python-functools-total-ordering.md
jinja: false
long_description: 'functools.total From the Docs: The class must define one of  Here
  is an example using the Enum I was working on the other day.'
now: 2022-10-29 15:54:38.063434
path: pages/blog/python-functools-total-ordering.md
slug: python-functools-total-ordering
status: draft
super_description: 'functools.total From the Docs: The class must define one of  Here
  is an example using the Enum I was working on the other day.'
tags:
- python
templateKey: til
title: python functools total ordering
today: 2022-10-29
year: 2022
---

functools.total_ordering makes adding all of six of the rich comparison
operators to your custom classes much easier, and more likely that you
remember all of them.

> From the Docs: The class must define one of \_\_lt\_\_(), \_\_le\_\_(),
> \_\_gt\_\_(), or \_\_ge\_\_ In addition, the class should supply an
> \_\_eq\_\_() method.

[Total Ordering Docs](https://docs.python.org/3/library/functools.html#functools.total_ordering)

Here is an example using the Enum I was working on the other day.

``` python
from enum import Enum, auto
from functools import total_ordering


@total_ordering
class LifeCycle(Enum):

    configure = auto()
    glob = auto()
    load = auto()
    pre_render = auto()
    render = auto()
    post_render = auto()
    save = auto()

    def __lt__(self, other):
        try:
            return self.value < other.value
        except AttributeError:
            return self.value < other

    def __eq__(self, other):
        try:
            return self.value == other.value
        except AttributeError:
            return self.value == other

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
    
    <a class='prev' href='/python-git'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Using Git from Python</p>
        </div>
    </a>
    
    <a class='next' href='/python-frontmatter'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>How I load Markdown in Python</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>