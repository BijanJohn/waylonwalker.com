---
cover: ''
date: 2022-02-21
datetime: 2022-02-21 00:00:00+00:00
description: Git reflog can perform some serious magic in reviving your hard work
  You must git commit I really like to practice these techniques before I need to
  use them so
edit_link: https://github.com/edit/main/pages/til/git-revive-dead-files.md
jinja: false
long_description: Git reflog can perform some serious magic in reviving your hard
  work You must git commit I really like to practice these techniques before I need
  to use them so This is what I did to revive a dropped  Here was the final reflog
  that shows all of my gi
now: 2022-10-29 15:54:38.065972
path: pages/til/git-revive-dead-files.md
slug: git-revive-dead-files
status: draft
super_description: 'Git reflog can perform some serious magic in reviving your hard
  work You must git commit I really like to practice these techniques before I need
  to use them so This is what I did to revive a dropped  Here was the final reflog
  that shows all of my git actions.  '
tags:
- git
- cli
templateKey: til
title: Revive files from the dead with git
today: 2022-10-29
year: 2022
---

Git reflog can perform some serious magic in reviving your hard work
from the dead if you happen to loose it.

## caveat

You must git commit!  If you never commit the file, git cannot help you.
You might look into your trashcan, filesystem versions, onedrive, box, dropbox.
If you have none of this, then you are probably hosed.

## practice

I really like to practice these techniques before I need to use them so
that I understand how they work in a low stakes fashion.  This helps me
understand what I can and cannot do, and how to do it in a place that
does not matter in any way at all.

This is what I did to revive a dropped `docker-compose.yml` file.  The
idea is that if I can find the commit hash, I can `cherry-pick` it.

``` bash
git init
touch readme.md
git add readme.md
git commit -m "add readme"
touch docker-compose.yml
git add docker-compose.yml
git commit -m "add docker-compose"
git reset 3cfc --hard
git reflog
# copy the hash of the commit with my docker-compose commit
git cherry-pick fd74df3
```

## reflog

Here was the final reflog that shows all of my git actions.  **note** I
did reset twice.

``` bash
❯ git reflog --name-only
0404b6a (HEAD -> main) HEAD@{0}: cherry-pick: add docker-compose
docker-compose.yml
3cfcab9 HEAD@{1}: reset: moving to 3cfc
readme.md
9175695 HEAD@{2}: cherry-pick: add docker-compose
docker-compose.yml
3cfcab9 HEAD@{3}: reset: moving to 3cfc
readme.md
fd74df3 HEAD@{4}: commit: add docker-compose
docker-compose.yml
3cfcab9 HEAD@{5}: reset: moving to HEAD
readme.md
3cfcab9 HEAD@{6}: commit (initial): add readme
readme.md
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
    
    <a class='prev' href='/git-rewrite-history'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Rewrite History with Git</p>
        </div>
    </a>
    
    <a class='next' href='/git-reflog-is-an-alias'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Git reflog is an alias for git log -g</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>