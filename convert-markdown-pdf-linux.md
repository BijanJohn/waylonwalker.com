---
author: Waylon S. Walker
cover: ''
date: 2022-01-12
datetime: 2022-01-12 00:00:00+00:00
description: Converting markdown posts to pdf on ubuntu takes a few packages from
  the Here is an image of what converting this article over to a pdf looks
edit_link: https://github.com/edit/main/pages/til/convert-markdown-pdf-linux.md
jinja: false
long_description: Converting markdown posts to pdf on ubuntu takes a few packages
  from the Here is an image of what converting this article over to a pdf looks
now: 2022-10-29 15:54:38.066070
path: pages/til/convert-markdown-pdf-linux.md
slug: convert-markdown-pdf-linux
status: draft
super_description: Converting markdown posts to pdf on ubuntu takes a few packages
  from the Here is an image of what converting this article over to a pdf looks
tags:
- linux
- blog
- cli
templateKey: til
title: Converting markdown to pdf with pandoc on linux
today: 2022-10-29
year: 2022
---

Converting markdown posts to pdf on ubuntu takes a few packages from the
standard repos.  I had to go through a few stack overflow posts, and
nothing seemed to have all the fonts and packages that I needed to
convert markdown, but this is what ended up working for me.

## Installing all the packages

``` bash
sudo apt install \
  pandoc \
  texlive-latex-base \
  texlive-fonts-recommended \
  texlive-extra-utils \
  texlive-latex-extra \
  texlive-xetex
```

## Using pandoc to convert markdown to a pdf.

``` python
# older versions of pandoc, I needed this one on ubuntu 18.04
pandoc pages/til/convert-markdown-pdf-linux.md -o convert-markdown-pdf.pdf --latex-engine=xelatex
# newer versions of pandoc, I needed this one on ubuntu 21.04
pandoc pages/til/convert-markdown-pdf-linux.md -o convert-markdown-pdf.pdf --pdf-engine=xelatex
```



![results of converting this post to a pdf](https://images.waylonwalker.com/convert-markdown-pdf-linux-result.png)

> Here is an image of what converting this article over to a pdf looks
> like.  The raw markdown is
> [here](https://waylonwalker.com/convert-markdown-pdf-linux.md).
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
    
    <a class='prev' href='/copier-answers'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Using Copier Answers to rerun templates quickly</p>
        </div>
    </a>
    
    <a class='next' href='/condabuild'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Conda Build</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>