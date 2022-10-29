---
cover: ''
date: 2021-07-21
datetime: 2021-07-21 00:00:00+00:00
description: https://youtu.be/F0mHnwTrNNc When you get many splits going in tmux sometimes
  its time for a new layout. https://waylonwalker.com/tmux-nav-2021/ for more inform
edit_link: https://github.com/edit/main/pages/blog/tmux-select-layout.md
jinja: false
long_description: https://youtu.be/F0mHnwTrNNc When you get many splits going in tmux
  sometimes its time for a new layout. https://waylonwalker.com/tmux-nav-2021/ for
  more information on how I navigate tmux, check out this full post
now: 2022-10-29 15:54:38.064765
path: pages/blog/tmux-select-layout.md
slug: tmux-select-layout
status: published
super_description: https://youtu.be/F0mHnwTrNNc When you get many splits going in
  tmux sometimes its time for a new layout. https://waylonwalker.com/tmux-nav-2021/
  for more information on how I navigate tmux, check out this full post
tags:
- cli
- linux
- tmux
templateKey: blog-post
title: tmux select-layout
today: 2022-10-29
year: 2021
---

https://youtu.be/F0mHnwTrNNc

When you get many splits going in tmux sometimes its time for a new layout.
There are four layout strategies that I use, main-vertical, main-horizontal,
even-vertical, even-horizontal. Almost always I am useing the main ones with
mod plus a or mod plus shift a keybindings.

``` bash
# Select Layouts
#―――――――――――――――――
bind -n M-a select-layout main-vertical
bind -n M-A select-layout main-horizontal 
bind -n M-E select-layout even-vertical
bind -n M-V select-layout even-horizontal
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
    
    <a class='prev' href='/tmux-select-pane'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>tmux slect-pane</p>
        </div>
    </a>
    
    <a class='next' href='/tmux-rotate-window'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>tmux rotate-window</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>