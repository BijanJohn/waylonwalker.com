---
cover: ''
date: 2021-07-24
datetime: 2021-07-24 00:00:00+00:00
description: https://youtu.be/YRPZBv-iYyE New window as it sounds makes new windows
  in tmux.  Windows are kind of like Default key bindings for creating and navigating
  windo
edit_link: https://github.com/edit/main/pages/blog/tmux-new-window.md
jinja: false
long_description: https://youtu.be/YRPZBv-iYyE New window as it sounds makes new windows
  in tmux.  Windows are kind of like Default key bindings for creating and navigating
  windows in tmux. As always I have rebound these keys because I generally prefer
  a single When I
now: 2022-10-29 15:54:38.064021
path: pages/blog/tmux-new-window.md
slug: tmux-new-window
status: published
super_description: https://youtu.be/YRPZBv-iYyE New window as it sounds makes new
  windows in tmux.  Windows are kind of like Default key bindings for creating and
  navigating windows in tmux. As always I have rebound these keys because I generally
  prefer a single When I started using tmux I did almost everything in one giant session
  with https://waylonwalker.com/tmux-nav-2021/ for more information on how I navigate
  tmux, check out this full post
tags:
- cli
- linux
- tmux
- tmux
templateKey: blog-post
title: tmux new-window
today: 2022-10-29
year: 2021
---

https://youtu.be/YRPZBv-iYyE

New window as it sounds makes new windows in tmux.  Windows are kind of like
tabs.  They are another screen within your sessions that you can name and make
new panes in.



Default key bindings for creating and navigating windows in tmux.

``` bash
bind-key          c new-window
bind-key          p previous-window
bind-key          n next-window
```

As always I have rebound these keys because I generally prefer a single
keystroke over the prefix plus keybinding approach that tmux gives by default.

``` bash
#――windows――――――――――――――――――――――――――――――――――――――
bind -n M-c new-window -c '#{pane_current_path}'
bind -n M-p previous-window
bind -n M-n next-window
```

When I started using tmux I did almost everything in one giant session with
many panes and windows.  It became a nightmare to manage and quickly get
between two sets work efficiently.  This year I leaned in on sessions quite
heavily.  Checkout this 👇 post to see that workflow in depth.


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
    
    <a class='prev' href='/tmux-next-prev-session'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>tmux next/prev session</p>
        </div>
    </a>
    
    <a class='next' href='/tmux-new-session'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>tmux new-session</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>