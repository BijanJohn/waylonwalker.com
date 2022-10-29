---
cover: ''
date: 2021-08-24
datetime: 2021-08-24 00:00:00+00:00
description: "Running your kedro pipeline from the command line could not be any easier
  to https://youtu.be/ZmccpLy-OEI https://waylonwalker.com/what-is-kedro/ \U0001F446
  Unsure what "
edit_link: https://github.com/edit/main/pages/blog/kedro-run.md
jinja: false
long_description: "Running your kedro pipeline from the command line could not be
  any easier to https://youtu.be/ZmccpLy-OEI https://waylonwalker.com/what-is-kedro/
  \U0001F446 Unsure what kedro is?  Check out this post. To run the whole darn project
  all we need to do is fire up"
now: 2022-10-29 15:54:38.065389
path: pages/blog/kedro-run.md
slug: kedro-run
status: published
super_description: "Running your kedro pipeline from the command line could not be
  any easier to https://youtu.be/ZmccpLy-OEI https://waylonwalker.com/what-is-kedro/
  \U0001F446 Unsure what kedro is?  Check out this post. To run the whole darn project
  all we need to do is fire up a terminal, activate Running a sub pipeline that we
  have created is as easy as telling kedro which While developing a node or a small
  list of nodes in a larger pipeline its handy We will cover more of the benefits
  that we get from the graph nature o"
tags:
- kedro
- python
templateKey: blog-post
title: Running your Kedro Pipeline from the command line
today: 2022-10-29
year: 2021
---

Running your kedro pipeline from the command line could not be any easier to
get started.  This is a concept that you may or may not do often depending on
your workflow, but its good to have under your belt.  I personally do this half
the time and run from ipython half the time.  In production, I mostly use docker
and that is all done with this cli.

https://youtu.be/ZmccpLy-OEI


<div class="onelinelink-wrapper">
    <a class="onelinelink" href="https://waylonwalker.com/what-is-kedro/">
        <img style="float: right;" align='right' src="https://covers.waylonwalker.com/what-is-kedro.jpg" alt="article cover for What is Kedro"/>
        <p><strong>What is Kedro</strong></p>
    </a>
</div>


> 👆 Unsure what kedro is?  Check out this post.

## Kedro run

To run the whole darn project all we need to do is fire up a terminal, activate
our environment, and tell kedro to run.

``` bash
kedro run 
```

## Specific Pipelines

Running a sub pipeline that we have created is as easy as telling kedro which
one we want to run.

``` bash
kedro run --pipeline dp
```

## Single Nodes

While developing a node or a small list of nodes in a larger pipeline its handy
to be able to run them one at a time.  Besides the use case of developing a
single node I would not reccomend leaning very heavy on running single nodes,
let the DAG do the work of figuring out which nodes to run for you.

``` bash
kedro run --pipeline dp --node create_model_input_table_node
kedro run --pipeline dp -n create_model_input_table_node
```

## Some DAG concepts

We will cover more of the benefits that we get from the graph nature of the DAG
in the future, but here is a quick peek at some things we can do.

``` bash
kedro run --pipeline dp --to-outputs preprocessed_shuttles
kedro run --pipeline dp --from-inputs preprocessed_shuttles
kedro run --pipeline dp --to-nodes create_model_input_table_node
```

## Multiple things


You can stack up multiple kedro dag concepts into a single run command.
```
kedro run --pipeline dp --to-nodes create_model_input_table_node --to-nodes preprocess_shuttles_node
```

## Related Links

* [what is kedro](https://waylonwalker.com/what-is-kedro/)
* [setting up a kedro environment](https://waylonwalker.com/kedro-environment/)
* [creating a new kedro project](https://waylonwalker.com/kedro-new/)
* [kedro run docs](https://kedro.readthedocs.io/en/latest/06_nodes_and_pipelines/04_run_a_pipeline.html)
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
    
    <a class='prev' href='/kedro-silence'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Silence Kedro Logs</p>
        </div>
    </a>
    
    <a class='next' href='/kedro-preflight'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>📝 Kedro Preflight Notes</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>