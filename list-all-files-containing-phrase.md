---
cover: ''
date: 2021-12-31
datetime: 2021-12-31 00:00:00+00:00
description: 'One of the most useful skills you can acquire to make you faster at
  I Passing the flag  Giving '
edit_link: https://github.com/edit/main/pages/til/list-all-files-containing-phrase.md
jinja: false
long_description: 'One of the most useful skills you can acquire to make you faster
  at I Passing the flag  Giving '
now: 2022-10-29 15:54:38.066135
path: pages/til/list-all-files-containing-phrase.md
slug: list-all-files-containing-phrase
status: draft
super_description: 'One of the most useful skills you can acquire to make you faster
  at I Passing the flag  Giving '
tags:
- vim
- linux
- bash
templateKey: til
title: List all the files containing a phrase
today: 2022-10-29
year: 2021
---

One of the most useful skills you can acquire to make you faster at
almost any job that uses a computer is getting good at finding text in
your current working diretory and identifying the files that its in.  I
often use the silver searcher `ag` or ripgrep `rg` to find files in
large directories quickly.  Both have a sane set of defaults that ignore
hidden and gitignored files, but getting them to list only the filenames
and not the matched was not trivial to me.

> I've searched throught he help/man pages many times looking for these
> flags and they always seem to evade me.

## ag

Passing the flag `-l` to ag will get it to list only the filepath, and
not the match. Here I gave it a `--md` as well to only return markdown
filetypes.  `ag` supports a number of filetypes in a very similar way.

``` bash
ag nvim --md -l
```

## rg

Giving `rg` the `--files-with-matches` flag will yield you a similar set
of results, giving only the filepaths themselves and not the match
statement.  Also passing in the `-g "*.md"` will similarly yield only
results from markdown files.

``` bash
rg --files-with-matches you -g "*.md"
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
    
    <a class='prev' href='/localstack-status-permission'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>localstack status permission</p>
        </div>
    </a>
    
    <a class='next' href='/linux-unzip-directory'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Unzip minecraft mods to their directory from the command line</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>