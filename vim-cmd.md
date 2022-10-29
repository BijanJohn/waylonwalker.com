---
cover: ''
date: 2022-02-14
datetime: 2022-02-14 00:00:00+00:00
description: 'Anyone just starting out their vim customization journey is bound to
  run into this error. I If you run  You still need to map your remaps with a : if
  you do not'
edit_link: https://github.com/edit/main/pages/til/vim-cmd.md
jinja: false
long_description: 'Anyone just starting out their vim customization journey is bound
  to run into this error. I If you run  You still need to map your remaps with a :
  if you do not close it with a If you can close the '
now: 2022-10-29 15:54:38.066591
path: pages/til/vim-cmd.md
slug: vim-cmd
status: draft
super_description: 'Anyone just starting out their vim customization journey is bound
  to run into this error. I If you run  You still need to map your remaps with a :
  if you do not close it with a If you can close the '
tags:
- vim
- linux
- cli
templateKey: til
title: 'Vim remaps use cmd in place of :'
today: 2022-10-29
year: 2022
---

Anyone just starting out their vim customization journey is bound to run into this error.

``` vim
E5520: <Cmd> mapping must end with <CR>
```

## I did not get it

I'll admit, in hindsight it's very clear what this is trying to tell me, but
for whatever reason I still did not understand it and I just used a :
everywhere.

## From the docs


If you run `:h <cmd>` you will see a lot of reasons why you should do it, from
performance, to hygene, to ergonomics.  You will also see another clear
statement about how to use `<cmd>`.

``` vim
                                                          E5520
  <Cmd> commands must terminate, that is, they must be followed by <CR> in the
  {rhs} of the mapping definition.  Command-line mode is never entered.
```

## When to map with a :

You still need to map your remaps with a : if you do not close it with a
`<cr>`.  This might be something like prefilling a command with a search term.

``` vim
nnoremap <leader><leader>f :s/search/
```

## Otherwise use <cmd>

If you can close the `<cmd>` with a `<cr>` the command do so.  Your map will
automatically be silent, more ergonomic, performant, and all that good stuff.

``` vim
nnoremap <leader><leader>f <cmd>s/search/Search/g<cr>
```
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
    
    <a class='prev' href='/vim-diffsplit'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>How to compare two files in vim</p>
        </div>
    </a>
    
    <a class='next' href='/vim-augroup'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>You must use augroup with autocmd in vim | Here's how</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>