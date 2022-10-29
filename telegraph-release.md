---
cover: ''
date: 2021-10-05
datetime: 2021-10-05 00:00:00+00:00
description: I https://youtu.be/8m5ipBuopPU Check out the project  I want a simple
  way to make remaps into shell commands that can open new tmux For example I want
  to make r
edit_link: https://github.com/edit/main/pages/blog/telegraph-release.md
jinja: false
long_description: I https://youtu.be/8m5ipBuopPU Check out the project  I want a simple
  way to make remaps into shell commands that can open new tmux For example I want
  to make remaps to do things like open the current file in lookatme. The main goal
  here is that rema
now: 2022-10-29 15:54:38.065375
path: pages/blog/telegraph-release.md
slug: telegraph-release
status: published
super_description: I https://youtu.be/8m5ipBuopPU Check out the project  I want a
  simple way to make remaps into shell commands that can open new tmux For example
  I want to make remaps to do things like open the current file in lookatme. The main
  goal here is that remaps become one liners that can just be put telegraph term tmux
  tmux_popup tmux_popup_session subprocess The current set of format strings that
  can be used with telegraph.  Placing cword cWORD cline filepath filename parent
  current_session_name cwd Che
tags:
- vim
- linux
templateKey: blog-post
title: I made a neovim plugin
today: 2022-10-29
year: 2021
---

I've slowly adding more and more lua functions into my neovim configuration,
and recently I noticed a pattern for a class of functions that reach out to run
shell commands that can be abstracted away.

https://youtu.be/8m5ipBuopPU

## Telegraph.nvim

Check out the project [readme](https://github.com/WaylonWalker/Telegraph.nvim)
for the most up to date details on the plugin itself.

## Motivation

I want a simple way to make remaps into shell commands that can open new tmux
windows, popups, or just run a command with context from the editor.

For example I want to make remaps to do things like open the current file in lookatme.

``` vim
# vim :terminal
nnoremap <leader>s <cmd>Telegraph pipx run lookatme {filepath} --live-reload --style gruvbox-dark<cmd>

# tmux session
nnoremap <leader><leader>s <cmd>lua require'telegraph'.telegraph({cmd='pipx run lookatme {filepath} --live-reload --style gruvbox-dark', how='tmux'})<CR>

# tmux popup
nnoremap <leader><leader>S <cmd>lua require'telegraph'.telegraph({cmd='pipx run lookatme {filepath} --live-reload --style gruvbox-dark', how='tmux_popup'})<CR>
```

The main goal here is that remaps become one liners that can just be put
directly in my `init.vim` without creating a whole new lua module for each
shell command I want to bind.

## how

`telegraph` takes in a `how` argument to determine where to tun the command.j

* `term`(default) runs command in the built in terminal
* `tmux` runs command in a new tmux session and joins it.
* `tmux_popup` runs command in a tmux popup window.
* `tmux_popup_session` runs command in a tmux session and displays it in a popup
* `subprocess` runs command in a subprocess

## Format strings

The current set of format strings that can be used with telegraph.  Placing
these in braces `{}` within your command will get rendered into something with
context from the editor.

* `cword` - the current word under the cursor
* `cWORD` - the current BIG Word under the cursor
* `cline` - the current line under the cursor
* `filepath` - the filepath of the current file
* `filename` - the filename of the current file
* `parent` - the parent directory of the current file
* `current_session_name` - name of the current tmux session
* `cwd` - the current working directory

## Give it a ⭐

Check out the [repo](https://github.com/WaylonWalker/Telegraph.nvim) and give
it a star if its something that interests you.
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
    
    <a class='prev' href='/testproject-io-py-actions'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Integration testing with Python, TestProject.io, and GitHub Actions</p>
        </div>
    </a>
    
    <a class='next' href='/talk-python-kedro'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>I was on Talk Python</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>