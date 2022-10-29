---
cover: ''
date: 2021-12-29
datetime: 2021-12-29 00:00:00+00:00
description: 'Installing brew on linux proved quite easy and got pyenv running for
  me I had never used homebrew before, honestly I thought it was a mac only That was
  it, now '
edit_link: https://github.com/edit/main/pages/til/installing-homebrew-linux.md
jinja: false
long_description: Installing brew on linux proved quite easy and got pyenv running
  for me I had never used homebrew before, honestly I thought it was a mac only That
  was it, now homebrew is working. Starting a new shell and running
now: 2022-10-29 15:54:38.066184
path: pages/til/installing-homebrew-linux.md
slug: installing-homebrew-linux
status: draft
super_description: Installing brew on linux proved quite easy and got pyenv running
  for me I had never used homebrew before, honestly I thought it was a mac only That
  was it, now homebrew is working. Starting a new shell and running
tags:
- linux
- bash
templateKey: til
title: Installing Homebrew on Linux
today: 2022-10-29
year: 2021
---

Installing brew on linux proved quite easy and got pyenv running for me
within 4 commands.

I had never used homebrew before, honestly I thought it was a mac only
thing for years.  Today I wanted to try out pyenv, and the reccommended
way to install was using homebrew.  I am not yet sure if I want either
in my normal workflow, so for now I am just going to pop open a new
terminal and install homebrew and see how it goes.


``` bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"' >> /home/walkers/.zprofile
eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
```

That was it, now homebrew is working. Starting a new shell and running
the command to install pyenv worked.

``` bash
brew install pyenv
```

## Links

* [homebrew](https://brew.sh/)
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
    
    <a class='prev' href='/installing-pipx-on-ubuntu'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Installing Pipx on Ubuntu</p>
        </div>
    </a>
    
    <a class='next' href='/install-yq'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Install yq | A light weight yaml parser cli</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>