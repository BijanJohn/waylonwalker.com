---
cover: ''
date: 2022-01-22
datetime: 2022-01-22 00:00:00+00:00
description: 'Copier allows you to run post render tasks, just like cookiecutter.
  These are The example I have below runs an  I have put the script in '
edit_link: https://github.com/edit/main/pages/til/copier-tasks.md
jinja: false
long_description: 'Copier allows you to run post render tasks, just like cookiecutter.
  These are The example I have below runs an  I have put the script in '
now: 2022-10-29 15:54:38.065809
path: pages/til/copier-tasks.md
slug: copier-tasks
status: draft
super_description: 'Copier allows you to run post render tasks, just like cookiecutter.
  These are The example I have below runs an  I have put the script in '
tags:
- python
- cli
- linux
templateKey: til
title: Copier Tasks | Python templating post run task
today: 2022-10-29
year: 2022
---

Copier allows you to run post render tasks, just like cookiecutter. These are
defined as a list of `tasks` in your `copier.yml`.  They are simply shell
commands to run.

The example I have below runs an `update-gratitude` bash script after the
copier template has been rendered.

``` yaml
# copier.yml
num: 128
_answers_file: .gratitude-copier-answers.yml
_tasks:
  - "update-gratitude"
```

I have put the script in `~/.local/bin` so that I know it's always on my
`$PATH`.  It will reach back into the `copier.yml` and update the default
number.


``` bash
#!/bin/bash
# ~/.local/bin/update-gratitude
current=`awk '{print $2}' ~/.copier-templates/gratitude/copier.yml | head -n 1`
new=`expr $current + 1`
echo $current
echo $new
sed -i "s/$current/$new/g" ~/.copier-templates/gratitude/copier.yml
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
    
    <a class='prev' href='/copier-template-variables'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>copier template variables</p>
        </div>
    </a>
    
    <a class='next' href='/copier-slugify'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Copier Slugify | python templating | using cookiecutter</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>