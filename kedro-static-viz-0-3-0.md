---
cover: ''
date: 2020-05-28
datetime: 2020-05-28 00:00:00+00:00
description: Even though it is a static site there is no functionality lost.  The
  only thing that Even though it Kedro viz is a fantastic kedro plugin that allows
  you to vis
edit_link: https://github.com/edit/main/pages/blog/kedro-static-viz-0-3-0.md
jinja: false
long_description: Even though it is a static site there is no functionality lost.  The
  only thing that Even though it Kedro viz is a fantastic kedro plugin that allows
  you to visualize your data pipeline.  Kedro allows you to quickly build production-ready
  pipelines w
now: 2022-10-29 15:54:38.063886
path: pages/blog/kedro-static-viz-0-3-0.md
slug: kedro-static-viz-0-3-0
status: published
super_description: 'Even though it is a static site there is no functionality lost.  The
  only thing that Even though it Kedro viz is a fantastic kedro plugin that allows
  you to visualize your data pipeline.  Kedro allows you to quickly build production-ready
  pipelines where you just configure a catalog, then toss python functions into a
  big pile.  Kedro figures out the order everything needs ran in for you, allows you
  to run a datasets dependencies or dependents only.   kedro visualization from the
  projects readme '
tags:
- kedro
- python
templateKey: blog-post
title: Kedro Static Viz 0.3.0 is out with Hooks Support
today: 2022-10-29
year: 2020
---

[kedro-static-viz](https://github.com/WaylonWalker/kedro-static-viz) is out with support for the newly released hooks feature.  This means that you can have `kedro-static-viz` automatically deploy a full gatsby site `before_pipeline_run` keeping your visualization always up to date.

Even though it is a static site there is no functionality lost.  The only thing that's missing is the flask server.  With [kedro-static-viz](https://github.com/WaylonWalker/kedro-static-viz) you can deploy your visualization to a number of static hosting providers such as GitHub pages free of charge with wicked fast performance

## ⚡ It's Fast

Even though it's built on gatsbyjs the full site builds in under 2s even on slower hardware.  This is because the site is already pre-rendered and stripped of any excess.  It's zipped up right into the python package and is typically used with the cli, but now can be used with python, or as a hook as well.

> ### What is [kedro-viz](https://github.com/quantumblacklabs/kedro-viz) 🤔

Kedro viz is a fantastic kedro plugin that allows you to visualize your data pipeline.  Kedro allows you to quickly build production-ready pipelines where you just configure a catalog, then toss python functions into a big pile.  Kedro figures out the order everything needs ran in for you, allows you to run a datasets dependencies or dependents only.  [kedro-viz](https://github.com/quantumblacklabs/kedro-viz) gives you a great way to see this ordering visually.

![a visualization of a kedro data pipeline featuring data and functions flowing together.](https://images.waylonwalker.com/pipeline_visualisation-1.png "kedro visualization")

> kedro visualization from the projects readme

## Check out a live running example

Using the power of GitHub actions the I have built a kedro iris pipeline visualization that can be found on [https://static-viz.kedro.dev/](https://static-viz.kedro.dev/)

## Itching to get started with kedro

You can be up and running in a matter of minutes if you already have python running on your machine.

Make a virtual environment with your environment manager of choice.

``` python
conda create -n kedro-practice python=3.8 -y
conda activate kedro-practice
```

Install kedro. Then create a new project with their awesome cli template built on cookiecutter. Make sure to answer `y` to get a prebuilt example pipeline with data.

    pip install kedro kedro-static-viz
    kedro new

## Vizualize your pipeline with the cli 〽

For local use when you already have the full project `kedro viz` is a great tool to use, but this is an article about kedro-static-viz.

``` python
kedro-static-viz static-viz
```

Since we used `kedro-static-viz` you will have a new directory called `public` that you can host on any static web hosting service, like GitHub pages or Netlify.

## Ready to try out the new hooks feature 🙋‍♀️

Open up your `<project>/src/run.py` and add the hook to your `ProjectContext` class.  Next time you run your pipeline you will have an updated pipeline.

``` python
from kedro_static_viz.hooks import StaticViz

class ProjectContext(KedroContext):
   project_name = "kedro0160"
   project_version = "0.16.1"
   package_name = "kedro0160"
   hooks = [ StaticViz() ]
```

## Now Run that pipeline 🏃‍♀️

Run your pipeline and enjoy that fresh kedro viz each and every time you run your pipeline.

``` bash
kedro run
```

## Want to make your own hooks 🎣

Check out some of my other articles on building kedro hooks.

[![creating customizable kedro hooks](https://images.waylonwalker.com/configurable-kedro-hooks.png)](https://waylonwalker.com/kedro-class-hooks/)

[![creating the kedro preflight hook](https://images.waylonwalker.com/kedro-hooks.png)](https://waylonwalker.com/creating-the-kedro-preflight-hook/)

Check out the example 👉 [https://static-viz.kedro.dev/](https://static-viz.kedro.dev/)
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
    
    <a class='prev' href='/kedro-your-first-nodes'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Writing your first kedro Nodes</p>
        </div>
    </a>
    
    <a class='next' href='/kedro-spaceflights-stream2'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Kedro Spaceflights - part 2 | Stream replay June 7, 2021</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>