---
cover: ''
date: 2022-03-26
datetime: 2022-03-26 00:00:00+00:00
description: Python Requests is on pypi and can be installed into your virtual environtment
  with pip. Requests makes getting content from a web url as easy as possible. Requ
edit_link: https://github.com/edit/main/pages/til/python-requests-get.md
jinja: false
long_description: Python Requests is on pypi and can be installed into your virtual
  environtment with pip. Requests makes getting content from a web url as easy as
  possible. Requests can handle any web request and is not limited to only html.  Here
  are There is way mo
now: 2022-10-29 15:54:38.066540
path: pages/til/python-requests-get.md
slug: python-requests-get
status: draft
super_description: Python Requests is on pypi and can be installed into your virtual
  environtment with pip. Requests makes getting content from a web url as easy as
  possible. Requests can handle any web request and is not limited to only html.  Here
  are There is way more to requests, this just scratches the surface while covering
tags:
- python
templateKey: til
title: Get Webpage with python requests
today: 2022-10-29
year: 2022
---

Python's requests library is one of the gold standard apis, designed by Kenneth
Reitz.  It was designed with the user perspective in mind first and
implementation second. I have heard this called readme driven development,
where the interface the user will use is laid out first, then implemented.
This makes the library much mor intuitive than if it were designed around how
it was easiest to implement.

## Install Requests

Requests is on pypi and can be installed into your virtual environtment with pip.

```bash
python -m pip install requests
```

## Getting the content of a request

Requests makes getting content from a web url as easy as possible.

```python
import requests

r = requests.get('https://waylonwalker.com/til/htmx-get/')
article = r.content
```

## requests is not limited to html

Requests can handle any web request and is not limited to only html.  Here are
some examples to get a markdown file, a csv, and a png image.

```python
htmx_get_md = requests.get('https://waylonwalker.com/til/htmx-get.md').content
cars = requests.get('https://waylonwalker.com/cars.csv').content
profile = requests.get('https://images.waylonwalker.com/8bitc.png').content
```

## RTFM

There is way more to requests, this just scratches the surface while covering
what you are going to need to get going. The
[requests docs](https://docs.python-requests.org/en/latest/) have way more details.
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
    
    <a class='prev' href='/python-reverse-sluggify'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Python Reverse Sluggify</p>
        </div>
    </a>
    
    <a class='next' href='/python-pluggable-architecture'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>🐍 Pluggable Architecture with Python</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>