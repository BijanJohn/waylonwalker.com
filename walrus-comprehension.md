---
cover: ''
date: 2022-03-12
datetime: 2022-03-12 00:00:00+00:00
description: Python 3.8 came out two and a half years ago and I have yet to really
  lean in Now that Python 3.6 is end of life, and most folks are using at least  The
  assignm
edit_link: https://github.com/edit/main/pages/til/walrus-comprehension.md
jinja: false
long_description: Python 3.8 came out two and a half years ago and I have yet to really
  lean in Now that Python 3.6 is end of life, and most folks are using at least  The
  assignment operator in python is more commonly referred to as the walrus This example
  from the do
now: 2022-10-29 15:54:38.065887
path: pages/til/walrus-comprehension.md
slug: walrus-comprehension
status: draft
super_description: Python 3.8 came out two and a half years ago and I have yet to
  really lean in Now that Python 3.6 is end of life, and most folks are using at least  The
  assignment operator in python is more commonly referred to as the walrus This example
  from the docs avoids a second call to the  In this example we are going to do a
  dict comp to generate a map of content Using the walrus operator  The walrus is
  a nice to have option to save on extra function/network calls, and
tags:
- python
templateKey: til
title: Python Walrus Inside List Comprehension
today: 2022-10-29
year: 2022
---

Python 3.8 came out two and a half years ago and I have yet to really lean in
on the walrus operator.  Partly because it always seemed like something kinda
silly (my use cases) to require a python version bump for, and partly because I
really didn't understand it the best.  Primarily I have wanted to use it in
comprehensions, but I did not really understand how.

Now that Python 3.6 is end of life, and most folks are using at least `3.8` it
seems time to learn and use it.

## What's a Walrus
_:=_

The assignment operator in python is more commonly referred to as the walrus
operator due to how `:=` looks like a walrus.  It allows you to assign and use
a variable in a single expression.

This example from the docs avoids a second call to the `len` function.

``` python
if (n := len(a)) > 10:
    print(f"List is too long ({n} elements, expected <= 10)")
```

## Let's get some data
_without a walrus_

In this example we are going to do a dict comp to generate a map of content
from urls, only if their status code is 200.  When doing this in a dictionary
comprehension we end up needing to hit the url twice for successful urls. Once
for the filter and once for the data going into the dictionary.

``` python
{
    url: requests.get(url).content
    for url in ["https://waylonwalker.com/", "https://waylonwalker.com/broken"]
    if requests.get(url).status_code == 200
}
```

## Gimme some walrus
_using walrus in a dict comp_

Using the walrus operator `:=` list comp allows us to only put things into the
dictionary that we want to keep, and not hit the url twice.

``` python
{
    url: r.content
    for url in ["https://waylonwalker.com/", "https://waylonwalker.com/broken"]
    if (r := requests.get(url)).status_code == 200
}
```

## FIN

The walrus is a nice to have option to save on extra function/network calls, and
micro optimize your code without adding much extra.
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
    
    <a class='prev' href='/what-are-github-actions'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>What Are GitHub Actions</p>
        </div>
    </a>
    
    <a class='next' href='/vow'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>vows</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>