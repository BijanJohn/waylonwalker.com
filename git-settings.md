---
cover: ''
date: 2021-06-25
datetime: 2021-06-25 00:00:00+00:00
description: Git can be a bit tricky to get configured correctly.  I often stumble
  into
edit_link: https://github.com/edit/main/pages/blog/git-settings.md
jinja: false
long_description: Git can be a bit tricky to get configured correctly.  I often stumble
  into
now: 2022-10-29 15:54:38.065078
path: pages/blog/git-settings.md
slug: git-settings
status: draft
super_description: Git can be a bit tricky to get configured correctly.  I often stumble
  into
tags:
- git
- linux
templateKey: blog-post
title: How I configure git
today: 2022-10-29
year: 2021
---

Git can be a bit tricky to get configured correctly.  I often stumble into
config issues weeks after setting up a new machine that I did not even notice.
These are my notes to remind me how I configure git.

## Identity

``` bash
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

## rebase


## editor


``` bash
git config --global core.editor nvim
```


## default branch


``` bash
git config --global init.defaultBranch main
```

## push to current bransh wihtout setting upstream

``` bash
git config --global push.default current
```

## Autostash

``` bash
git config pull.rebase true
git config rebase.autoStash true
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
    
    <a class='prev' href='/git-update-user'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Update Git User</p>
        </div>
    </a>
    
    <a class='next' href='/git-rm-cruft'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>remove git cruft</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>