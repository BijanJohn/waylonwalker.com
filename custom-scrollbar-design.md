---
cover: ''
date: 2020-02-21
datetime: 2020-02-21 00:00:00+00:00
description: Getting a custom scrollbar on your site makes it stand out a bit compared
  to Inspired by Wes Bos Since  My first step was to take his css and copy it into
  a sty
edit_link: https://github.com/edit/main/pages/blog/custom-scrollbar-design.md
jinja: false
long_description: Getting a custom scrollbar on your site makes it stand out a bit
  compared to Inspired by Wes Bos Since  My first step was to take his css and copy
  it into a styled component for my entire layout, but it failed.  I do not fully
  understand why.  None o
now: 2022-10-29 15:54:38.063880
path: pages/blog/custom-scrollbar-design.md
slug: custom-scrollbar-design
status: published
super_description: Getting a custom scrollbar on your site makes it stand out a bit
  compared to Inspired by Wes Bos Since  My first step was to take his css and copy
  it into a styled component for my entire layout, but it failed.  I do not fully
  understand why.  None of the custom style came through at all.  If you know please
  leave me a comment. I suspect for some reason it has to do with attatching to the
  html element inside of a styled-component.  I think wes was able to get around this
  by using  I added  It wa
tags:
- webdev
templateKey: blog-post
title: Custom Scrollbar Design
today: 2022-10-29
year: 2020
---

Getting a custom scrollbar on your site makes it stand out a bit compared to
the very plain stock one that are on most sites.  This is how I set mine up on
my gatsby site.

Inspired by Wes Bos's new [uses.tech](https://uses.tech) I wanted a custom
scrollbar on my personal site.  I had tried to do it in the past, but gave up
after it was not working.

## Looking at the Source

Since [uses.tech](https://uses.tech) is open source I jumped on github, searched for scroll and found this [layout.js](https://github.com/wesbos/awesome-uses/blob/124bdd64345bc64eb84879929f0e57cbb8752e34/src/components/layout.js#L74).

## Copy it to my own component

My first step was to take his css and copy it into a styled component for my entire layout, but it failed.  I do not fully understand why.  None of the custom style came through at all.  If you know please leave me a comment.

![](https://images.waylonwalker.com/why-wont-you-work.jpg)

I suspect for some reason it has to do with attatching to the html element inside of a styled-component.  I think wes was able to get around this by using `createGlobalStyle`.  But I was still using much of the default gatsby template, so I did not have a `createGlobalStyle` element, but I did have a layout.css.

## scroll.css

I added `scroll.css` to my static directory, then imported it into `gatsby-browser.js` in order to get it loaded onto the page.

``` css
 /* static/scroll.css */

body::-webkit-scrollbar {
    width: 1rem;
  }

  html {
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color: #5651B7;
  }

  body::-webkit-scrollbar-track {
    background: #392E3D;
  }

  body::-webkit-scrollbar-thumb {
    background-color: #5651B7 ;
    border-radius: .5rem;
    background: rgb(112,107,208);
    background: linear-gradient(180deg, rgba(112,107,208,1) 0%, rgba(86,81,183,1) 100%);
    border: 1px solid rgba(86,81,183,.5);
  }
```

``` javascript
// gatsby-browser.js
import './static/scroll.css
```

## It works

 It was a bit finicky for me to find the right place to put everything, but this is the final result.  I found out that you can have a gradient on your `scrollbar-thumb`, but the `scrollbar-track` cannot, it also cannot be transparent.  I picked a color that matched my background the best for most use cases, but when the screen gets really narrow a line starts to appear.

![My final result](https://images.waylonwalker.com/custom-scrollbar-with-css.gif "my final result, an example give of the final result live on waylonwalker.com")

> My final result

## Resources

uses.tech layout.js: [layout.js](https://github.com/wesbos/awesome-uses/blob/124bdd64345bc64eb84879929f0e57cbb8752e34/src/components/layout.js#L74)

css-trick article: [scrollbar](https://css-tricks.com/almanac/properties/s/scrollbar/ "css tricks scrollbar article")
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
    
    <a class='prev' href='/d3-day-5'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>D3 Day 5</p>
        </div>
    </a>
    
    <a class='next' href='/custom-python-exceptions'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Custom Python Exceptions</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>