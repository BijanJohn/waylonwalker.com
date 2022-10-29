---
cover: ''
date: 2020-02-25
datetime: 2020-02-25 00:00:00+00:00
description: Do you have any use cases that you use hoising?  Why?  It seems like
  a really cool feature in any language that uses it, but I dont really notice it
  in use.
edit_link: https://github.com/edit/main/pages/blog/do-you-hoist.md
jinja: false
long_description: I am working through Wes Bos Do you have any use cases that you
  use hoising?  Why?  It seems like a really cool feature in any language that uses
  it, but I dont really notice it in use. There are many articles that cover this
  in far more depth, but i
now: 2022-10-29 15:54:38.065132
path: pages/blog/do-you-hoist.md
slug: do-you-hoist
status: published
super_description: I am working through Wes Bos Do you have any use cases that you
  use hoising?  Why?  It seems like a really cool feature in any language that uses
  it, but I dont really notice it in use. There are many articles that cover this
  in far more depth, but its the idea that variable declarations and functions are
  defined before they are executed.  This means that it doesnt matter if you call
  a function before or after it is defined. Running this code will log out  I am most
  familiar with python which do
tags:
- webdev
templateKey: blog-post
title: Do You Hoist
today: 2022-10-29
year: 2020
---

I am working through Wes Bos's
[beginnerjavascript.com/](https://beginnerjavascript.com/) I just hit module 18
on hoisting.  It's something that I always knew was there, Its not something I
typically see used or use myself.

## Do you Hoist?

Do you have any use cases that you use hoising?  Why?  It seems like a really cool feature in any language that uses it, but I dont really notice it in use.

## What is Hoising

There are many articles that cover this in far more depth, but its the idea that variable declarations and functions are defined before they are executed.  This means that it doesnt matter if you call a function before or after it is defined.


## Hoisting

``` javascript

console.log(`Hello ${getUser()}`)

function getUser() {
  return 'Waylon'
}
```

Running this code will log out "Waylon"

## What about variable hoisting

I am most familiar with python which does not variable hoist so this one kinda confused me at first.  It only hoists the variable declaration not the value of the variable.  It defines whether the variable is going to be `var`, `let`, or `const` and sets it to undefined.

> It only hoists the variable declaration not the value of the variable.

``` javascript
console.log('name: ', name)
console.log('firstName: ', firstName)

const name = "Waylon"
```

This code will log out `name: undefined` followed by an `Uncaught ReferenceError: firstName is not defined` since `name` has been decalared and `firstName` has not been decalred.

## I don't Hoist

Really it feels weird to call function definitions before using them.  I really dont have a better reason.  It just feels more natural to do so.

## Is hoisting more readable?

I kinda like the idea of putting the 🥩 meat of the file up at the top so that someone reading it will see the good stuff first, then can optionally dig into the weeds if they need to.

## I started a newsletter

I recently started a newsletter, [join in](https://emailoctopus.com/lists/b194a4af-9875-11ea-a3d0-06b4694bee2a/forms/subscribe) and let me know what you want to hear about.
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
    
    <a class='prev' href='/don-t-waste-your-time-learning-everything'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Don’t waste your time learning everything</p>
        </div>
    </a>
    
    <a class='next' href='/django-rest-framework-getting-started'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Getting Started with Django REST framework</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>