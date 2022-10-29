---
cover: ''
date: 2022-02-28
datetime: 2022-02-28 00:00:00+00:00
description: 'Listing all the deleted files in all of git history can be done by These
  various commands will show all files that were ever deleted on The reflog can be
  super '
edit_link: https://github.com/edit/main/pages/til/git-find-deleted-files.md
jinja: false
long_description: Listing all the deleted files in all of git history can be done
  by These various commands will show all files that were ever deleted on The reflog
  can be super powerful in finding lost files here, as it only
now: 2022-10-29 15:54:38.065592
path: pages/til/git-find-deleted-files.md
slug: git-find-deleted-files
status: draft
super_description: Listing all the deleted files in all of git history can be done
  by These various commands will show all files that were ever deleted on The reflog
  can be super powerful in finding lost files here, as it only
tags:
- git
templateKey: til
title: git find deleted files
today: 2022-10-29
year: 2022
---

Listing all the deleted files in all of git history can be done by
combining `git log` with `--diff-filter`.  The log gives you lots of
options to show different bits of information about the commit that
happened at that point.  It's even possible to get a completely clean
list of files that are in your git history but have been deleted.

## git log --diff-filter

These various commands will show all files that were ever deleted on
your current branch.

``` bash
# This one includes the date, commit hash, and Author
git log --diff-filter D

# this one could be a git alias, but includes empty lines
git log --diff-filter D --pretty="format:" --name-only

# this one has the empty lines cleaned up
git log --diff-filter D --pretty="format:" --name-only | sed '/^$/d'
```
## git reflog --diff-filter

The reflog can be super powerful in finding lost files here, as it only
cares about git operations, not just the current branch.  It will search
accross all branches for deleted files and report them.

``` bash
# This one includes the commit hash, branch, tag, and commit message
git reflog --diff-filter D

# You might want to at least add the filename
git reflog --diff-filter D --name-only

# this one could be a git alias, but includes empty lines
git reflog --diff-filter D --pretty="format:" --name-only

# this one has the empty lines cleaned up
git reflog --diff-filter D --pretty="format:" --name-only | sed '/^$/d'
```

## get the last commit from a file

``` bash
git log -n 1 --pretty=format:%H -- file
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
    
    <a class='prev' href='/git-in-depth'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Git in Depth Notes</p>
        </div>
    </a>
    
    <a class='next' href='/git-diff-filter'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>git diff-filter</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>