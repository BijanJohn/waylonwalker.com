---
Tags:
- cli
- linux
- tmux
cover: ''
date: 2021-08-05
datetime: 2021-08-05 00:00:00+00:00
description: 'https://youtu.be/DkJ9rb85LC0 Quickly getting between tmux splits is
  critical skill for productivity.  You I have used this fzf one keybinding for quite
  awhile, '
edit_link: https://github.com/edit/main/pages/blog/tmux-fzf-session-jump.md
jinja: false
long_description: 'https://youtu.be/DkJ9rb85LC0 Quickly getting between tmux splits
  is critical skill for productivity.  You I have used this fzf one keybinding for
  quite awhile,  honestly I did not make Like with many of my keybindings I have swapped
  this one out for '
now: 2022-10-29 15:54:38.063409
path: pages/blog/tmux-fzf-session-jump.md
slug: tmux-fzf-session-jump
status: published
super_description: https://youtu.be/DkJ9rb85LC0 Quickly getting between tmux splits
  is critical skill for productivity.  You I have used this fzf one keybinding for
  quite awhile,  honestly I did not make Like with many of my keybindings I have swapped
  this one out for a popup https://waylonwalker.com/tmux-nav-2021/ for more information
  on how I navigate tmux, check out this full post Also check out the full YouTube
tags: []
templateKey: blog-post
title: tmux fzf session jumper
today: 2022-10-29
year: 2021
---

https://youtu.be/DkJ9rb85LC0

Quickly getting between tmux splits is critical skill for productivity.  You
can get by with `next` or `prev` session for awhile, but if you have more than
about three session you need something a bit more targeted.


## Full Screen selector

I have used this fzf one keybinding for quite awhile,  honestly I did not make
it up, and cannot remember where it came from. It will open up a session picker
in a new full screen window.

``` bash
bind C-j new-window -n "session-switcher" "\
    tmux list-sessions -F '#{?session_attached,,#{session_name}}' |\
    sed '/^$/d' |\
    fzf --reverse --header jump-to-session --preview 'tmux capture-pane -pt {}'  |\
    xargs tmux switch-client -t"

```

## Popup selector

Like with many of my keybindings I have swapped this one out for a popup
version.  It just feels so smooth.

``` bash
bind C-j display-popup -E "\
    tmux list-sessions -F '#{?session_attached,,#{session_name}}' |\
    sed '/^$/d' |\
    fzf --reverse --header jump-to-session --preview 'tmux capture-pane -pt {}'  |\
    xargs tmux switch-client -t"
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
    
    <a class='prev' href='/tmux-has-session'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>tmux has-session</p>
        </div>
    </a>
    
    <a class='next' href='/tmux-floating-popups'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>tmux floating popups</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>