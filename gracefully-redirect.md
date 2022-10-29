---
cover: ''
date: 2020-06-11
datetime: 2020-06-11 00:00:00+00:00
description: 'I just did a quick refactoring of my JAMStack blog urls.  Some didn
  https://waylonwalker.com/refactor-in-cli When refactorings similar to this get really
  big I '
edit_link: https://github.com/edit/main/pages/blog/gracefully-redirect.md
jinja: false
long_description: I just did a quick refactoring of my JAMStack blog urls.  Some didn
  https://waylonwalker.com/refactor-in-cli When refactorings similar to this get really
  big I often need to do some My post urls are based on the file name of my markdown
  file, so I ca
now: 2022-10-29 15:54:38.063638
path: pages/blog/gracefully-redirect.md
slug: gracefully-redirect
status: published
super_description: I just did a quick refactoring of my JAMStack blog urls.  Some
  didn https://waylonwalker.com/refactor-in-cli When refactorings similar to this
  get really big I often need to do some My post urls are based on the file name of
  my markdown file, so I can simply go Safely redirect without breaking links I am
  hosted on netlify, which automatically puts very ⚡ performant redirects This is
  probably being a bit pedantic.  Realistically my urls were probably ok.
tags:
- webdev
- blog
templateKey: blog-post
title: Refactoring your blog urls
today: 2022-10-29
year: 2020
---

I just did a quick refactoring of my JAMStack blog urls.  Some didn't fit with
my style, some had `_` that I wanted to switch to `-`, and others were
ridiculously long.  I've been using forestry as my CMS, I write many of my
posts there, and sometimes it picks some crazy file names (based on my titles).
It was time to refactor.



<div class="onelinelink-wrapper">
    <a class="onelinelink" href="https://waylonwalker.com/refactor-in-cli/">
        <img style="float: right;" align='right' src="https://covers.waylonwalker.com/refactor-in-cli.jpg" alt="article cover for Large Refactor At The Command Line"/>
        <p><strong>Large Refactor At The Command Line</strong></p>
    </a>
</div>


> When refactorings similar to this get really big I often need to do some
> project wide find an replace, I usually do this right from the command line.

## 🖊 Rename posts _change the filename_

My post urls are based on the file name of my markdown file, so I can simply go
through my filesystem and rename anything I want.  From here its probably best
to only commit the addition of the new file name, until the redirects clear,
but these are all low traffic posts for me so I just commited both at once.

> Safely redirect without breaking links

## _redirects ⤴ _/redirects_

I am hosted on netlify, which automatically puts very ⚡ performant redirects
on the edge based on a `/_redirects` route on your site.  So I added a redirect
from the old route to the new route there.

## rename long posts

``` bash 
/blog/i-finally-fixed-my-styled-components-in-gatsby-js
/blog/fix-styled-components-in-gatsby
/blog/interrogate-is-a-pretty-awesome-brand-new-cli-for-python-packages
/blog/interrogate
```

## pedantic 🤔 _probably_

This is probably being a bit pedantic.  Realistically my urls were probably ok.
These posts probably aren't going to be topping the google search charts
anyways, but I wanted to do it without killing off any links that I may have
happened to post somewhere.
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
    
    <a class='prev' href='/happy'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Do More of What Brings You Joy</p>
        </div>
    </a>
    
    <a class='next' href='/graceful-kedro-catalog'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Gracefully adopt kedro, the catalog</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>