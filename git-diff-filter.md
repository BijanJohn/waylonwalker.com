---
cover: ''
date: 2022-02-27
datetime: 2022-02-27 00:00:00+00:00
description: Git commands such as  You can find the full description by searching
  for  Open up a git repo and play around with this, here are some example that
edit_link: https://github.com/edit/main/pages/til/git-diff-filter.md
jinja: false
long_description: Git commands such as  You can find the full description by searching
  for  Open up a git repo and play around with this, here are some example that
now: 2022-10-29 15:54:38.066514
path: pages/til/git-diff-filter.md
slug: git-diff-filter
status: draft
super_description: Git commands such as  You can find the full description by searching
  for  Open up a git repo and play around with this, here are some example that
tags:
- git
templateKey: til
title: git diff-filter
today: 2022-10-29
year: 2022
---

Git commands such as `diff`, `log`, `whatchanged` all take a flag called
`--diff-filter`.  This can filter for only certain types of diffs, such
as added (A), modified (M), or deleted (D).

## Man page

You can find the full description by searching for `--diff-filter` in
the `man git diff` page.

``` bash
--diff-filter=[(A|C|D|M|R|T|U|X|B)...[*]]
    Select only files that are Added (A), Copied (C), Deleted (D), Modified (M), Renamed (R), have their type (i.e. regular file, symlink, submodule, ...)
    changed (T), are Unmerged (U), are Unknown (X), or have had their pairing Broken (B). Any combination of the filter characters (including none) can be used.
    When * (All-or-none) is added to the combination, all paths are selected if there is any file that matches other criteria in the comparison; if there is no
    file that matches other criteria, nothing is selected.

    Also, these upper-case letters can be downcased to exclude. E.g.  --diff-filter=ad excludes added and deleted paths.

    Note that not all diffs can feature all types. For instance, diffs from the index to the working tree can never have Added entries (because the set of paths
    included in the diff is limited by what is in the index). Similarly, copied and renamed entries cannot appear if detection for those types is disabled.
```

## Try it out

Open up a git repo and play around with this, here are some example that
I played with that seemed useful to me.

``` bash
# find when any files were deleted
git log --diff-filter D

# find when all files were added
git log --diff-filter A

# only one specific file
git log --diff-filter A -- readme.md

# partial match to a single file
git log --diff-filter A -- read*

# Find when all python files were added
git log --diff-filter A -- *.py
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
    
    <a class='prev' href='/git-find-deleted-files'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>git find deleted files</p>
        </div>
    </a>
    
    <a class='next' href='/git-diff-branches'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Today I learned `git diff feature..main`</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>