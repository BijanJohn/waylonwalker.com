---
cover: ''
date: 2021-11-30
datetime: 2021-11-30 00:00:00+00:00
description: In honor of the neovim 0.6.0 release, I decided to do a funny skit installing
  https://youtu.be/64oKLphhBuo The thing that took me the longest to realize was....
edit_link: https://github.com/edit/main/pages/blog/install-nvim-skit.md
jinja: false
long_description: In honor of the neovim 0.6.0 release, I decided to do a funny skit
  installing https://youtu.be/64oKLphhBuo The thing that took me the longest to realize
  was.... I had a path issue https://neovim.io/
now: 2022-10-29 15:54:38.064731
path: pages/blog/install-nvim-skit.md
slug: install-nvim-skit
status: published
super_description: In honor of the neovim 0.6.0 release, I decided to do a funny skit
  installing https://youtu.be/64oKLphhBuo The thing that took me the longest to realize
  was.... I had a path issue https://neovim.io/
tags:
- linux
- vim
- neovim
templateKey: blog-post
title: How linux users install a text editor
today: 2022-10-29
year: 2021
---

In honor of the neovim 0.6.0 release, I decided to do a funny skit installing
neovim, and fix up my install script in the process as part of my challenge to
fix up my dotfiles.  I ran into one snag where I was not updating the repo that
I cloned.  I moved it to the directory I now keep third-party git repos and set
it to update with ansible.

https://youtu.be/64oKLphhBuo

The thing that took me the longest to realize was.... I had a path issue
pointing me to an old install of the appimage over the fresh build,  fixed that
up and now we are on 0.7.0 nightly.


## Related Links

https://neovim.io/
https://github.com/neovim/neovim
https://github.com/neovim/neovim/releases/tag/v0.6.0
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
    
    <a class='prev' href='/interrogate'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Interrogate is a pretty awesome, brand new, cli for Python packages</p>
        </div>
    </a>
    
    <a class='next' href='/install-miniconda'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>How to Install miniconda on linux (from the command line only)</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>