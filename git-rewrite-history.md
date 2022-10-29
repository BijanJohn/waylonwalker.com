---
cover: ''
date: 2019-02-05
datetime: 2019-02-05 00:00:00+00:00
description: rebase git commit --amend rage quit git reset HEAD~n  removes modifications
  keeps hitsory of changes and undoes them git checkout HEAD~n --  keeps modifications
edit_link: https://github.com/edit/main/pages/blog/git-rewrite-history/git-rewrite-history.md
jinja: false
long_description: rebase git commit --amend rage quit git reset HEAD~n  removes modifications
  keeps hitsory of changes and undoes them git checkout HEAD~n --  keeps modifications
  removes history --SOFT --HARD --Mixed locally before push after push after push
now: 2022-10-29 15:54:38.065471
path: pages/blog/git-rewrite-history/git-rewrite-history.md
slug: git-rewrite-history
status: published
super_description: rebase git commit --amend rage quit git reset HEAD~n  removes modifications
  keeps hitsory of changes and undoes them git checkout HEAD~n --  keeps modifications
  removes history --SOFT --HARD --Mixed locally before push after push after push
tags:
- git
templateKey: blog-post
title: Rewrite History with Git
today: 2022-10-29
year: 2019
---

* rebase
* git commit --amend

## Unstage learning-python-debugger

``` bash
git reset -- <file>
```

**rage** unstage to wipte out history of staged commit
``` bash
git reset --hard <file>
```

## Undo file

* rage quit
* git reset HEAD~n <file>
    * removes modifications
    * keeps hitsory of changes and undoes them
* git checkout HEAD~n -- <file>
    * keeps modifications
    * removes history

    * --SOFT
    * --HARD
    * --Mixed

## undo n commits back

locally before push
``` bash
git reset HEAD~n
```

after push
``` bash
git revert HEAD~n
```

## update .gitignore

after push
``` bash
git rm -r --cached .
git commit -am "Updated .gitignore"
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
    
    <a class='next' href='/git-rewrite-history'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Rewrite History with Git</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>