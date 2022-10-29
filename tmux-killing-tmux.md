---
Tags:
- cli
- linux
- tmux
cover: ''
date: 2021-08-11
datetime: 2021-08-11 00:00:00+00:00
description: https://youtu.be/QWPyYx54JbE Now it One viable option is to nuke the
  whole dang thing.  I actually do this more save and commit your work diligently
  before  A m
edit_link: https://github.com/edit/main/pages/blog/tmux-killing-tmux.md
jinja: false
long_description: 'https://youtu.be/QWPyYx54JbE Now it One viable option is to nuke
  the whole dang thing.  I actually do this more save and commit your work diligently
  before  A more reasonable option might be to kill a single session. Killing sessions
  one by one from '
now: 2022-10-29 15:54:38.063376
path: pages/blog/tmux-killing-tmux.md
slug: tmux-killing-tmux
status: published
super_description: https://youtu.be/QWPyYx54JbE Now it One viable option is to nuke
  the whole dang thing.  I actually do this more save and commit your work diligently
  before  A more reasonable option might be to kill a single session. Killing sessions
  one by one from the command line can be a bit tedious, and https://waylonwalker.com/tmux-choose-tree/
  check out this post for a bit more information on choose-tree Here is my preferred
  way, using a fuzzy matcher.  I recently improved this one note this is setup to
  m
tags: []
templateKey: blog-post
title: killing tmux
today: 2022-10-29
year: 2021
---

https://youtu.be/QWPyYx54JbE

Now it's time to switch gears, we are onto a different part of our day and
there are just too many sessions running and we need to clean up shop.

## kill-server

One viable option is to nuke the whole dang thing.  I actually do this more
than you might think.

``` bash
tmux kill-server
```

> save and commit your work diligently before `kill-server`

## kill-session

A more reasonable option might be to kill a single session.

``` bash
# kills the current session
tmux kill-session

# kills the session named scratch
tmux kill-session -t scratch
```

## choose-tree

Killing sessions one by one from the command line can be a bit tedious, and
involve more keystrokes than necessary.  Another option built right into tmux
is `choose-tree`.  By default `choose-tree` is bound to `prefix+s`, that's
pressing control+b then s.  Once you are in `choose-tree`, you can navigate
around with your configured navigation scheme, press `x` to kill a session, or
pane or window then `y` to confirm.  You can also batch delete by tagging items
with t, and killing them all at once with `X`.


<div class="onelinelink-wrapper">
    <a class="onelinelink" href="https://waylonwalker.com/tmux-choose-tree/">
        <img style="float: right;" align='right' src="https://covers.waylonwalker.com/tmux-choose-tree.jpg" alt="article cover for tmux choose-tree"/>
        <p><strong>tmux choose-tree</strong></p>
    </a>
</div>


> check out this post for a bit more information on choose-tree

## fuzzy matcher

Here is my preferred way, using a fuzzy matcher.  I recently improved this one
by making it a popup and cleaning it up based on a repsonse,
[tmux-output-formatting](https://qmacro.org/autodidactics/2021/08/06/tmux-output-formatting/)
by [DJ Adams](https://twitter.com/qmacro).  I press prefix+k to bring up a kill-session menu.

``` bash
bind k display-popup -E "\
    tmux list-sessions -F '#{?session_attached,,#{session_name}}' |\
    fzf --reverse -m --header=kill-session |\
    xargs -I {} tmux kill-session -t {}"
```

> note this is setup to multiple sessions all at once.


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
    
    <a class='prev' href='/tmux-last-session'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>tmux last session</p>
        </div>
    </a>
    
    <a class='next' href='/tmux-join-pane'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>tmux join-pane</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>