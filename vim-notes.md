---
cover: ''
date: 2018-02-01
datetime: 2018-02-01 00:00:00+00:00
description: I have gone quite awhile without using  edit a macro register register
  quickfix gF <C-x> zn
edit_link: https://github.com/edit/main/pages/blog/vim-notes.md
jinja: false
long_description: I have gone quite awhile without using  edit a macro register register
  quickfix gF <C-x> zn
now: 2022-10-29 15:54:38.063690
path: pages/blog/vim-notes.md
slug: vim-notes
status: draft
super_description: I have gone quite awhile without using  edit a macro register register
  quickfix gF <C-x> zn
tags: []
templateKey: blog-post
title: Vim Notes
today: 2022-10-29
year: 2018
---

# vim notes

## nvim lua
[norcalli/neovim-plugin](https://github.com/norcalli/neovim-plugin)

## nvim lsp

[python-lsp/python-lsp-server](https://github.com/python-lsp/python-lsp-server)

## Using c to change text

I have gone quite awhile without using ```c``` and instead using ```d```.  The reason that I started using ```c``` is because it automatically places you into insert mode.  This not only saves me one keystroke for commands such as ```diwi``` is now ```ciw```, but it also works with the repeat ```.``` command!!!  This is huge.  When refactoring a document I had been creating a macro to change one word to another, using ```c``` instead of ```d``` allows the use of the ```.``` rather than needing to create a macro.

## Case for vim

**Sublime/VSCode cannot**

* edit a macro register
* register
* quickfix
* gF

## autocomplete

<C-x> <C-p> repeats previously typed text

    1. Whole lines                                     |i CTRL-X CTRL-L|
    2. keywords in the current file                    |i CTRL-X CTRL-N|
    3. keywords in 'dictionary'                        |i CTRL-X CTRL-K|
    4. keywords in 'thesaurus', thesaurus-style        |i CTRL-X CTRL-T|
    5. keywords in the current and included files      |i CTRL-X CTRL-I|
    6. tags                                            |i CTRL-X CTRL-]|
    7. file names                                      |i CTRL-X CTRL-F|
    8. definitions or macros                           |i CTRL-X CTRL-D|
    9. Vim command-line                                |i CTRL-X CTRL-V|
    10. User defined completion                        |i CTRL-X CTRL-U|
    11. omni completion                                |i CTRL-X CTRL-O|
    12. Spelling suggestions                           |i CTRL-X s|
    13. keywords in 'complete'                         |i CTRL-N|

## z-commands

```zn```		Fold none: reset 'foldenable'.  All folds will be open.
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
    
    <a class='prev' href='/vim-plugged-snapshot'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>vim plugged snapshot</p>
        </div>
    </a>
    
    <a class='next' href='/vim-markdown-links'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Automatically Generate a list of Markdown Links in Vim</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>