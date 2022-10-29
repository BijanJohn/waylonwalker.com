---
cover: ''
date: 2021-07-16
datetime: 2021-07-16 00:00:00+00:00
description: https://youtu.be/RB87EEnnMnU An ultimate productivity key-binding in
  tmux is one to switch to the last session.  I use this to quickly get between sessions
  real
edit_link: https://github.com/edit/main/pages/blog/tmux-last-session.md
jinja: false
long_description: https://youtu.be/RB87EEnnMnU An ultimate productivity key-binding
  in tmux is one to switch to the last session.  I use this to quickly get between
  sessions really quick.  Often I am working and need to lookup a quick note, or copy
  something into my n
now: 2022-10-29 15:54:38.065001
path: pages/blog/tmux-last-session.md
slug: tmux-last-session
status: published
super_description: https://youtu.be/RB87EEnnMnU An ultimate productivity key-binding
  in tmux is one to switch to the last session.  I use this to quickly get between
  sessions really quick.  Often I am working and need to lookup a quick note, or copy
  something into my notes, then get back to where I was quickly. I think of this hub
  and spoke model, and use  https://waylonwalker.com/tmux-nav-2021/ for more information
  on how I navigate tmux, check out this full post
tags:
- cli
- linux
- tmux
templateKey: blog-post
title: tmux last session
today: 2022-10-29
year: 2021
---

https://youtu.be/RB87EEnnMnU

An ultimate productivity key-binding in tmux is one to switch to the last session.  I use this to quickly get between sessions really quick.  Often I am working and need to lookup a quick note, or copy something into my notes, then get back to where I was quickly.

``` bash
bind -n M-b switch-client -l
```

I think of this hub and spoke model, and use `last-session` to quickly drive it.

![hub and spoke](https://images.waylonwalker.com/tmux-nav-hub-spoke.png)


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
    
    <a class='prev' href='/tmux-list-keys'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>tmux list-keys</p>
        </div>
    </a>
    
    <a class='next' href='/tmux-killing-tmux'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>killing tmux</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>