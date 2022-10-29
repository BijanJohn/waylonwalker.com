---
cover: ''
date: 2022-03-05
datetime: 2022-03-05 00:00:00+00:00
description: Mermaid provides some really great ways to group or fence in parts of
  your Here we can model some sort of data ingest with some raw iot device and our
  If we wan
edit_link: https://github.com/edit/main/pages/til/mermaid-subgraphs.md
jinja: false
long_description: Mermaid provides some really great ways to group or fence in parts
  of your Here we can model some sort of data ingest with some raw iot device and
  our If we want to connect them, we can make a connection between a and A outside
  of It
now: 2022-10-29 15:54:38.066458
path: pages/til/mermaid-subgraphs.md
slug: mermaid-subgraphs
status: draft
super_description: Mermaid provides some really great ways to group or fence in parts
  of your Here we can model some sort of data ingest with some raw iot device and
  our If we want to connect them, we can make a connection between a and A outside
  of It
tags:
- webdev
templateKey: til
title: Grouping Mermaid nodes in Subgraphs
today: 2022-10-29
year: 2022
---

Mermaid provides some really great ways to group or fence in parts of your
graphs through the use of subgraphs.

Here we can model some sort of data ingest with some raw iot device and our
warehouse in different groups.

```
graph TD;

    subgraph raw_iot
        a
    end

    subgraph warehouse
        A --> B
        B --> C
    end
```
<script src='https://unpkg.com/mermaid@8.1.0/dist/mermaid.min.js'></script>
<div class='mermaid'>
graph TD;

    subgraph raw_iot
        a
    end

    subgraph warehouse
        A --> B
        B --> C
    end
</div>

## connecting subgroups

If we want to connect them, we can make a connection between a and A outside of
the subgraphs.

```
graph TD;

    subgraph raw_iot
        a
    end

    a --> A

    subgraph warehouse
        A --> B
        B --> C
    end
```
<script src='https://unpkg.com/mermaid@8.1.0/dist/mermaid.min.js'></script>
<div class='mermaid'>
graph TD;

    subgraph raw_iot
        a
    end

    a --> A

    subgraph warehouse
        A --> B
        B --> C
    end
</div>

## separation of concerns

It's also possible to specify subgraphs separate from where you define your
nodes. which allows for some different levels of grouping that would not be
possible if you were to define all your nodes inside of a subgraph.

```
graph TD;
    a --> A
    A --> B
    B --> C

    subgraph one
        A
        C
    end
```


<div class='mermaid'>
graph TD;
    a --> A
    A --> B
    B --> C

    subgraph warehouse
        A
        C
    end
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
    
    <a class='prev' href='/minimal-kedro-pipeline'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Minimal Kedro Pipeline</p>
        </div>
    </a>
    
    <a class='next' href='/mermaid-html'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Simple Plain Text Diagrams in HTML</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>