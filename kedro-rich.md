---
cover: ''
date: 2022-03-11
datetime: 2022-03-11 00:00:00+00:00
description: Kedro rich is a very new and unstable (it There is no pypi package yet,
  but it You can run your pipeline just as you normally would, except you get progress
  Lis
edit_link: https://github.com/edit/main/pages/til/kedro-rich.md
jinja: false
long_description: 'Kedro rich is a very new and unstable (it There is no pypi package
  yet, but it You can run your pipeline just as you normally would, except you get
  progress Listing out catalog entries from the command line now print out a nice
  pretty Go to the '
now: 2022-10-29 15:54:38.065802
path: pages/til/kedro-rich.md
slug: kedro-rich
status: draft
super_description: 'Kedro rich is a very new and unstable (it There is no pypi package
  yet, but it You can run your pipeline just as you normally would, except you get
  progress Listing out catalog entries from the command line now print out a nice
  pretty Go to the '
tags:
- python
- kedro
- cli
templateKey: til
title: Make Kedro Runs Beautiful
today: 2022-10-29
year: 2022
---

Kedro rich is a very new and unstable (it's good, just not ready) plugin for
kedro to make the command line prettier.

## Install kedro rich

There is no pypi package yet, but it's on github.  You can pip install it with
the git url.

``` bash
pip install git+https://github.com/datajoely/kedro-rich
```

## Kedro run

You can run your pipeline just as you normally would, except you get progress
bars and pretty prints.

```
kedro run
```

![kedro rich pretty run](https://images.waylonwalker.com/kedro-rich-run.png)


## Kedro catalog

Listing out catalog entries from the command line now print out a nice pretty
table.

``` bash
kedro catalog list
```

![kedro rich catalog list table output](https://images.waylonwalker.com/kedro-rich-catalog-list.png)

## Give it a star

Go to the [GitHub repo](https://github.com/datajoely/kedro-rich) and give it a
star, Joel deserves it.
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
    
    <a class='prev' href='/kedro-run'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Running your Kedro Pipeline from the command line</p>
        </div>
    </a>
    
    <a class='next' href='/kedro-pypi-list'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Creating pypi-list with kedro</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>