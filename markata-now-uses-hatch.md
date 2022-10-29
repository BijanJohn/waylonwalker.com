---
cover: ''
date: 2022-10-08
datetime: 2022-10-08 00:00:00+00:00
description: 'Markata now uses hatch as its build backend, and version bumping tool.
  Markata 0.5.0 is now out, and it Over the last month I made a big push to get 0.5.0
  out, '
edit_link: https://github.com/edit/main/pages/til/markata-now-uses-hatch.md
jinja: false
long_description: 'Markata now uses hatch as its build backend, and version bumping
  tool. Markata 0.5.0 is now out, and it Over the last month I made a big push to
  get 0.5.0 out, which adds a whole Here Moved to PEP 517 build #59 0.5.0.dev1 Before
  cutting all of my per'
now: 2022-10-29 15:54:38.066358
path: pages/til/markata-now-uses-hatch.md
slug: markata-now-uses-hatch
status: published
super_description: 'Markata now uses hatch as its build backend, and version bumping
  tool. Markata 0.5.0 is now out, and it Over the last month I made a big push to
  get 0.5.0 out, which adds a whole Here Moved to PEP 517 build #59 0.5.0.dev1 Before
  cutting all of my personal projects over to hatch.  The first thing I It automatically
  bumps versions, using pre-releases on all branches other than To convert the project
  over to hatch, and get rid of setup.py/setup.cfg, I ran I then manually moved over
  my isort config,'
tags:
- python
templateKey: til
title: Markata now uses hatch
today: 2022-10-29
year: 2022
---

Markata now uses hatch as its build backend, and version bumping tool.
`setup.py`, and `setup.cfg` are completely gone.

!["An astronaut working in a lab, there is a series of eggs ready to hatch baby snakes on the table, experiments running, beakers, test tubes, cyberpunk trending on artstation, neon lighting, volumetric lighting, pink lighting" -s50 -W800 -H450 -C7.5 -Ak_lms -S4048189038](https://stable-diffusion.waylonwalker.com/000136.4048189038.webp)

## 0.5.0 is big

Markata 0.5.0 is now out, and it's huge.  Even though it's the backend of this
blog I don't actually have that many posts directly about it.  I've used it a
bit for blog fuel in generic ways, like talking about pluggy and diskcache, but
very little have I even mentioned it.

Over the last month I made a big push to get 0.5.0 out, which adds a whole
bunch of new configurability to `markata`.

Here's the [changelog](https://markata.dev/changelog/) entry.

> * Moved to PEP 517 build #59 0.5.0.dev1

## My Personal Simple CI/CD

Before cutting all of my personal projects over to hatch.  The first thing I
did was to setup a solid github action,
[hatch-action](https://github.com/WaylonWalker/hatch-action)that I can resue.

It automatically bumps versions, using pre-releases on all branches other than
main, with special branches for bumping major, minor, patch, dev, alha, beta,
and dev.

## hatch new --init

To convert the project over to hatch, and get rid of setup.py/setup.cfg, I ran
`hatch new --init`.  This automatically grabs all the metadata for the project
and makes a `pyproject.toml` that has most of what I need.

``` bash
hatch new --init
```

I then manually moved over my isort config, put flake8 config into `.flake8`,
and dropped setup.cfg.

## lint-test

Part of my hatch-action is to run a `before-command`, for markata, this runs
all of my linting and testing in one hatch script called `lint-test`.  If this
fails CI will fail and I can read the report in the logs, make a fix and
re-publish.

``` toml
[tool.hatch.envs.default.scripts]
cov = "pytest --cov-report=term-missing --cov-config=pyproject.toml --cov=markata --cov=tests"
no-cov = "cov --no-cov"
lint = "flake8 markata"
format = "black --check markata"
sort-imports = "isort markata"
build-docs = "markata build"
lint-test = [
 "lint",
 "format",
 "seed-isort-config",
 "sort-imports",
 "cov",
]
test-lint = "lint-test"
```

## Typical branching workflow
_with automatic versioning_

My typical workflow is to work on features in their own branch where they do
not automatically version or publish, they keep the same version they were
branched off of.  Then I do a pr to develop, which will do a `minor,dev` bump
and publish a pre-relese to pypi.

``` text
# starting with version 0.0.0
Feature1 -- │
Feature2 -- ├── dev 0.1.0.dev1,2,3 ── main 0.1.0
Feature3 -- │
```

I will let several features collect in develop before cutting a full relese
over to main.  This gives me time to make sure the solution is what makes the
most sense, I try to use it in a few projects, and generally its edges show,
and another pr is warranted to make the feature useful for more use cases.
After running and using these new releases in a few projects, I am confident
that its ready and release to main.

### managing prs

Doing PR's with gh, probably deserves its own post but here are some helpful
commands.

``` bash
gh pr create --base develop --fill
gh pr edit
gh pr diff | dunk
gh pr merge -ds
```

## Building and publishing

!["An astronaut working in a lab, hacking on a computer terminal, htop is running, shallow depth of field beakers, test tubes, volumetric lighting, pink lighting, by victo ngai, killian eng vibrant colours, dynamic lighting, digital art" -s50 -W768 -H448 -C7.5 -Ak_lms -S3512493435](https://stable-diffusion.waylonwalker.com/000221.3512493435.webp)

hatch makes building and publishing pretty straightforward.  It's one command
inside my hatch-action to build and one to publish.  On each project that uses
my hatch-action I only need to give it a token that I get from PyPi.

``` yaml
env:
  HATCH_INDEX_USER: __token__
  HATCH_INDEX_AUTH: ${{ secrets.pypi_password }}
```

## Full set of changes

If you want to see all of the details on how markata moved over to hatch, you can check out this diff.

https://github.com/WaylonWalker/markata/compare/v0.4.0..v0.5.0.dev0

!["An astronaut working in a lab, hacking on a computer terminal, htop is running, shallow depth of field beakers, test tubes, volumetric lighting, pink lighting, by victo ngai, killian eng vibrant colours, dynamic lighting, digital art" -s50 -W768 -H448 -C7.5 -Ak_lms -U 4.0 0.6 -S2409791448 ](https://stable-diffusion.waylonwalker.com/000224.2409791448.webp)
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
    
    <a class='prev' href='/markata-supports-jinja-plugins-0-5-0-dev2'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Markata Supports Jinja Plugins 0.5.0.dev2</p>
        </div>
    </a>
    
    <a class='next' href='/markata-dev-server'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Building Rich a Dev Server</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>