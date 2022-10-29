---
cover: ''
date: 2021-04-17
datetime: 2021-04-17 00:00:00+00:00
description: 'I wsl can access clip.exe.  You can do some cool things with it, such
  as Let pipe streams of text into clip.exe I recently made mine feel a bit more natural
  by '
edit_link: https://github.com/edit/main/pages/blog/vim-wsl-clipboard.md
jinja: false
long_description: 'I wsl can access clip.exe.  You can do some cool things with it,
  such as Let pipe streams of text into clip.exe I recently made mine feel a bit more
  natural by aliasing it to clip. pop this in your ~/.bashrc or ~/.zshrc I use neovim
  as my daily text '
now: 2022-10-29 15:54:38.065125
path: pages/blog/vim-wsl-clipboard.md
slug: vim-wsl-clipboard
status: published
super_description: I wsl can access clip.exe.  You can do some cool things with it,
  such as Let pipe streams of text into clip.exe I recently made mine feel a bit more
  natural by aliasing it to clip. pop this in your ~/.bashrc or ~/.zshrc I use neovim
  as my daily text editor and its a pain to share code with a add this to your ~/.vimrc
  or your ~/.config/nvim/init.vim Based on some
tags:
- vim
- bash
templateKey: blog-post
title: Vim Wsl Clipboard
today: 2022-10-29
year: 2021
---

I've long used neovim from within windows wsl, and for far too long, I went
without a proper way to get text out of it and into windows.


## wsl has access to cmd applications

wsl can access clip.exe.  You can do some cool things with it, such as
cat a file into the clipboard, sending output from a command to the clipboard,
or set an autocmd group in vim to send yank to the windows clipboard.

## using clip.exe

Let's say you want to send a teammate the tail of a log file over chat. You can
tail the file into clip.exe.

``` bash
tail -n 1 info.log | clip.exe
```

> pipe streams of text into clip.exe

## make it a bit more natural

I recently made mine feel a bit more natural by aliasing it to clip.

``` bash
alias clip=clip.exe
```

> pop this in your ~/.bashrc or ~/.zshrc

## yanking to windows clipboard from vim

I use neovim as my daily text editor and its a pain to share code with a
teammate over chat, stack overflow, into a gist, or whatever you need.  The
following snippet has been quite useful and flawless for me.

``` vim
if system('uname -r') =~ "Microsoft"
    augroup Yank
        autocmd!
        autocmd TextYankPost * :call system('/mnt/c/windows/system32/clip.exe ',@")
        augroup END
endif
```

> add this to your ~/.vimrc or your ~/.config/nvim/init.vim

## Wsl2

Based on some
[feedback](https://github.com/WaylonWalker/waylonwalker.com/issues/4)
from [l-sannin](https://github.com/l-sannin) the 'uname -r' command now
returns `uname -r command returns '5.10.16.3-microsoft-standard-WSL2'`
So you will need an all lowercase microsoft.

``` vim
if system('uname -r') =~ "microsoft"
  augroup Yank
  autocmd!
  autocmd TextYankPost * :call system('/mnt/c/windows/system32/clip.exe ',@")
  augroup END
endif
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
    
    <a class='prev' href='/vimgrep-open-buffers'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>vimgrep open buffers</p>
        </div>
    </a>
    
    <a class='next' href='/vim-sort-u'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>use vim to remove duplicates</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>