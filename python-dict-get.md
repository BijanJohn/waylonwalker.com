---
cover: ''
date: 2022-02-03
datetime: 2022-02-03 00:00:00+00:00
description: For an embarassingly long time, til today, I have been wrapping my dict
  Lets consider this example for prices of supplies.  Here we set a variable of What
  I wou
edit_link: https://github.com/edit/main/pages/til/python-dict-get.md
jinja: false
long_description: For an embarassingly long time, til today, I have been wrapping
  my dict Lets consider this example for prices of supplies.  Here we set a variable
  of What I would always do is try to get the key, and if it failed on KeyError, I
  What I noticed Nic doe
now: 2022-10-29 15:54:38.066296
path: pages/til/python-dict-get.md
slug: python-dict-get
status: draft
super_description: For an embarassingly long time, til today, I have been wrapping
  my dict Lets consider this example for prices of supplies.  Here we set a variable
  of What I would always do is try to get the key, and if it failed on KeyError, I
  What I noticed Nic does is to use get.  This feels just so much cleaner that We
  can just as easily set the default to other values.  Let
tags:
- python
templateKey: til
title: python dict get
today: 2022-10-29
year: 2022
---

For an embarassingly long time, til today, I have been wrapping my dict
gets with key errors in python.  I'm sure I've read it in code a bunch
of times, but just brushed over why you would use get.  That is until I
read a bunch of PR's from my buddy Nic and notice that he never gets
things with brackets and always with `.get`.  This turns out so much
cleaner to create a default case than try except.


## Example

Lets consider this example for prices of supplies.  Here we set a variable of
prices as a dictionary of items and thier price.

```python
prices = {'pen': 1.2, 'pencil', 0.3, 'eraser', 2.3}
```

## Except KeyError

What I would always do is try to get the key, and if it failed on KeyError, I
would set the value (`paper_price` in this case) to a default value.

```python
try:
    paper_price = prices['paper']
except KeyError:
    paper_price = None
```

## .get

What I noticed Nic does is to use get.  This feels just so much cleaner that
it's a one liner and feels much easier to read and understand that if there is
no price for paper we set it to `None`.

```python
paper_price = prices.get('paper', None)
```

We can just as easily set the default to other values.  Let's consider sales
for instance.  If there is not a record for the sale of paper, it might be that
we sold 0 paper in the given dataset.

```python
paper_sales = sales.get('paper', 0)
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
    
    <a class='prev' href='/python-diskcache'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>How I setup a sqlite cache in python</p>
        </div>
    </a>
    
    <a class='next' href='/python-deepwatch'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>python-deepwatch</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>