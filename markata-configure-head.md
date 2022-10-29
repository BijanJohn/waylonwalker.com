---
cover: ''
date: 2022-09-11
datetime: 2022-09-11 00:00:00+00:00
description: A long needed feature of markata has been the ability to really configure
  out Now you can add some extra style to your site with the existing built-in Each
  text
edit_link: https://github.com/edit/main/pages/til/markata-configure-head.md
jinja: false
long_description: 'A long needed feature of markata has been the ability to really
  configure out Now you can add some extra style to your site with the existing built-in
  Each text entry in  If this does not take you far enough yet, you can still eject
  out and use your '
now: 2022-10-29 15:54:38.065867
path: pages/til/markata-configure-head.md
slug: markata-configure-head
status: published
super_description: 'A long needed feature of markata has been the ability to really
  configure out Now you can add some extra style to your site with the existing built-in
  Each text entry in  If this does not take you far enough yet, you can still eject
  out and use your Once you have this in your '
tags:
- python
templateKey: til
title: markata extend <head> in configuration
today: 2022-10-29
year: 2022
---

![Astronauts stunting some stylish color explosion](https://stable-diffusion.waylonwalker.com/000172.2339173599.webp)

A long needed feature of markata has been the ability to really configure out
templates with configuration rather.  It's been long that you needed that if
you really want to change the style, meta tags, or anything in the head you
needed to write a plugin or eject out of the template and use your own.


## Adding some Head

Now you can add some extra style to your site with the existing built-in
template.

``` toml
[[markata.head]]
text = """
<style>
img {
  width: 100%;
  height: auto;
}
ul {
  display: flex;
  flex-wrap: wrap;
}
</style>
"""
```

## You can have more than one Head

Each text entry in `markata.head` just gets appended raw into the head.

``` toml
[[markata.head]]
text = """
<style>
img {
  width: 100%;
  height: auto;
}
ul {
  display: flex;
  flex-wrap: wrap;
}
</style>
"""

[[markata.head]]
text = """
<script>
console.log('hey there')
</script
"""
```

## Still need more?

If this does not take you far enough yet, you can still eject out and use your
own template pretty easy.  If you are going for a full custom site it's likely
that this will be the workflow for awhile.  Markata should only get better and
make this required less often as it matures.


``` toml
[markata]
post_template = "pages/templates/post_template.html"
```

Once you have this in your `markata.toml` you can put whatever you want in your
own template.
  
!["An astronaut working in a lab, colorful explosion, powder, particles, smoke, 35mm, bokeh, fog, f1.2, shallow depth of field, experiments running, beakers, test tubes, cyberpunk, octane render, trending on artstation, neon lighting, volumetric lighting, pink lighting" -s50 -W800 -H450 -C7.5 -Ak_lms -S2678273305](https://stable-diffusion.waylonwalker.com/000172.2678273305.webp)
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
    
    <a class='prev' href='/markata-dev-server'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Building Rich a Dev Server</p>
        </div>
    </a>
    
    <a class='next' href='/markata-0-3-0'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>markata 0.3.0 is 15-20% faster</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>