---
cover: ''
date: 2020-02-06
datetime: 2020-02-06 00:00:00+00:00
description: Should I switch to Zeit Now.  Netlify build times are starting to creep
  in.
edit_link: https://github.com/edit/main/pages/blog/should-i-switch-to-zeit-now.md
jinja: false
long_description: I have happily had my personal site  I have recently started playing
  with zeit again.  I really like their cli tool, its dead simple and makes sense.  I
  tried the netlify one early on and dont think I really gave it much of a chance.
  I was able to ba
now: 2022-10-29 15:54:38.064048
path: pages/blog/should-i-switch-to-zeit-now.md
slug: should-i-switch-to-zeit-now
status: published
super_description: I have happily had my personal site  I have recently started playing
  with zeit again.  I really like their cli tool, its dead simple and makes sense.  I
  tried the netlify one early on and dont think I really gave it much of a chance.
  I was able to backup a site we were modifying by saving everything locally (literally
  control+s) and running  While I was on the site I realized that when switching to
  gatsby v2 I had deployed it to now.sh while testing, before cutting over to the
  updated one on net
tags: []
templateKey: blog-post
title: Should I switch to Zeit Now
today: 2022-10-29
year: 2020
---

## Netlify

I have happily had my personal site [waylonwalker.com](https://waylonwalker.com) hosted on netlify for nearly 2 years now.  In fact I have hosted about a dozen different toy projects to play with on there, 4 of which have gone far enough to get a custom domain name.  They are fast to deploy and consistently do so on every `git push` to main.


## Zeit

I have recently started playing with zeit again.  I really like their cli tool, its dead simple and makes sense.  I tried the netlify one early on and dont think I really gave it much of a chance. I was able to backup a site we were modifying by saving everything locally (literally control+s) and running `now` in the command line.

While I was on the site I realized that when switching to gatsby v2 I had deployed it to now.sh while testing, before cutting over to the updated one on netlify.  It has been building every version since without issue!

> It has been building every version since without issue!

## What I am using

* gatsby
* forestry.io

I am using gatsby to build my site, and I do use forestry.io as a cms to be able to edit/manage posts online.  I think forestry is part of my problem in that it has added extra builds.  Every time I upload an image or save a post, even a draft, it pushes to production.


## Why Switch

This is just a side hobby for me.  I do not make any $$ off of it, and I do not want to pay for anything I do not have to.  As I am stepping up my blogging I have already hit 50% of my build quota only 1 week into the month on netlify.  I really like what netlify is doing for the JAMstack community, but I would rather build everything locally and push to GHPages for this project than have to pay for it.

## What Are your suggestions

Do you use Zeit?

Where do you host your gatsby.js site?
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
    
    <a class='prev' href='/simple-click'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>simple click</p>
        </div>
    </a>
    
    <a class='next' href='/setup-yamlls'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Setup a yaml schema | yamlls for a silky smooth setup</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>