---
cover: ''
date: 2021-03-21
datetime: 2021-03-21 00:00:00+00:00
description: I have started doing more regular PR https://waylonwalker.com/what-is-kedro
  passing ci Variable Names Antipatterns No commented out code Docsttrings generally
  m
edit_link: https://github.com/edit/main/pages/blog/how-i-review-kedro-projects.md
jinja: false
long_description: I have started doing more regular PR https://waylonwalker.com/what-is-kedro
  passing ci Variable Names Antipatterns No commented out code Docsttrings generally
  make sense Phase1 is typically a quick scan over the PR right within the PR window
  in my br
now: 2022-10-29 15:54:38.065423
path: pages/blog/how-i-review-kedro-projects.md
slug: how-i-review-kedro-projects
status: draft
super_description: I have started doing more regular PR https://waylonwalker.com/what-is-kedro
  passing ci Variable Names Antipatterns No commented out code Docsttrings generally
  make sense Phase1 is typically a quick scan over the PR right within the PR window
  in my browser. flake8 black isort interrogate pytest build The very first thing
  that needs to happen is automated CI.  We use things like I strugle really hard
  to not impose my own opinion into the PR at this point, I am not too much of a zealot
  of any parad
tags:
- python
templateKey: blog-post
title: How I Review Pipeline Code
today: 2022-10-29
year: 2021
---

I have started doing more regular PR's on my teams
[Kedro](https://waylonwalker.com/what-is-kedro) pipelines.  I generally take a
two phase approach to the review in order to give the reviewee both quick and
detailed feedback.



<div class="onelinelink-wrapper">
    <a class="onelinelink" href="https://waylonwalker.com/what-is-kedro/">
        <img style="float: right;" align='right' src="https://covers.waylonwalker.com/what-is-kedro.jpg" alt="article cover for What is Kedro"/>
        <p><strong>What is Kedro</strong></p>
    </a>
</div>


## initial scan (Phase1)

* passing ci
* Variable Names
* Antipatterns
* No commented out code
* Docsttrings generally make sense


Phase1 is typically a quick scan over the PR right within the PR window in my browser.  

### Passing CI

* flake8
* black
* isort
* interrogate
* pytest
* build

The very first thing that needs to happen is automated CI.  We use things like
flake8, black, isort, interrogate to ensure that everyone follows generic style
guides like pep8.  The project does a build within the PR, but no deploy.

## Variable Names

I strugle really hard to not impose my own opinion into the PR at this point,
and sometimes really want to change a lot of variable names.  Typically I make
sure they don't grow longer than necessary, too short, misspelled, or
inconsistent.  I make sure that I can follow the flow without gettign tripped
up by names.

## Antipatterns

I am not too much of a zealot of any paradigm.  I am mostly looking for
readability and consistency.  Many times as we dig into an antipattern the
response is "Well I tried to do it the other way, but hit this issue".
Generally we figure out the problem together and avoid the antipattern, or
understand that this is an edge case and leave a comment for our future selves
to know why it is the way it is.

## No Commented Code

One of the biggest scars of a hard problem solving session is leaving behind
all the other things you tried commented out with no context.  I am a fan of
keeping things clean, because its real easy to forget which line was working
next time you comment out the good one.  You have made your best choice, run
with it and get rid of the clutter..


---

## clone (Phase2)

At this point it depends on the complexity of the change and confidence of the
reviewee.  If their changes are simple enough and they are confident with the
results its probably good enough to just review the changes.  If its a bigger
change I want to see the pipeline myself.




## viz

* disconnects

## load data

## step through operations

## run sections

## run functions
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
    
    <a class='prev' href='/how-python-tools-config'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>How python tools configure</p>
        </div>
    </a>
    
    <a class='next' href='/how-i-kedro'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>How I Kedro</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>