---
cover: ''
date: 2021-07-22
datetime: 2021-07-22 00:00:00+00:00
description: https://youtu.be/06z5qf81ofo Rotate window is the main way that I navigated
  tmux before I learned Default keybindings My keybindings look just a bit different
  t
edit_link: https://github.com/edit/main/pages/blog/tmux-rotate-window.md
jinja: false
long_description: https://youtu.be/06z5qf81ofo Rotate window is the main way that
  I navigated tmux before I learned Default keybindings My keybindings look just a
  bit different than the default ones, I do not like https://waylonwalker.com/tmux-nav-2021/
  for more infor
now: 2022-10-29 15:54:38.064028
path: pages/blog/tmux-rotate-window.md
slug: tmux-rotate-window
status: published
super_description: https://youtu.be/06z5qf81ofo Rotate window is the main way that
  I navigated tmux before I learned Default keybindings My keybindings look just a
  bit different than the default ones, I do not like https://waylonwalker.com/tmux-nav-2021/
  for more information on how I navigate tmux, check out this full post
tags:
- cli
- linux
- tmux
templateKey: blog-post
title: tmux rotate-window
today: 2022-10-29
year: 2021
---

https://youtu.be/06z5qf81ofo

Rotate window is the main way that I navigated tmux before I learned
`select-pane`.  It allows you to change your focused pane, or rotate the
position of the panes easily.


Default keybindings

``` bash
bind-key        C-o rotate-window
bind-key          o select-pane -t :.+
```

My keybindings look just a bit different than the default ones, I do not like
needing to hit prefix for every command, especially for repeated commands.  I
set a similar keybinding to the default one that uses mod instead of prefix.

``` bash
bind -n M-o select-pane -t :.+
bind -n M-O rotate-window
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
    
    <a class='prev' href='/tmux-select-layout'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>tmux select-layout</p>
        </div>
    </a>
    
    <a class='next' href='/tmux-resize-panes'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>tmux resize-panes</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>