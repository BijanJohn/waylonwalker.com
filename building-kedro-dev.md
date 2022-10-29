---
cover: ''
date: 2020-06-05
datetime: 2020-06-05 00:00:00+00:00
description: This is my journey to building up the community page.
edit_link: https://github.com/edit/main/pages/blog/building-kedro-dev.md
jinja: false
long_description: Follow along the Journey as I build out  I have really enjoyed my
  own personal journey as I have started to build all of my data pipeline projects
  with the kedro framework.  I want to start building a place to share resources with
  the community.  I w
now: 2022-10-29 15:54:38.063487
path: pages/blog/building-kedro-dev.md
slug: building-kedro-dev
status: published
super_description: Follow along the Journey as I build out  I have really enjoyed
  my own personal journey as I have started to build all of my data pipeline projects
  with the kedro framework.  I want to start building a place to share resources with
  the community.  I want to see this community grow and flourish.  They say in front
  end web development if you are not using a framework you end up building one.  That
  Looking into the front end frameworks to see how they welcome their community.  Much
  of my inspiration
tags: []
templateKey: blog-post
title: Building kedro.dev
today: 2022-10-29
year: 2020
---

Follow along the Journey as I build out [kedro.dev](https://kedro.dev).

## Building a Community

I have really enjoyed my own personal journey as I have started to build all of my data pipeline projects with the kedro framework.  I want to start building a place to share resources with the community.  I want to see this community grow and flourish.  They say in front end web development if you are not using a framework you end up building one.  That's exactly what I was doing before I started using kedro.  I want to build out a set of resources that this community can learn from and start to use the framework at their own pace without needing to develop their own from scratch.

## research

Looking into the front end frameworks to see how they welcome their community.  Much of my inspiration is from them, bringing lessons learned to data.

### pages

* banner
* nav
	* docs -> readthedocs
    * tutorial -> kedro-examples
    * blog -> medium
    * community
    	* support
        * team
        * courses
        * examples
        * meetups
        * conferences
        * articles
        * podcasts
        * videos
        * external resources
	* search
* examples
* footer
* sponsors
* newsletter
* copyright
*

### components

* edit this page
* scrolling toc

## Stack Overflow Api

fetch last 5 posts.

```
https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow&tagged=kedro&pagesize=5
```

## DEV.to api

fetch last 5 posts

```
https://dev.to/api/articles?tag=kedro&per_page=5&page=1
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
    
    <a class='prev' href='/chrome-extensions-i-use'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Chrome Extensions I use</p>
        </div>
    </a>
    
    <a class='next' href='/building-cli-apps-in-python'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Building Cli apps in Python</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>