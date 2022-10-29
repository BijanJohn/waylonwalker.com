---
cover: ''
date: 2021-07-27
datetime: 2021-07-27 00:00:00+00:00
description: https://youtu.be/Vm5rRtcVXLw Join-pane allows you to join panes that
  you have broken away from your window, Before you can join a pane you must first
  have a pan
edit_link: https://github.com/edit/main/pages/blog/tmux-join-pane.md
jinja: false
long_description: https://youtu.be/Vm5rRtcVXLw Join-pane allows you to join panes
  that you have broken away from your window, Before you can join a pane you must
  first have a pane marked to join.  Once you My keybindings, you must add this to
  your  https://waylonwalke
now: 2022-10-29 15:54:38.065416
path: pages/blog/tmux-join-pane.md
slug: tmux-join-pane
status: published
super_description: https://youtu.be/Vm5rRtcVXLw Join-pane allows you to join panes
  that you have broken away from your window, Before you can join a pane you must
  first have a pane marked to join.  Once you My keybindings, you must add this to
  your  https://waylonwalker.com/tmux-nav-2021/ for more information on how I navigate
  tmux, check out this full post Also check out the full YouTube
tags:
- cli
- linux
- tmux
templateKey: blog-post
title: tmux join-pane
today: 2022-10-29
year: 2021
---

https://youtu.be/Vm5rRtcVXLw

Join-pane allows you to join panes that you have broken away from your window,
or created in a different window to the window you want it in.  As far as I
know there is not a default keybinding for it.

Before you can join a pane you must first have a pane marked to join.  Once you
mark a pane, go back to the window you want to join it to and join-pane.

My keybindings, you must add this to your `~/.tmux.conf` file to use them.

``` python
# Mark and swap panes
#――――――――――――――――――――――――――――――――――――――――――――
bind -n M-m select-pane -m # mark
bind -n M-M select-pane -M # unmark

bind -n M-< join-pane
```


<div class="onelinelink-wrapper">
    <a class="onelinelink" href="https://waylonwalker.com/tmux-nav-2021/">
        <img style="float: right;" align='right' src="https://covers.waylonwalker.com/tmux-nav-2021.jpg" alt="article cover for How I navigate tmux in 2021"/>
        <p><strong>How I navigate tmux in 2021</strong></p>
    </a>
</div>


> for more information on how I navigate tmux, check out this full post

Also check out the full YouTube
[tmux-playlist](https://www.youtube.com/playlist?list=PLTRNG6WIHETB4reAxbWza3CZeP9KL6Bkr)
to see all of the videos in this series.
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
    
    <a class='prev' href='/tmux-killing-tmux'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>killing tmux</p>
        </div>
    </a>
    
    <a class='next' href='/tmux-has-session'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>tmux has-session</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>