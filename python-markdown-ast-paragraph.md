---
cover: ''
date: 2022-02-05
datetime: 2022-02-05 00:00:00+00:00
description: In looking for a way to automatically generate descriptions for pages
  I It When I originally wrote this post, I did not realize at the time that
edit_link: https://github.com/edit/main/pages/til/python-markdown-ast-paragraph.md
jinja: false
long_description: In looking for a way to automatically generate descriptions for
  pages I It When I originally wrote this post, I did not realize at the time that
now: 2022-10-29 15:54:38.066420
path: pages/til/python-markdown-ast-paragraph.md
slug: python-markdown-ast-paragraph
status: draft
super_description: In looking for a way to automatically generate descriptions for
  pages I It When I originally wrote this post, I did not realize at the time that
tags:
- python
- webdev
templateKey: til
title: Using a Python Markdown ast to Find All Paragraphs
today: 2022-10-29
year: 2022
---

In looking for a way to automatically generate descriptions for pages I
stumbled into a markdown ast in python.  It allows me to go over the
markdown page and get only paragraph text.  This will ignore headings,
blockquotes, and code fences.


``` python
import commonmark
import frontmatter

post = frontmatter.load("post.md")
parser = commonmark.Parser()
ast = parser.parse(post.content)

paragraphs = ''
for node in ast.walker():
    if node[0].t == "paragraph":
        paragraphs += " "
        paragraphs += node[0].first_child.literal
```

It's also super fast, previously I was rendering to html and using
beautifulsoup to get only the paragraphs.  Using the commonmark ast was
about 5x faster on my site.

### Duplicate Paragraphs

When I originally wrote this post, I did not realize at the time that
commonmark duplicates nodes.  I still do not understand why, but I have had
success duplicating them based on the source position of the node with the
snippet below.

``` python
from itertools import compress

import commonmark
import frontmatter

post = frontmatter.load("post.md")
parser = commonmark.Parser()
ast = parser.parse(post.content)

# find all paragraph nodes
paragraph_nodes = [
    n[0]
    for n in ast.walker()
    if n[0].t == "paragraph" and n[0].first_child.literal is not None
]
# for reasons unknown to me commonmark duplicates nodes, dedupe based on sourcepos
sourcepos = [p.sourcepos for p in paragraph_nodes]
# find first occurence of node based on source position
unique_mask = [sourcepos.index(s) == i for i, s in enumerate(sourcepos)]
# deduplicate paragraph_nodes based on unique source position
unique_paragraph_nodes = list(compress(paragraph_nodes, unique_mask))
paragraphs = " ".join([p.first_child.literal for p in unique_paragraph_nodes])
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
    
    <a class='prev' href='/python-nested-requires'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Nested requirements.txt in python</p>
        </div>
    </a>
    
    <a class='next' href='/python-lru-cache'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Cache a python function with lru_cache</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>