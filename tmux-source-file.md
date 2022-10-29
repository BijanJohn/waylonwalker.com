---
Tags:
- cli
- linux
- tmux
cover: ''
date: 2021-08-06
datetime: 2021-08-06 00:00:00+00:00
description: https://youtu.be/dDq0depPrTs So you have been tricking out that  Let
  We can run this command from your shell to re-source your changed  It also works
  from the t
edit_link: https://github.com/edit/main/pages/blog/tmux-source-file.md
jinja: false
long_description: https://youtu.be/dDq0depPrTs So you have been tricking out that  Let
  We can run this command from your shell to re-source your changed  It also works
  from the tmux command line. It This is my preferred way of re-sourcing my  https://waylonwalker.com/
now: 2022-10-29 15:54:38.064128
path: pages/blog/tmux-source-file.md
slug: tmux-source-file
status: published
super_description: https://youtu.be/dDq0depPrTs So you have been tricking out that  Let
  We can run this command from your shell to re-source your changed  It also works
  from the tmux command line. It This is my preferred way of re-sourcing my  https://waylonwalker.com/tmux-nav-2021/
  for more information on how I navigate tmux, check out this full post Also check
  out the full YouTube
tags: []
templateKey: blog-post
title: tmux source-file
today: 2022-10-29
year: 2021
---

https://youtu.be/dDq0depPrTs

So you have been tricking out that `.tmux.conf`, you're looking for a silky
smooth workflow that lets you fly through tmux with super speed, but every time
you tweak out that `.tmux.conf` you have to restart your whole session. Not amymore,

Let's add this to the bottom of our tmux.conf so that you can see everytime it
gets sourced.

``` bash
display-message "hello beautiful"
```

## command

We can run this command from your shell to re-source your changed `.tmux.conf`

``` bash
tmux source-file ~/.tmux.conf
```

It also works from the tmux command line.

``` bash
source-file ~/.tmux.conf
```


## tmux hotkey

It's very common to set this up as a keybinding so that you can do it easily
without needing to memorize the exact command.

``` bash
bind -T prefix r source-file ~/.tmux.conf
bind -n M-r source-file ~/.tmux.conf
```

## from vim

This is my preferred way of re-sourcing my `.tmux.conf`.  It sits quietly in
the background, and I dont need to remember to do anything.  If you are a vim
user you can automate this process by creating a `autocmd bufwritepost`.  This
will shell out the `tmux source-file` everytime you save your `.tmux.conf`.

``` vim
autocmd bufwritepost .tmux.conf execute ':!tmux source-file %'
autocmd bufwritepost .tmux.local.conf execute ':!tmux source-file %'
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
    
    <a class='prev' href='/tmux-splitting-panes'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>tmux splitting panes</p>
        </div>
    </a>
    
    <a class='next' href='/tmux-show-messages'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>tmux show-messages</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>