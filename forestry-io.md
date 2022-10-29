---
cover: ''
date: 2019-04-23
datetime: 2019-04-23 00:00:00+00:00
description: Creating Posts from forestry.io.
edit_link: https://github.com/edit/main/pages/blog/forestry-io.md
jinja: false
long_description: Testing out forestry.io I have been playing with the netlify cms
  for a while now, and it has been a decent experience, but I  Forestry.io has this
  amazing feature to create  By far my favorite feature is  I have a use case for
  a photography site wher
now: 2022-10-29 15:54:38.064256
path: pages/blog/forestry-io.md
slug: forestry-io
status: published
super_description: "Testing out forestry.io I have been playing with the netlify cms
  for a while now, and it has been a decent experience, but I  Forestry.io has this
  amazing feature to create  By far my favorite feature is  I have a use case for
  a photography site where the owner wants to be able to show off sample photos of
  each type of work she does.  I got it working in the netlify cms, although it was
  not very user friendly.  Everything was nested in an accordian \U0001F622. Netlify
  multi image upload Next I looked int"
tags:
- webdev
templateKey: blog-post
title: Forestry.io
today: 2022-10-29
year: 2019
---

Testing out forestry.io

## Sorry Netlify CMS

_I still ♥️ your product dont be_

_forestry is simple_

I have been playing with the netlify cms for a while now, and it has been a decent experience, but I **really** struggle configuring it.   Forestry is so simple to setup.  My favorite part is that I can code up my gatsby.js site, storing all editable text in markdown, and come back later and add the CMS based on existing documents.

## Configuration is Simple

Forestry.io has this amazing feature to create _create based on existing document_ 🤯.  This is great because it sets up the `.yml` config for me without error.  And If I really want to come back later to customize it more I have that option, too.

![](https://images.waylonwalker.com/Screenshot_20190503-165248.jpg)

> By far my favorite feature is _create based on existing document_

## Multi-File Gallery

I have a use case for a photography site where the owner wants to be able to show off sample photos of each type of work she does.  I got it working in the netlify cms, although it was not very user friendly.  Everything was nested in an accordian 😢.

![](https://images.waylonwalker.com/Screenshot_20190507-144948.png)

> Netlify multi image upload

Next I looked into forestry.io.  I pointed forestry.io at the existing git repo, created a template based on an existing document and **BAM**💥 a nice image grid appeared.

![](https://images.waylonwalker.com/Screenshot_20190507-145044.png)

> Forestry multi image gallery

## Editor

The forestry.io editor is on point.  I can choose to edit using the WYSIWYG editor and still use markdown syntax!  I can edit in markdown.  I can add images without fat-fingering the path and screwing up the whole post.  Its amazing!

![](https://images.waylonwalker.com/2019-05-09 10-40-11_forestry.io.png)

## Images

Image upload is on point!  Just click the add image button, it pops you into your media library, choose an image, or upload it, and you're off to the races 🏇.

![](/forestry_image_3.gif)

## Im Sold 💲

At this point, I am sold. This blog is now written from Forestry, and I love it.  It's great when I am away from my editor to make some progress on the go.  If I decide I dont like it in 6 months, I can move on. All of my content is still in markdown on the git repo.

Forestry.io is missing the nice side-by-side preview that netlify cms has, but honestly, I have struggled to set that up, too.  If I am being honest, I just play front end developer on the side, and setting up a CMS is not something that I plan on doing every day.  I am perfectly happy having some gui tools, like forestry.io, setup all of the configuration for me with just a few clicks.

## Bonus

Preview is Nice 👌.  Without configuring anything except a bash one-liner, I have a preview that is not quite instant, but does kick out my actual site with updated content quickly.
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
    
    <a class='prev' href='/four-github-actions-python'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Four Github Actions for Python</p>
        </div>
    </a>
    
    <a class='next' href='/flexbox-zombies'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>FlexBox</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>