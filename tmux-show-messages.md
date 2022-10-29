---
Tags:
- cli
- linux
- tmux
cover: ''
date: 2021-08-14
datetime: 2021-08-14 00:00:00+00:00
description: https://youtu.be/LLk94fKpGg4 As we push the limits of tmux further and
  further you are bound to end up in a show-messages In case you wnat more information
  abou
edit_link: https://github.com/edit/main/pages/blog/tmux-show-messages.md
jinja: false
long_description: https://youtu.be/LLk94fKpGg4 As we push the limits of tmux further
  and further you are bound to end up in a show-messages In case you wnat more information
  about show-messages, here is the man page. https://waylonwalker.com/tmux-nav-2021/
  for more in
now: 2022-10-29 15:54:38.063919
path: pages/blog/tmux-show-messages.md
slug: tmux-show-messages
status: published
super_description: https://youtu.be/LLk94fKpGg4 As we push the limits of tmux further
  and further you are bound to end up in a show-messages In case you wnat more information
  about show-messages, here is the man page. https://waylonwalker.com/tmux-nav-2021/
  for more information on how I navigate tmux, check out this full post Also check
  out the full YouTube
tags: []
templateKey: blog-post
title: tmux show-messages
today: 2022-10-29
year: 2021
---

https://youtu.be/LLk94fKpGg4

As we push the limits of tmux further and further you are bound to end up in a
situation where you are mashing down a hotkey and it's just not doing what you
want it to do, and you have no idea why.

`show-messages` is a tmux command that can be used to show what tmux is
actually doing behind the scenes.  This might highlight any hot key conflicts
you might have in your `~/.tmux.conf`.

## man page for show-messages

In case you wnat more information about show-messages, here is the man page.

``` bash
show-messages [-JT] [-t target-client]
            (alias: showmsgs)

        Show server messages or information.  Messages are stored, up to a
        maximum of the limit set by the message-limit server option.  -J and -T
        show debugging information about jobs and terminals.
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
    
    <a class='prev' href='/tmux-source-file'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>tmux source-file</p>
        </div>
    </a>
    
    <a class='next' href='/tmux-select-pane'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>tmux slect-pane</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>