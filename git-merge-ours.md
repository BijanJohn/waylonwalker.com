---
cover: ''
date: 2022-05-24
datetime: 2022-05-24 00:00:00+00:00
description: Sometimes you have a pretty old branch you are trying to merge into and
  you are The first step is to make sure your local copy of the branch you are moving
  It M
edit_link: https://github.com/edit/main/pages/til/git-merge-ours.md
jinja: false
long_description: 'Sometimes you have a pretty old branch you are trying to merge
  into and you are The first step is to make sure your local copy of the branch you
  are moving It Merge the changes from main into  Now is where the merge conflict
  may have started. If you '
now: 2022-10-29 15:54:38.066077
path: pages/til/git-merge-ours.md
slug: git-merge-ours
status: draft
super_description: Sometimes you have a pretty old branch you are trying to merge
  into and you are The first step is to make sure your local copy of the branch you
  are moving It Merge the changes from main into  Now is where the merge conflict
  may have started. If you are completely sure This will pop open your configured  Now
  push your changes that do not clash with main and finish your pr.
tags:
- git
templateKey: til
title: git merge ours
today: 2022-10-29
year: 2022
---

Sometimes you have a pretty old branch you are trying to merge into and you are
absolutely sure what you have is what you want, and therefore you don't want to
deal with any sort of merge conflicts, you would rather just tell git to use my
version and move on.

## update main

The first step is to make sure your local copy of the branch you are moving
into is up to date.

``` bash
git checkout main
git pull
```

## update your feature branch

It's also worth updating your feature branch before doing the merge. Maybe you
have teammates that have updated the repo, or you popped in a quick change from
the web ui. It's simple and worth checking.

``` bash
git checkout my-feature
git pull
```

## start the merge

Merge the changes from main into `my-feature` branch.

```
git merge main
```

Now is where the merge conflict may have started. If you are completely sure
that your copy is correct you can `--ours`, if you are completely sure that
`main` is correct, you can `--theirs`.

```
git checkout --ours .
git merge --continue
```

This will pop open your configured `git.core.editor` or `$EDTIOR`. If you have
not configured your editor, it will default to vim.  Close vim with `<escape>:x`, accepting the
merge message.

Now push your changes that do not clash with main and finish your pr.

```
git push
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
    
    <a class='prev' href='/git-pager'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Set Your Git Pager Config</p>
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