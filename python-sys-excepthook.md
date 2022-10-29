---
cover: ''
date: 2022-04-10
datetime: 2022-04-10 00:00:00+00:00
description: Sometimes you just want python to do something else when you hit an exception,
  I am working on a quick and dirty python script designed to take screenshots I co
edit_link: https://github.com/edit/main/pages/til/python-sys-excepthook.md
jinja: false
long_description: Sometimes you just want python to do something else when you hit
  an exception, I am working on a quick and dirty python script designed to take screenshots
  I could have gone down a logging route, but honestly this is meant to be quick,
  Python exposes
now: 2022-10-29 15:54:38.066309
path: pages/til/python-sys-excepthook.md
slug: python-sys-excepthook
status: draft
super_description: Sometimes you just want python to do something else when you hit
  an exception, I am working on a quick and dirty python script designed to take screenshots
  I could have gone down a logging route, but honestly this is meant to be quick,
  Python exposes sys.excepthook for just this case.  Here is what I ended up
tags:
- python
templateKey: til
title: Python sys.excepthook
today: 2022-10-29
year: 2022
---

Sometimes you just want python to do something else when you hit an exception,
maybe that's fire a text, slack message, email, or system notification like I
wanted.

I am working on a quick and dirty python script designed to take screenshots
and land them on my website in a single hotkey.  With it being designed to run
with a hotkey, if it were to error I would not see it.

I could have gone down a logging route, but honestly this is meant to be quick,
dirty, and work on my system for me.  I just want to get it in my system
notification.

## sys.excepthook

Python exposes sys.excepthook for just this case.  Here is what I ended up
doing to fire a system notification as well as printing the message.  Yaya a
log would be mroe appropriate, but this is designed to just get done quick and
do the job I want it to do.

```python
def notify_exception(type, value, tb):
    traceback_details = "\n".join(traceback.extract_tb(tb).format())

    msg = f"caller: {' '.join(sys.argv)}\n{type}: {value}\n{traceback_details}"
    print(msg)
    Popen(
        f'notify-send "screenshot.py hit an exception" "{msg}" -a screenshot.py',
        shell=True,
    )


sys.excepthook = notify_exception
0 / 0
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
    
    <a class='prev' href='/python-tips'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Python Tips</p>
        </div>
    </a>
    
    <a class='next' href='/python-string-is-string'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Python string of letters is a string of letters, but not with special</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>