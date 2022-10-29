---
cover: ''
date: 2022-01-03
datetime: 2022-01-03 00:00:00+00:00
description: I By default copier uses double square brackets for its variables. note
  Before running copier we need to tell copier what variables to ask for, I prefer
  to inst
edit_link: https://github.com/edit/main/pages/til/copier-template-variables.md
jinja: false
long_description: 'I By default copier uses double square brackets for its variables.
  note Before running copier we need to tell copier what variables to ask for, I prefer
  to install cli tools that I need globally with pipx, this When running  note The
  resulting files '
now: 2022-10-29 15:54:38.065656
path: pages/til/copier-template-variables.md
slug: copier-template-variables
status: draft
super_description: I By default copier uses double square brackets for its variables.
  note Before running copier we need to tell copier what variables to ask for, I prefer
  to install cli tools that I need globally with pipx, this When running  note The
  resulting files will have your variables injected into them if you have
tags:
- python
- bash
templateKey: til
title: copier template variables
today: 2022-10-29
year: 2022
---

I've been looking for a templating tool for awhile that works well with
single files.  My go to templating tool `cookiecutter` does not work for
single files, it needs to put files into a directory underneath of it.

## template variables

By default copier uses double square brackets for its variables.
variables in files, directory_names, or file_names will be substituted
for their value once you render them.

``` python
# hello-py/hello.py.tmpl
print('hello-[[name]]')
```

> note! by default copier will not inject variables into your
> [[template-strings]] unless you use a .tmpl suffix.

Before running copier we need to tell copier what variables to ask for,
we do this with a copier.yml file.

``` yaml
# copier.yml
name:
  default: my_name
  type: str
  help: What is your name
```

## installing copier

I prefer to install cli tools that I need globally with pipx, this
always gives me access to the tool without worrying about dependency
conflicts, bloating my system site-packages, or managing a separate
virtual environment for it myself.

``` bash
pipx install copier
```
## running copier

When running `copier copy` we pass in the directory of the template, and
the directory that we want to render the template into.

``` bash
copier copy hello-py .
```

> note! the directory '.' is often referred to in cli programs to
> represent the current working directory that we are calling the
> command from.

## results

The resulting files will have your variables injected into them if you have
setup your template and copier.yml up correctly.

``` python
print('hello-you')
```
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
    
    <a class='prev' href='/copier-templates'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Copier Templates</p>
        </div>
    </a>
    
    <a class='next' href='/copier-tasks'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Copier Tasks | Python templating post run task</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>