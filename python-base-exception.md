---
cover: ''
date: 2022-03-31
datetime: 2022-03-31 00:00:00+00:00
description: I ran into a PR this week where the author was inheriting what BaseException
  Try running these examples in a  Since things such as  If you except from exception
edit_link: https://github.com/edit/main/pages/til/python-base-exception.md
jinja: false
long_description: I ran into a PR this week where the author was inheriting what BaseException
  Try running these examples in a  Since things such as  If you except from exception
  or something than inherits from it you will be When you make custom exceptions expect
  tha
now: 2022-10-29 15:54:38.065609
path: pages/til/python-base-exception.md
slug: python-base-exception
status: draft
super_description: I ran into a PR this week where the author was inheriting what
  BaseException Try running these examples in a  Since things such as  If you except
  from exception or something than inherits from it you will be When you make custom
  exceptions expect that users, or your team members will
tags:
- python
templateKey: til
title: Don't inherit from python BaseException, Here's why.
today: 2022-10-29
year: 2022
---

I ran into a PR this week where the author was inheriting what BaseException
rather than exception.  I made this example to illustrate the unintended side
effects that it can have.

Try running these examples in a `.py` file for yourself and try to kill them
with control-c.

## You cannot Keybard interrupt

Since things such as `KeyboardInterrupt` are created as an exception that
inherits from `BaseException`, if you except `BaseException` you can no longer
`KeyboardInterrupt`.

```python
from time import sleep

while True:
    try:
        sleep(30)
    except BaseException: # ❌
        pass
```

## except from Exception or higher

If you except from exception or something than inherits from it you will be
better off, and avoid unintended side effects.

```python
from time import sleep

while True:
    try:
        sleep(30)
    except Exception: # ✅
        pass
```

## This goes with Custom Exceptions as well

When you make custom exceptions expect that users, or your team members will
want to catch them and try to handle them if they can.  If you inherit from
`BaseException` you will put them in a similar situation when they use your
custom Exception.

```python
class MyFancyException(BaseException): # ❌
    ...

class MyFancyException(Exception): # ✅
    ...
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
    
    <a class='prev' href='/python-cache-key'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>How I make cache-keys from python objects</p>
        </div>
    </a>
    
    <a class='next' href='/python-auto-pdb'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Implement --pdb in a python cli</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>