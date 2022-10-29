---
cover: ''
date: 2021-12-04
datetime: 2021-12-04 00:00:00+00:00
description: I often review Pull requests from the browser as it just makes it so
  easy to see https://youtu.be/5NKaZFavM0E This all stems from the great plugin by
  First to q
edit_link: https://github.com/edit/main/pages/blog/diffurcate.md
jinja: false
long_description: I often review Pull requests from the browser as it just makes it
  so easy to see https://youtu.be/5NKaZFavM0E This all stems from the great plugin
  by First to quickly checkout PR Next I have a few aliases setup for checking diffs.  The
  first one chec
now: 2022-10-29 15:54:38.064009
path: pages/blog/diffurcate.md
slug: diffurcate
status: published
super_description: I often review Pull requests from the browser as it just makes
  it so easy to see https://youtu.be/5NKaZFavM0E This all stems from the great plugin
  by First to quickly checkout PR Next I have a few aliases setup for checking diffs.  The
  first one checks what
tags:
- linux
- bash
- git
templateKey: blog-post
title: Code Review from the comfort of vim | Diffurcate
today: 2022-10-29
year: 2021
---

I often review Pull requests from the browser as it just makes it so easy to see
the diffs and navigate through them, but there comes a time when the diffs get
really big and hard to follow.  That's when its time to bring in the comforts of
vim.

https://youtu.be/5NKaZFavM0E

## Plugins needed

This all stems from the great plugin by
[AndrewRadev](https://github.com/AndrewRadev).  It breaks a down
into a project.  So rather than poping into a pager from git diff,
you can pipe to diffurcate and it will setup a project in a tmp
directory for you and you  can browse this project just like any
other except it's just a diff.

``` vim
Plug 'AndrewRadev/diffurcate.vim'
```

## My aliases

First to quickly checkout PR's from azure devops I have setup an alias to fuzzy
select a pr and let the `az` command do the checkout.

``` bash
alias azcheckout='az repos pr checkout --id $(az repos pr list --output table | tail -n -2 | fzf | cut -d " " -f1)'
```

Next I have a few aliases setup for checking diffs.  The first one checks what
is staged vs the current branch, the others check the current branch vs main or
master.

```
alias diffstaged="git diff --staged | nvim - +Diffurcate '+Telescope find_files'"
alias diffmain="git diff main.. | nvim - +Diffurcate '+Telescope find_files'"
alias diffmaster="git diff master.. | nvim - +Diffurcate '+Telescope find_files'"

diffcommit() {
    git diff $1 | nvim - +Diffurcate '+Telescope find_files'
}

```

## Links

* [diffurcte.vim](https://github.com/AndrewRadev/diffurcate.vim)
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
    
    <a class='prev' href='/digital-gardening-stream-6-6-2021'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>🌱 Digital Gardening | gif to Mp4 | Stream replay June 4, 2021</p>
        </div>
    </a>
    
    <a class='next' href='/devto-comments-from-url'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>How to get Dev Comments from an article Url</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>