---
cover: ''
date: 2022-02-04
datetime: 2022-02-04 00:00:00+00:00
description: 'Creating a minimal config specifically for git commits has made running
  The other thing that is engrained into my muscle memory is  Here is the config that
  has '
edit_link: https://github.com/edit/main/pages/til/neovim-config-for-git.md
jinja: false
long_description: Creating a minimal config specifically for git commits has made
  running The other thing that is engrained into my muscle memory is  Here is the
  config that has taken ~/.config/nvim/init-git.vim ~/.config/nvim/git-plugins.vim
  ~/.gitconfig
now: 2022-10-29 15:54:38.065795
path: pages/til/neovim-config-for-git.md
slug: neovim-config-for-git
status: draft
super_description: Creating a minimal config specifically for git commits has made
  running The other thing that is engrained into my muscle memory is  Here is the
  config that has taken ~/.config/nvim/init-git.vim ~/.config/nvim/git-plugins.vim
  ~/.gitconfig
tags:
- vim
- linux
- bash
templateKey: til
title: Neovim Config for Git
today: 2022-10-29
year: 2022
---

Creating a minimal config specifically for git commits has made running
`git commit` much more pleasant.  It starts up Much faster, and has all
of the parts of my config that I use while making a git commit.  The one
thing that I often use is autocomplete, for things coming from elsewhere
in the tmux session.  For this `cmpe-tmux` specifically is super
helpful.

The other thing that is engrained into my muscle memory is `jj`
for escape.  For that I went agead and added my `settings` and `keymap`
with no noticable performance hit.

Here is the config that has taken


~/.config/nvim/init-git.vim

``` vim
source ~/.config/nvim/settings.vim
source ~/.config/nvim/keymap.vim
source ~/.config/nvim/git-plugins.vim
lua require'waylonwalker.cmp'
```

~/.config/nvim/git-plugins.vim

``` vim
call plug#begin('~/.local/share/nvim/plugged')

" cmp
Plug 'hrsh7th/nvim-cmp'
Plug 'hrsh7th/cmp-nvim-lsp'
Plug 'hrsh7th/cmp-buffer'
Plug 'hrsh7th/cmp-path'
Plug 'hrsh7th/cmp-calc'
Plug 'andersevenrud/compe-tmux', { 'branch': 'cmp' }


call plug#end()
```

~/.gitconfig

``` toml
[core]
    editor = nvim -u ~/.config/nvim/init-git.vim
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
    
    <a class='prev' href='/neovim-live-substitution'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Live Substitution In Neovim</p>
        </div>
    </a>
    
    <a class='next' href='/named-tuples-data-science'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Clean up Your Data Science with Named Tuples</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>