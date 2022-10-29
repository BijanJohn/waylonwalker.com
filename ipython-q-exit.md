---
cover: ''
date: 2022-06-13
datetime: 2022-06-13 00:00:00+00:00
description: So many terminal applications bind  After digging way too deep into how
  IPython implements its  It was that simple.  This is not a game changer by any means,
  bu
edit_link: https://github.com/edit/main/pages/til/ipython-q-exit.md
jinja: false
long_description: So many terminal applications bind  After digging way too deep into
  how IPython implements its  It was that simple.  This is not a game changer by any
  means, but I will now
now: 2022-10-29 15:54:38.066578
path: pages/til/ipython-q-exit.md
slug: ipython-q-exit
status: published
super_description: So many terminal applications bind  After digging way too deep
  into how IPython implements its  It was that simple.  This is not a game changer
  by any means, but I will now
tags:
- python
templateKey: til
title: IPython q to exit
today: 2022-10-29
year: 2022
---

So many terminal applications bind `q` to exit, even the python debugger, its
muscle memory for me.  But to exit ipython I have to type out `exit<ENTER>`.
This is fine, but since q is muscle memory for me I get this error a few times
per day.

```
╭─────────────────────────────── Traceback (most recent call last) ────────────────────────────────╮
│ <ipython-input-1-2b66fd261ee5>:1 in <module>                                                     │
╰──────────────────────────────────────────────────────────────────────────────────────────────────╯
NameError: name 'q' is not defined
```

After digging way too deep into how IPython implements its `ExitAutoCall` I
realized there was a very simple solution here.  `IPython` automatically
imports all the scripts you put in your profile directory, all I needed was to
create `~/.ipython/profile_default/startup/q.py` with the following.

```
q = exit
```

It was that simple.  This is not a game changer by any means, but I will now
see one less error in my workflow.  I just press `q<Enter>` and I am out,
without error.
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
    
    <a class='prev' href='/jinja2-escape'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>how to escape variables in jinja templates</p>
        </div>
    </a>
    
    <a class='next' href='/ipython-help'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Just Ask Ipython for help</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>