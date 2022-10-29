---
cover: ''
date: 2019-09-26
datetime: 2019-09-26 00:00:00+00:00
description: Pathlib is an amazing cross-platform path tool.
edit_link: https://github.com/edit/main/pages/notes/just-use-pathlib.md
jinja: false
long_description: Pathlib is an amazing cross-platform path tool.
now: 2022-10-29 15:54:38.061695
path: pages/notes/just-use-pathlib.md
slug: just-use-pathlib
status: published
super_description: Pathlib is an amazing cross-platform path tool.
tags:
- python
templateKey: blog-post
title: Just Use Pathlib
today: 2022-10-29
year: 2019
---

Pathlib is an amazing cross-platform path tool.

## Import

```python
from pathlib import Path
```

## Create path object

**Current Directory**

```python
cwd = Path('.').absolute()
```

**Users Home Directory**

```python
home = Path.home()
```

**module directory**

```python
module_path = Path(__file__)
```

**Others**
Let's create a path relative to our current module.

```python
data_path = Path(__file__) / 'data'
```

## Check if files exist

## Make Directories

```python
data_path.mkdir(parents=True, exists_ok=True)
```

## rename files

```python
Path(data_path /'example.csv').rename('real.csv')
```

## List files

## Glob Files

```python
data_path.glob('*.csv')
```

**recursively**

```python
data_path.rglob('*.csv')
```

## Write

```python
Path(data_path / 'meta.txt').write_text(f'created on {datetime.datetime.today()})
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
    
    <a class='prev' href='/jut'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>JUT | Read Notebooks in the Terminal</p>
        </div>
    </a>
    
    <a class='next' href='/journey'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>It's not all about winning</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>