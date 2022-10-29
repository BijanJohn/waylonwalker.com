---
cover: ''
date: 2020-05-03
datetime: 2020-05-03 00:00:00+00:00
description: Often when reading through javascript examples you will find some arrow
  Arrow functions are one-liner functions in javascript that have two main syntactical
  way
edit_link: https://github.com/edit/main/pages/blog/explicit-vs-implicit-returns-in-javascript.md
jinja: false
long_description: Often when reading through javascript examples you will find some
  arrow Arrow functions are one-liner functions in javascript that have two main syntactical
  ways to create the code block.  with parentheses and braces.  Let Here is an example
  of an ar
now: 2022-10-29 15:54:38.065430
path: pages/blog/explicit-vs-implicit-returns-in-javascript.md
slug: explicit-vs-implicit-returns-in-javascript
status: published
super_description: 'Often when reading through javascript examples you will find some
  arrow Arrow functions are one-liner functions in javascript that have two main syntactical
  ways to create the code block.  with parentheses and braces.  Let Here is an example
  of an arrow function that will implicitly return the last In the following example,
  the curly braces create an arrow function that must In this example using the return
  keyword will cause the function to return  Until writing this article I was unaware
  that '
tags:
- javascript
- webdev
templateKey: blog-post
title: Explicit vs Implicit Returns in Javascript
today: 2022-10-29
year: 2020
---

Often when reading through javascript examples you will find some arrow
functions use parentheses `()` while others use braces `{}`.  This key
difference is that parentheses will implicitly return the last statement while
braces require an explicit return statement.  It is important to understand the
difference between them because it is likely that you will find code examples
of both and trying to edit code written differently than you're used to may
have unintended consequences.

## ![Arrow functions](https://images.waylonwalker.com/explicit-vs-implicit-returns-in-javascript-1.png)

Arrow functions are one-liner functions in javascript that have two main syntactical ways to create the code block.  with parentheses and braces.  Let's take a look at both ways of creating arrow functions so that when we come accross them in the wild it will all make sense.

## ![implicit returns](https://images.waylonwalker.com/explicit-vs-implicit-returns-in-javascript-2.png)

Here is an example of an arrow function that will implicitly return the last
statement without the return keyword.  I believe that these are a bit more restricted
in that you cannot set variables inside them.  They are a little bit more concise
and great for **one-liners.**

``` javascript
const implicit = thing => (thing)
undefined
implicit('hi')
"hi"
```

**Note** that the parentheses are not required for this example and not having
parentheses or braces are implicitly returned as well.

``` javascript
// same as above
const implicit = thing => thing
undefined
implicit('hi')
"hi"
```

## ![explicit returns](https://images.waylonwalker.com/explicit-vs-implicit-returns-in-javascript-3.png)

In the following example, the curly braces create an arrow function that must
explicitly return anything that you want to return from the function. Since the
return keyword is never used the function returns `undefined` by default.

``` javascript
// missing return statement
const explicit = thing => {thing}
undefined
explicit('hi')
undefined
```

In this example using the return keyword will cause the function to return `thing`
and behave similarly to our implicit return.

``` javascript
// same as original
const explicit_return = thing => {return thing}
undefined
explicit_return('hi')
"hi"
```

## ![Multiline arrow functions](https://images.waylonwalker.com/explicit-vs-implicit-returns-in-javascript-4.png)

Until writing this article I was unaware that you could not have a multiline arrow function with an implicit return statement.  I tried myself and ran into some issues. I also tried to find examples online and could not find one.  If it is possible to write something like below, let me know.

``` javascript
// more complex example
// only possible with an explicit return
const sayHello = who => {
    const greeting = 'Hello '
    const message = greeting + who
    return message
    }
undefined
sayHello('Waylon')
"Hello Waylon"
```
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
    
    <a class='prev' href='/filtering-pandas'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Filtering Pandas</p>
        </div>
    </a>
    
    <a class='next' href='/explain-twitter-cards'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>🙋‍♂️ Can Anyone Explain Twitter Cards to me?</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>