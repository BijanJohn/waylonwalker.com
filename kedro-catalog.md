---
cover: ''
date: 2020-07-24
datetime: 2020-07-24 00:00:00+00:00
description: I am exploring a kedro catalog meta data hook
edit_link: https://github.com/edit/main/pages/notes/kedro-catalog.md
jinja: false
long_description: I am exploring a kedro catalog meta data hook, these are some notes
  about what I am thinking. metadata will be attached to the dataset object under
  a  metadata will be updated  metadata will be empty until a pipeline is ran with
  the hook on optionall
now: 2022-10-29 15:54:38.061929
path: pages/notes/kedro-catalog.md
slug: kedro-catalog
status: published
super_description: I am exploring a kedro catalog meta data hook, these are some notes
  about what I am thinking. metadata will be attached to the dataset object under
  a  metadata will be updated  metadata will be empty until a pipeline is ran with
  the hook on optionally a function to add metadata will be added metadata will be
  stored in a file next to the  meta what datasets have a columns with  what datasets
  were updated after last tuesday which pipeline node created this dataset how many
  rows are in this dataset
tags: []
templateKey: blog-post
title: Kedro Catalog
today: 2022-10-29
year: 2020
---

I am exploring a kedro catalog meta data hook, these are some notes about what I am thinking.

## Process

* metadata will be attached to the dataset object under a `.metadata` attribute
* metadata will be updated `after_node_run`
* metadata will be empty until a pipeline is ran with the hook on
* optionally a function to add metadata will be added
* metadata will be stored in a file next to the `filepath`
* meta


## Problems This Hook Should solve

* what datasets have a columns with `sales` in the name
* what datasets were updated after last tuesday
* which pipeline node created this dataset
* how many rows are in this dataset (without reloading all datasets)


## implementation details

* metadata will be attached to each dataset as a dictionary
* list/dict comprehensions can be used to make queries

## Metadata to Capture

try pandas method -> try spark -> try dict/list -> none

* column names
* length
* Null count
* created_by node name


## Database?

Is there an easy way to create a nosql database in memory from a a list of dictionaries?

* [list-dict-DB](https://pypi.org/project/list-dict-DB/)
* [dataset](https://dataset.readthedocs.io/en/latest/)
* [TinyDB](https://tinydb.readthedocs.io/en/latest/)
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
    
    <a class='prev' href='/kedro-catalog-create-cli'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>kedro catalog create</p>
        </div>
    </a>
    
    <a class='next' href='/kedro-basics'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Kedro Basics</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>