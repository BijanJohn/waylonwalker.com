---
cover: ''
date: 2022-03-07
datetime: 2022-03-07 00:00:00+00:00
description: Mermaid gives us a way to style nodes through the use of css, but rather
  than produces the following graph style one fill:#BADA55
edit_link: https://github.com/edit/main/pages/til/mermaid-highlight.md
jinja: false
long_description: Mermaid gives us a way to style nodes through the use of css, but
  rather than produces the following graph style one fill:#BADA55
now: 2022-10-29 15:54:38.066378
path: pages/til/mermaid-highlight.md
slug: mermaid-highlight
status: draft
super_description: Mermaid gives us a way to style nodes through the use of css, but
  rather than produces the following graph style one fill:#BADA55
tags:
- webdev
templateKey: til
title: Mermaid Highlight
today: 2022-10-29
year: 2022
---

Mermaid gives us a way to style nodes through the use of css, but rather than
using normal css selectors we need to use `style <nodeid>`.  This also applies
to subgraphs, and we can use the name of the subgraph in place of the nodeid.

``` ruby
graph TD;
    a --> A
    A --> B
    B --> C

    style A fill:#f9f,stroke:#333,stroke-width:4px
    style B fill:#f9f,stroke:#333,stroke-width:4px

    subgraph one
        a
    end

    style one fill:#BADA55
```

produces the following graph

<script src='https://unpkg.com/mermaid@8.1.0/dist/mermaid.min.js'></script>
<div class='mermaid'>
graph TD;
a --> A
A --> B
B --> C
style A fill:#f9f,stroke:#333,stroke-width:4px
style B fill:#f9f,stroke:#333,stroke-width:4px
subgraph one
  a
end

style one fill:#BADA55
</div>
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
    
    <a class='prev' href='/mermaid-html'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Simple Plain Text Diagrams in HTML</p>
        </div>
    </a>
    
    <a class='next' href='/mentorship-vs-sponsorship'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Mentorship Vs Sponsorship</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>