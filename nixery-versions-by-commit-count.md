---
cover: ''
date: 2022-02-02
datetime: 2022-02-02 00:00:00+00:00
description: I was listening to  Since many things still want to see a version number,
  there is one automatic
edit_link: https://github.com/edit/main/pages/til/nixery-versions-by-commit-count.md
jinja: false
long_description: I was listening to  Since many things still want to see a version
  number, there is one automatic
now: 2022-10-29 15:54:38.065992
path: pages/til/nixery-versions-by-commit-count.md
slug: nixery-versions-by-commit-count
status: draft
super_description: I was listening to  Since many things still want to see a version
  number, there is one automatic
tags:
- catalytic
templateKey: til
title: Nix Versions By Commit Count
today: 2022-10-29
year: 2022
---

I was listening to [shipit37](https://changelog.com/shipit/37) with Vincent
Ambo talking about building fully declaritive systems with nix.  Vincent is
building out Nixery and strongly believes that standard versioning systems are
flawed.  If we have good ci setup, and every commit is a good commit the idea
of a release is just some arbitrary point in history that the maintainer
decided was a good time to release, and has less to do about features and
quality.

Since many things still want to see a version number, there is one automatic
always increasing number that is a part of every single git repo, and that is
the commit count.  Nixery is versioned by commit count.  When counting on the
main branch there is no way for two points in time to share the same version.
The git cli will count all commits by default so you have to be careful to only
include commits from the branch you want to version/release from.

``` bash
git rev-list main --count
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
    
    <a class='prev' href='/notify-send'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>notify-send</p>
        </div>
    </a>
    
    <a class='next' href='/nix-python-interpreter'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Using Nix to manage my Python Interpreter</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>