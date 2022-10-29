---
cover: /static/neovim-live-substitution.png
date: 2021-01-04
datetime: 2021-01-04 00:00:00+00:00
description: Replacing text in vim can be quite frustrating especially since it doesn
  https://twitter.com/ I had to do a bit of searching and found a great post from  I
  beli
edit_link: https://github.com/edit/main/pages/blog/neovim-live-substitution.md
jinja: false
long_description: Replacing text in vim can be quite frustrating especially since
  it doesn https://twitter.com/ I had to do a bit of searching and found a great post
  from  I believe that this is a neovim only feature, add it into your Check out Josh
  Branchaud https://
now: 2022-10-29 15:54:38.063521
path: pages/blog/neovim-live-substitution.md
slug: neovim-live-substitution
status: published
super_description: Replacing text in vim can be quite frustrating especially since
  it doesn https://twitter.com/ I had to do a bit of searching and found a great post
  from  I believe that this is a neovim only feature, add it into your Check out Josh
  Branchaud https://www.youtube.com/watch?v=5jMiYtXz2QA
tags:
- linux
- vim
templateKey: blog-post
title: Live Substitution In Neovim
today: 2022-10-29
year: 2021
---

Replacing text in vim can be quite frustrating especially since it doesn't have
live feedback to what is changing. Today I was watching Josh Branchaud's
Vim-Unalphabet series on Youtuve and realized that his vim was doing this and I
had to have it.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">neovim can live highlight substitutions.<br><br>:set inccommand=nosplit</p>&mdash; Waylon Walker 🐍 (@_WaylonWalker) <a href="https://twitter.com/_WaylonWalker/status/1346081617199198210?ref_src=twsrc%5Etfw">January 4, 2021</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>



## How to do it.

I had to do a bit of searching and found a great post from [vimcasts](http://vimcasts.org/episodes/neovim-eyecandy/) that shows exactly how to get the live search and replace highlighting using `inccomand`


## :h inccommand


``` vim
'inccommand' 'icm'	string	(default "")
			global
			
	"nosplit": Shows the effects of a command incrementally, as you type.
	"split"	 : Also shows partial off-screen results in a preview window.

	Works for |:substitute|, |:smagic|, |:snomagic|. |hl-Substitute|

	If the preview is too slow (exceeds 'redrawtime') then 'inccommand' is
	automatically disabled until |Command-line-mode| is done.

```

## Add this to your config

I believe that this is a neovim only feature, add it into your
`~/.config/nvim/init.vim` file. You can see it in my
[dotfiles](https://github.com/WaylonWalker/devtainer/blob/main/nvim/.config/nvim/settings.vim#L155)
as well.

``` vim
set inccommand=nosplit
```

## See it in Action

![example live
substitution](https://images.waylonwalker.com/nvim-live-substitute-inccommand.gif)

## The Video that inspired this

Check out Josh Branchaud's great series on the Vim-Unalphabet.

https://www.youtube.com/watch?v=5jMiYtXz2QA
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
    
    <a class='prev' href='/new-machine-tpio'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>New Machine for developing Tests with TestProject.io</p>
        </div>
    </a>
    
    <a class='next' href='/named-tuples-data-science'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Clean up Your Data Science with Named Tuples</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>