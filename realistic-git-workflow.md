---
cover: ''
date: 2019-05-27
datetime: 2019-05-27 00:00:00+00:00
description: My git workflow based on real life.  Its  not always clean and simple.
  As complicated as that seems it is pretty straight forward.  When you sit down to
  work th
edit_link: https://github.com/edit/main/pages/blog/realistic-git-workflow.md
jinja: false
long_description: My git workflow based on real life.  Its  not always clean and simple.
  As complicated as that seems it is pretty straight forward.  When you sit down to
  work the first thing you do is to  Next create a new branch with a name that will
  remind you of w
now: 2022-10-29 15:54:38.065396
path: pages/blog/realistic-git-workflow.md
slug: realistic-git-workflow
status: published
super_description: My git workflow based on real life.  Its  not always clean and
  simple. As complicated as that seems it is pretty straight forward.  When you sit
  down to work the first thing you do is to  Next create a new branch with a name
  that will remind you of what you are working on.  For your own sanity choose something
  descriptive. It is easy to get too many similar branches going and forget which
  branch is which. If you know which files in existance that you will be editing before
  you start work it is a
tags:
- git
templateKey: blog-post
title: Realistic Git Workflow
today: 2022-10-29
year: 2019
---

My git workflow based on real life.  Its  not always clean and simple.

_sometimes things get messy_

## The Clean Path

![](https://images.waylonwalker.com/akira-hojo-652732-unsplash.jpg)

**pull 👉 branch 👉 format 👉 work👉 add 👉 commit 👉 pull 👉 rebase 👉 push**

<iframe src='./clean' height=400 width=800 frameborder=None, >

### Pull

As complicated as that seems it is pretty straight forward.  When you sit down to work the first thing you do is to **pull** down the teams latest working "develop" branch from git.

    git checkout develop
    git pull

### Branch

Next create a new branch with a name that will remind you of what you are working on.  For your own sanity choose something descriptive. It is easy to get too many similar branches going and forget which branch is which.

    git checkout -b ingest_product_id_table

### Format

If you know which files in existance that you will be editing before you start work it is a good idea to format them in a commit early on to keep your working commits separate from formatting.  This will make it easier for reviewers to distinguish from your changes and formatting fixes.

If your team agrees to a consistent formatting logic, sticks to it and always remembers to run the linting/fixing tools you should not have anything to  change.  But thats not what this post is about, its about the real world.  People forget to run linters, some don't care, some may not even be aware of the teams formatting guidelines.  Talk to your team about these things and get on the same page.

I care about formatting, we all should.  We want to put out the best work we can in  our craft.  Realistically though I dont really care about nit picky stuff, I just want things consistant so that it makes things easier to read without me taking the time to swap  out quotes, and fix line spacing. I want a tool to do it for me, and when that tool runs I dont want it mixing in the same commit as my work.

    black .
    git add .
    git commit -m "FIX formatted with black"

### Work

Make your changes to your code, test them, document them, clean it up, do what you do best.

### add and commit

Next you will need to stage files that have changed for commit, and commit them.  This can be done in stages to make it clear what the progression was to finish the task you were assigned.

**add all files**

        git add .

**add a single file**

    git add "path/to/myfile.ext"

**one line commit message**

Here make sure that you create clear messages so that others know.  There are whole posts out there showing how to better write clear commit messages and why you should, check out those posts for more information.

    git commit -m "FEAT ingested product id table on pipeline"

**multi-line commit message**

If you want some more information in your commit message run `git commit` without `-m` and it will pop you into your configured git editor, which is vim by default.

### Super quick vim primer

By default when you run `git commit` you will pop into a vim editor and may want to throw your keyboard before you figure out exactly how to get out of the damn thing.  First type `i` to insert text.  Type out your commit message. Then hit `esc` followed by `:x`.  This is the most basic things you need, and will get you through a commit message.  Vim is a whole topic on its own.

### Integrate your changes

Now that you have made your changes and commited them its time to integrate them into the codebase so that everyone else can see them.  It is likely that time has gone by, and others have made changes to the codebase since you have, so you will want to pull those down first then switch back to your branch.

    git checkout develop
    git pull
    git checkout ingest_product_id_table

Now you have the latest code changes and your work locally.  I prefer to rebase my work with the develop branch, pretending that I started my work after all of the other changes had occurred.  You can choose to merge, but I prefer not to have the extra merge commits in my PR.

    git rebase develop

### push

Now its time to push out to the remote repository and create your PR.

    git push --set-upstream ingest_product_id_table

Open your repository in your web browser and you should see that you have just pushed to a new branch and a  button to open a Pull Request (PR).

### Your Not Done yet

Opening a PR is not a done deal, it starts the conversation to get your code approved to be merged into the develop or main branch.  Your approver may have an idea to clean it up to make it more readable/maintainable, or something to make it more performant.  Remember that a second set of eyes sometimes has a new set of clarity that you do not as you have seen the work from start to end.  At this point they may request changes, discussion, or choose to accept and merge it in.

## Realistically

_We all hit some pitfalls along the way_

![](https://images.waylonwalker.com/ian-espinosa-177961-unsplash.jpg)

Things get dirty, the clean path is not always the path that is taken, but with git we can clean up our mess and make it look that way.

## I started working from main/develop before branching

_Pitfall #1_

This is my most common pitfall.  I get really excited to start work and jump right in.  Then when I go to make some commits I see that `main` branch staring me right in the face from my bash prompt.

**stash those changes away**

    git stash
    git checkout -b feature_branch
    git stash pop

**want to see what changes you have stashed away**

    git stash list

## I committed to the wrong branch

_Pitfall #2_

**Create a new branch**
_Solution #1_

It is common that I just forget to switch from the main/develop branch into my feature branch before starting work. You will first need to look at your `git log` and determine how many commits to go back or a git hash to go back to.


**CAUTION** `git reset --hard` will kill changes and you will never get them back if you did not first put them somewhere.  I myself have been burned by this command, there is no recovering from a **hard** reset.


    git log
    # note commit hash or ~n to go back to
    git branch feature_branch
    git reset --hard HEAD ~3
    # or
    git reset --hard a1b2c4d4

**Move to an Existing Branch**

Sometimes when juggling many different features we are in the middle of several branches and forget to switch between them.  If its the case that you already have a `feature_branch` for the feature that you are working on, you can use this solution.

    git status
    # note current_branch
    git checkout feature_branch
    git merge current_branch
    git reset --hard HEAD ~3
    # or
    git reset --hard a1b2c4d4


## Another feature was complete before mine
_pitfall #3_

This can be a big matter of preference of how to deal with this just google `merge` vs `rebase`.  For this particular pitfall I prefer to **`rebase`**.  When you look at the git log and commit history it will appear as if you made your changes after everyone else made theirs.  I do this to clean up the PR and make it easier for the approver to read.  There will be less merge commits, and less history to try to understand.

**Before pushing to the remote repository**

```bash
git fetch --all
# or
git checkout develop
git pull
git checkout feature_branch
# then
git rebase develop
```

**if its your first rodeo** or you are unsure how the rebase will go you can create a safty branch.

```bash
git branch saftey_feature_branch
git fetch --all
git rebase develop
git branch -D safety_feature_branch # deletes safety_feature_branch
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
    
    <a class='prev' href='/reasons-to-kedro'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>reasons-to-kedro</p>
        </div>
    </a>
    
    <a class='next' href='/reading-list'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Reading List</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>