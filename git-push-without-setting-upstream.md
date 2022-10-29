---
cover: ''
date: 2020-02-04
datetime: 2020-02-04 00:00:00+00:00
description: 'Finally after years of hand typing out a full  This one setting will
  now '
edit_link: https://github.com/edit/main/pages/blog/git-push-without-setting-upstream.md
jinja: false
long_description: 'Finally after years of hand typing out a full  This one setting
  will now '
now: 2022-10-29 15:54:38.064794
path: pages/blog/git-push-without-setting-upstream.md
slug: git-push-without-setting-upstream
status: published
super_description: 'Finally after years of hand typing out a full  This one setting
  will now '
tags:
- git
- cli
templateKey: blog-post
title: git push without setting upstream
today: 2022-10-29
year: 2020
---

Finally after years of hand typing out a full `git push --upstream
my_really_long_and_descriptive_branch_name` I found there is a setting to
automatcally push to the current branch. More realisitically I just did a `git
push` let git yell at me, and copying the suggestion.

## git config

``` bash
git config --global push.default current
```

This one setting will now `git push` to the current branch without yelling at
you that your upstream does not match your current branch.  This helps me ship
chnages faster as I am constantly chnaging projects and branches.
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
    
    <a class='prev' href='/git-rewrite-history'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Rewrite History with Git</p>
        </div>
    </a>
    
    <a class='next' href='/git-in-depth'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Git in Depth Notes</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>