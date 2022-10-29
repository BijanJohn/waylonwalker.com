---
cover: ''
date: 2022-09-24
datetime: 2022-09-24 00:00:00+00:00
description: While updating my site to use Markata Jinja comes with a handy utility
  for escaping strings.  I definitly tried to The issue I ran into was when trying
  to setup
edit_link: https://github.com/edit/main/pages/til/jinja2-escape.md
jinja: false
jinja_md: false
long_description: While updating my site to use Markata Jinja comes with a handy utility
  for escaping strings.  I definitly tried to The issue I ran into was when trying
  to setup meta tags with the new Using my article titles like this ended up causing
  this syntax err
now: 2022-10-29 15:54:38.065505
path: pages/til/jinja2-escape.md
slug: jinja2-escape
status: published
super_description: 'While updating my site to use Markata Jinja comes with a handy
  utility for escaping strings.  I definitly tried to The issue I ran into was when
  trying to setup meta tags with the new Using my article titles like this ended up
  causing this syntax error when not After making a complicated system of using '
tags:
- python
templateKey: til
title: how to escape variables in jinja templates
today: 2022-10-29
year: 2022
---

While updating my site to use Markata's new configurable head I ran into some
escaping issues.  Things like single quotes would cause jinja to fail as it was
closing quotes that it shouldnt have.

![Nuclear core being help up by glowing neon wires, cyberpunk synthwave, intricate abstract. delicate artwork. by tooth wu, wlop, beeple, dan mumford. pink volumetric lighting, octane render, trending on artstation, greg rutkowski very coherent symmetrical artwork. cinematic, hyper realism, high detail, octane render, 8k, depth of field, bokeh. chrome accents.](https://stable-diffusion.waylonwalker.com/000258.1910330087.webp#cinematic)

## Jinja Escaping Strings

Jinja comes with a handy utility for escaping strings.  I definitly tried to
over-complicate this before realizing.  You can just pipe your variables into
`e` to escape them.  This has worked pretty flawless at solving some jinja
issues for me.

``` html
<p>
how to escape variables in jinja templates
</p>
```

## Creating meta tags in Markata

The issue I ran into was when trying to setup meta tags with the new
configurable head, some of my titles have single quotes in them.  This is what
I put in my `markata.toml` to create some meta tags.

``` toml
[[markata.head.meta]]
name = "og:title"
content = "how to escape variables in jinja templates"
```

Using my article titles like this ended up causing this syntax error when not
escaped.

``` python
SyntaxError: invalid syntax. Perhaps you forgot a comma?
Exception ignored in: <function Forward.__del__ at 0x7fa9807192d0>
Traceback (most recent call last):
    ...
TypeError: 'NoneType' object is not callable
```

## jinja2 escape

After making a complicated system of using `html.escape` I realized that jinja
included escaping out of the box so I updated my `markata.toml` to include the
escaping, and it all just worked!.

``` toml
[[markata.head.meta]]
name = "og:title"
content = "how to escape variables in jinja templates"
```

![Nuclear core being help up by wires, intricate abstract. delicate artwork. by tooth wu, wlop, beeple, dan mumford. pink volumetric lighting, octane render, trending on artstation, greg rutkowski very coherent symmetrical artwork. cinematic, hyper realism, high detail, octane render, 8k, depth of field, bokeh. chrome accents.](https://stable-diffusion.waylonwalker.com/000255.3328233410.webp#cinematic)
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
    
    <a class='prev' href='/journey'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>It's not all about winning</p>
        </div>
    </a>
    
    <a class='next' href='/ipython-q-exit'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>IPython q to exit</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>