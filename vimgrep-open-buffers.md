---
cover: ''
date: 2022-08-22
datetime: 2022-08-22 00:00:00+00:00
description: 'How to vimgrep over hidden files. I needed to delete all build pipeline
  steps that were named  Today After searching through all the projects it was clear
  that '
edit_link: https://github.com/edit/main/pages/til/vimgrep-open-buffers.md
jinja: false
long_description: How to vimgrep over hidden files. I needed to delete all build pipeline
  steps that were named  Today After searching through all the projects it was clear
  that all the steps were some were a two liner Some had a variation in the name some
  were more t
now: 2022-10-29 15:54:38.066443
path: pages/til/vimgrep-open-buffers.md
slug: vimgrep-open-buffers
status: published
super_description: How to vimgrep over hidden files. I needed to delete all build
  pipeline steps that were named  Today After searching through all the projects it
  was clear that all the steps were some were a two liner Some had a variation in
  the name some were more than 2 lines. some used a different command. Templates are
  amazing, and tools like cookiecutter and copier are essential in I know all the
  files that I care to search for are called build.yml, and they Once opened as a
  buffer by using args, and a hand
tags:
- vim
templateKey: til
title: vimgrep open buffers
today: 2022-10-29
year: 2022
---

How to vimgrep over hidden files.

I needed to delete all build pipeline steps that were named `upload docs`.  I
currently have about 60 projects running from the same template all running
very similar builds.  In the past I've scripted out migrations for large
changes like this, they involved writing a python script that would load the
yaml file into a dictionary, find the corresponding steps make the change and
write it back out.

Today's job was much simplar, just delete the step, were all steps are
surrounded by newlines.  My first thought was to just open all files in vim and
run `dap`.  I just needed to get these files:positions into my quickfix.  My
issue is that all the builds reside within hidden directories by convention.

## The issue
_variability_

After searching through all the projects it was clear that all the steps were
in their own paragraph, though I was not 100% confident enough to completely
automate it, and the word `upload docs` was in the paragraph.

some were a two liner

``` yaml
- name: upload docs
  script: aws s3 ...
```

Some had a variation in the name

``` yaml
- name: upload docs to s3
  script: aws s3 ...
```

some were more than 2 lines.


``` yaml
- name: upload docs
  script: |
    aws s3 ...
```

some used a different command.

``` yaml
- name: upload docs
  script: |
    python ...
```

## Templates are great
_but they change_

Templates are amazing, and tools like cookiecutter and copier are essential in
my workflow, but those templates change over time. Some things are a constant,
and others like this one are an ever evolving beast until they are tamed into
something the team is happy with.

## vimgrep over hidden files ##

I know all the files that I care to search for are called build.yml, and they
are in a hidden directory.

```
:args `fd -H build.yml`
:vimgrep /upload docs/ ##
```

Once opened as a buffer by using args, and a handy fd command I can vimgrep
over all the open buffers using `##`

> Open buffers are represented by ##

Now I can just `dap` and `:cnext` my way through the list of changes that I
have, and know that I hit every one of them when I am at the end of my list.
And can double check this in about 10s by scrolling back through the quickfix
list.

## Vim points achieved

You're not a true vim enthusiast until you have spent 10 minutes writing a blog
post about how vim saved you 5 minutes.  Check out all the other times this has
happened to me in the [vim](https://waylonwalker.com/vim/) tag.
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
    
    <a class='prev' href='/what-are-github-actions'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>What Are GitHub Actions</p>
        </div>
    </a>
    
    <a class='next' href='/vim-wsl-clipboard'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Vim Wsl Clipboard</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>