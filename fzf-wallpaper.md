---
cover: ''
date: 2022-01-19
datetime: 2022-01-19 00:00:00+00:00
description: I really appreciate that in linux anything can be scripted, including
  I set my default wallpaper with  Leaning in on feh, we can use fzf to pick a wallpaper
  fro
edit_link: https://github.com/edit/main/pages/til/fzf-wallpaper.md
jinja: false
long_description: I really appreciate that in linux anything can be scripted, including
  I set my default wallpaper with  Leaning in on feh, we can use fzf to pick a wallpaper
  from a directory I have mine alias
now: 2022-10-29 15:54:38.065518
path: pages/til/fzf-wallpaper.md
slug: fzf-wallpaper
status: draft
super_description: I really appreciate that in linux anything can be scripted, including
  I set my default wallpaper with  Leaning in on feh, we can use fzf to pick a wallpaper
  from a directory I have mine alias
tags:
- linux
- cli
- bash
templateKey: til
title: fuzzy wallpaper with fzf
today: 2022-10-29
year: 2022
---

I really appreciate that in linux anything can be scripted, including
setting the wallpaper.  So everytime I disconnect a monitor I can just
rerun my script and fix my wallpaper without digging deep into the ui
and fussing through a bunch of settings.

``` bash
feh --bg-scale ~/.config/awesome/wallpaper/my_wallpaper.png
```

> I set my default wallpaper with `feh` using the command above.

Leaning in on feh, we can use fzf to pick a wallpaper from a directory
full of wallpapers with very few keystrokes.

```
alias wallpaper='ls ~/.config/awesome/wallpaper | fzf --preview="feh --bg-scale ~/.config/awesome/wallpaper/{}" | xargs -I {} feh --bg-scale ~/.config/awesome/wallpaper/{}'
```

> I have mine alias'd to `wallpaper` so that I can quickly run it from
> my terminal.
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
    
    <a class='prev' href='/gatsby-remark-embedder'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>gatsby-remark-embedder</p>
        </div>
    </a>
    
    <a class='next' href='/fuzzy-edit-zsh'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Open files FAST from zsh | or bash if thats your thing</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>