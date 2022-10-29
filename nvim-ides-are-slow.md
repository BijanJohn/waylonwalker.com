---
cover: ''
date: 2021-10-29
datetime: 2021-10-29 00:00:00+00:00
description: "https://youtu.be/E18m4KkJUnI Using Vim as a Team Lead I \U0001F49C Tmux
  Why I stopped using @code Get there fast How I vim Use a graphical IDE if it works
  for you. vim i"
edit_link: https://github.com/edit/main/pages/blog/nvim-ides-are-slow.md
jinja: false
long_description: "https://youtu.be/E18m4KkJUnI Using Vim as a Team Lead I \U0001F49C
  Tmux Why I stopped using @code Get there fast How I vim Use a graphical IDE if it
  works for you. vim is so well integrated into the terminal, take advantage As a
  team lead I bounce betweeen a "
now: 2022-10-29 15:54:38.064689
path: pages/blog/nvim-ides-are-slow.md
slug: nvim-ides-are-slow
status: published
super_description: "https://youtu.be/E18m4KkJUnI Using Vim as a Team Lead I \U0001F49C
  Tmux Why I stopped using @code Get there fast How I vim Use a graphical IDE if it
  works for you. vim is so well integrated into the terminal, take advantage As a
  team lead I bounce betweeen a dozen projects a per day https://pbs.twimg.com/media/FAEmRjYUcAUk2eR?format=jpg
  Running vim inside tmux lets me move swiftly between the exact project I need. https://twitter.com/
  direct link to specific projects fuzzy into all projects fuzzy into op"
tags:
- kedro
templateKey: blog-post
title: nvim conf 2021 | IDE's are slow | Waylon Walker
today: 2022-10-29
year: 2021
---

https://youtu.be/E18m4KkJUnI

[//]: <> (## images)

[//]: <> (too many codes)
[//]: <> ( https://pbs.twimg.com/media/FAEmRjYUcAUk2eR?format=jpg&name=large )
[//]: <> ( https://twitter.com/_WaylonWalker/status/1438849269407047686/photo/1 )
[//]: <> ( https://twitter.com/_WaylonWalker/status/1438849269407047686/photo/1 )

---

## Slides 👇

## welcome

[//]: <> (Rather than saying vim is fast lets fix some things live.  While we are trying)
[//]: <> (to present on how fast vim is, popups will iterrupt with critical production)
[//]: <> (failures that need fixed straight away.)

[//]: <> (## topics)
[//]: <> (* lsp)
[//]: <> (* make vim yours)
[//]: <> (* I use tmux)
[//]: <> (* quickfix)


## Other possible titles

* Using Vim as a Team Lead
* I 💜 Tmux
* Why I stopped using @code
* Get there fast
* How I vim


## It's ok

Use a graphical IDE if it works for you.

## Trick it out

vim is so well integrated into the terminal, take advantage

## It wasn't working for me anymore

[//]: <> (seriously,)

## dozens of instances

As a team lead I bounce betweeen a dozen projects a per day

https://pbs.twimg.com/media/FAEmRjYUcAUk2eR?format=jpg&name=large 

[//]: <> (Trying to run more than one instance of an ide is hard, especially when)
[//]: <> (projects are so similar and all start looking the same.)

## Move With Intent

Running vim inside tmux lets me move swiftly between the exact project I need.

https://twitter.com/_WaylonWalker/status/1438849269407047686/photo/1
[//]: <> (__)

## Hub and Spoke

* direct link to specific projects
* fuzzy into all projects
* fuzzy into open projects


https://waylonwalker.com/tmux-nav-2021/#hub-and-spoke

[//]: <> (I'm sure there are other ways do do this, I bet you can get a vim plugin to do this)

## Other Things That Make this Possible

* tmux
* direnv

> vim adjacent things

[//]: <> (## Check messages)


[//]: <> (a short interruption where I am called back to work where I show flying swiftly)
[//]: <> (between projects with the perfect intent.)

## yes, vim is ugly, make it yours

@rook
``` vim
command! Q :q
```

@_waylonwalker
``` vim
nnoremap <leader>6 <c-^>
```


[//]: <> (__)

## lsp


``` vim
lua vim.lsp.buf.definition()
```

## treesitter


``` vim
Plug 'nvim-treesitter/nvim-treesitter-textobjects'
```

## telescope

fuzzy matching like a boss

fzf is ok too

## Check Messages

[//]: <> (Another interruption comes in, this time the change uses the lsp and some custom bindings)
[//]: <> (Data Pipeline is down.)
[//]: <> (* Use the lsp go to definition.)
[//]: <> (* Open data in visidata)
[//]: <> (* use jumplist to get back)
[//]: <> (* make the fix)
[//]: <> (* use fugitive to commit)
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
    
    <a class='prev' href='/nvim-navic'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>nvim navic</p>
        </div>
    </a>
    
    <a class='next' href='/newsboat'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Newsboat</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>