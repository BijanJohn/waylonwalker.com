---
cover: ''
date: 2021-04-21
datetime: 2021-04-21 00:00:00+00:00
description: I really like using conda ( Mamba is a reimplementation of the conda
  package manager in C++. parallel downloading of repository data and package files
  using mul
edit_link: https://github.com/edit/main/pages/blog/install-micromamba.md
jinja: false
long_description: I really like using conda ( Mamba is a reimplementation of the conda
  package manager in C++. parallel downloading of repository data and package files
  using multi-threading libsolv for much faster dependency solving, a state of the
  art library used i
now: 2022-10-29 15:54:38.063795
path: pages/blog/install-micromamba.md
slug: install-micromamba
status: published
super_description: 'I really like using conda ( Mamba is a reimplementation of the
  conda package manager in C++. parallel downloading of repository data and package
  files using multi-threading libsolv for much faster dependency solving, a state
  of the art library used in the RPM package manager of Red Hat, Fedora and OpenSUSE
  core parts of mamba are implemented in C++ for maximum efficiency At the same time,
  mamba utilize the same command line parser, package Similar to miniconda micromamba
  can be installed with a '
tags:
- bash
- python
templateKey: blog-post
title: How to Install micromamba on linux (from the comamnd line only)
today: 2022-10-29
year: 2021
---

I really like using conda (`miniconda`) as my python virtual environment
manager of choice.  It's simple and it includes its own python interpreter
using the version that I specify at creation.

## Mamba

_from their [readme](https://github.com/mamba-org/mamba)_

---

Mamba is a reimplementation of the conda package manager in C++.

* parallel downloading of repository data and package files using multi-threading
* libsolv for much faster dependency solving, a state of the art library used in the RPM package manager of Red Hat, Fedora and OpenSUSE
* core parts of mamba are implemented in C++ for maximum efficiency

At the same time, mamba utilize the same command line parser, package
installation and deinstallation code and transaction verification routines as
conda to stay as compatible as possible.

---


## Installing Micromamba

Similar to miniconda micromamba can be installed with a few lines of bash

``` bash
wget -qO- https://micromamba.snakepit.net/api/micromamba/linux-64/latest | tar -xvj bin/micromamba
./bin/micromamba shell init -s bash -p ~/micromamba
source ~/.bashrc
```

## Creating Environments with Micromamba

Creating new environments with micromamba is pretty similar to using conda.

``` bash
micromamba create -n mamba-new python=3.9 -y -c conda-forge
```

## -c is required

I was unable to figure out how to configure channels to `micromamba`, so I
needed to add `-c conda-forge` to my commands.


``` bash
                                           __
          __  ______ ___  ____ _____ ___  / /_  ____ _
         / / / / __ `__ \/ __ `/ __ `__ \/ __ \/ __ `/
        / /_/ / / / / / / /_/ / / / / / / /_/ / /_/ /
       / .___/_/ /_/ /_/\__,_/_/ /_/ /_/_.___/\__,_/
      /_/

WARNING No 'channels' specified
Encountered problems while solving:
  - nothing provides requested python 3.9**

ERROR   Could not solve for environment specs
```

> ⚠ micromamba thows this error when `-c conda-forge` is missing from the create command.

## Speed

micromamba is built for speed.  I tried it out in a replit.com session, while
it felt quite snappy creating a new environment was still within a few seconds
of conda on subsequent environment creations.  Their marketing says it should
be faster, but for what I use conda for I didn't see it.

## pip

I used conda install years ago while on windows machines struggling to compile
c-extensions and install certain troublesome packages, but I haven't used a
`conda install` in years, pip works just fine for my use.

## Useful Links

* GitHub: https://github.com/mamba-org/mamba
* Gitter: https://gitter.im/QuantStack/Lobby
* Documentation: https://mamba.readthedocs.io/en/latest/
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
    
    <a class='prev' href='/install-miniconda'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>How to Install miniconda on linux (from the command line only)</p>
        </div>
    </a>
    
    <a class='next' href='/if-tmux'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>If Tmux</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>