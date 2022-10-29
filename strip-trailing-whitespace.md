---
cover: ''
date: 2020-09-30
datetime: 2020-09-30 00:00:00+00:00
description: 'A common linting error thrown by various linters is for trailing whitespace.  I
  read more about pre-commit '
edit_link: https://github.com/edit/main/pages/blog/strip-trailing-whitespace.md
jinja: false
long_description: 'A common linting error thrown by various linters is for trailing
  whitespace.  I read more about pre-commit '
now: 2022-10-29 15:54:38.064869
path: pages/blog/strip-trailing-whitespace.md
slug: strip-trailing-whitespace
status: published
super_description: 'A common linting error thrown by various linters is for trailing
  whitespace.  I read more about pre-commit '
tags: []
templateKey: blog-post
title: Strip Trailing Whitespace from Git projects
today: 2022-10-29
year: 2020
---

A common linting error thrown by various linters is for trailing whitespace.  I
most often use flake8.  I generally have
[pre-commit]([https://waylonwalker.com/pre-commit-is-awesome](https://waylonwalker.com/pre-commit-is-awesome/)
hooks setup to strip this,
but sometimes I run into situations where I jump into a project without it, and
my editor lights up with errors.  A simple fix is to run this one-liner.

## One-Liner to strip whitespace

_<small><mark>bash</mark></small>_
``` bash
git grep -I --name-only -z -e '' | xargs -0 sed -i -e 's/[ \t]\+\(\r\?\)$/\1/'
```



<p style='text-align: center' align='center'>
<a href='https://waylonwalker.com/pre-commit-is-awesome'>
  <img
    style='width:400px; max-width:80%; margin: auto;'
    width='400'
    src="https://images.waylonwalker.com/pre-commit-is-awesome.png"
    alt="pre-commit article"
  />
  </a>
</p>

read more about pre-commit [here](https://waylonwalker.com/pre-commit-is-awesome).
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
    
    <a class='prev' href='/supercharge-zsh-startup'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Supercharge Zsh Startup</p>
        </div>
    </a>
    
    <a class='next' href='/stories-10-10-2020-10-21-2020'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>A brain dump of stories</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>