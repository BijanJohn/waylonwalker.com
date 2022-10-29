---
cover: ''
date: 2022-05-10
datetime: 2022-05-10 00:00:00+00:00
description: I am often editing my own scripts as I develop them. I want to make a
  better Currently I am combining  for now lets use my todo command as an example
  On first p
edit_link: https://github.com/edit/main/pages/til/ewhich.md
jinja: false
long_description: I am often editing my own scripts as I develop them. I want to make
  a better Currently I am combining  for now lets use my todo command as an example
  On first pass I made a bash function to do exactly what I have been doing. The  Note,
  I use bash fun
now: 2022-10-29 15:54:38.066008
path: pages/til/ewhich.md
slug: ewhich
status: draft
super_description: 'I am often editing my own scripts as I develop them. I want to
  make a better Currently I am combining  for now lets use my todo command as an example
  On first pass I made a bash function to do exactly what I have been doing. The  Note,
  I use bash functions instead of aliases for things that require input. This works
  fine for commands that are files, but not aliases or shell if the command is not
  found, search for a file if its a builtin, exit if its an alias, open my  if its
  a function, open my '
tags:
- bash
templateKey: til
title: Bash function to edit scripts faster
today: 2022-10-29
year: 2022
---

I am often editing my own scripts as I develop them. I want to make a better
workflow for working with scripts like this.

## Currently

Currently I am combining `nvim` with a `which` subshell to etit these files
like this.

> for now lets use my todo command as an example

``` bash
nvim `which todo`
```

## First pass

On first pass I made a bash function to do exactly what I have been doing.

```bash
ewhich () {$EDITOR `which "$1"`}
```

The `$1` will pass the first input to the which subshell.  Now we can edit our todo script like this.

```bash
ewich todo
```

>  Note, I use bash functions instead of aliases for things that require input.

## Final State

This works fine for commands that are files, but not aliases or shell
functions.  Next I jumped to looking at the output of `command -V $1`.

* if the command is not found, search for a file
* if its a builtin, exit
* if its an alias, open my `~/.alias file to that line`
* if its a function, open my `~/.alias file to that line`

``` bash
ewhich () {
case `command -V $1` in
    "$1 not found")
        FILE=`fzf --prompt "$1 not found searching ..." --query $1`
        [ -z "$FILE" ] && echo "closing" || $EDITOR $FILE;;
    *"is a shell builtin"*)
        echo "$1 is a builtin";;
    *"is an alias"*)
        $EDITOR ~/.alias +/alias\ $1;;
    *"is a shell function"*)
        $EDITOR ~/.alias +/^$1;;
    *)
        $EDITOR `which "$1"`;;
esac
```

## a bit more ergo, and less readable

To make it easier to type, at the sacrifice of readability for anyone watching
I added a single character `e` alias to ewhich.  So when I want to edit
anything I just use `e`.

```bash
alias e=ewhich
```

## Results

Here is a quick screencast of how it works.

<video autoplay="" controls="" loop="true" muted="" playsinline="" width="100%">
     <source src="https://images.waylonwalker.com/ewhich.webm" type="video/webm">
     Sorry, your browser doesn't support embedded videos.
</video>
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
    
    <a class='prev' href='/expand-one-line-links'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Expand One Line Links</p>
        </div>
    </a>
    
    <a class='next' href='/eight-years-cat'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>My first eight years as a working professional.</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>