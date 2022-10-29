---
cover: ''
date: 2022-04-30
datetime: 2022-04-30 00:00:00+00:00
description: GitPython I recently made myself a handy tool for making screenshots
  in python and it https://waylonwalker.com/screenshot-to-blog/ GitPython Import Repo
  from th
edit_link: https://github.com/edit/main/pages/til/python-git.md
jinja: false
long_description: GitPython I recently made myself a handy tool for making screenshots
  in python and it https://waylonwalker.com/screenshot-to-blog/ GitPython Import Repo
  from the git library and create an instance of the  from the docs It provides abstractions
  of git
now: 2022-10-29 15:54:38.066107
path: pages/til/python-git.md
slug: python-git
status: draft
super_description: 'GitPython I recently made myself a handy tool for making screenshots
  in python and it https://waylonwalker.com/screenshot-to-blog/ GitPython Import Repo
  from the git library and create an instance of the  from the docs It provides abstractions
  of git objects for easy access of repository data, I only needed to use the more
  intensive but familar to me git command Requesting the git status can be done as
  follows. note I have prefixed my commands with >>> to distinguish between the command
  You can '
tags:
- python
- cli
- git
templateKey: til
title: Using Git from Python
today: 2022-10-29
year: 2022
---

`GitPython` is a python api for your git repos, it can be quite handy when you
need to work with git from python.

## Use Case

I recently made myself a handy tool for making screenshots in python and it
need to do a git commit and push from within the script.  For this I reached
for `GitPython`.


<div class="onelinelink-wrapper">
    <a class="onelinelink" href="https://waylonwalker.com/screenshot-to-blog/">
        <img style="float: right;" align='right' src="https://covers.waylonwalker.com/screenshot-to-blog.jpg" alt="article cover for How I Quickly Capture Screenshots directly into My Blog"/>
        <p><strong>How I Quickly Capture Screenshots directly into My Blog</strong></p>
    </a>
</div>


## Installation

`GitPython` is a python library hosted on pypi that we will want to install
into our virtual environments using pip.

``` python
pip install GitPython
```

## Create a Repo Object

Import Repo from the git library and create an instance of the `Repo` object by
giving it a path to the directory containing your `.git` directory.

``` python
from git import Repo
repo = Repo('~/git/waylonwalker.com/')
```

## Two interfaces

from the docs

> It provides abstractions of git objects for easy access of repository data,
> and additionally allows you to access the git repository more directly using
> either a pure python implementation, or the faster, but more resource
> intensive git command implementation.

I only needed to use the more intensive but familar to me git command
implementation to get me project off the ground.  There is a good
[tutorial](https://gitpython.readthedocs.io/en/stable/tutorial.html#tutorial-label)
to get you started with their pure python implementation in their docs.

## Status

Requesting the git status can be done as follows.

> note I have prefixed my commands with >>> to distinguish between the command
> I entered and the output.

```
>>> print(repo.git.status())

On branch main
Your branch is ahead of 'origin/main' by 1 commit.
  (use "git push" to publish your local commits)

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        blog/
```

You can even pass in flags that you would pass into the cli.

```
>>> print(repo.git.status("-s"))
?? blog/
```

## log

Example of using the log.

``` python
print(repo.git.log('--oneline', '--graph'))

* 0d28bd8 fix broken image link
* 3573928 wip screenshot-to-blog
* fed9abc wip screenshot-to-blog
* d383780 update for wsl2
* ad72b14 wip screenshot-to-blog
* 144c2f3 gratitude-180
```

## Find Deleted Files

We can even do things like find all files that have been deleted and the hash
they were deleted.

``` python
print(repo.git.log('--diff-filter', 'D', '--name-only', '--pretty=format:"%h"'))
```


<div class="onelinelink-wrapper">
    <a class="onelinelink" href="https://waylonwalker.com/git-find-deleted-files/">
        <img style="float: right;" align='right' src="https://covers.waylonwalker.com/git-find-deleted-files.jpg" alt="article cover for git find deleted files"/>
        <p><strong>git find deleted files</strong></p>
    </a>
</div>


> full post on finding deleted files

## My Experience

This library seemed pretty straightforward and predicatable once I realized
there were two main implementations and that I would already be familar with
the more intensive git command implementation.
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
    
    <a class='prev' href='/python-lru-cache'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Cache a python function with lru_cache</p>
        </div>
    </a>
    
    <a class='next' href='/python-functools-total-ordering'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>python functools total ordering</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>