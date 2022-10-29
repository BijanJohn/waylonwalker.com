---
cover: ''
date: 2021-12-08
datetime: 2021-12-08 00:00:00+00:00
description: If you are running vim autocmd https://youtu.be/2ITTn4Dl0lc For  Lets
  create a new file called  I What you need to do is clear out all commands in the
  augroup w
edit_link: https://github.com/edit/main/pages/blog/vim-augroup.md
jinja: false
long_description: If you are running vim autocmd https://youtu.be/2ITTn4Dl0lc For  Lets
  create a new file called  I What you need to do is clear out all commands in the
  augroup with  Now this is what I have in my dotfiles for a silky smooth setup that
  does not
now: 2022-10-29 15:54:38.065410
path: pages/blog/vim-augroup.md
slug: vim-augroup
status: published
super_description: If you are running vim autocmd https://youtu.be/2ITTn4Dl0lc For  Lets
  create a new file called  I What you need to do is clear out all commands in the
  augroup with  Now this is what I have in my dotfiles for a silky smooth setup that
  does not
tags:
- linux
- vim
templateKey: blog-post
title: You must use augroup with autocmd in vim | Here's how
today: 2022-10-29
year: 2021
---

If you are running vim autocmd's without a group, you're killing your
performance.  Granted your probably not sourcing your vimscript files with
autocmd's too often, but every time you source that vimscript you are adding
another command that needs to run redundantly.

https://youtu.be/2ITTn4Dl0lc

## This is what I had
_Not silky smooth_

For **WAAY** too long I have had something like this in my  vimrc or init.vim.
It formats my python for me on every save, works great except if I source my
dotfiles more than once I start adding how many times black runs.

``` vim
autocmd bufwritepre *.py execute 'Black'
```

## Why is a bare autocmd bad
_let me demonstrate_

Lets create a new file called `format.vim` and give it the `:so %`. Works
great, it starts telling me that its formatting.

``` vim
autocmd bufwritepre *.py :echo("formatting with black")
```

![too-many-formats](https://images.waylonwalker.com/vim-augroups-too-many-formats.GIF)

**BUT** as every time I give it the `:so %` it formats an extra time on every
single save.

## Setting up an augroup

I've been told I need an `augroup` to prevent duplicates. So I did it, and
nothing changes, it still ran as many times as it was sources on every save.

``` vim
augroup black
    autocmd bufwritepre *.py :echo("formatting with black")
augroup end
```

## Clearing out the augroup

What you need to do is clear out all commands in the augroup with `autocmd!`
right at the beginning of the group.

``` vim
augroup black
    autocmd!
    autocmd bufwritepre *.py :echo("formatting with black")
augroup end
```

## My Final silky smooth setup

Now this is what I have in my dotfiles for a silky smooth setup that does not
run automds like crazy as I am making changes to my dotfiles.

``` vim
augroup waylonwalker
    autocmd!
    autocmd bufwritepre *.py execute 'PyPreSave'
    autocmd bufwritepost *.py execute 'PyPostSave'
    autocmd bufwritepost .tmux.conf execute ':!tmux source-file %' autocmd bufwritepost .tmux.local.conf execute ':!tmux source-file %'
    autocmd bufwritepost *.vim execute ':source %'
augroup end
```


## Related Links

* [vim-help](https://vimhelp.org/autocmd.txt.html#%3Aaugroup)
* [youtube video](https://youtu.be/2ITTn4Dl0lc) for this article
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
    
    <a class='prev' href='/vim-replace-visual-star'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Vim Replace Visual Star</p>
        </div>
    </a>
    
    <a class='next' href='/variable-names-don-t-need-their-type'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Variables names don't need their type</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>