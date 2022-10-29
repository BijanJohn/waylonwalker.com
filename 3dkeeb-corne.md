---
cover: ''
date: 2021-06-21
datetime: 2021-06-21 00:00:00+00:00
description: What did I sign myself up for? If the lower typing speed with alpha characters
edit_link: https://github.com/edit/main/pages/blog/3dkeeb-corne.md
jinja: false
long_description: What did I sign myself up for? If the lower typing speed with alpha
  characters
now: 2022-10-29 15:54:38.063723
path: pages/blog/3dkeeb-corne.md
slug: 3dkeeb-corne
status: draft
super_description: What did I sign myself up for? If the lower typing speed with alpha
  characters
tags:
- keeb
templateKey: blog-post
title: My experience with a new 3dkeeb corne
today: 2022-10-29
year: 2021
---

## specs

## first days typing


## first days working

What did I sign myself up for? If the lower typing speed with alpha characters
was not enough throw in special characters and keybings I setup long ago and
only remember by muscle memory.  I have so far killed my tmux pane instead of
zooming in (m-x instead of m-z), killed my zsh line instead of paste to the end
of a command (c-c instead of c-v).


## VIA

```
LT(1, KC_ENT)
LT(1, KC_TAB)
LT(1, KC_SHIFT)

MT(MOD_RSHFT, KC_ESC)
MT(MOD_HYPR, KC_GESC)

```

## setting up qmk cli

``` bash
conda create -n qmk python=3.8 -y

qmk config compile.keyboard=crkbd/rev1 compile.keymap=default
qmk config user.keyboard=crkbd/rev1 user.keymap=default

# This will clone into ~/qmk_firmware
# you can change this behavior by setting QMK_HOME
# export QMK_HOME=~/custo_qmk_home_dir
qmk setup

# qmk setup took 10 minutes on my machine with wsl over a mobile network
```

``` bash
qmk setup 
ImportError: Unable to load any of the following libraries:libhidapi-hidraw.so libhidapi-hidraw.so.0 libhidapi-libusb.so libhidapi-libusb.so.0 libhidapi-iohidmanager.so libhidapi-iohidmanager.so.0 libhidapi.dylib hidapi.dll libhidapi-0.dll

pip install hidapi
sudo apt-get install python-dev libusb-1.0-0-dev libudev-dev
sudo apt-get update
sudo apt-get install python-dev libusb-1.0-0-dev libudev-dev
qmk setup
# https://pypi.org/project/hid/
apt install libhidapi-hidraw0
qmk setup
sudo apt-get install avrdude
```

## inspiration

``` python
https://github.com/markstos/qmk_firmware/tree/markstos/keyboards/crkbd/keymaps/markstos
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
    
    <a class='prev' href='/about'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Waylon Walker</p>
        </div>
    </a>
    
    <a class='next' href='/3-things-to-automate-with-python'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Three things to Automate with Python using Pandas</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>