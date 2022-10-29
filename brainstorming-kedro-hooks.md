---
cover: ''
date: 2020-05-22
datetime: 2020-05-22 00:00:00+00:00
description: "This post is a \U0001F9E0 branstorming work in progress.  I will likely
  use it as a If you are completely unsure what kedro is be sure to check out my  filepath
  replacer"
edit_link: https://github.com/edit/main/pages/blog/brainstorming-kedro-hooks.md
jinja: false
long_description: "This post is a \U0001F9E0 branstorming work in progress.  I will
  likely use it as a If you are completely unsure what kedro is be sure to check out
  my  filepath replacer bucket replacer preflight check that data exists run  run
  mypy run interrogate run flake8"
now: 2022-10-29 15:54:38.063996
path: pages/blog/brainstorming-kedro-hooks.md
slug: brainstorming-kedro-hooks
status: published
super_description: "This post is a \U0001F9E0 branstorming work in progress.  I will
  likely use it as a If you are completely unsure what kedro is be sure to check out
  my  filepath replacer bucket replacer preflight check that data exists run  run
  mypy run interrogate run flake8 Great Expectations send email send slack Great Expectations
  save stats/meta data hooks are executed in reverse order of the hooks list. hooks
  with  after before args run pipeline catalog before after before or after node hook?
  does before  catalog l"
tags: []
templateKey: blog-post
title: Brainstorming Kedro Hooks
today: 2022-10-29
year: 2020
---

This post is a 🧠 branstorming work in progress.  I will likely use it as a
storage location/brain dump of hook ideas.

> ### What is Kedro 🤔
>
> If you are completely unsure what kedro is be sure to check out my [what is kedro](https://waylonwalker.com/what-is-kedro/) post

## after_catalog_created

* filepath replacer
* bucket replacer

## before_pipeline_run

* preflight
* check that data exists
* run `kedro_static_viz`
* run mypy
* run interrogate
* run flake8

## after_pipeline_run

* Great Expectations
* send email
* send slack

## before_node_run

## after_node_run

* Great Expectations
* save stats/meta data
*

## Execution Order

hooks are executed in reverse order of the hooks list.

hooks with `tryfirst` will be moved to the end of the list
hooks with `trylast` will be moved to the end of the list

1. after_catalog_created
2. before_pipeline_run

* args
  * run_params = run_params = {'run_id': '2020-05-23T15.24.23.958Z', 'project_path': '/mnt/c/temp/kedro0160', 'env': 'local', 'kedro_version': '0.15.9', 'tags': (), 'from_nodes': \[\], 'to_nodes': \[\], 'node_names': (), 'from_inputs': \[\], 'load_versions': {}, 'pipeline_name': None, 'extra_params': {}, 'git_sha': None}
  * pipeline
  * catalog

1. before_node_run
2. after_node_run
3.

## When does data get saved???

* before or after node hook?

## ??Unsure??

* does before  catalog load have access to parameters?
  * Yes
*

### 🥾[steel toes](https://github.com/waylonwalker/steel-toes/)

_I was way too excited about this one and already created it_

_prevents pain from stepping on your teammates toes_

Kedro is so amazing at promoting collaboration between team members.  Each team member can check out the code, branch, and start work on their own section of the pipeline.  Issues can arrise if the team members section of the pipeline happen to cross.  Breaking changes happen, BREAKS during development happen and can completely kill a teammates workflow.

* is there a way to prevent toe stepping?
* try to load `filepath_<branch>`
* if load fails try `filepath`
* save data to `filepath_<branch>`

**how**

* on after_catalog_load check for existing "branch" data
* if "branch" data exists load that
* otherwise keep default
*

### Run only nodes that have changed

* store a deephash of functions code
* store a hash of the inputs
* if neither code or inputs changed run function, otherwise skip.
  * How could a hook choose to skip the node?

## Static viz hook

Before pipeline run

* make site
* Set node status to queued

Before node run

* Set running status

After node run

* Set running status

On pipeline error

* Set run status

On node error

* Set error status

After pipeline run

* Set complete status

After node run

* set complete
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
    
    <a class='prev' href='/break-pane'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>tmux break-pane</p>
        </div>
    </a>
    
    <a class='next' href='/blogging-for-me'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Blogging For Me</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>