---
cover: ''
date: 2022-03-14
datetime: 2022-03-14 00:00:00+00:00
description: Last Thursday I learned about  Watching him use  pytest-mock is out on
  pypi and can be installed with pip. Sometimes I fall victim to making these posts
  nice an
edit_link: https://github.com/edit/main/pages/til/pytest-mock-basics.md
jinja: false
long_description: Last Thursday I learned about  Watching him use  pytest-mock is
  out on pypi and can be installed with pip. Sometimes I fall victim to making these
  posts nice and easy to follow.  It I just wanted to do something that was worth
  mocking, the first thin
now: 2022-10-29 15:54:38.065691
path: pages/til/pytest-mock-basics.md
slug: pytest-mock-basics
status: draft
super_description: 'Last Thursday I learned about  Watching him use  pytest-mock is
  out on pypi and can be installed with pip. Sometimes I fall victim to making these
  posts nice and easy to follow.  It I just wanted to do something that was worth
  mocking, the first thing that came I want to mock out '
tags:
- python
- python
- python
templateKey: til
title: pytest-mock Basics
today: 2022-10-29
year: 2022
---

Last Thursday I learned about `pytest-mock` at a local python meetup.  The
presenter showed how he uses `pytest-mock` for his work, and it was kinda eye
opening.  I knew what mocking was, but I had not seen it in this context.

## Discovery

Watching him use `pytest-mock` I realized that mocking was not as hard as I had
made it out to be.  You can install `pytest-mock`, use the mocker fixture, and
patch objects methods with what you want them to be.

## install

pytest-mock is out on pypi and can be installed with pip.

```
python -m pip install pytest-mock
```

## What I actually did

Sometimes I fall victim to making these posts nice and easy to follow.  It
takes more steps than just pip install, you need a place to practice in a nice
sandbox.  Here is how I make my sandboxes.

``` python
mkdir ~/git/learn-pytest-mock
cd ~/git/learn-pytest-mock
# well actually open a new tmux session there
echo pytest-mock > requirements.txt

# I copied in my .envrc, and ran direnv allow, which actually just made me a virtual env as follows
python3 -m venv .venv --prompt $(basename $PWD)
source .venv/bin/activate

# now install pytest-mock
pip install -r requirements.txt

# make some tests to mock
mkdir tests
nvim tests/test_me.py
```

## create a tests/test_me.py

I just wanted to do something that was worth mocking, the first thing that came
to mind was to do something that made a network call.  Here I made a method
that uses requests to go get the content on my homepage, but changes it's
return behavior based on the `status_code` of the request.

I want to mock out `requests` to ensure that GoGetter can handle both `200`
(http success) and `404` (http not found) status codes.

``` python
# tests/test_me.py
import requests


class GoGetter:
    """
    The thing I am testing, this is usually imported into the test file, but
    defined here for simplicity.
    """
    def get(self):
        """
        Get the content of `https://waylonwalker.com` and return it as a string
        if successfull, or False if it's not found.
        """
        r = requests.get("https://waylonwalker.com")
        if r.status_code == 200:
            return r.content
        if r.status_code == 404:
            return False


class DummyRequester:
    def __init__(self, content, status_code):
        """
        mock out content and status_code
        """

        self.content = content
        self.status_code = status_code

    def __call__(self, url):
        """
        The way I set this up GoGetter is going to call an instance of this
        class, so the easiest way to make it work was to implement __call__.
        """
        self.url = url
        return self


def test_success_get(mocker):
    """
    Show that the GoGetter can handle successful calls.
    """
    go_getter = GoGetter()

    # Use the mocker fixture to change how requests.get works while inside of test_success_get
    mocker.patch.object(requests, "get", DummyRequester("waylonwalker", 200))
    assert "waylon" in go_getter.get()


def test_failed_get(mocker):
    """
    Show that the GoGetter can handle failed calls.
    """
    go_getter = GoGetter()

    # Use the mocker fixture to change how requests.get works while inside of test_failed_get
    mocker.patch.object(requests, "get", DummyRequester("waylonwalker", 404))
    assert go_getter.get() is False
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
    
    <a class='next' href='/pytest-capsys'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Pytest capsys</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>