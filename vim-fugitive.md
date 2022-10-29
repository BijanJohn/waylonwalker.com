---
cover: ''
date: 2021-05-08
datetime: 2021-05-08 00:00:00+00:00
description: :on This one has nothing to do with fugitive, but is a native vim feature
  that C-i jump The jumplist is sorted Oldest to newest When navigating the jumplist
  wit
edit_link: https://github.com/edit/main/pages/blog/vim-fugitive.md
jinja: false
long_description: :on This one has nothing to do with fugitive, but is a native vim
  feature that C-i jump The jumplist is sorted Oldest to newest When navigating the
  jumplist with  :Telescope jumplist adds to the jumplist Unlike  In the file you
  want to stage hunks of
now: 2022-10-29 15:54:38.063964
path: pages/blog/vim-fugitive.md
slug: vim-fugitive
status: draft
super_description: ':on This one has nothing to do with fugitive, but is a native
  vim feature that C-i jump The jumplist is sorted Oldest to newest When navigating
  the jumplist with  :Telescope jumplist adds to the jumplist Unlike  In the file
  you want to stage hunks of run '
tags:
- kedro
- python
templateKey: blog-post
title: Vim Fugitive
today: 2022-10-29
year: 2021
---

``` vim
:G
:G status
:G commit
:G add %
:Gdiff
:G push
:Glog
```


## Add current file and commit with diff in a split

``` vim
function! s:GitAdd()
    exe "G add %"
    exe "G diff --staged"
    exe "only"
    exe "G commit"
endfunction
:command! GitAdd :call s:GitAdd()
nnoremap gic :GitAdd<CR>
```

## :on[ly]

_C-W o_

:on[ly] will make the current buffer the only one on the screen.  This is super helpful as many of fugitive commands will open in a split by default.


## C-I C-O

_cycle through the jumplist_

This one has nothing to do with fugitive, but is a native vim feature that
makes fugitive glorious.  Before I realized how to utilize `C-i` and `C-o`, I
would get completely lost when using fugitive.  Digging deep into the log,
opening a file from a specific commit, then no way to get back where I was in
the log.


> C-i jump

### :jump[s]

_show the jumplist_

> The jumplist is sorted Oldest to newest


### :Telescope jumplist

When navigating the jumplist with `:Telescope jumplist`, it will add a new entry
to the jumplist and let you get back to where you were with a `C-O`.

> :Telescope jumplist adds to the jumplist


## C-W J / C-W L

## :G log

``` bash
:G log
:G log -p
:Glog
```

## Ggrep

``` bash
:Ggrep python **/*md
```

Unlike `:vim[grep]` you don't need to specify a file glob.
``` bash
:Ggrep python
```

## Staging Hunks

In the file you want to stage hunks of run `:Gdiff`.  Then use vim's diff
commands (`dp`, `do`, `:diffput`, `:diffget`) to move the hunk between the
stage/index.  Then write the file to stage.

``` python
:Gdiff
dp
:w
:Gcommit
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
    
    <a class='prev' href='/vim-fundamentals-2'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Notes for second vim-fundamentals course meetup</p>
        </div>
    </a>
    
    <a class='next' href='/vim-diffsplit'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>How to compare two files in vim</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>