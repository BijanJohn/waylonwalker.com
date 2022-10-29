---
cover: ''
date: 2022-01-17
datetime: 2022-01-17 00:00:00+00:00
description: Many tools such as ripgrep respect the  Editors like vscode often do
  not include files that are .gitignored in pathspec pathspec
edit_link: https://github.com/edit/main/pages/til/gitignore-python.md
jinja: false
long_description: Many tools such as ripgrep respect the  Editors like vscode often
  do not include files that are .gitignored in pathspec pathspec
now: 2022-10-29 15:54:38.066098
path: pages/til/gitignore-python.md
slug: gitignore-python
status: draft
super_description: Many tools such as ripgrep respect the  Editors like vscode often
  do not include files that are .gitignored in pathspec pathspec
tags:
- python
templateKey: til
title: Python Respect the .gitignore
today: 2022-10-29
year: 2022
---

Many tools such as ripgrep respect the `.gitignore` file in the directory
it's searching in.  This helps make it incredibly faster and generally
more intuitive for the user as it just searches files that are part of
thier project and not things like their virtual environments, node
modules, or compiled builds.

> Editors like vscode often do not include files that are .gitignored in
> their search either.

`pathspec` is a pattern matching library that implements git's wildmatch
pattern so that you can ignore files included in your `.gitignore`
patterns.  You might want this to help make your libraries more
performant, or more intuitive for you users.

```python
import pathspec
from pathlib import Path

markdown_files = Path().glob('**/*.md')
if (Path(".gitignore").exists():
    lines = Path(".gitignore").read_text().splitlines()

    spec = pathspec.PathSpec.from_lines("gitwildmatch", lines)

    markdown_files = [
        file for file in markdown_files if not spec.match_file(str(file))
    ]
```

`pathspec` [home page](https://github.com/cpburnz/python-path-specification)
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
    
    <a class='prev' href='/gitui'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Gitui is a blazing fast terminal git interface</p>
        </div>
    </a>
    
    <a class='next' href='/github-supports-mermaid'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>GitHub Markdown now Supports Mermaid Diagrams</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>