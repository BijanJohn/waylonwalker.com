---
cover: ''
date: 2021-07-25
datetime: 2021-07-25 00:00:00+00:00
description: 'https://youtu.be/Rn6mOarCQ-Y Zooming into the current split in tmux
  is a valuable tool to give yourself some Default key bindings for zooming the current
  split '
edit_link: https://github.com/edit/main/pages/blog/tmux-zoom.md
jinja: false
long_description: https://youtu.be/Rn6mOarCQ-Y Zooming into the current split in tmux
  is a valuable tool to give yourself some Default key bindings for zooming the current
  split I have rebound this to match the default binding with mod+z rather so that
  I https://waylo
now: 2022-10-29 15:54:38.065220
path: pages/blog/tmux-zoom.md
slug: tmux-zoom
status: published
super_description: https://youtu.be/Rn6mOarCQ-Y Zooming into the current split in
  tmux is a valuable tool to give yourself some Default key bindings for zooming the
  current split I have rebound this to match the default binding with mod+z rather
  so that I https://waylonwalker.com/tmux-nav-2021/ for more information on how I
  navigate tmux, check out this full post
tags:
- cli
- linux
- tmux
templateKey: blog-post
title: tmux zoom
today: 2022-10-29
year: 2021
---

https://youtu.be/Rn6mOarCQ-Y

Zooming into the current split in tmux is a valuable tool to give yourself some
screen real estate.  These days I am almost always presenting, streaming, or
pairing up with a co-worker over a video call.  Since I am always sharing my
screen I am generally zoomed in to a level that is just a bit uncomfortable, so
anytime I make a split it is really uncomfortable, being able to zoom into the
split I am focused on is a big help, and also help anyone watching follow where
I am currently working.


Default key bindings for zooming the current split

``` bash
bind-key          z resize-pane -Z
```


I have rebound this to match the default binding with mod+z rather so that I
get that single keystroke experience.

``` bash
bind -n M-z resize-pane -Z
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
    
    <a class='prev' href='/trim-branches'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Trim unused git branches</p>
        </div>
    </a>
    
    <a class='next' href='/tmux-targeted-session'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>tmux targeted session</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>