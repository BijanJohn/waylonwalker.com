---
cover: ''
date: 2019-09-24
datetime: 2019-09-24 00:00:00+00:00
description: Filtering pandas DataFrames many different ways.
edit_link: https://github.com/edit/main/pages/notes/filtering-pandas.md
jinja: false
long_description: Good for method chaining, i.e. adding more methods or filters without
  assigning a new variable. general purpose, this is probably the most common method
  you see in training/examples capable of including multiple strings to include Good
  For partial ma
now: 2022-10-29 15:54:38.061801
path: pages/notes/filtering-pandas.md
slug: filtering-pandas
status: published
super_description: Good for method chaining, i.e. adding more methods or filters without
  assigning a new variable. general purpose, this is probably the most common method
  you see in training/examples capable of including multiple strings to include Good
  For partial matches anything that we put inside of square brackets can be set as
  a variable then passed in. &
tags:
- python
- data
templateKey: blog-post
title: Filtering Pandas
today: 2022-10-29
year: 2019
---

## query

Good for method chaining, i.e. adding more methods or filters without assigning a new variable.

```python
# is
skus.query('AVAILABILITY == " AVAILABLE"')
# is not
skus.query('AVAILABILITY != " AVAILABLE"')
```

## masking

general purpose, this is probably the most common method you see in training/examples

```python
# is
skus[skus['AVAILABILITY'] == 'AVAILABLE']
# is not
skus[~skus['AVAILABILITY'] == 'AVAILABLE']
```

## isin

capable of including multiple strings to include

    # is in
    df[df.AVAILABILITY.isin(['AVAILABLE', 'AVL'])]
    # is not in
    df[~df.AVAILABILITY.isin(['AVAILABLE', 'AVL'])]

## contains

Good For partial matches

    # contains
    df[df.AVAILABILITY.str.contains('AVA')]
    # not contains
    df[~df.AVAILABILITY.str.contains('AVA')]

## MASKS

anything that we put inside of square brackets can be set as a variable then passed in.

    service_mask = skus['AVAILABILITY'] == 'AVAILABLE'
    name_mask = skus['NAME'] == 'Dell chromebook 11'

### Operators

& - and
\~ - not
| - or

### AVAILABLE and NAME

    df[service_mask & name_mask]

### AVAILABLE or NAME

    df[service_mask | name_mask]

### AVAILABLE and not NAME

    df[service_mask & ~name_mask]
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
    
    <a class='prev' href='/find-kedro-release'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>📢 Announcing find-kedro</p>
        </div>
    </a>
    
    <a class='next' href='/explicit-vs-implicit-returns-in-javascript'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Explicit vs Implicit Returns in Javascript</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>