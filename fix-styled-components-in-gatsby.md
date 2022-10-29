---
cover: ''
date: 2020-02-08
datetime: 2020-02-08 00:00:00+00:00
description: I finally fixed my Styled-Components in gatsby.js. I am starting a redesign
  of I have a small issue that has plagued the site for at least a year I have been
  us
edit_link: https://github.com/edit/main/pages/blog/fix-styled-components-in-gatsby.md
jinja: false
long_description: 'I finally fixed my Styled-Components in gatsby.js. I am starting
  a redesign of I have a small issue that has plagued the site for at least a year
  I have been using styled components in my gatsby.js site for about a year now.  And
  it has been plagued '
now: 2022-10-29 15:54:38.063402
path: pages/blog/fix-styled-components-in-gatsby.md
slug: fix-styled-components-in-gatsby
status: published
super_description: I finally fixed my Styled-Components in gatsby.js. I am starting
  a redesign of I have a small issue that has plagued the site for at least a year
  I have been using styled components in my gatsby.js site for about a year now.  And
  it has been plagued by styled-components not being in the ssr causing some jank
  in the styles being loaded.  You can see it in the lighthouse performance report
  below.  It generally loads super quick, and is only caused on first load.  Anything
  using the gatsby  The fix
tags:
- webdev
- blog
templateKey: blog-post
title: I finally fixed my Styled-Components in gatsby.js
today: 2022-10-29
year: 2020
---

I finally fixed my Styled-Components in gatsby.js. I am starting a redesign of
my website.  I have started cross posting to [dev.to](https://dev.to) more
regularly.  With that I have been making more detailed cover images at the
recommended `1000x420`.  These images get cut off on my own site, which is a
bit ridiculous to have my own content not look right on my own site.  But
before we start a heavy redesign I have a small issue that has plagued the site
for at least a year!

> I have a small issue that has plagued the site for at least a year!

I have been using styled components in my gatsby.js site for about a year now.  And it has been plagued by styled-components not being in the ssr causing some jank in the styles being loaded.  You can see it in the lighthouse performance report below.  It generally loads super quick, and is only caused on first load.  Anything using the gatsby `<Link/>` component typically is fine and unaffected by the issue.

## The fix

The fix was so simple it was only 2 lines total. One to install `gatsby-plugin-styled-components` and one to use it.

``` bash
npm i gatsby-plugin-styled-components
```

``` json
plugins: [
   'gatsby-plugin-styled-components',
]
```

## Before

![](https://images.waylonwalker.com/2020-02-06 15-27-45_Start.png)

## After

![](https://images.waylonwalker.com/2020-02-07 17-20-31_Start.png)

## Why did it take so long to Fix?

The real issue here was that I really didn't understand the problem as I described it above until I found the fix. It really did seem random that at odd times the styles would seem to vanish.  Sometimes never fully rehydrating at all.  Well actually I had fixed some production sites at work with it, but had no idea why it worked and therefore could not remember how I had fixed it, and google searched yielded no help.

![](https://images.waylonwalker.com/the-moment-i-realized-the-true-problem-1.png)

After re-watching Wes Bos's Advanced react course where he describes how to fix this issue for `next.js` sites it became clear that the problem was not random at all.  It was that they do not get statically rendered and are only on the page after react is re-hydrated.  The moment I realized the **true** problem I knew how to google it and quickly found there was a plugin for this.
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
    
    <a class='prev' href='/flexbox-zombies'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>FlexBox</p>
        </div>
    </a>
    
    <a class='next' href='/fix-git-commit-author'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Fix git commit author</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>