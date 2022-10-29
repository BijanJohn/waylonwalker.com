---
cover: ''
date: 2022-05-04
datetime: 2022-05-04 00:00:00+00:00
description: 'Sometimes you get a PR on a project, but cannot review it without wrecking
  your This will create a new directory '
edit_link: https://github.com/edit/main/pages/til/review-pull-requests-with-git-worktrees.md
jinja: false
long_description: 'Sometimes you get a PR on a project, but cannot review it without
  wrecking your This will create a new directory '
now: 2022-10-29 15:54:38.065697
path: pages/til/review-pull-requests-with-git-worktrees.md
slug: review-pull-requests-with-git-worktrees
status: draft
super_description: 'Sometimes you get a PR on a project, but cannot review it without
  wrecking your This will create a new directory '
tags:
- git
templateKey: til
title: Review Pull Requests with git worktrees
today: 2022-10-29
year: 2022
---

Sometimes you get a PR on a project, but cannot review it without wrecking your
current working setup.  This might be because it needs to be compiled, or a new
set of requirements.  Git worktrees is a great way to chekout the remote branch
in a completely separate directory to avoid changing any files in your current
project.

``` bash
# pattern
# git worktree add -b <branch-name> <PATH> <remote>/<branch-name>
git worktree add -b fix-aws-service-cnsn /tmp/project origin/fix-aws-service-cnsn
```

This will create a new directory `/tmp/project` that you can review the branch
`fix-aws-service-cnsn` from the remote `origin`.  If you have setup different remotes locally you can check for the name of it with `git remote -v`
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
    
    <a class='prev' href='/rich-syntax-range-style'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Highlighting text ranges with Rich | python</p>
        </div>
    </a>
    
    <a class='next' href='/reusable-bash'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Creating Reusable Bash Scripts</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>