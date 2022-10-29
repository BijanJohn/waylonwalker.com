---
Tags:
- cli
- linux
- tmux
cover: ''
date: 2021-08-08
datetime: 2021-08-08 00:00:00+00:00
description: 'https://youtu.be/Y1MYmL8ZolE Tmux list keys can be a useful tool to
  help remind you of what kebindings you You can call list-keys from the command line
  but the '
edit_link: https://github.com/edit/main/pages/blog/tmux-list-keys.md
jinja: false
long_description: https://youtu.be/Y1MYmL8ZolE Tmux list keys can be a useful tool
  to help remind you of what kebindings you You can call list-keys from the command
  line but the interface is not very Running  By default tmux comes with  You can
  see the additional flag
now: 2022-10-29 15:54:38.063587
path: pages/blog/tmux-list-keys.md
slug: tmux-list-keys
status: published
super_description: https://youtu.be/Y1MYmL8ZolE Tmux list keys can be a useful tool
  to help remind you of what kebindings you You can call list-keys from the command
  line but the interface is not very Running  By default tmux comes with  You can
  see the additional flags provided by tmux in the man page for https://waylonwalker.com/tmux-nav-2021/
  for more information on how I navigate tmux, check out this full post Also check
  out the full YouTube
tags: []
templateKey: blog-post
title: tmux list-keys
today: 2022-10-29
year: 2021
---

https://youtu.be/Y1MYmL8ZolE

Tmux list keys can be a useful tool to help remind you of what kebindings you
have setup.  You can search for them and scroll just like in tmux copy-mode.

## command line

You can call list-keys from the command line but the interface is not very
usable by itself.  It might be nice to mix with grep or a pager in some
circumstances.

``` bash
tmux list-keys
```

## tmux command line

Running `list-keys` from within the tmux command line puts you into a much more
pleasant `copy-mode`.

```
list-keys
```

## default keybinging

By default tmux comes with `list-keys` bound to prefix+?.

``` bash
bind-key          ? list-keys
```

## list-keys man page

You can see the additional flags provided by tmux in the man page for
`list-keys`.

``` bash
list-keys [-1aN] [-P prefix-string -T key-table] [key]
            (alias: lsk)

        List key bindings.  There are two forms: the default lists keys as
        bind-key commands; -N lists only keys with attached notes and shows
        only the ke y and note for each key.

        With the default form, all key tables are listed by default.  -T lists only keys in key-table.

        With the -N form, only keys in the root and prefix key tables are
        listed by default; -T also lists only keys in key-table.  -P specifies
        a prefix to print before each key and -1 lists only the first matching
        key.  -a lists the command for keys that do not have a note rather than
        skipping them.

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
    
    <a class='prev' href='/tmux-ls'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>tmux ls</p>
        </div>
    </a>
    
    <a class='next' href='/tmux-last-session'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>tmux last session</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>