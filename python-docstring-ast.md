---
cover: ''
date: 2022-01-18
datetime: 2022-01-18 00:00:00+00:00
description: Getting docstrings from python First you need to load in some python
  code as a string, and parse it with You can then use  To get all of the functions
  docstring
edit_link: https://github.com/edit/main/pages/til/python-docstring-ast.md
jinja: false
long_description: 'Getting docstrings from python First you need to load in some python
  code as a string, and parse it with You can then use  To get all of the functions
  docstrings we can use  ast.walk docs: Recursively yield all descendant nodes in
  the tree starting a'
now: 2022-10-29 15:54:38.065558
path: pages/til/python-docstring-ast.md
slug: python-docstring-ast
status: draft
super_description: 'Getting docstrings from python First you need to load in some
  python code as a string, and parse it with You can then use  To get all of the functions
  docstrings we can use  ast.walk docs: Recursively yield all descendant nodes in
  the tree starting at  Here is an image of me running this example through '
tags:
- python
templateKey: til
title: Get Python docstring with ast
today: 2022-10-29
year: 2022
---

Getting docstrings from python's ast is far simpler and more reliable than any
method of regex or brute force searching.  It's also much less intimidating
than I originally thought.

## Parsing

First you need to load in some python code as a string, and parse it with
`ast.parse`.  This gives you a tree like object, like an html dom.

``` python
py_file = Path("plugins/auto_publish.py")
raw_tree = py_file.read_text()
tree = ast.parse(raw_tree)
```

## Getting the Docstring

You can then use `ast.get_docstring` to get the docstring of the node you are
currently looking at.  In the case of freshly loading in a file, this will be
the module level doctring that is at the very top of a file.

``` python
module_docstring = ast.get_docstring(tree)
```

## Walking for all functions

To get all of the functions docstrings we can use `ast.walk` to look for nodes
that are an instance of `ast.FunctionDef`, then run `get_docstring` on those
nodes.

```python
functions = [f for f in ast.walk(tree) if isinstance(f, ast.FunctionDef)]
function_docs = [ast.get_docstring(f) for f in functions]
```

> ast.walk docs: Recursively yield all descendant nodes in the tree starting at *node*
(including *node* itself), in no specified order.  This is useful if you
only want to modify nodes in place and don't care about the context.

## Example

Here is an image of me running this example through `ipython`.

![getting docstrings from the ast in python](https://images.waylonwalker.com/ast-get-docstring.png)
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
    
    <a class='prev' href='/python-enum'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Python Enum</p>
        </div>
    </a>
    
    <a class='next' href='/python-diskcache'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>How I setup a sqlite cache in python</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>