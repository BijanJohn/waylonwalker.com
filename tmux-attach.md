---
cover: ''
date: 2021-07-31
datetime: 2021-07-31 00:00:00+00:00
description: 'https://youtu.be/JQ0yDCVu44E attach is one of the most useful features
  of tmux.  If you have no interest in this command will simply attach back to tmux
  if you '
edit_link: https://github.com/edit/main/pages/blog/tmux-attach.md
jinja: false
long_description: https://youtu.be/JQ0yDCVu44E attach is one of the most useful features
  of tmux.  If you have no interest in this command will simply attach back to tmux
  if you are ever disconnected If you ever run long running tasks on a remote machine
  by sshing int
now: 2022-10-29 15:54:38.063560
path: pages/blog/tmux-attach.md
slug: tmux-attach
status: published
super_description: https://youtu.be/JQ0yDCVu44E attach is one of the most useful features
  of tmux.  If you have no interest in this command will simply attach back to tmux
  if you are ever disconnected If you ever run long running tasks on a remote machine
  by sshing into this you If you have multiple sessions running you can select the
  session that you want https://waylonwalker.com/tmux-nav-2021/ for more information
  on how I navigate tmux, check out this full post Also check out the full YouTube
tags:
- cli
- linux
- tmux
templateKey: blog-post
title: tmux attach
today: 2022-10-29
year: 2021
---

https://youtu.be/JQ0yDCVu44E

attach is one of the most useful features of tmux.  If you have no interest in
tmux for pane and window management, you should use tmux for this.  It can be a
life saver if you ever get disconnected from the host machine or accidently
close your terminal you can connect right back into the session you were just
in using attach.

## attach

``` bash
tmux attach
```

> this command will simply attach back to tmux if you are ever disconnected

If you ever run long running tasks on a remote machine by sshing into this you
should be doing it inside tmux, or something like tmux so that you do not loose
your work.

## attach to a specific session

If you have multiple sessions running you can select the session that you want
to attach to by passing `-t <name-of-session>`.

``` bash
tmux attach -t scratch
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
    
    <a class='prev' href='/tmux-choose-tree'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>tmux choose-tree</p>
        </div>
    </a>
    
    <a class='next' href='/testproject-io-py-actions'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Integration testing with Python, TestProject.io, and GitHub Actions</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>