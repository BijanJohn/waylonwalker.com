---
cover: ''
date: 2022-03-03
datetime: 2022-03-03 00:00:00+00:00
description: Since GitHub started supporting mermaid in their markdown I wanted to
  The docs kinda just jumped right into their mermaid language and really You  just
  write me
edit_link: https://github.com/edit/main/pages/til/mermaid-html.md
jinja: false
long_description: Since GitHub started supporting mermaid in their markdown I wanted
  to The docs kinda just jumped right into their mermaid language and really You  just
  write mermaid syntax in a div with a class of mermaid on The above gets me this
  diagram. This feel
now: 2022-10-29 15:54:38.066220
path: pages/til/mermaid-html.md
slug: mermaid-html
status: draft
super_description: Since GitHub started supporting mermaid in their markdown I wanted
  to The docs kinda just jumped right into their mermaid language and really You  just
  write mermaid syntax in a div with a class of mermaid on The above gets me this
  diagram. This feels so quick and easy to start getting some graphs up and running,
  but
tags:
- webdev
- webdev
- webdev
templateKey: til
title: Simple Plain Text Diagrams in HTML
today: 2022-10-29
year: 2022
---

Since GitHub started supporting mermaid in their markdown I wanted to
take another look at how to implement it on my site, I think it has some
very nice opportunities in teaching, documenting, and explaining things.

The docs kinda just jumped right into their mermaid language and really
went through that in a lot of depth, and skipped over how to implement
it yourself, turns out its pretty simple. You  just write mermaid syntax
in a div with a class of mermaid on it!

``` html
<script src='https://unpkg.com/mermaid@8.1.0/dist/mermaid.min.js'></script>
<div class='mermaid'>
graph TD;
a --> A
A --> B
B --> C
</div>
```

>  You  just write mermaid syntax in a div with a class of mermaid on
>  it!

The above gets me this diagram.

<script src='https://unpkg.com/mermaid@8.1.0/dist/mermaid.min.js'></script>
<div class='mermaid'>
graph TD;
a --> A
A --> B
B --> C
</div>

This feels so quick and easy to start getting some graphs up and running, but
does lead to layout shift and extra bytes down the pipe.  The best solution in
my opionion would be to forgo the js and ship svg.  That said, this is do dang
convenient I will be using it for some things.
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
    
    <a class='prev' href='/mermaid-subgraphs'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Grouping Mermaid nodes in Subgraphs</p>
        </div>
    </a>
    
    <a class='next' href='/mermaid-highlight'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Mermaid Highlight</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>