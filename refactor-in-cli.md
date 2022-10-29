---
cover: ''
date: 2020-12-30
datetime: 2020-12-30 00:00:00+00:00
description: As projects grow patterns that worked early on break and we need to change
  things to make the project easier to work with, and more welcoming to new developers.
edit_link: https://github.com/edit/main/pages/blog/refactor-in-cli.md
jinja: false
long_description: As projects grow patterns that worked early on break and we need
  to change things to make the project easier to work with, and more welcoming to
  new developers. Before you start mucking up a project with wild commands at the
  terminal check that you h
now: 2022-10-29 15:54:38.064855
path: pages/blog/refactor-in-cli.md
slug: refactor-in-cli
status: published
super_description: As projects grow patterns that worked early on break and we need
  to change things to make the project easier to work with, and more welcoming to
  new developers. Before you start mucking up a project with wild commands at the
  terminal check that you have a super clean git status. We may make some mistakes
  and need a way to undo 100 If we are ready to begin work we should see a response
  like this. It would also be wise to do this inside of a branch.  The minute you
  try to do something wild in your
tags: []
templateKey: blog-post
title: Large Refactor At The Command Line
today: 2022-10-29
year: 2020
---

As projects grow patterns that worked early on break and we need to change things to make the project easier to work with, and more welcoming to new developers.

## git

Before you start mucking up a project with wild commands at the terminal check that you have a super clean git status. We may make some mistakes and need a way to undo 100's files and git makes it really easy if you start with a clean history.

```bash
git status
```

If we are ready to begin work we should see a response like this.

``` bash
On branch main
nothing to commit, working tree clean
```

It would also be wise to do this inside of a branch.  The minute you try to do something wild in your working branch someone will walk by and ask you to do a five-minute task, but your deep in refactoring and haven't left yourself a clean way back.

``` bash
git branch my-big-refactor
```

## grepr

Time for the meat of this refactor replacing text across our project.  I often will pop this bash function into my terminal session and tweak it as needed. This function is called `grepr` for `grep` then `replace`.  It will recursively search for a given pattern inside your working directory, then use `sed` to replace that pattern with another.

``` bash
grepr() {grep -iRl "$1" | xargs sed -i "s/$1/$2/g"}
```

If your pattern contains `/` characters such as for URLs you can swap the `/`'s in the `sed` command for `|`'s.

``` bash
grepr() {grep -iRl "$1" | xargs sed -i "s|$1|$2|g"}
```

You can find this function and more of my bash notes.


<div class="onelinelink-wrapper">
    <a class="onelinelink" href="https://waylonwalker.com/bash/">
        <img style="float: right;" align='right' src="https://covers.waylonwalker.com/bash.jpg" alt="article cover for 📝 Bash Notes"/>
        <p><strong>📝 Bash Notes</strong></p>
    </a>
</div>



## Example

I recently flattened this blog so blogs are under the top-level rather than under `/blog` and I used this technique to swap internal links to the new format.

``` bash
grepr() {grep -iRl "$1" | xargs sed -i "s|$1|$2|g"}


grepr "https://waylonwalker.com/blog/" "https://waylonwalker.com/"
```

## git diff

After running the replace command the first thing I want to see is everything that changed.  Looking at git diff will highlight exactly what changed since our last commit.

``` bash
git diff
```

## Work in small steps

If you're happy with the results commit them now.  It's best to do these commands that have a large effect on the entire project in small steps.

``` bash
git add .
git commit -m "moved routes from /blog to /"
```

Working in small steps gives us an easy way to undo steps that may have been a mistake before it's too late.


<div class="onelinelink-wrapper">
    <a class="onelinelink" href="https://waylonwalker.com/master-no-more/">
        <img style="float: right;" align='right' src="https://covers.waylonwalker.com/master-no-more.jpg" alt="article cover for Master No More"/>
        <p><strong>Master No More</strong></p>
    </a>
</div>



> I used the technique from this post to switch master to main on my blog.

## git reset
_How I do Mass Undo_

**be careful** work from a branch, make sure you started clean

Let's say I wanted to change every occurrence of one variable name to another.
Lets try to replace replace `pandas.CSVDataSet` with `pandas.ParquetDataSet`.

``` bash
grepr() {grep -iRl "$1" | xargs sed -i "s|$1|$2|g"}


grepr "pandas.CSVDataSet" "pandas.ParquetDataSet"
```

Upon inspection of the `git diff` we notice that there was an unintentional change to the `docs/standard-storage.md` file. To revert the entire change we can run.

**note** These resets are irreversible.  Make sure that you started with a clean `git status` and you are confident that you didn't have any work on your machine, not in the remote repo.

_<small><mark>match the remote and wipe out any changes</mark></small>_
``` bash
git reset --hard origin/main
```

_<small><mark>match our last commit</mark></small>_
``` bash
git reset --hard HEAD
```

## agr

I have an alternative version that I occasionally use as well that utilizes the silver searcher `ag`.  It does a great job at following your .gitignore rules with no fuss, and can filter down to file extensions simply with flags like `--md`

```bash
agr() {ag -l "$1" | xargs sed -i "s/$1/$2/g"}
```

## git clean
_how I remove untracked files_

Sometimes our refactoring requires moving files around. If we want to undo steps like this git will not clean up untracked files.

``` bash
mv conf/base/sales-catalog.yml conf/base/sales/catalg.yml
```

_<small><mark>clean up untracked files</mark></small>_
``` bash
git clean -f
```

_<small><mark>clean up untracked directories</mark></small>_
``` bash
git clean -d
```


_<small><mark>clean up ignored files</mark></small>_
``` bash
git clean -x
```

`-x` can be a bit dangerous, be careful with it.  You can lose significant time by wiping out a `node_modules`, `venv`, or credentials.

## git  checkout
_How I undo single files_

If our command was mostly successful, but just a few extra files were touched I will manually revert them with `git checkout <filename>`

``` bash
git checkout conf/base/supply-catalog.yml
```

## git checkout --
_How I undo an entire directory_

Sometimes we need to undo an entire directory.  This command will undo changes
to all of the tracked files in the repo.

``` bash
git checkout -- /src/pages/blog
```

## gitui

I really love using `gitui` as a handy terminal interface to browse logs, diffs, and commit a few files at a time.  It starts up crazy fast and is very intuitive to navigate through diffs of changes like this one file at a time if the `git diff` gets too overwhelming.

https://github.com/extrawurst/gitui/
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
    
    <a class='prev' href='/reset-ipython'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Reclaim memory usage in Jupyter</p>
        </div>
    </a>
    
    <a class='next' href='/reasons-to-kedro-notes'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Reasons to Kedro</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>