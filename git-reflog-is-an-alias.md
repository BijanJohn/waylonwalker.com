---
cover: ''
date: 2022-02-19
datetime: 2022-02-19 00:00:00+00:00
description: 'Right inside the git  This epiphany deepens my understanding of git,
  and lets me understand that most Here are some git commands for you to try out on
  your own '
edit_link: https://github.com/edit/main/pages/til/git-reflog-is-an-alias.md
jinja: false
long_description: 'Right inside the git  This epiphany deepens my understanding of
  git, and lets me understand that most Here are some git commands for you to try
  out on your own that are all pretty If I am looking for a missing file, I might
  want to leverage  Here is '
now: 2022-10-29 15:54:38.066478
path: pages/til/git-reflog-is-an-alias.md
slug: git-reflog-is-an-alias
status: draft
super_description: Right inside the git  This epiphany deepens my understanding of
  git, and lets me understand that most Here are some git commands for you to try
  out on your own that are all pretty If I am looking for a missing file, I might
  want to leverage  Here is an example where I lost my  This just proves that its
  harder to remove something from git, than it is to
tags:
- git
- cli
templateKey: til
title: Git reflog is an alias for git log -g
today: 2022-10-29
year: 2022
---

Right inside the git [docs](https://git-scm.com/docs/git-reflog#_description),
is states that the `git reflog` command runs `git reflog show` by default which
is an alias for `git log -g --abbrev-commit --pretty=oneline`

This epiphany deepens my understanding of git, and lets me understand that most
`git log` flags might also work with `git log -g`.


## full or short format

Here are some git commands for you to try out on your own that are all pretty
similar, but vary in how much information they show.

``` stat
# These show only first line of the commit message subject, the hash, and index
git reflog
git log -g --abbrev-commit --pretty=oneline

# similar to git log, this is a fully featured log with author, date, and full
# commit message
git log -g
```

## add files

If I am looking for a missing file, I might want to leverage `--name-only` or
`--stat`, to see where I might have hard reset that file, or deleted it.

```
git reflog --stat
git log -g --stat --abbrev-commit --pretty=oneline

git reflog --name-only
git log -g --name-only --abbrev-commit --pretty=oneline
```

## example

Here is an example where I lost my `docker-compose.yml` file in a git reset,
and got it back by finding the commit hash with `git reflog` and cherry picked
it back.

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

This just proves that its harder to remove something from git, than it is to
get it back.  It can feel impossible to get something back, but once its in, it
feels even more impossible to get it out.
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
    
    <a class='prev' href='/git-revive-dead-files'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Revive files from the dead with git</p>
        </div>
    </a>
    
    <a class='next' href='/git-recover-checkout'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Recover a lost git branch with checkout</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>