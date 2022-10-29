---
cover: ''
date: 2022-01-28
datetime: 2022-01-28 00:00:00+00:00
description: As you work on your kedro projects you are bound to need to add more
  Before you start mucking around with any changes to dependencies make sure that
  New require
edit_link: https://github.com/edit/main/pages/til/kedro-new-dependencies.md
jinja: false
long_description: As you work on your kedro projects you are bound to need to add
  more Before you start mucking around with any changes to dependencies make sure
  that New requirements get added to a requirements.in file.  If you need to specify
  Here I added the popula
now: 2022-10-29 15:54:38.066121
path: pages/til/kedro-new-dependencies.md
slug: kedro-new-dependencies
status: draft
super_description: As you work on your kedro projects you are bound to need to add
  more Before you start mucking around with any changes to dependencies make sure
  that New requirements get added to a requirements.in file.  If you need to specify
  Here I added the popular  The command  Now that we have our new dependencies ready
  to go commit those to git, and
tags:
- kedro
- python
templateKey: til
title: Add New Dependencies to Your Kedro Project
today: 2022-10-29
year: 2022
---

As you work on your kedro projects you are bound to need to add more
dependencies to the project eventually.  Kedro uses a fantastic command
`pip-compile` under the hood to ensure that everyone is on the same version of
packages at all times, and able to easily upgrade them.  It might be a bit
different workflow than what you have seen, let's take a look at it.

## git status

Before you start mucking around with any changes to dependencies make sure that
your git status is clean.  I'd even reccomend starting a new branch for this,
and if you are working on a team potentially submit this as its own PR for
clarity.

``` bash
git status
git checkout main
git checkout -b add-rich-dependency
```

## requirements.in

New requirements get added to a requirements.in file.  If you need to specify
an exact version, or a minimum version you can do that, but if all versions
generally work you can leave it open.

``` bash
# requirements.in
rich
```

Here I added the popular `rich` package to my `requirements.in` file.  Since
I am ok with the latest version I am not going to pin anything, I am going to
let the pip resolver pick the latest version that does not conflict with any of
my dependencies for me.

## build-reqs

The command `kedro build-reqs` will tell kedro to recompile the
`requirements.txt` file that has all of our dependencies pinned down to exact
versions.  This ensures that all of our teammates and production workflows use
the same exact versions of packages even if new ones are released after we
installed on our development machines.

``` bash
kedro build-reqs
```

## git add

Now that we have our new dependencies ready to go commit those to git, and
submit a PR for them if you are working on a team.  This is a good way to
document the discussion of adding new dependencies to your teams project.

``` bash
git add requirements.in
git add requirements.txt
git status
git commit -m "FEAT updated dependencies with rich"
git push
# go make a pr
gh pr create --title "feat add rich to dependencies" --body "I added rich as a dependency, and ran pip-compile"
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
    
    <a class='prev' href='/kedro-node'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Comprehensive guide to creating kedro nodes</p>
        </div>
    </a>
    
    <a class='next' href='/kedro-new'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Kedro New</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>