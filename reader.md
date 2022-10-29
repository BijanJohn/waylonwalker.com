---
cover: ''
date: 2020-07-12
datetime: 2020-07-12 00:00:00+00:00
description: Notes about my reader idea
edit_link: https://github.com/edit/main/pages/notes/reader.md
jinja: false
long_description: 'The input will be a yaml file containing a list of  rss feed (primary
  source) youtube feed Stack Overflow tags GitHub repo activity pypi release dev.to
  post Twitter Search # user will need an api key Each url will be pulled in and parsed
  into a stand'
now: 2022-10-29 15:54:38.061723
path: pages/notes/reader.md
slug: reader
status: published
super_description: 'The input will be a yaml file containing a list of  rss feed (primary
  source) youtube feed Stack Overflow tags GitHub repo activity pypi release dev.to
  post Twitter Search # user will need an api key Each url will be pulled in and parsed
  into a standard data scructure.  Some items may yield special feaures, a schemaless/nosql
  datastructure may be best.  Pipeline will decide to how to weight posts based on
  users weight, recent position on feed, . Pipeline outputs will be email, json, markdown,
  xm'
tags: []
templateKey: blog-post
title: Reader
today: 2022-10-29
year: 2020
---

## Inputs

The input will be a yaml file containing a list of `Items` you want to stay up to date with.  Inside each item will be a url, and weight.


``` yaml
email:
    max-entries: 10
    recipients:
      - waylon@waylonwalker.com
markdown:
    max-entries: 100
    output:
        - README.md
json:
    max-entries: 1000
    output:
        - feeds/feed.json
rss:
    max-entries: 1000
    output:
        - feeds/feed.xml
html:
    max-entries: 100
    output:
        index.html

items:
    Waylon Walker:
    weight: 5
    url: https://waylonwalker.com/rss.xml
    @_WaylonWalker:
    weight: 3
    twitter: https://twitter.com/_waylonwalker
    DEV Waylon Walker:
    weight: 8
    url: https://dev.to/waylonwalker
    Stack Overflow Kedro:
    weight: 5
    url: https://stackoverflow.com/questions/tagged/kedro
    Kedro GitHub:
    weight: 4
    url: https://github.com/quantumblacklabs/kedro
    Kedro Pypi
        weight: 10
        url: https://pypi.org/project/kedro/
```


## Types

* rss feed (primary source)
* youtube feed
* Stack Overflow tags
* GitHub repo activity
* pypi release
* dev.to post
* Twitter Search # user will need an api key

# Methodology

Each url will be pulled in and parsed into a standard data scructure.  Some items may yield special feaures, a schemaless/nosql datastructure may be best.  Pipeline will decide to how to weight posts based on users weight, recent position on feed, .

```
a_raw (raw plain text / json items) -> b_int (cleaned items) -> c_pri (single feed of items) -> d_fea (weighted feed of items) -> e_out (requested output formats)
```

## output

Pipeline outputs will be email, json, markdown, xml, html.  Each will be able to be configured by the config file (max-entries, output location).


## Running

Users will be able to create their own reader.  Here is a list of possiblilites.  Users will not have the pipeline inside their repo. It will pull the pipeline from a package repo, pypi, dockerhub, GitHub.

* fork a template repo (might be cumbersome to update)
* use a GitHub action from the Marketplace (easier to update)
* GH actions will run the pipeline on a schedule
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
    
    <a class='prev' href='/reading-list'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Reading List</p>
        </div>
    </a>
    
    <a class='next' href='/react-headroom'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>I just added react-headroom to my site</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>