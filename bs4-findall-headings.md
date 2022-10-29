---
cover: ''
date: 2022-02-01
datetime: 2022-02-01 00:00:00+00:00
description: BeautifulSoup is a DOM like library for python.  It Lets make a sample.html
  file with the following contents.  It mainly has Lets import our packages, read
  in o
edit_link: https://github.com/edit/main/pages/til/bs4-findall-headings.md
jinja: false
long_description: BeautifulSoup is a DOM like library for python.  It Lets make a
  sample.html file with the following contents.  It mainly has Lets import our packages,
  read in our  And what we get is a list of  I recently added a heading
now: 2022-10-29 15:54:38.065945
path: pages/til/bs4-findall-headings.md
slug: bs4-findall-headings
status: draft
super_description: BeautifulSoup is a DOM like library for python.  It Lets make a
  sample.html file with the following contents.  It mainly has Lets import our packages,
  read in our  And what we get is a list of  I recently added a heading
tags:
- python
- webdev
templateKey: til
title: Find all Headings with BeautifulSoup
today: 2022-10-29
year: 2022
---

BeautifulSoup is a DOM like library for python.  It's quite useful to
manipulate html.  Here is an example to find_all html headings.  I stole
the regex from stack overflow, but who doesn't.

## Make an example
_sample.html_

Lets make a sample.html file with the following contents.  It mainly has
some headings, `<h1>` and `<h2>` tags that I want to be able to find.

```html
<!DOCTYPE html>
<html lang="en">
  <body>
    <h1>hello</h1>
    <p>this is a paragraph</p>
    <h2>second heading</h2>
    <p>this is also a paragraph</p>
    <h2>third heading</h2>
    <p>this is the last paragraph</p>

  </body>
</html>
```

## Get the headings with BeautifulSoup

Lets import our packages, read in our `sample.html` using pathlib and find all
headings using BeautifulSoup.

```python
from bs4 import BeautifulSoup
from pathlib import Path

soup = BeautifulSoup(Path('sample.html').read_text(), features="lxml")
headings = soup.find_all(re.compile("^h[1-6]$"))
```

And what we get is a list of `bs4.element.Tag`'s.

```python
>> print(headings)
[<h1>hello</h1>, <h2>second heading</h2>, <h2>third heading</h2>]
```

I recently added a heading_link plugin to markata, you might notice the
🔗's next to each heading on this page, that is powered by this exact
technique.
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
    
    <a class='prev' href='/build-a-portfolio'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Build A Portfolio</p>
        </div>
    </a>
    
    <a class='next' href='/break-pane'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>tmux break-pane</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>