---
cover: ''
date: 2021-01-18
datetime: 2021-01-18 00:00:00+00:00
description: Recently I automated starting new posts with a python script.  Today
  I want to https://waylonwalker.com/automating-my-post-starter Check out this post
  about set
edit_link: https://github.com/edit/main/pages/blog/quickly-edit-posts.md
jinja: false
long_description: "Recently I automated starting new posts with a python script.  Today
  I want to https://waylonwalker.com/automating-my-post-starter Check out this post
  about setting up my posts with python \U0001F40D For the process of editing a post
  I just need to open the f"
now: 2022-10-29 15:54:38.064250
path: pages/blog/quickly-edit-posts.md
slug: quickly-edit-posts
status: published
super_description: "Recently I automated starting new posts with a python script.
  \ Today I want to https://waylonwalker.com/automating-my-post-starter Check out
  this post about setting up my posts with python \U0001F40D For the process of editing
  a post I just need to open the file in vim quickly. change to the root of my blog
  fuzzy find the post open it with vim change back to the directory I was in For this
  I am going to go with a bash function.  This is partly due to being Lets setup the
  \ https://waylonwalker.com/reusabl"
tags:
- bash
templateKey: blog-post
title: Quickly Edit Posts
today: 2022-10-29
year: 2021
---

Recently I automated starting new posts with a python script.  Today I want to
work on the next part that is editing those posts quickly.


<div class="onelinelink-wrapper">
    <a class="onelinelink" href="https://waylonwalker.com/automating-my-post-starter/">
        <img style="float: right;" align='right' src="https://covers.waylonwalker.com/automating-my-post-starter.jpg" alt="article cover for Automating my Post Starter"/>
        <p><strong>Automating my Post Starter</strong></p>
    </a>
</div>


> Check out this post about setting up my posts with python 🐍

## Enter Bash

For the process of editing a post I just need to open the file in vim quickly.
I dont need much in the way of parsing and setting up the frontmatter.  I think
this is a simple job for a **bash** script and fzf.

1. change to the root of my blog
1. fuzzy find the post
1. open it with vim
1. change back to the directory I was in

## bash function

For this I am going to go with a bash function.  This is partly due to being
able to track where I was and get back.  Also the line with nvim will run fzf
everytime you source your `~/.alias` file which is not what we want.

Lets setup the **boilerplate**.  Its going to create a function called ep
`"edit post"`, track our current directory, create a sub function `_ep`.  Then
call that function and cd back to where we were no matter if `_ep` fails or
succeeds.

_<small><mark>boilerplate</mark></small>_
``` bash
ep () {
    _dir=$(pwd)
    _ep () {
        # open file here
    }
    _ep && cd $_dir || cd $_dir
}
```


<div class="onelinelink-wrapper">
    <a class="onelinelink" href="https://waylonwalker.com/reusable-bash/">
        <img style="float: right;" align='right' src="https://covers.waylonwalker.com/reusable-bash.jpg" alt="article cover for Creating Reusable Bash Scripts"/>
        <p><strong>Creating Reusable Bash Scripts</strong></p>
    </a>
</div>


> check out this post for more information about writing reusable bash scripts.

## FZF

Let's focus in on that `_ep` function here that is going to do the bulk of the
work to edit the post.

_<small><mark>cd to where I want to edit from</mark></small>_
``` bash
cd ~/git/waylonwalkerv2/
```

Next I need to find all markdown pages within my posts directory.  There is
probably a better way to filter with the `find` command directly, but I am not
worried about perf here and I knew how to do it without google.

_<small><mark>find all markdown</mark></small>_
``` bash
find ~/git/waylonwalkerv2/src/pages/ | grep .md$
```

Now that we can list all potential posts, sending the selected post back to
neovim is as easy as piping those files into fzf inside of a command
substitution that is called with neovim.


_<small><mark>putting together the edit command</mark></small>_
``` bash
$EDITOR $(find ~/git/waylonwalkerv2/src/pages/ | grep .md$ | fzf)
```

## Final Script

_<small><mark>final ep function</mark></small>_
``` bash
ep () {
    _dir=$(pwd)
    _ep () {
        cd ~/git/waylonwalkerv2/
        $EDITOR $(find ~/git/waylonwalkerv2/src/pages/ | grep .md$ | fzf)
    }
    _ep && cd $_dir || cd $_dir
}
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
    
    <a class='prev' href='/react-headroom'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>I just added react-headroom to my site</p>
        </div>
    </a>
    
    <a class='next' href='/quickly-change-conda-env-with-fzf'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Quickly Change Conda Env With Fzf</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>