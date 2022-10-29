---
cover: ''
date: 2020-03-03
datetime: 2020-03-03 00:00:00+00:00
description: Sometimes we get a little `git add . && git commit -m "WIP"` happy and
  mistakenly commit something that we just cant figure out.  This is a good way to
  figure out what the heck has changed on the current branch compared to any other
  branch.
edit_link: https://github.com/edit/main/pages/blog/git-diff-branches.md
jinja: false
long_description: Today I learned how to diff between two branches. Sometimes we get
  a little  Let After all of that, we have a git repository on our local machine with
  a single file  Let At this point we have one commit.  Things are really straightforward,
  and our di
now: 2022-10-29 15:54:38.064724
path: pages/blog/git-diff-branches.md
slug: git-diff-branches
status: published
super_description: "Today I learned how to diff between two branches. Sometimes we
  get a little  Let After all of that, we have a git repository on our local machine
  with a single file  Let At this point we have one commit.  Things are really straightforward,
  and our diff will be the same between the last commit and the main branch since.
  \ Let \U0001F446 At this point, our diff doesn I learn small tricks like this often
  with git.  Many times I forget about it and have to come back to re-learn. Sharing
  my thoughts gives me a"
tags: []
templateKey: blog-post
title: Today I learned `git diff feature..main`
today: 2022-10-29
year: 2020
---

Today I learned how to diff between two branches.

```
git diff feature..main
```

Sometimes we get a little `git add . && git commit -m "WIP"` happy and mistakenly commit something that we just can't figure out. This is a good way to figure out what the heck has changed on the current branch compared to any other branch.

## Example

Let's create a new directory, initialize git and toss some content into a readme.

``` bash
mkdir git-diff
git init
echo "hello there" > readme.md
git add . && git commit -m "hello there"
cat readme.md
```

After all of that, we have a git repository on our local machine with a single file `readme.md` that contains the following.

``` bash
hello there
```

##  Create a branch and ✍ edit

Let's checkout a new branch called Waylon and change the word `there` to `Waylon` in our `readme.md` file, then diff it.

``` bash
git checkout -b Waylon
echo "hello Waylon" > readme.md
git add . && git commit -m "hello Waylon"
git diff
```

``` diff
- hello there
+ hello waylon
```

At this point we have one commit.  Things are really straightforward, and our diff will be the same between the last commit and the main branch since.  Let's make another commit by adding the date.

``` bash
echo "hello waylon\n\n$(date)" > readme.md
cat readme.md
git diff
```

``` diff
hello Waylon
+
+ Fri 13 Mar 2020 04:23:21 PM DST
```
👆 At this point, our diff doesn't tell us the whole story between our current state and main, only between our current state and our last commit.  Let's commit our changes and compare our branch to main.

``` bash
git add . && git commit -m "add date"
git diff main..waylon
```

``` diff
- hello there
+ hello Waylon
+
+ Fri 13 Mar 2020 03:43:21 PM DST
```

## Git is powerful

I learn small tricks like this often with git.  Many times I forget about it and have to come back to re-learn. Sharing my thoughts gives me a better chance of remembering.
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
    
    <a class='next' href='/git-auto-commit-action-review'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Review of the git-auto-commit-action</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>