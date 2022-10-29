---
Tags:
- cli
- linux
- tmux
cover: ''
date: 2021-08-02
datetime: 2021-08-02 00:00:00+00:00
description: https://youtu.be/5KE7Il7SOEk This is something that I made up but use
  every single day, this is what keeps https://waylonwalker.com/tmux-new-session/
  This one i
edit_link: https://github.com/edit/main/pages/blog/tmux-targeted-session.md
jinja: false
long_description: https://youtu.be/5KE7Il7SOEk This is something that I made up but
  use every single day, this is what keeps https://waylonwalker.com/tmux-new-session/
  This one is building off of yeserday https://waylonwalker.com/tmux-nav-2021/ for
  more information on
now: 2022-10-29 15:54:38.064932
path: pages/blog/tmux-targeted-session.md
slug: tmux-targeted-session
status: published
super_description: https://youtu.be/5KE7Il7SOEk This is something that I made up but
  use every single day, this is what keeps https://waylonwalker.com/tmux-new-session/
  This one is building off of yeserday https://waylonwalker.com/tmux-nav-2021/ for
  more information on how I navigate tmux, check out this full post Also check out
  the full YouTube
tags: []
templateKey: blog-post
title: tmux targeted session
today: 2022-10-29
year: 2021
---

https://youtu.be/5KE7Il7SOEk

This is something that I made up but use every single day, this is what keeps
much of what is on my blog or my teams private work wiki going.  I have a few
very important directories that I have assigned directly to a hotkey for fast
session switching.

``` bash
bind -n M-i new-session -A -s waylonwalker_com "cd ~/git/waylonwalker.com/ && nvim"
bind i popup -E -h 95% -w 95% -x 100% "tmux new-session -A -s waylonwalker_com 'cd ~/git/waylonwalker.com/ && nvim'"
bind -n M-I popup -E "tmux new-session -A -s waylonwalker_com 'cd ~/git/waylonwalker.com/ && nvim'"
```


<div class="onelinelink-wrapper">
    <a class="onelinelink" href="https://waylonwalker.com/tmux-new-session/">
        <img style="float: right;" align='right' src="https://covers.waylonwalker.com/tmux-new-session.jpg" alt="article cover for tmux new-session"/>
        <p><strong>tmux new-session</strong></p>
    </a>
</div>


> This one is building off of yeserday's new-session post, make sure you check that one out as well.


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
    
    <a class='prev' href='/tmux-zoom'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>tmux zoom</p>
        </div>
    </a>
    
    <a class='next' href='/tmux-ta'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>tmux ta</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>