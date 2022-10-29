---
cover: ''
date: 2022-03-19
datetime: 2022-03-19 00:00:00+00:00
description: Let Before you run someone Something that I have always appreciated form
  Searchng through the internet I was able to find an article from Here is my interpretat
edit_link: https://github.com/edit/main/pages/til/vim-markdown-links.md
jinja: false
long_description: Let Before you run someone Something that I have always appreciated
  form Searchng through the internet I was able to find an article from Here is my
  interpretation of the code I took from Vitaly So far it is working for me and saving
  me a few seconds
now: 2022-10-29 15:54:38.065684
path: pages/til/vim-markdown-links.md
slug: vim-markdown-links
status: draft
super_description: Let Before you run someone Something that I have always appreciated
  form Searchng through the internet I was able to find an article from Here is my
  interpretation of the code I took from Vitaly So far it is working for me and saving
  me a few seconds off each post I
tags:
- vim
- webdev
- meta
templateKey: til
title: Automatically Generate a list of Markdown Links in Vim
today: 2022-10-29
year: 2022
---

Let's make a vim command to automatically collect all the links in these
posts at the end of each article.  Regex confuses the heck out of me...
I don't have my regex liscense, but
regex can be so darn powerful especially in an editor.

## Step one

Before you run someone's regex from the internet that you don't fully
understand, check your `git status` and make sure you are all clear with
git before you wreck something

## Inspiration

Something that I have always appreciated form
[Nick Janetakis](https://nickjanetakis.com/) is his links section.  I
often try to gather up the links at the end of my posts, but often end
up not doing it or forgetting.

## Making a Links section

Searchng through the internet I was able to find an article from
Vitaly Parnas called
[vim ref links](https://vitalyparnas.com/guides/vim-ref-links/) that did
almost exactly what I needed, except it was more complicated and made
them into ref liks.

Here is my interpretation of the code I took from Vitaly's post.  It
makes a Links section like the one at the bottom of this post.

``` vim
function! MdLinks()
    $norm o## Links
    $norm o
    g/\[[^\]]\+\]([^)]\+)/t$
    silent! '^,$s/\v[^\[]*(\[[^\]]+\])\(([^)]+)\)[^\[]*/* \1(\2)/g
    nohl
endfunction
command! MdLinks call MdLinks()
```

So far it is working for me and saving me a few seconds off each post I
make.

## Links

* [Nick Janetakis](https://nickjanetakis.com/)
* [vim ref links](https://vitalyparnas.com/guides/vim-ref-links/)
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
    
    <a class='prev' href='/vim-notes'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Vim Notes</p>
        </div>
    </a>
    
    <a class='next' href='/vim-fundamentals-2'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Notes for second vim-fundamentals course meetup</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>