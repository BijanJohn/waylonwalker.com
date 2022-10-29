---
cover: ''
date: 2020-01-01
datetime: 2020-01-01 00:00:00+00:00
description: 'Vim Location List eating up the screen while I am zoomed in and trying
  to live code Through some google search I found the culprit was syntastic.  It has
  an  I '
edit_link: https://github.com/edit/main/pages/blog/keep-location-list-closed.md
jinja: false
long_description: 'Vim Location List eating up the screen while I am zoomed in and
  trying to live code Through some google search I found the culprit was syntastic.  It
  has an  I want to keep the location list open automatically most of the time, but
  when I don First, '
now: 2022-10-29 15:54:38.065118
path: pages/blog/keep-location-list-closed.md
slug: keep-location-list-closed
status: published
super_description: 'Vim Location List eating up the screen while I am zoomed in and
  trying to live code Through some google search I found the culprit was syntastic.  It
  has an  I want to keep the location list open automatically most of the time, but
  when I don First, create a function that will toggle both the location list and
  syntactic together. This binding will allow me to use  I am starting a set of '
tags:
- vim
templateKey: blog-post
title: Keep Location List Closed
today: 2022-10-29
year: 2020
---

Vim's (neovim in my case) location list can provide some very useful information while developing.  Mine gives me information about linting and type checking errors with fairly little config.  Generally, it sits nicely at the bottom of the screen and barely affects me.  Other times, especially while zoomed way in during a presentation, it just gets in the way.

![location list eats the screen](https://images.waylonwalker.com/location-list-eats-screen.png)

> Location List eating up the screen while I am zoomed in and trying to live code

## Toggling the location list

Through some google search I found the culprit was syntastic.  It has an `auto_loc_list` feature.  We can turn it off by setting
`syntastic_auto_loc_list=0`.

``` vim
let syntastic_auto_loc_list=0
```

## Keybindings

I want to keep the location list open automatically most of the time, but when I don't want it to keep opening it's generally detrimental.  Trying to live code while the location list keeps taking up the whole screen is not cool.


First, create a function that will toggle both the location list and syntactic together.

``` vim
let s:syntastic_auto_loc_list = 0
function! s:ToggleLocationList()
    if s:syntastic_auto_loc_list == 1
        let s:syntastic_auto_loc_list = 0
        let syntastic_auto_loc_list = 0
        :lclose
    else
        let s:syntastic_auto_loc_list = 1
        let syntastic_auto_loc_list = 1
        :lopen
    endif
endfunction
```

This binding will allow me to use `gtl` from normal mode to toggle the location list.

``` vim
:command! ToggleLocationList :call s:ToggleLocationList()
nnoremap gtl :ToggleLocationList<CR>
```

I am starting a set of **toggle** keymaps under the `gt` keybinding, this one is the second one after a keybinding made to toggle paste mode.
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
    
    <a class='prev' href='/keyboard-driven-vscode'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Keyboard Driven VSCode</p>
        </div>
    </a>
    
    <a class='next' href='/kedro172-replit'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>kedro replit</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>