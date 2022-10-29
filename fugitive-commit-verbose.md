---
cover: ''
date: 2021-12-22
datetime: 2021-12-22 00:00:00+00:00
description: Fugitive comes with a pretty sick way to commit files and see the diff
  at the example of a verbose commit in fugitive
edit_link: https://github.com/edit/main/pages/til/fugitive-commit-verbose.md
jinja: false
long_description: Fugitive comes with a pretty sick way to commit files and see the
  diff at the example of a verbose commit in fugitive
now: 2022-10-29 15:54:38.066527
path: pages/til/fugitive-commit-verbose.md
slug: fugitive-commit-verbose
status: draft
super_description: Fugitive comes with a pretty sick way to commit files and see the
  diff at the example of a verbose commit in fugitive
tags:
- git
- vim
templateKey: til
title: fugitive verbose commit
today: 2022-10-29
year: 2021
---

Fugitive comes with a pretty sick way to commit files and see the diff at the
same time with verbose commit.  Opening the fugitive menu with `:G` brings up
your git status, you can stage files with `s`, unstage them with `u`, toggle
them with `-`, and toggle their diff with `>`.  Once you have staged your files
for commit, you can commit with `cc`, but today I found that you can commit
verbose with `cvc`.  This brings up not only a commit widow with your git
status shown, but the diff that you are about to commit.

![fugitive verbose commit example](https://images.waylonwalker.com/fugitive-verbose-commit.png)

> example of a verbose commit in fugitive
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
    
    <a class='prev' href='/fuzzy-edit-zsh'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Open files FAST from zsh | or bash if thats your thing</p>
        </div>
    </a>
    
    <a class='next' href='/from-markdown-to-blog-with-markata'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>From Markdown to Blog with Markata | lightning talk | python web conf 2022</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>