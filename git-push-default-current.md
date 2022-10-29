---
cover: ''
date: 2022-03-09
datetime: 2022-03-09 00:00:00+00:00
description: Has no upstream branch errors in git can be such a damn productivity
  killer. If you have not yet configured git to always push to the current branch,
  you Let Yo
edit_link: https://github.com/edit/main/pages/til/git-push-default-current.md
jinja: false
long_description: Has no upstream branch errors in git can be such a damn productivity
  killer. If you have not yet configured git to always push to the current branch,
  you Let You will be presented with the following error. To resolve this fatal error
  your first optio
now: 2022-10-29 15:54:38.065847
path: pages/til/git-push-default-current.md
slug: git-push-default-current
status: draft
super_description: Has no upstream branch errors in git can be such a damn productivity
  killer. If you have not yet configured git to always push to the current branch,
  you Let You will be presented with the following error. To resolve this fatal error
  your first option is simply to follow the Honestly I am pretty aware of the branch
  I am on, and Very few times have I To just push to the branch you are currently
  on each and every time and never
tags:
- git
templateKey: til
title: Configure Git to Always Push to the Current Branch
today: 2022-10-29
year: 2022
---

Has no upstream branch errors in git can be such a damn productivity killer.
You gotta stop your flow and swap over the branch, there is a config so that
you don't have to do this.

## **fatal** has no upstream branch

If you have not yet configured git to always push to the current branch, you
will get a `has no upstream branch` error if you don't explicitly set it.

Let's show an example

``` bash
git checkout -b feat/ingest-inventory-data
git add conf/base/catalog.yml
git commit -m "feat: ingest inventory data from abc-db"
git push
```

You will be presented with the following error.

``` bash
fatal: The current branch feat/ingest-inventory-data has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin feat/ingest-inventory-data
```
## Option 1: follow the instructions

To resolve this fatal error your first option is simply to follow the
instructions given.  Just copy and paste it in.

``` bash
git push --set-upstream origin feat/ingest-inventory-data
```

## Option 2: push to current bransh wihtout setting upstream

Honestly I am pretty aware of the branch I am on, and Very few times have I
ever accidently pushed to the wrong branch.  The one that you might have a
bigger chance with a more detrimental effect is `main`, which I will argue you
should have blocked to require a passing `ci`, and potentially reviewers to
merge in.  Therefore you can't even push to `main` anyways.

To just push to the branch you are currently on each and every time and never
see this error again, you can run this to configure git to always push to your
current branch.

``` bash
git config --global push.default current
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
    
    <a class='prev' href='/git-push-without-setting-upstream'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>git push without setting upstream</p>
        </div>
    </a>
    
    <a class='next' href='/git-pager'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Set Your Git Pager Config</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>