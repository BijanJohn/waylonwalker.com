---
cover: ''
date: 2021-01-20
datetime: 2021-01-20 00:00:00+00:00
description: This is a post that may be a work in progress for awhile, Its a collections
  of posts tags draft posts frontmatter filepath content template html Markdown.Markdo
edit_link: https://github.com/edit/main/pages/blog/markdown-cli.md
jinja: false
long_description: This is a post that may be a work in progress for awhile, Its a
  collections of posts tags draft posts frontmatter filepath content template html
  Markdown.Markdown support extentsions provide ways to hook in or clean up the frontmatter
  load render sav
now: 2022-10-29 15:54:38.064848
path: pages/blog/markdown-cli.md
slug: markdown-cli
status: published
super_description: This is a post that may be a work in progress for awhile, Its a
  collections of posts tags draft posts frontmatter filepath content template html
  Markdown.Markdown support extentsions provide ways to hook in or clean up the frontmatter
  load render save load render save before before after after before before after
  after cleanse html json rss save
tags:
- python
- blog
templateKey: blog-post
title: Markdown Cli
today: 2022-10-29
year: 2021
---

This is a post that may be a work in progress for awhile, Its a collections of
thoughts on managing my blog, but could be translated into anythiung that is
just a collection of markdown.

## Listing things

* posts
* tags
* draft posts

## data

* frontmatter
* filepath
* content
* template
* html

## render content

* Markdown.Markdown
* support extentsions

## frontmatter cleaning.

* provide ways to hook in or clean up the frontmatter

## Markata.Markata methods

* load
* render
* save

## Markata.Post methods

* load
* render
* save

## Markata plugins

* before_load
* before_post_load
* after_load
* after_post_load
* before_save
* before_post_save
* after_save
* after_post_save


## Markata plugins

* cleanse_frontmatter
* html_feed
* json_feed
* rss_feed
* save_posts




## CLI

``` bash
$ markata list tags

python
data
```

``` bash
$ markata

[
  { 
    "title": "post title",
    "description": "this is a post",
    "filepath": "path_to.md",
    "content": "the content of the post",
    "html": "<p>the content of the post</p>"
    },
    ...
]
```

``` bash
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
    
    <a class='prev' href='/master-no-more'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Master No More</p>
        </div>
    </a>
    
    <a class='next' href='/markata-todoui-live-replay-4-6-2022'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>LIVE-REPLAY - Python dev | Markata todoui | 4/6/2022</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>