---
cover: ''
date: 2021-08-27
datetime: 2021-08-27 00:00:00+00:00
description: newline Mahesh Subrajmanium Venkatachalam - Plugins | Installing a Theme
  Matthew Fletcher - Registers | Advanced Motions Jump, Delete,  get a plugin manager
  unl
edit_link: https://github.com/edit/main/pages/blog/vim-fundamentals-2.md
jinja: false
long_description: newline Mahesh Subrajmanium Venkatachalam - Plugins | Installing
  a Theme Matthew Fletcher - Registers | Advanced Motions Jump, Delete,  get a plugin
  manager unless you are going full lua, most people use vim-plug by the great junegunn
  https://github.
now: 2022-10-29 15:54:38.063809
path: pages/blog/vim-fundamentals-2.md
slug: vim-fundamentals-2
status: draft
super_description: newline Mahesh Subrajmanium Venkatachalam - Plugins | Installing
  a Theme Matthew Fletcher - Registers | Advanced Motions Jump, Delete,  get a plugin
  manager unless you are going full lua, most people use vim-plug by the great junegunn
  https://github.com/junegunn/vim-plug install using plug set the theme sending things
  to the quickfix list quickfix commands Walk through example. Macro Pressure
tags:
- vim
templateKey: blog-post
title: Notes for second vim-fundamentals course meetup
today: 2022-10-29
year: 2021
---

newline
another


Mahesh Subrajmanium Venkatachalam - Plugins | Installing a Theme
Hunter Phillips - Quickfix | Offline Ordering with getqflist
Andrea Wackerle - Search & Replace | Macros

Matthew Fletcher - Registers | Advanced Motions Jump, Delete, & Select | Advanced Motions: Paste & Move
Nicholas Payne - My First Vim Plugin | What Makes a Good Plugin
Zev Averbach - Harpoon | Wrap up

## Plugin-manager

* get a plugin manager
* unless you are going full lua, most people use vim-plug by the great junegunn

https://github.com/junegunn/vim-plug

## Install pluggged

``` bash
curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim     
```

``` vim
call plug#begin('~/.vim/plugged')

Plug 'junegunn/fzf', { 'do': { -> fzf#install() } }
Plug 'junegunn/fzf.vim'

call plug#end()
```

## Install Plugins

``` vim
:PlugInstall
:PlugClean
:PlugUpdate
```

## Installing a Theme

install using plug

``` vim
Plug 'ayu-theme/ayu-vim'
```

set the theme

``` vim
set termguicolors
let ayucolor="dark"
colorscheme ayu
```

## Quickfix

sending things to the quickfix list

``` vim
:grep SOCKET_OPEN **/*.(c\|h)
```

quickfix commands

``` vim
:copen
:cnext
:cdo s/vim/nvim/g
```


## Some remaps to consider

``` vim
nnoremap <C-k> :cnext<CR>
nnoremap <C-j> :cprev<CR>
nnoremap <C-E> :copen<CR>
```

## Offline Ordering with getqflist

## Search & Replace

Walk through example.

```  bash
curl https://raw.githubusercontent.com/ThePrimeagen/vim-fundamentals/master/course-website/lessons/exercise-3-search-and-replace.md > exercise.md && vim exercise.md
```

## Macros

* Macro Pressure

``` bash
curl https://raw.githubusercontent.com/ThePrimeagen/vim-fundamentals/master/course-website/lessons/exercise-4-macros.md > exercise.md && vim exercise.md
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
    
    <a class='prev' href='/vim-markdown-links'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Automatically Generate a list of Markdown Links in Vim</p>
        </div>
    </a>
    
    <a class='next' href='/vim-fugitive'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Vim Fugitive</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>