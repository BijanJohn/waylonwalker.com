---
cover: ''
date: 2022-05-11
datetime: 2022-05-11 00:00:00+00:00
description: When you first start qutebrowser It will create some config files in
  As far as I know qutebrowser will create this default config out of the You might
  want to c
edit_link: https://github.com/edit/main/pages/til/qutebroswer-write-config-py.md
jinja: false
long_description: When you first start qutebrowser It will create some config files
  in As far as I know qutebrowser will create this default config out of the You might
  want to confvert if you are more comfortable with the python
now: 2022-10-29 15:54:38.065880
path: pages/til/qutebroswer-write-config-py.md
slug: qutebroswer-write-config-py
status: draft
super_description: When you first start qutebrowser It will create some config files
  in As far as I know qutebrowser will create this default config out of the You might
  want to confvert if you are more comfortable with the python
tags:
- python
templateKey: til
title: convert your qutebrowser config to config.py
today: 2022-10-29
year: 2022
---

When you first start qutebrowser It will create some config files in
your home directory for you, but they will be empty.

## Config

As far as I know qutebrowser will create this default config out of the
box for you, if it doesn't, then somehow it just appeared for me 😁.

``` bash
❯ tree ~/.config/qutebrowser
/home/waylon/.config/qutebrowser
├── autoconfig.yml
├── bookmarks
│   └── urls
├── config.py
├── greasemonkey
└── quickmarks

2 directories, 5 files
```

## Why convert

You might want to confvert if you are more comfortable with the python
config, or if like me you just want config in one place and you are
stealing configuration options from others who have thiers in config.py.

## Convert to py

```
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
    
    <a class='prev' href='/react-headroom'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>I just added react-headroom to my site</p>
        </div>
    </a>
    
    <a class='next' href='/quickly-edit-posts'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Quickly Edit Posts</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>