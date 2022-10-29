---
cover: ''
date: 2020-05-15
datetime: 2020-05-15 00:00:00+00:00
description: dead simple docstring coverage for your python project
edit_link: https://github.com/edit/main/pages/blog/interrogate.md
jinja: false
long_description: "As usual while listening to  This thing is \U0001F525 hot off the
  press folks, we Nothing I have tried has come close to being this good It runs documentation
  coverage for your python project. It allows you to set the minimum amount of docstring
  coverage for "
now: 2022-10-29 15:54:38.064231
path: pages/blog/interrogate.md
slug: interrogate
status: published
super_description: "As usual while listening to  This thing is \U0001F525 hot off
  the press folks, we Nothing I have tried has come close to being this good It runs
  documentation coverage for your python project. It allows you to set the minimum
  amount of docstring coverage for your project and has some great setup instructions
  right in the readme. Interrogate is on pypi so it is super simple to install with
  \ This is the best part, its super easy to run right from the command line One of
  my new open source packages  Persona"
tags:
- python
templateKey: blog-post
title: Interrogate is a pretty awesome, brand new, cli for Python packages
today: 2022-10-29
year: 2020
---

As usual while listening to [python bytes 181](https://pythonbytes.fm/episodes/show/181/it-s-time-to-interrogate-your-python-code) I heard of a tool that I had to try out right away!

This thing is 🔥 hot off the press folks, we're talking the first release only 3 weeks ago. Its something that the python community needed years ago, and it belongs in your CI **today**. I had tried several tools that tried to do docstring coverage in the past but they were a bit cumbersome and were quickly forgotten about. Not interrogate, its dead simple!

> Nothing I have tried has come close to being this good

## Interrogate

It runs documentation coverage for your python project. It allows you to set the minimum amount of docstring coverage for your project and has some great setup instructions right in the readme.

## Install it

Interrogate is on pypi so it is super simple to install with `pip`

```
pip install interrogate
```

## run it

This is the best part, its super easy to run right from the command line! Just call it, and give it a path to run.

```
interrogate -v <path>
```

## 😲 I have some work to do

One of my new open source packages [find-kedro](https://find.kedro.dev/) only hit 71%.

```
interrogate find-kedro -v
```

![verbose interrogate on find-kedro](https://images.waylonwalker.com/interrogate-python-v.png)

Personally I really like the **double verbose** output that gives you the names of everything missing a docstring and the line they occur on.

```
interrogate find-kedro -vv
```

![double verbose interrogate on find-kedro](https://images.waylonwalker.com/interrogate-python-vv.png)

## Give it a ⭐
Every project this amazing deserves a big ol ⭐ on GitHub! Go over to [econchick/interrogate](https://github.com/econchick/interrogate) and give it a one... it deserves it! While you are there check out the **wicked** good readme. It has great examples of how to run it from your command line, as a pre-commit hook, in your ci, with your code, or pyproject.toml.

> While you are there check out the **wicked** good readme!
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
    
    <a class='prev' href='/ipython-config'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Ipython-Config</p>
        </div>
    </a>
    
    <a class='next' href='/install-nvim-skit'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>How linux users install a text editor</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>