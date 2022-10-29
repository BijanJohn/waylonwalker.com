---
cover: ''
date: 2022-04-05
datetime: 2022-04-05 00:00:00+00:00
description: From the same Author that brought us command line essentials like  You
  can install from one of the Something I often do to blend colors together is add
  a little
edit_link: https://github.com/edit/main/pages/til/pastel-cli.md
jinja: false
long_description: 'From the same Author that brought us command line essentials like  You
  can install from one of the Something I often do to blend colors together is add
  a little alpha to Here is one from the docs that show how you can generate a color
  palette from I '
now: 2022-10-29 15:54:38.065775
path: pages/til/pastel-cli.md
slug: pastel-cli
status: draft
super_description: From the same Author that brought us command line essentials like  You
  can install from one of the Something I often do to blend colors together is add
  a little alpha to Here is one from the docs that show how you can generate a color
  palette from I am on Ubuntu 20.10 as I write this and it works flawlessly.  When
  I call the I often will want to convert a color from rgb to hex or hsl vice versa.  I
  open Here I can mix up a dark grey with rgb, mix in 20% cornflowerblue, and grab
  the I really want
tags:
- cli
templateKey: til
title: Mixing Colors at the Command Line
today: 2022-10-29
year: 2022
---

From the same Author that brought us command line essentials like `fd` and
`bat` written in rust comes [pastel](https://github.com/sharkdp/pastel) an
incredible command-line tool to generate, analyze, convert and manipulate
colors.

## Install

You can install from one of the
[releases](https://github.com/sharkdp/pastel/releases), follow the
[instructions](https://github.com/sharkdp/pastel#installation) for your system
from the repo.  I chose to go the nix route.  I have enjoyed the simplicity of
the nix package manager being cross platform and have very up  to date packages
in it.

```bash
nix-env --install pastel
```

## Mixing colors

Something I often do to blend colors together is add a little alpha to
something over top of a background.  I can simulate this by mixing colors.

```bash
pastel color cornflowerblue | pastel mix goldenrod -f .1
```

Here is one from the docs that show how you can generate a color palette from
random colors, mix in some red, lighten and format all in one pipe.

```bash
pastel random | pastel mix red | pastel lighten 0.2 | pastel format hex
```

## color picker

I am on Ubuntu 20.10 as I write this and it works flawlessly.  When I call the
command, a color picker gui pops up along with an rgb panel.  I can pick from
the panel or from anywhere on my screen.

```bash
pastel color-picker
```

<video autoplay="" controls="" loop="true" muted="" playsinline="" width="100%">
    <source src="https://images.waylonwalker.com/pastel-pick.mp4" type="video/mp4">
    Sorry, your browser doesn't support embedded videos.
</video>

## Conversions

I often will want to convert a color from rgb to hex or hsl vice versa.  I open
google and search.  This is one part that I could really use adding to my
workflow.

## Check it

Here I can mix up a dark grey with rgb, mix in 20% cornflowerblue, and grab the
hex value.

```bash
pastel color 50,50,50 | pastel mix cornflowerblue -f .2
```

![my terminal output from mixing grey](https://images.waylonwalker.com/pastel-mix-grey.png)

I really want to get this into my workflow.  I saw it quite awhile ago but have
not done much color work.  Lately I have been doing a bit more front end, and
have been getting into game development.  This is the time to stop googling
random color mixers and use this one.
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
    
    <a class='prev' href='/pathlib-read-text'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>How I read Files in Python</p>
        </div>
    </a>
    
    <a class='next' href='/passion'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Follow Your Passion</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>