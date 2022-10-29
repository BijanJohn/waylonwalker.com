---
cover: ''
date: 2022-01-08
datetime: 2022-01-08 00:00:00+00:00
description: The copier answers file is a key component to making your templates Inside
  of my  Inside my copier.yml I have setup my  Once I change the  I After rendering
  the
edit_link: https://github.com/edit/main/pages/til/copier-answers.md
jinja: false
long_description: The copier answers file is a key component to making your templates
  Inside of my  Inside my copier.yml I have setup my  Once I change the  I After rendering
  the template we have the following content in our This is where I was most stuck,
  primarily b
now: 2022-10-29 15:54:38.066351
path: pages/til/copier-answers.md
slug: copier-answers
status: draft
super_description: The copier answers file is a key component to making your templates
  Inside of my  Inside my copier.yml I have setup my  Once I change the  I After rendering
  the template we have the following content in our This is where I was most stuck,
  primarily becuase  So the defaults are now changed to our previous results, but
  it keeps
tags:
- python
- linux
- cli
templateKey: til
title: Using Copier Answers to rerun templates quickly
today: 2022-10-29
year: 2022
---

The copier answers file is a key component to making your templates
re-runnable.  Let's look at the example for my setup.py.

``` bash
❯ tree ~/.copier-templates/setup.py
/home/walkers/.copier-templates/setup.py
├── [[ _copier_conf.answers_file ]].tmpl
├── copier.yml
├── setup.cfg
└── setup.py.tmpl

0 directories, 4 files
```

Inside of my `[[ _copier_conf.answers_file ]].tmpl` file is this, a
message not to muck around with it, and the ansers in yaml form.  The
first line is just a helper for the blog post.

``` yaml
# ~/.copier-templates/setup.py/\[\[\ _copier_conf.answers_file\ \]\].tmpl
# Changes here will be overwritten by Copier; NEVER EDIT MANUALLY
[[_copier_answers|to_nice_yaml]]
```

Inside my copier.yml I have setup my _answers_file to point to a special
file.  This is because this is not a whole projet template, but one just
for a single file.

``` yaml
# copier.yml
# ...
_answers_file: .setup-py-copier-answers.yml
```

> Once I change the _answers_file I was incredibly stuck

## Run it

I'm making a library of personal copier templates in my
`~/.copier-templates` directory and I am going to run it from there.

``` bash
copier copy ~/.copier-templates/setup.py
```
## Results

After rendering the template we have the following content in our
`.setup.setup-py-copier-answers.yml` file.  This will allow us to update
quick if we ever change our template.

``` yaml
# .setup-py-copier-answers.yml
# Changes here will be overwritten by Copier; NEVER EDIT MANUALLY
_src_path: /home/walkers/.copier-templates/setup.py
author_github: waylonwalker
author_name: Waylon Walker
description: awesomeness
framework: null
keywords: null
package_name: my-package
```

## Update it

This is where I was most stuck, primarily becuase `-a <answers_file>`
must come exactly after the base command `copier`.  This felt a bit odd
to and not where I expected it so it.

``` bash
copier -a .setup-py-copier-answers.yml update
```

## Stop asking all these damn questions

So the defaults are now changed to our previous results, but it keeps
asking for them.  To stop asking we can simply add a `-f` flag.

``` bash
copier -fa .setup-py-copier-answers.yml update
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
    
    <a class='prev' href='/copier-endops'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Changing copier template strings (_endops)</p>
        </div>
    </a>
    
    <a class='next' href='/convert-markdown-pdf-linux'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Converting markdown to pdf with pandoc on linux</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>