---
cover: ''
date: 2022-06-11
datetime: 2022-06-11 00:00:00+00:00
description: It Yes the solution comes from a competing templating framework. I install
  copier with pipx, so I need to inject cookiecutter in to my copier If you are using
  a
edit_link: https://github.com/edit/main/pages/til/copier-slugify.md
jinja: false
long_description: It Yes the solution comes from a competing templating framework.
  I install copier with pipx, so I need to inject cookiecutter in to my copier If
  you are using a normal virtual environment you can just pip install it. Now to enable
  the extension you n
now: 2022-10-29 15:54:38.066436
path: pages/til/copier-slugify.md
slug: copier-slugify
status: published
super_description: 'It Yes the solution comes from a competing templating framework.
  I install copier with pipx, so I need to inject cookiecutter in to my copier If
  you are using a normal virtual environment you can just pip install it. Now to enable
  the extension you need to declare it in your  Now to use it, anywhere that you want
  to slugify a variable, you just pipe it Here is a slimmed down version of what the  Running
  the template looks a bit like this. The next section is straight from the  The  Would
  output:'
tags:
- python
templateKey: til
title: Copier Slugify | python templating | using cookiecutter
today: 2022-10-29
year: 2022
---

It's no secret that I love automation, and lately my templating framework of
choice has been copier.  One hiccup I recently ran into was having spaces in my
templated directory names.  This makes it harder to run commands against as you
need to escape them, and if they end up in a url you end up with ugly `%20` all
over.

## Cookiecutter has the solution

> Yes the solution comes from a competing templating framework.

I install copier with pipx, so I need to inject cookiecutter in to my copier
environment to use the slugify filter.

``` bash
pipx inject copier cookiecutter
```

If you are using a normal virtual environment you can just pip install it.

``` bash
pip install copier cookiecutter
```

## add the extension to your template

_copier.yml_

Now to enable the extension you need to declare it in your `copier.yml` file in
your template.

``` yaml
_jinja_extensions:
    - cookiecutter.extensions.SlugifyExtension
```
## Use it | slugify

_use-it_

Now to use it, anywhere that you want to slugify a variable, you just pipe it
into slugify.


``` bash
❯ tree .
.
├── copier.yml
├── README.md
└── {{ site_name|slugify }}
    └── markata.toml.jinja

1 directory, 3 files
```

Here is a slimmed down version of what the `copier.yml` looks like.

``` yml
site_name:
  type: str
  help: What is the name of your site, this shows in seo description and the site title.
  default: Din Djarin

_jinja_extensions:
    - cookiecutter.extensions.SlugifyExtension
```

## Results

Running the template looks a bit like this.

![running python copier with the cookiecutter slugify extension](https://screenshots.waylonwalker.com/copier-cookiecutter-slugify.webp)

---

## straight from their docs

The next section is straight from the [cookiecutter docs](
https://cookiecutter.readthedocs.io/en/latest/advanced/template_extensions.html#slugify-extension)

### Slugify extension

The `cookiecutter.extensions.SlugifyExtension` extension provides a `slugify`
filter in templates that converts string into its dashed ("slugified") version:


``` jinja
{% "It's a random version" | slugify %}
```

Would output:

```
it-s-a-random-version
```

It is different from a mere replace of spaces since it also treats some special
characters differently such as `'` in the example above. The function accepts
all arguments that can be passed to the `slugify` function of
`python-slugify`_. For example to change the output from
`it-s-a-random-version` to `it_s_a_random_version`, the `separator` parameter
would be passed: `slugify(separator='_')`.
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
    
    <a class='prev' href='/create-custom-kedro-dataset'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Create Custom Kedro Dataset</p>
        </div>
    </a>
    
    <a class='next' href='/codeit-bro-interview'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Codeit Bro Interview</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>