---
cover: ''
date: 2020-04-13
datetime: 2020-04-13 00:00:00+00:00
description: If you are developing python packages and using GitHub here are four
  actions If you are developing python packages and using GitHub here are four actions
  that y
edit_link: https://github.com/edit/main/pages/blog/four-github-actions-python.md
jinja: false
long_description: If you are developing python packages and using GitHub here are
  four actions If you are developing python packages and using GitHub here are four
  actions that you can use today to automate your release workflow.  Since python
  tools generally have suc
now: 2022-10-29 15:54:38.065246
path: pages/blog/four-github-actions-python.md
slug: four-github-actions-python
status: published
super_description: If you are developing python packages and using GitHub here are
  four actions If you are developing python packages and using GitHub here are four
  actions that you can use today to automate your release workflow.  Since python
  tools generally have such a simple cli I have opted to use the cli for most of these,
  that way I know exactly what is happening and have more control over it if I need.
  Lint Test Package Upload to PyPi flake8 is pythons quintessential linting tool to
  ensure that your code i
tags:
- actions
- python
templateKey: blog-post
title: Four Github Actions for Python
today: 2022-10-29
year: 2020
---

If you are developing python packages and using GitHub here are four actions
that you can use today to automate your release workflow.  Since python tools
generally have such a simple cli I have opted to use the cli for most of these,
that way I know exactly what is happening and have more control over it if I
need.

<style>
h2 img { width: 100%; box-shadow: .5rem .5rem 3rem #141F2D, -.5rem -.5rem 3rem rgba(255,255,255,.1);}
img{ max-width: 100% !important;}
</style>

If you are developing python packages and using GitHub here are four actions that you can use today to automate your release workflow.  Since python tools generally have such a simple cli I have opted to use the cli for most of these, that way I know exactly what is happening and have more control over it if I need.

* Lint
* Test
* Package
* Upload to PyPi

## Lint With flake8

flake8 is pythons quintessential linting tool to ensure that your code is up to the standards that you have set for the project, and to help prevent hidden bugs.  I am a heavy user of `black` and `isort` as well, but for ci flake8 is typically considered the gold standard. `black` and `isort` will help you automate many fixes suggested by flake8.

``` yaml
    - name: Lint with flake8
      run: |
        pip install flake8 isort black
        # stop the build if there are Python syntax errors or undefined names
        flake8 . --count --select=E9,F63,F7,F82 --show-source --statistics
        # exit-zero treats all errors as warnings. The GitHub editor is 127 chars wide
        flake8 . --count --exit-zero --max-complexity=10 --max-line-length=127 --statistics
```

## Testing with pytest

pytest is such an amazing project, definitely one to check out and start using if you are not already doing so.

``` yaml
    - name: Test with pytest
      run: |
         pip install pytest
         pytest
```

## Building with setuptools

I am still using the older, less hipster, setuptools to build my projects.  Primarily because I am used to to, partly because things such as editable installs are not possible with the newer build tools, and I am a **HEAVY** user of editable installs.

``` yaml
    - name: build
      run: |
        pip install wheel
        python setup.py sdist bdist_wheel
```

## Publishing to pypi

Here I am going to use an amazing action from the GitHub marketplace by @webKnjaZ.  It is super simple.  First you need to log into your [pypi.org](https://pypi.org) account, go to account settings, enable 2FA, and add a Token, then paste that toke into a secret inside your repos settings.  Next just drop the name of that secret into the password field of the action and you are off.

**note**: I did put a check in to make sure that push event comes from main.


``` yaml
    - name: pypi-publish
      if: github.ref == 'refs/heads/main'
      uses: pypa/gh-action-pypi-publish@v1.1.0
      with:
        # PyPI user
        # Password for your PyPI user or an access token
        password: ${{ secrets.pypi_password }}
        # The repository URL to use
        # repository_url: # optional
        # The target directory for distribution
        # packages_dir: # optional, default is dist
```


## That's my four top python actions

These are the easiest and most basic four actions that every python project on GitHub should have.  Now that actions are available for free on any public repo there is no reason not to use GitHub Actions for any new project.
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
    
    <a class='prev' href='/four-github-actions-website'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Four github actions for your website</p>
        </div>
    </a>
    
    <a class='next' href='/forestry-io'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Forestry.io</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>