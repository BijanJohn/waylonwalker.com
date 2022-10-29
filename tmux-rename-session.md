---
Tags:
- cli
- linux
- tmux
cover: ''
date: 2021-08-03
datetime: 2021-08-03 00:00:00+00:00
description: https://youtu.be/WRLRiQDjVIA So you have been working on your tmux workflow,
  you Let There is a default keybinding that you can use  I https://waylonwalker.com/
edit_link: https://github.com/edit/main/pages/blog/tmux-rename-session.md
jinja: false
long_description: 'https://youtu.be/WRLRiQDjVIA So you have been working on your tmux
  workflow, you Let There is a default keybinding that you can use  I https://waylonwalker.com/tmux-nav-2021/
  for more information on how I navigate tmux, check out this full post Also '
now: 2022-10-29 15:54:38.063474
path: pages/blog/tmux-rename-session.md
slug: tmux-rename-session
status: published
super_description: https://youtu.be/WRLRiQDjVIA So you have been working on your tmux
  workflow, you Let There is a default keybinding that you can use  I https://waylonwalker.com/tmux-nav-2021/
  for more information on how I navigate tmux, check out this full post Also check
  out the full YouTube
tags: []
templateKey: blog-post
title: tmux rename session
today: 2022-10-29
year: 2021
---

https://youtu.be/WRLRiQDjVIA

So you have been working on your tmux workflow, you've dropped a too many
window workflow for scoping work that belongs together into separate sessions,
but you cannot remember what session your work is in. If your diligent you have
named your window when you created it, but sometimes its intent has changed or
your were just plain too lazy at the time for the extra characters needed to
name it.  Don't worry we can still give that session a descriptive name.

Let's rename some sessions in the terminal.

``` bash
# rename the current session to me
tmux rename-session me

# rename the me session to scratch
tmux rename-session -t me scratch
```

There is a default keybinding that you can use `<prefix>+$` to rename the
current session in the tmux command line.

``` bash
bind-key          $ command-prompt -I #S "rename-session '%%'"
```

I've also had this keybinding kicking around for years, but I rarely use it
anymore. You will see why in an upcoming video.

``` python
bind -n M-W command-prompt "rename-session '%%'"
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
    
    <a class='prev' href='/tmux-resize-panes'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>tmux resize-panes</p>
        </div>
    </a>
    
    <a class='next' href='/tmux-prefix'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>tmux prefix</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>