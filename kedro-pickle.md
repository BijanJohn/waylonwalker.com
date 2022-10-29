---
cover: ''
date: 2021-01-14
datetime: 2021-01-14 00:00:00+00:00
description: In python data science/engineering most of our data is in the form of
  some sort These containers for data contain many convenient methods to manipulate
  table ht
edit_link: https://github.com/edit/main/pages/blog/kedro-pickle.md
jinja: false
long_description: In python data science/engineering most of our data is in the form
  of some sort These containers for data contain many convenient methods to manipulate
  table https://waylonwalker.com/what-is-kedro/ unfamiliar with kedro, check out this
  post There are
now: 2022-10-29 15:54:38.063547
path: pages/blog/kedro-pickle.md
slug: kedro-pickle
status: published
super_description: In python data science/engineering most of our data is in the form
  of some sort These containers for data contain many convenient methods to manipulate
  table https://waylonwalker.com/what-is-kedro/ unfamiliar with kedro, check out this
  post There are times when our data doesn See more about  I may have a dictionary
  that describes some cars. In the catalog we will simply set the type as  This filepath
  does not have to be on the local filesystem it can be on the The benefit of cataloging
  this data
tags:
- kedro
- python
- data
templateKey: blog-post
title: Kedro - My Data Is Not A Table
today: 2022-10-29
year: 2021
---

In python data science/engineering most of our data is in the form of some sort
of table, typically a DataFrame from a library like pandas, spark, or dask.

## DataFrames are the heart of most pipelines

These containers for data contain many convenient methods to manipulate table
like data structures.  Sometimes we leverage other data types, namely vanilla
types like lists and dicts, or even numpy data types.


<div class="onelinelink-wrapper">
    <a class="onelinelink" href="https://waylonwalker.com/what-is-kedro/">
        <img style="float: right;" align='right' src="https://covers.waylonwalker.com/what-is-kedro.jpg" alt="article cover for What is Kedro"/>
        <p><strong>What is Kedro</strong></p>
    </a>
</div>


> unfamiliar with kedro, check out this post

## Sometimes datasets are not tables

There are times when our data doesn't fit nicely into a DataFrame. Lucky for us
Kedro has pickle support out of the box.  Pickle is a way to store any python
object to disk.  Beware that pickle files coming from an unknown source can run
malicous code and are considered unsafe.  For the most part though when you
read and write your own pickle files they are a good tool to consider.

> See more about [pickle](https://docs.python.org/3/library/pickle.html) from python.org.

## Cataloging Pickle

I may have a dictionary that describes some cars.

``` python
{
  'truck-012-abc': {
    'type': 'truck'
    'sales': [12, 2, 3, 4, 8]
    'weight': 9024,
    'accesories': ['leather', 'audio-1']
}
```

In the catalog we will simply set the type as `pickle.PickleDataSet` and give
it a filepath.

``` yaml
cars:
  filepath: data/cars.pkl
  type: pickle.PickleDataSet
```

> This filepath does not have to be on the local filesystem it can be on the
> cloud thanks to how kedro utilizes fsspec for each of its datasets.

## Loading the dataset

The benefit of cataloging this dataset compared to leaving it as a
`MemoryDataSet` is that you can easily load this data back into memory for
further development or debugging without running any of the pipeline.

``` python
catalog.load('cars')
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
    
    <a class='prev' href='/kedro-pipeline-registry'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Kedro pipeline_registry.py</p>
        </div>
    </a>
    
    <a class='next' href='/kedro-parameters'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Setting Parameters in kedro</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>