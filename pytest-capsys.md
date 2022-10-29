---
cover: ''
date: 2021-04-05
datetime: 2021-04-05 00:00:00+00:00
description: Testing print/log statements in pytest can be a bit tricky, capsys makes
  it capsys is a builtin pytest fixture that can be passed into any test to capture
  Simpl
edit_link: https://github.com/edit/main/pages/blog/pytest-capsys.md
jinja: false
long_description: Testing print/log statements in pytest can be a bit tricky, capsys
  makes it capsys is a builtin pytest fixture that can be passed into any test to
  capture Simply create a test function that accepts capsys as an argument and pytest
now: 2022-10-29 15:54:38.064211
path: pages/blog/pytest-capsys.md
slug: pytest-capsys
status: published
super_description: Testing print/log statements in pytest can be a bit tricky, capsys
  makes it capsys is a builtin pytest fixture that can be passed into any test to
  capture Simply create a test function that accepts capsys as an argument and pytest
tags:
- python
templateKey: blog-post
title: Pytest capsys
today: 2022-10-29
year: 2021
---

Testing print/log statements in pytest can be a bit tricky, capsys makes it
super easy, but I often struggle to find it.


## capsys

capsys is a builtin pytest fixture that can be passed into any test to capture
stdin/stdout.  For a more comprehensive description check out the docs on
[capsys](https://docs.pytest.org/en/stable/capture.html#accessing-captured-output-from-a-test-function)

## using capsys

Simply create a test function that accepts capsys as an argument and pytest
will give you a capsys opject.

```python
def test_print(capsys):
    print('hello')
    captured = capsys.readouterr()
    assert 'hello' in captured.out
    print('world')
    captured = capsys.readouterr()
    assert 'world' in captured.out
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
    
    <a class='prev' href='/python-args-kwargs'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>understanding python \*args and \*\*kwargs</p>
        </div>
    </a>
    
    <a class='next' href='/pypi-2fa'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>I turned on 2FA for all of my pypi packages</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>