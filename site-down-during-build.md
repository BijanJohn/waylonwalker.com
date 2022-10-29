---
cover: ''
date: 2021-03-22
datetime: 2021-03-22 00:00:00+00:00
description: Recently I noticed a new netlify site of mine was down while I was checking
  to Do other Netlify sites go down during build??? Short Answer NO.  All of my google
edit_link: https://github.com/edit/main/pages/blog/site-down-during-build.md
jinja: false
long_description: Recently I noticed a new netlify site of mine was down while I was
  checking to Do other Netlify sites go down during build??? Short Answer NO.  All
  of my google fu lead me to believe I was alone and none of my other sites do this.
  My deploy script en
now: 2022-10-29 15:54:38.065274
path: pages/blog/site-down-during-build.md
slug: site-down-during-build
status: publish
super_description: 'Recently I noticed a new netlify site of mine was down while I
  was checking to Do other Netlify sites go down during build??? Short Answer NO.  All
  of my google fu lead me to believe I was alone and none of my other sites do this.
  My deploy script ends with the following.  After resetting keys and watching it
  build half a dozen After poking at the netlify console for hours I realized that
  the issue was Netlify really likes to put a lot of warnings up when you are not
  deploying jdiv class= Moral '
tags:
- webdev
- actions
templateKey: blog-post
title: Site Down During Build
today: 2022-10-29
year: 2021
---

Recently I noticed a new netlify site of mine was down while I was checking to
see if new content was live.  Later found out this was consistent after each
and every push the site would go gown as soon as I hit push, and would not come
back until the build finished.


## Is this normal?

Do other Netlify sites go down during build???

Short Answer NO.  All of my google fu lead me to believe I was alone and none of my other sites do this.

## Digging into my build

My deploy script ends with the following.  After resetting keys and watching it build half a dozen
times I determined that everything was working as normal here.

```
- name: Deploy to Netlify
uses: nwtgck/actions-netlify@v1.1.12
with:
    publish-dir: "./markout"
    production-branch: markout
    production-deploy: true
    deploy-message: "Deploy markout from GitHub Actions"
env:
    NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
    NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

## Opening the Nelify Console


After poking at the netlify console for hours I realized that the issue was
that netlify was still auto-deploying from a no longer existing directory and
would cause 404's for every page. During build, then my build from GitHub
Actions would deploy with the netlify cli.

<div class='center-img'>
    <img alt="images build" src="https://images.waylonwalker.com/netlify-build-images-waylonwalker.png">
</div>

Netlify really likes to put a lot of warnings up when you are not deploying
from them.  I tured off automatic deploys, swore to the netlify gods this is
what I wanted. Pushed a new deploy and 🎉 THE SITE DID NOT GO DOWN.

jdiv class='center-img'>
    <img alt="site build" src="https://images.waylonwalker.com/netlify-build-waylonwalker.png">
</div>

## TURN OFF AUTOMATIC BUILDS WHEN SWITCHING TO A SELF BUILD

Moral of the story here is to turn off Netlify's automatic builds when building
yourself and using the netlify cli.
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
    
    <a class='prev' href='/sqlalchemy-models'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>SqlAlchemy Models</p>
        </div>
    </a>
    
    <a class='next' href='/site-down'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Did my site build just go down?</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>