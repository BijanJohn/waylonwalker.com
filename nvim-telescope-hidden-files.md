---
cover: ''
date: 2021-12-26
datetime: 2021-12-26 00:00:00+00:00
description: Finding hidden files using Telescope as you fuzzy file finder is not
  too I have this keymap set to help me list out all files including hidden see the
edit_link: https://github.com/edit/main/pages/til/nvim-telescope-hidden-files.md
jinja: false
long_description: Finding hidden files using Telescope as you fuzzy file finder is
  not too I have this keymap set to help me list out all files including hidden see
  the
now: 2022-10-29 15:54:38.066492
path: pages/til/nvim-telescope-hidden-files.md
slug: nvim-telescope-hidden-files
status: draft
super_description: Finding hidden files using Telescope as you fuzzy file finder is
  not too I have this keymap set to help me list out all files including hidden see
  the
tags:
- vim
templateKey: til
title: Finding hidden (dotfiles) using Telescope in neovim
today: 2022-10-29
year: 2021
---

Finding hidden files using Telescope as you fuzzy file finder is not too
hard, its a single flag passed in.  Then it will use whichever file
finder it can find ['fd', 'fdfind', 'rg --files', 'find', or 'where'] in
that order.  These tools each have their own way of handling hidden
files, but telescope takes care of that so all you need to do is pass in
`hidden=true`.

I have this keymap set to help me list out all files including hidden
files using the pnumonic go edit hidden.  I use ge for quite a few
different things to take me directly to a specific file or picker.

``` python
nnoremap geh <cmd>Telescope find_files hidden=true<cr>
```


see the
[implementation](https://github.com/nvim-telescope/telescope.nvim/blob/82e3cc322ad87b262aef092cb7475e769740e83a/lua/telescope/builtin/files.lua#L167-L184)
telescope finds your files.
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
    
    <a class='prev' href='/nvr-open-files'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Open Files with Nvim Remote</p>
        </div>
    </a>
    
    <a class='next' href='/nvim-telescope-custom-command'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Opening files in vim from output of command</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>