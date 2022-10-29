---
cover: ''
date: 2022-10-11
datetime: 2022-10-11 00:00:00+00:00
description: 'Markata now allows you to create jinja extensions that will be loaded
  right in The entry for 0.5.0.dev2 from markata Created entrypoint hook allowing
  for users '
edit_link: https://github.com/edit/main/pages/til/markata-supports-jinja-plugins-0.5.0.dev2.md
jinja: false
long_description: 'Markata now allows you to create jinja extensions that will be
  loaded right in The entry for 0.5.0.dev2 from markata Created entrypoint hook allowing
  for users to extend marka with jinja The first example that you can use right now
  is  Get it with a '
now: 2022-10-29 15:54:38.066323
path: pages/til/markata-supports-jinja-plugins-0.5.0.dev2.md
slug: markata-supports-jinja-plugins-0-5-0-dev2
status: published
super_description: 'Markata now allows you to create jinja extensions that will be
  loaded right in The entry for 0.5.0.dev2 from markata Created entrypoint hook allowing
  for users to extend marka with jinja The first example that you can use right now
  is  Get it with a pip install Use it with some jinja in your markdown. The jinja
  extension details are for another post, but this is how  Then  If your project is
  using  If your project is using '
tags:
- python
templateKey: til
title: Markata Supports Jinja Plugins 0.5.0.dev2
today: 2022-10-29
year: 2022
---

Markata now allows you to create jinja extensions that will be loaded right in
with nothing more than a `pip install`.


## From the Changelog

The entry for 0.5.0.dev2 from markata's [changelog](https://markata.dev/changelog/)

* Created entrypoint hook allowing for users to extend marka with jinja
  exensions #60 0.5.0.dev2

!["cybernetic soldier working on a rusting tape machine robot, cinematic lighting, detailed, cell shaded, 4 k, warm colours, concept art, by wlop, ilya kuvshinov, artgerm, krenz cushart, greg rutkowski, pixiv. cinematic dramatic atmosphere, sharp focus, volumetric lighting, cinematic lighting, studio quality" -s50 -W832 -H416 -C12.0 -Ak_lms -S1808537114](https://stable-diffusion.waylonwalker.com/000368.1808537114.webp)

## markata-gh

The first example that you can use right now is `markata-gh`.  It will render
repos by GitHub topic and user using the gh cli, which is available in github
actions!

Get it with a pip install

``` bash
pip install markata-gh
```

Use it with some jinja in your markdown.

``` markdown
## Markata plugins

It uses the logged in uer by default.

{% gh_repo_list_topic "markata" %}

You can more explicitly grab your username, and a topic.
{% gh_repo_list_topic "waylonwalker", "personal-website" %}
```

## How is this achieved

The jinja extension details are for another post, but this is how `markata-gh`
exposes itslef as a jinja extension.

``` python
class GhRepoListTopic(Extension):
    tags = {"gh_repo_list_topic"}

    def __init__(self, environment):
        super().__init__(environment)

    def parse(self, parser):
        line_number = next(parser.stream).lineno
        try:
            args = parser.parse_tuple().items
        except AttributeError:
            raise AttributeError(
                "Invalid Syntax gh_repo_list_topic expects <username>, or <username>,<topic> both must have the comma"
            )

        return nodes.CallBlock(self.call_method("run", args), [], [], "").set_lineno(
            line_number
        )

    def run(self, username=None, topic=None, caller=None):
        "get's markdown to inject into post"
        return repo_md(username=username, topic=topic)
```

!["cybernetic soldier working on a rusting tape machine robot, cinematic lighting, detailed, cell shaded, 4 k, warm colours, concept art, by wlop, ilya kuvshinov, artgerm, krenz cushart, greg rutkowski, pixiv. cinematic dramatic atmosphere, sharp focus, volumetric lighting, cinematic lighting, studio quality" -s50 -W832 -H416 -C12.0 -Ak_lms -S2487720618 ](https://stable-diffusion.waylonwalker.com/000368.2487720618.webp)

## Entrypoints

Then `markata-gh` exposes itself as an extension through entrypoints.

### Creating entrypoints in pyproject.toml

If your project is using `pyproject.toml` for packaging you can setup an
entrypoint as follows.


``` toml
[project.entry-points."markata.jinja_md"]
markta_gh = "markata_gh.repo_list:GhRepoListTopic"
```

## Creating entrypoints in setup.py

If your project is using `setup.py` for packaging you can setup an
entrypoint as follows.

``` python
setup(
    ...
    entry_points={
        "markata.jinja_md": ["markta_gh" = "markata_gh.repo_list:GhRepoListTopic"]
    },
    ...
)
```

!["cybernetic soldier working on a rusting tape machine robot, cinematic lighting, detailed, cell shaded, 4 k, warm colours, concept art, by wlop, ilya kuvshinov, artgerm, krenz cushart, greg rutkowski, pixiv. cinematic dramatic atmosphere, sharp focus, volumetric lighting, cinematic lighting, studio quality" -s50 -W832 -H416 -C12.0 -Ak_lms -S655826089](https://stable-diffusion.waylonwalker.com/000368.655826089.webp)
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
    
    <a class='prev' href='/markata-todoui-live-replay-4-6-2022'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>LIVE-REPLAY - Python dev | Markata todoui | 4/6/2022</p>
        </div>
    </a>
    
    <a class='next' href='/markata-now-uses-hatch'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Markata now uses hatch</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>