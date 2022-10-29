---
cover: ''
date: 2021-12-27
datetime: 2021-12-27 00:00:00+00:00
description: Many command line tools can output a list of files, this is quite powerful.
  Telescope is the fuzzy file finder I use every day inside of neovim.  Its pretty
  Thi
edit_link: https://github.com/edit/main/pages/til/nvim-telescope-custom-command.md
jinja: false
long_description: 'Many command line tools can output a list of files, this is quite
  powerful. Telescope is the fuzzy file finder I use every day inside of neovim.  Its
  pretty This brings up a normal Telescope picker with results from the  Adding more
  arguments can be '
now: 2022-10-29 15:54:38.065578
path: pages/til/nvim-telescope-custom-command.md
slug: nvim-telescope-custom-command
status: draft
super_description: Many command line tools can output a list of files, this is quite
  powerful. Telescope is the fuzzy file finder I use every day inside of neovim.  Its
  pretty This brings up a normal Telescope picker with results from the  Adding more
  arguments can be done by comma separating them as shown in the
tags:
- vim
templateKey: til
title: Opening files in vim from output of command
today: 2022-10-29
year: 2021
---

Many command line tools can output a list of files, this is quite powerful.
I often want to search for something, then open it from a fuzzy picker.  This
can be done with fzf in the terminal, but often I am already in vim and I want
to open it inside my current session.

## Telescope
_how to pass a custom command to telescope_

Telescope is the fuzzy file finder I use every day inside of neovim.  Its pretty
fantastic and easy to extent like this.  This first example I am only passing in
files from the current working directory by using `ls`.

``` vim
:Telescope find_files find_command=ls
```

This brings up a normal Telescope picker with results from the `ls` command.

## More arguments
_how to pass a muli-argument command to telescope_

Adding more arguments can be done by comma separating them as shown in the
example below.  This command will run the silver-searcher, search for all
occurences of nvim inside of a markdown file, and return only the filepaths so
Telescope can pick from them.

```vim
:Telescope find_files find_command=ag,nvim,--md,-l
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
    
    <a class='prev' href='/nvim-telescope-hidden-files'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Finding hidden (dotfiles) using Telescope in neovim</p>
        </div>
    </a>
    
    <a class='next' href='/nvim-rename-python'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Rename Python Variables with nvim</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>