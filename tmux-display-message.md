---
Tags:
- cli
- linux
- tmux
cover: ''
date: 2021-08-12
datetime: 2021-08-12 00:00:00+00:00
description: https://youtu.be/utfLA6L8o5s You Here is a snippet of  With  Without
  setting the target-pane  https://waylonwalker.com/tmux-nav-2021/ for more information
  on ho
edit_link: https://github.com/edit/main/pages/blog/tmux-display-message.md
jinja: false
long_description: https://youtu.be/utfLA6L8o5s You Here is a snippet of  With  Without
  setting the target-pane  https://waylonwalker.com/tmux-nav-2021/ for more information
  on how I navigate tmux, check out this full post Also check out the full YouTube
now: 2022-10-29 15:54:38.065294
path: pages/blog/tmux-display-message.md
slug: tmux-display-message
status: published
super_description: https://youtu.be/utfLA6L8o5s You Here is a snippet of  With  Without
  setting the target-pane  https://waylonwalker.com/tmux-nav-2021/ for more information
  on how I navigate tmux, check out this full post Also check out the full YouTube
tags: []
templateKey: blog-post
title: tmux display-message
today: 2022-10-29
year: 2021
---

https://youtu.be/utfLA6L8o5s

You've got some long running tasks, and you're trying to stay productive and
knock tasks off that board, but you keep finding that your processes finish and
you stay on other tasks for longer than you should.  You were in the flow and
just did not check back in on it.  With `display-message` you can send yourself
a notification when that long running task is complete.

## from the man page

Here is a snippet of `display-message` from the tmux man page.  I rarely need
to do anything other than just display message, but there are other flags for
it.

``` bash
display-message [-aINpv] [-c target-client] [-d delay] [-t target-pane] [message]
            (alias: display)

        Display a message.  If -p is given, the output is printed to stdout,
        otherwise it is displayed in the target-client status line for up to

        delay milliseconds.  If delay is not given, the message-time option is
        used; a delay of zero waits for a key press.  ‘N’ ignores key presses
        and closes only after the delay expires.  The format of message is
        described in the FORMATS section;

        information is taken from target-pane if -t is given, otherwise the
        active pane.

        -v prints verbose logging as the format is parsed and -a lists the
        format variables and their values.

        -I forwards any input read from stdin to the empty pane given by
        target-pane.
```

## notifier

With `display-message` we can do things like setup notifications that will work
cross platform.

``` bash
cmatrix -t 5 && tmux display-message done
```

Without setting the target-pane `display-message` defaults to the active pane.
This is a very handy feature that allows us to switch windows, or sessions and
still recieve the message.



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
    
    <a class='prev' href='/tmux-floating-popups'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>tmux floating popups</p>
        </div>
    </a>
    
    <a class='next' href='/tmux-copy-mode'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>tmux copy-mode</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>