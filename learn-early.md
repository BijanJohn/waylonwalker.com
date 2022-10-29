---
cover: ''
date: 2020-01-10
datetime: 2020-01-10 00:00:00+00:00
description: What is something that you recently learned that you wish you would have
  learned or understood earlier?
edit_link: https://github.com/edit/main/pages/blog/learn-early.md
jinja: false
long_description: Mine is the python debugger. I was a long holdout thinking that
  print statements were sufficient. That was untill I started having errors crop up
  in functions that took minutes to run. The thing that I most notably wish I would
  have known about is po
now: 2022-10-29 15:54:38.063938
path: pages/blog/learn-early.md
slug: learn-early
status: published
super_description: 'Mine is the python debugger. I was a long holdout thinking that
  print statements were sufficient. That was untill I started having errors crop up
  in functions that took minutes to run. The thing that I most notably wish I would
  have known about is post For more information about the debugger checkout the real
  python article.  Also keep a bookmark of the table of pdb commands from the article '
tags: []
templateKey: blog-post
title: What is something you should have learned or understood earlier?
today: 2022-10-29
year: 2020
---

Mine is the python debugger. I was a long holdout thinking that print statements were sufficient. That was untill I started having errors crop up in functions that took minutes to run. The thing that I most notably wish I would have known about is post_mortem.

## Example

    [ins] In [4]: def repeater(msg, repeats=1):
             ...:     "repeats messages {repeats} number of times"
             ...:     print(f'{msg}\n' * repeats)

    [ins] In [5]: repeater('hi', 3)
    hi
    hi
    hi

    [ins] In [6]: repeater('hi', 'a')
    ---------------------------------------------------------------------------
    TypeError                                 Traceback (most recent call last)
    <ipython-input-6-0ec595774c81> in <module>
    ----> 1 repeater('hi', 'a')

    <ipython-input-4-530890de75cd> in repeater(msg, repeats)
          1 def repeater(msg, repeats=1):
          2     "repeats messages {repeats} number of times"
    ----> 3     print(f'{msg}\n' * repeats)
          4

# Debug with iPython/Jupyter

    %debug

## Vanilla Debug

    import pdb
    import sys

    pdb.post_mortem(sys.last_traceback)

## More

For more information about the debugger checkout the real python article. [https://realpython.com/python-debugging-pdb/](https://realpython.com/python-debugging-pdb/ "https://realpython.com/python-debugging-pdb/")

Also keep a bookmark of the table of pdb commands from the article [https://realpython.com/python-debugging-pdb/#essential-pdb-commands](https://realpython.com/python-debugging-pdb/#essential-pdb-commands "https://realpython.com/python-debugging-pdb/#essential-pdb-commands")

# Debug Session

[![debug session](https://res.cloudinary.com/practicaldev/image/fetch/s--ShQ3NN06--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/1tnri6wdwimwk7i83cvg.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--ShQ3NN06--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/1tnri6wdwimwk7i83cvg.png)
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
    
    <a class='prev' href='/localstack-status-permission'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>localstack status permission</p>
        </div>
    </a>
    
    <a class='next' href='/keyboard-driven-vscode'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Keyboard Driven VSCode</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>