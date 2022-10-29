---
cover: ''
date: 2021-11-14
datetime: 2021-11-14 00:00:00+00:00
description: I recently started playing with nix. automatically select correct python
  version per project activating one doesn https://search.nixos.org/
edit_link: https://github.com/edit/main/pages/blog/nix-python-interpreter.md
jinja: false
long_description: I recently started playing with nix. automatically select correct
  python version per project activating one doesn https://search.nixos.org/
now: 2022-10-29 15:54:38.065084
path: pages/blog/nix-python-interpreter.md
slug: nix-python-interpreter
status: draft
super_description: I recently started playing with nix. automatically select correct
  python version per project activating one doesn https://search.nixos.org/
tags:
- python
templateKey: blog-post
title: Using Nix to manage my Python Interpreter
today: 2022-10-29
year: 2021
---

I recently started playing with nix.

## goals

* automatically select correct python version per project
* activating one doesn't bleed into the other



## Installing nix

``` bash
curl -L https://nixos.org/nix/install | sh
```

## controlling nix-env

``` bash
nix-env -iA nixpkgs.python310
nix-env -iA nixpkgs.python39
nix-env -iA nixpkgs.python38
nix-env -iA nixpkgs.python37
```

## searching for packages

https://search.nixos.org/

```
nix-env -qaP .\*python.\*
```

``` bash
nix search nixpkgs python
```

## shell

```
nix-shell -p python39
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
    
    <a class='prev' href='/nixery-versions-by-commit-count'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Nix Versions By Commit Count</p>
        </div>
    </a>
    
    <a class='next' href='/nix-install-java8'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>nix rescues modded minecraft night</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>