---
category: Blog
cover: ./flex.png
date: 2017-12-31
datetime: 2017-12-31 00:00:00+00:00
description: none
edit_link: https://github.com/edit/main/pages/blog/pug-reveal.md
jinja: false
long_description: I recently gave a presentation at the Big Brothers and Big Sisters
  Data Challenge.  I wanted to use reveal to create my slides.  I have used it before
  and it is a really nice package.  Compared to PowerPoint it is much easier to incorporate
  interacti
now: 2022-10-29 15:54:38.064668
path: pages/blog/pug-reveal.md
slug: pug-reveal
status: draft
super_description: I recently gave a presentation at the Big Brothers and Big Sisters
  Data Challenge.  I wanted to use reveal to create my slides.  I have used it before
  and it is a really nice package.  Compared to PowerPoint it is much easier to incorporate
  interactive visualizations right into the presentation,easy to re factor and maintain
  slides.  Since you are just working with text you can easily convert from a list
  of items on one slide to a set of slides. If you have not seen David JP Phillips  You
  are th
tags:
- webdev
templateKey: blog-post
title: Pug Reveal
today: 2022-10-29
year: 2017
---

# Pug Reveal Slides

I recently gave a presentation at the Big Brothers and Big Sisters Data Challenge.  I wanted to use reveal to create my slides.  I have used it before and it is a really nice package.  Compared to PowerPoint it is much easier to incorporate interactive visualizations right into the presentation,easy to re factor and maintain slides.  Since you are just working with text you can easily convert from a list of items on one slide to a set of slides.

## Avoiding Death by PowerPoint

If you have not seen David JP Phillips [Death By PowerPoint](https://www.youtube.com/watch?v=Iwpi1Lm6dFo)  TEDx, stop now and watch it.  You will never look at slides the same again.  Watching this video ruined me for watching presentations with these issues.  Reveal is a tool that makes it very easy to follow these principles

* You are the center of focus
* Reduce clutter
* Focus your users with
    * size
    * contrast

## Reduce clutter

In the video David talks about reducing the number of points we have down to no more than 6. You may be thinking "What No More than 6, Well I would have to have a hundred slides to get all of my point in".  to this David tells us, "The amount of slides in your PowerPoint has never been the problem. It is the amount of objects per slide that are the problem."

>The amount of slides in your PowerPoint has never been the problem. It is the amount of objects per slide that are the problem.

## Pug


>"What is this pug thing you speak of?"

Pug is a markup language typically that is into html for the browser.  It is a much less verbose markup language that uses whitespace as syntax.
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
    
    <a class='prev' href='/pycon-2017-roundup'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Pycon 2017 Roundup</p>
        </div>
    </a>
    
    <a class='next' href='/productive-one-on-one'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Productive one on one</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>