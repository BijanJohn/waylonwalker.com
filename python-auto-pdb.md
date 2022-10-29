---
cover: ''
date: 2022-01-13
datetime: 2022-01-13 00:00:00+00:00
description: 'Adding a '
edit_link: https://github.com/edit/main/pages/til/python-auto-pdb.md
jinja: false
long_description: 'Adding a '
now: 2022-10-29 15:54:38.066393
path: pages/til/python-auto-pdb.md
slug: python-auto-pdb
status: draft
super_description: 'Adding a '
tags:
- python
- python
- python
templateKey: til
title: Implement --pdb in a python cli
today: 2022-10-29
year: 2022
---

Adding a `--pdb` flag to your applications can make them much easier for
those using it to debug your application, especially if your applicatoin
is a cli application where the user has much fewer options to start this
for themselves.  To add a pdb flag `--pdb` to your applications you will
need to wrap your function call in a try/except, and start a post_mortem
debugger. I give credit to
[this stack overflow post](https://stackoverflow.com/questions/242485/starting-python-debugger-automatically-on-error)
for helping me figure this out.

``` python
import pdb, traceback, sys


def bombs():
    a = []
    print(a[0])


if __name__ == "__main__":
    if "--pdb" in sys.argv:
        try:
            bombs()
        except:
            extype, value, tb = sys.exc_info()
            traceback.print_exc()
            pdb.post_mortem(tb)
    else:
        bombs()
```

## Using --pdb

``` python
python yourfile.py --pdb
```

![running this example with and without --pdb flag](https://images.waylonwalker.com/using-pdb-flag-from-cli.png)
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
    
    <a class='prev' href='/python-base-exception'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Don't inherit from python BaseException, Here's why.</p>
        </div>
    </a>
    
    <a class='next' href='/python-atexit'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Python atexit</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>