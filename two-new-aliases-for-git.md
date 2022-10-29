---
cover: ''
date: 2022-06-28
datetime: 2022-06-28 00:00:00+00:00
description: 'Recently I added two new bash/zsh aliases to make my git experience
  just a tad Most of our work repos were recently migrated to new remote urls, we
  scriped The '
edit_link: https://github.com/edit/main/pages/til/two-new-aliases-for-git.md
jinja: false
long_description: Recently I added two new bash/zsh aliases to make my git experience
  just a tad Most of our work repos were recently migrated to new remote urls, we
  scriped The following command will always return the currently checked out branch
  name. Injecting this
now: 2022-10-29 15:54:38.066429
path: pages/til/two-new-aliases-for-git.md
slug: two-new-aliases-for-git
status: published
super_description: Recently I added two new bash/zsh aliases to make my git experience
  just a tad Most of our work repos were recently migrated to new remote urls, we
  scriped The following command will always return the currently checked out branch
  name. Injecting this into the suggested  I sometimes get a bit lazy at checking
  main for changes before submitting any Here are both of the alias
tags:
- git
templateKey: til
title: Two new shell aliases for git
today: 2022-10-29
year: 2022
---

![Astronaut doing a mic drop with explosion](https://stable-diffusion.waylonwalker.com/000172.3260819219.webp)

Recently I added two new bash/zsh aliases to make my git experience just a tad
better.

## trackme

Most of our work repos were recently migrated to new remote urls, we scriped
out the update to all of the repos, but I was left with a tracking error for
all of my open branches.  To easily resolve this I just made an alias so that I
can just run `trackme` anytime I see this error.

```txt
There is no tracking information for the current branch.
    Please specify which branch you want to merge with.
    See git-pull(1) for details

    git pull <remote> <branch>

If you wish to set tracking information for this branch you can do so with:

    git branch --set-upstream develop origin/<branch>
```

### getting the branch

The following command will always return the currently checked out branch name.

``` bash
git symbolic-ref --short HEAD
```

Injecting this into the suggested `git` command as a subshell gives us this
alias that when ran with `trackme` will automatically fix tracking for my
branch.

``` bash
alias trackme='git branch --set-upstream-to=origin/$(git symbolic-ref --short HEAD)'
```

## rebasemain

I sometimes get a bit lazy at checking main for changes before submitting any
prs, so again I made a quick shell alias that will rebase main into my branch
before I open a pr.

``` bash
alias rebasemain='git pull origin main --rebase'
```

## The Aliases

Here are both of the alias's, feel free to steal and modify them into your
dotfiles.  If you are uniniatiated a common starting place to put these is
either in your `~/.bashrch` or `~/.zshrc` depending on your shell of choice.

``` bash
alias trackme='git branch --set-upstream-to=origin/$(git symbolic-ref --short HEAD)'
alias rebasemain='git pull origin main --rebase'
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
    
    <a class='prev' href='/update-copier'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Copier < 6.0.0b0 considered dangerous</p>
        </div>
    </a>
    
    <a class='next' href='/twitter-deepdives'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Twitter deepdives</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>