---
cover: ''
date: 2021-07-20
datetime: 2021-07-20 00:00:00+00:00
description: https://youtu.be/hpFYE2LU7xc Resizing panes in tmux can be quite difficult
  in default tmux, I Most often when I need to resize panes I just grab the edge of
  the
edit_link: https://github.com/edit/main/pages/blog/tmux-resize-panes.md
jinja: false
long_description: https://youtu.be/hpFYE2LU7xc Resizing panes in tmux can be quite
  difficult in default tmux, I Most often when I need to resize panes I just grab
  the edge of the pane with my https://waylonwalker.com/tmux-nav-2021/ for more information
  on how I naviga
now: 2022-10-29 15:54:38.065098
path: pages/blog/tmux-resize-panes.md
slug: tmux-resize-panes
status: published
super_description: https://youtu.be/hpFYE2LU7xc Resizing panes in tmux can be quite
  difficult in default tmux, I Most often when I need to resize panes I just grab
  the edge of the pane with my https://waylonwalker.com/tmux-nav-2021/ for more information
  on how I navigate tmux, check out this full post
tags:
- cli
- linux
- tmux
templateKey: blog-post
title: tmux resize-panes
today: 2022-10-29
year: 2021
---

https://youtu.be/hpFYE2LU7xc

Resizing panes in tmux can be quite difficult in default tmux, I
use a set of keybingings to help resize panes in the rare occasions
that I do need just a bit more space.  I set the keybinding to the same as my
split navigation bindings but shifted. They are very vim like (h,j,k,l).

``` bash
# resize panes
#―――――――――――――――――――――――――――――
bind -n M-H resize-pane -L 2
bind -n M-L resize-pane -R 2
bind -n M-K resize-pane -U 2
bind -n M-J resize-pane -D 2
```

Most often when I need to resize panes I just grab the edge of the pane with my
mouse.  Yes the mouse, its not that often that I actually need to change the
size of a pane.

``` bash
# Enable mouse control (clickable windows, panes, resizable panes)
set -g mouse on
```


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
    
    <a class='prev' href='/tmux-rotate-window'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>tmux rotate-window</p>
        </div>
    </a>
    
    <a class='next' href='/tmux-rename-session'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>tmux rename session</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>