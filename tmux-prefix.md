---
cover: ''
date: 2021-07-18
datetime: 2021-07-18 00:00:00+00:00
description: https://youtu.be/BMkpbfhbkKM The prefix key is an essential part of tmux,
  by default all of tmux A few of the essential default key-bindings. A more complete
  li
edit_link: https://github.com/edit/main/pages/blog/tmux-prefix.md
jinja: false
long_description: https://youtu.be/BMkpbfhbkKM The prefix key is an essential part
  of tmux, by default all of tmux A few of the essential default key-bindings. A more
  complete list of key-bindings can be found in this gist https://gist.github.com/mzmonsour/8791835.
  ht
now: 2022-10-29 15:54:38.065443
path: pages/blog/tmux-prefix.md
slug: tmux-prefix
status: published
super_description: https://youtu.be/BMkpbfhbkKM The prefix key is an essential part
  of tmux, by default all of tmux A few of the essential default key-bindings. A more
  complete list of key-bindings can be found in this gist https://gist.github.com/mzmonsour/8791835.
  https://waylonwalker.com/tmux-nav-2021/ for more information on how I navigate tmux,
  check out this full post
tags:
- cli
- linux
- tmux
templateKey: blog-post
title: tmux prefix
today: 2022-10-29
year: 2021
---

https://youtu.be/BMkpbfhbkKM

The prefix key is an essential part of tmux, by default all of tmux's
key-bindings sit behind a prefix.  This prefix is very similar to vim's leader
key. It is common for folks to change the default `C-b` (control b) to `C-a` or
if they are a vim user something to match their vim leader key.

``` bash
set -g prefix C-Space
bind Space send-prefix
```

A few of the essential default key-bindings.

```
%      vertical split
"      horizontal split
d      detach

up     select up one pane
down   select down one pane
right  select right one pane
left   select left one pane

t      clock
o      swap panes
c      create window
n      next window
p      previous window
```

A more complete list of key-bindings can be found in this gist https://gist.github.com/mzmonsour/8791835.


<div class="onelinelink-wrapper">
    <a class="onelinelink" href="https://waylonwalker.com/tmux-nav-2021/">
        <img style="float: right;" align='right' src="https://covers.waylonwalker.com/tmux-nav-2021.jpg" alt="article cover for How I navigate tmux in 2021"/>
        <p><strong>How I navigate tmux in 2021</strong></p>
    </a>
</div>


> for more information on how I navigate tmux, check out this full post
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
    
    <a class='prev' href='/tmux-rename-session'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>tmux rename session</p>
        </div>
    </a>
    
    <a class='next' href='/tmux-popups'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>tmux popups</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>