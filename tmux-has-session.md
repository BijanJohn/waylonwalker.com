---
Tags:
- cli
- linux
- tmux
cover: ''
date: 2021-08-09
datetime: 2021-08-09 00:00:00+00:00
description: 'https://youtu.be/XucVVgGmesM I see you there, trying to script out your
  tmux layouts. Tryig to get each The  The command is pretty straight forward, you
  simply '
edit_link: https://github.com/edit/main/pages/blog/tmux-has-session.md
jinja: false
long_description: 'https://youtu.be/XucVVgGmesM I see you there, trying to script
  out your tmux layouts. Tryig to get each The  The command is pretty straight forward,
  you simply ask tmux if the session name https://waylonwalker.com/tmux-nav-2021/
  for more information '
now: 2022-10-29 15:54:38.064121
path: pages/blog/tmux-has-session.md
slug: tmux-has-session
status: published
super_description: https://youtu.be/XucVVgGmesM I see you there, trying to script
  out your tmux layouts. Tryig to get each The  The command is pretty straight forward,
  you simply ask tmux if the session name https://waylonwalker.com/tmux-nav-2021/
  for more information on how I navigate tmux, check out this full post Also check
  out the full YouTube
tags: []
templateKey: blog-post
title: tmux has-session
today: 2022-10-29
year: 2021
---

https://youtu.be/XucVVgGmesM

I see you there, trying to script out your tmux layouts. Tryig to get each
project setup just perfect with a script, but you keep stumbling over yourself
with `duplicate session` error messages

The `has-session` tmux command is a handy tool to prevent this `duplicate
session` error message when scripting your tmux layouts.

## command line

The command is pretty straight forward, you simply ask tmux if the session name
you are looking for exists.

``` bash
tmux has-session -t "waylonwalker_com"
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
    
    <a class='prev' href='/tmux-join-pane'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>tmux join-pane</p>
        </div>
    </a>
    
    <a class='next' href='/tmux-fzf-session-jump'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>tmux fzf session jumper</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>