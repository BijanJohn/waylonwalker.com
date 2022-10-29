---
cover: ''
date: 2022-01-23
datetime: 2022-01-23 00:00:00+00:00
description: I often pop into my blog from neovim with the intent to look at just
  a To tie these into a Telescope picker you add the command as the NOTE telescope
  treates ea
edit_link: https://github.com/edit/main/pages/til/markata-telescope-picker.md
jinja: false
long_description: I often pop into my blog from neovim with the intent to look at
  just a To tie these into a Telescope picker you add the command as the NOTE telescope
  treates each word as a string, do not wrap an extra
now: 2022-10-29 15:54:38.066050
path: pages/til/markata-telescope-picker.md
slug: markata-telescope-picker
status: draft
super_description: I often pop into my blog from neovim with the intent to look at
  just a To tie these into a Telescope picker you add the command as the NOTE telescope
  treates each word as a string, do not wrap an extra
tags:
- python
- cli
- vim
templateKey: til
title: Markata Filters as Telescope Pickers in Neovim
today: 2022-10-29
year: 2022
---

I often pop into my blog from neovim with the intent to look at just a
single series of posts, `til`, `gratitude`, or just see todays posts.
[Markata](https://markata.dev/) has a great way of mapping over posts
and returning their path that is designe exactly for this use case.

[Markata listing out posts from the command line](https://images.waylonwalker.com/markta-list-todays-posts.png)

To tie these into a Telescope picker you add the command as the
find_command, and comma separate the words of the command, with no
spaces.  I did also `--sort,date,--reverse` in there so that the newest
posts are closest to the cursor.

``` python
nnoremap geit <cmd>Telescope find_files find_command=markata,list,--map,path,--filter,date==today<cr>
nnoremap geil <cmd>Telescope find_files find_command=markata,list,--map,path,--filter,templateKey=='til',--sort,date,--reverse<cr>
nnoremap geig <cmd>Telescope find_files find_command=markata,list,--map,path,--filter,templateKey=='gratitude',--sort,date,--reverse<cr>
```

> NOTE telescope treates each word as a string, do not wrap an extra
> layer of quotes around your words, it gets messy.

![using this picker in neovim](https://images.waylonwalker.com/markata-list-telescope-picker.png)
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
    
    <a class='prev' href='/markata-todoui-live-replay-4-6-2022'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>LIVE-REPLAY - Python dev | Markata todoui | 4/6/2022</p>
        </div>
    </a>
    
    <a class='next' href='/markata-supports-jinja-plugins-0-5-0-dev2'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Markata Supports Jinja Plugins 0.5.0.dev2</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>