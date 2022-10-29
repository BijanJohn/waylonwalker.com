---
cover: ''
date: 2022-05-11
datetime: 2022-05-11 00:00:00+00:00
description: I really like the super clean look of no status menus, no url bar, no
  bookmarks
edit_link: https://github.com/edit/main/pages/til/clean-qutebrowser.md
jinja: false
long_description: I really like the super clean look of no status menus, no url bar,
  no bookmarks
now: 2022-10-29 15:54:38.065720
path: pages/til/clean-qutebrowser.md
slug: clean-qutebrowser
status: draft
super_description: I really like the super clean look of no status menus, no url bar,
  no bookmarks
tags:
- python
- linux
- python
templateKey: til
title: qutebrowser clean up all status bars
today: 2022-10-29
year: 2022
---

I really like the super clean look of no status menus, no url bar, no bookmarks
bar, nothing.  Don't get me wrong these things are useful, but honestly they
take up screen real estate and I RARELY look at them.  What I really want is a
toggle hotkey.  I found this one from one of DT's youtube video's.  I can now
tap `xx` and both the status bar at the botton and the address bar at the top
disappear.

``` python
# ~/.config/qutebrowser/config.py

config.bind("xb", "config-cycle statusbar.show always never")
config.bind("xt", "config-cycle tabs.show always never")
config.bind(
    "xx",
    "config-cycle statusbar.show always never;; config-cycle tabs.show always never",
)
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
    
    <a class='prev' href='/cmd-exe-tips'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>cmd.exe tips</p>
        </div>
    </a>
    
    <a class='next' href='/chrome-extensions-i-use'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Chrome Extensions I use</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>