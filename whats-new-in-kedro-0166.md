---
cover: ''
date: 2020-10-25
datetime: 2020-10-25 00:00:00+00:00
description: This version of kedro releases a new set of supported deployment options
  and the spaceflights pipeline is officially added as a starter alias.
edit_link: https://github.com/edit/main/pages/blog/whats-new-in-kedro-0166.md
jinja: false
long_description: Kedro  This is really exciting to see more deployment options coming
  from the kedro team. It really shows the power of the framework. The power of some
  of these orchestrations options is incredible. Most of them hinge on a sweet combination
  of the ke
now: 2022-10-29 15:54:38.063541
path: pages/blog/whats-new-in-kedro-0166.md
slug: whats-new-in-kedro-0166
status: published
super_description: Kedro  This is really exciting to see more deployment options coming
  from the kedro team. It really shows the power of the framework. The power of some
  of these orchestrations options is incredible. Most of them hinge on a sweet combination
  of the kedro cli, docker image, and the pipeline knowing your nodes dependencies.
  Argo, Prefect, and Kubeflow have an interesting technique where they translate the
  pipeline and its dependencies from kedro to their language. Batch uses the aws cli
  to submit j
tags:
- python
- kedro
templateKey: blog-post
title: What's New in Kedro 0.16.6
today: 2022-10-29
year: 2020
---

Kedro [0.16.6](https://github.com/quantumblacklabs/kedro/releases) is out! Let's take a look through the release notes

## Deployment Docs

This is really exciting to see more deployment options coming from the kedro team. It really shows the power of the framework. The power of some of these orchestrations options is incredible.

* [Argo](https://kedro.readthedocs.io/en/stable/10_deployment/04_argo.html)
* [Prefect](https://kedro.readthedocs.io/en/stable/10_deployment/05_prefect.html)
* [Kubeflow](https://kedro.readthedocs.io/en/stable/10_deployment/06_kubeflow.html)
* [Batch](https://kedro.readthedocs.io/en/stable/10_deployment/07_aws_batch.html)
* [SageMaker](https://kedro.readthedocs.io/en/stable/10_deployment/09_aws_sagemaker.html)

Most of them hinge on a sweet combination of the kedro cli, docker image, and the pipeline knowing your nodes dependencies. 

Argo, Prefect, and Kubeflow have an interesting technique where they translate the pipeline and its dependencies from kedro to their language.

Batch uses the aws cli to submit jobs, one node per job, and listen for them to complete. It will submit all nodes with completed dependencies at once, meaning that we can get some massive parallelization.


I did a quick and dirty test of one of these by simulating the technique in a bash script and saw a 40 hr pipeline finish in about 1 hour. I am excited to get this working in my production workflow.

## Spaceflight starter

They have officially added the spaceflights pipeline as a starter. I have not yet had a chance to try this out, but I anticipate this will be a great pipeline to teach from as it is a bit more complex than the iris pipeline. 

I tell folks all the time the best way to learn something new like kedro is to **practice, practice, practice**. Having this at their fingertips will give an easy way to fire up a pipeline that is ok to break try out some new ideas and leave it. I see this helping me testing out plugins on more complex pipelines and writing blog posts with examples that readers can more easily follow along with.

- practice
- testing
- blog posts
- tutorials

## Better Error Messages

Shameless pug, my PR landed in kedro, but fell off of the release.md in a merge issue. I was frustrated working on large projects when the wrong arguments were passed into a node and it did not give you any information in the Error to figure out where the error was thrown. Now it will at least give the name of the function that caused the error. This was a simple fix as all of the information was already there.

## Overall

Love the progress that the project is seeing and the focus on all of the deployment options.

## Thanks for supporting contributions

[Deepyaman Datta](https://github.com/deepyaman), Bhavya Merchant, [Lovkush Agarwal](https://github.com/Lovkush-A), [Varun Krishna S](https://github.com/vhawk19), [Sebastian Bertoli](https://github.com/sebastianbertoli), [noklam](https://github.com/noklam), [Daniel Petti](https://github.com/djpetti), [Waylon Walker](https://github.com/waylonwalker)
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
    
    <a class='prev' href='/whats-on-your-github-profile'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>🤓 What's on your GitHub Profile</p>
        </div>
    </a>
    
    <a class='next' href='/whats-new-in-kedro-0164'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>What's New in Kedro 0.16.4</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>