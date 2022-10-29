---
cover: ''
date: 2020-02-11
datetime: 2020-02-11 00:00:00+00:00
description: It was so easy to get a professional looking navbar with just 3 lines
  of code. installation is easy There was no instructions for es6 style imports that
  are com
edit_link: https://github.com/edit/main/pages/blog/react-headroom.md
jinja: false
long_description: It was so easy to get a professional looking navbar with just 3
  lines of code. installation is easy There was no instructions for es6 style imports
  that are common with gatsbyjs Simply wrap your existing content, Nav in my case,
  with the  I think thi
now: 2022-10-29 15:54:38.064154
path: pages/blog/react-headroom.md
slug: react-headroom
status: published
super_description: It was so easy to get a professional looking navbar with just 3
  lines of code. installation is easy There was no instructions for es6 style imports
  that are common with gatsbyjs Simply wrap your existing content, Nav in my case,
  with the  I think this simple package completely changes the ux of your site on
  mobile. Here it is on  react-headroom Check out the relavant links for more details.
tags:
- webdev
templateKey: blog-post
title: I just added react-headroom to my site
today: 2022-10-29
year: 2020
---

It was so easy to get a professional looking navbar with just 3 lines of code.
This package seriously is so usable on mobile it is ridiculous.  I found this
package from
[day-4](https://www.gatsbyjs.org/blog/100days/react-component/?utm_campaign=100%20Days%20of%20Gatsby&utm_source=hs_email&utm_medium=email&utm_content=82376619&_hsenc=p2ANqtz-_DBh1A1A-GEy2TujddXq_H1de5wGZ_X6jIqB2wv_PE7QgUk40pfi64jbSVHv-S3bfzKZOQywtoTuup2aeO0o_KpeiF8w&_hsmi=82376619)
of the 100 days of gatsby challenge.  It is by the wonderful man who brought us
gatsbyjs Kyle Mathews, so you know its gotta be good.

## install react-headroom

installation is easy

``` bash
npm i react-headroom
```

## Import Headroom

There was no instructions for es6 style imports that are common with gatsbyjs
sites like mine, but it was intuitive to figure out.

``` js
import Headroom from 'react-headroom'
```

## Using Headroom

Simply wrap your existing content, Nav in my case, with the `<Headroom />`
component and your off to the races.  The content will pop back into view when
you scroll past then back up.

``` html
<Headroom>
   <-- Your content goes here -->
</Headroom>
```

## See it in action

I think this simple package completely changes the ux of your site on mobile.
You can get that sticky nav out of the way, but its still right there with just
a little bit of a scroll up.

![showing it in action on waylonwalker.com](https://images.waylonwalker.com/react-headroom-b.gif)

> Here it is on [waylonwalker.com](https://waylonwalker.com)

## Configurable

`react-headroom` is configurable, but I did not find it necessary.  I really
like the simplicity that it brought by just adding the `<Headroom\>` component.

![react-headroom docs](https://images.waylonwalker.com/react-headroom-docs.png)

## Links

Check out the relavant links for more details.

**GitHub**: https://github.com/KyleAMathews/react-headroom
**Demo Site**: https://kyleamathews.github.io/react-headroom/
**Docs**: https://kyleamathews.github.io/react-headroom/
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
    
    <a class='prev' href='/reader'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Reader</p>
        </div>
    </a>
    
    <a class='next' href='/quickly-edit-posts'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Quickly Edit Posts</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>