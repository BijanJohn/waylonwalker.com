---
cover: ''
date: 2020-05-15
datetime: 2020-05-15 00:00:00+00:00
description: Kedro provides an efficient way to build out data catalogs with their
  yaml api.  It allows you to be very declaritive about loading and saving your data.  For
  t
edit_link: https://github.com/edit/main/pages/blog/create-custom-kedro-dataset.md
jinja: false
long_description: Kedro provides an efficient way to build out data catalogs with
  their yaml api.  It allows you to be very declaritive about loading and saving your
  data.  For the most part you just need to tell Kedro what connector to use and its
  filepath.  When run
now: 2022-10-29 15:54:38.065008
path: pages/blog/create-custom-kedro-dataset.md
slug: create-custom-kedro-dataset
status: published
super_description: Kedro provides an efficient way to build out data catalogs with
  their yaml api.  It allows you to be very declaritive about loading and saving your
  data.  For the most part you just need to tell Kedro what connector to use and its
  filepath.  When running Kedro takes care of all of the read/write, you just reference
  the catalog key. Under the hood there is an  Here is a DataSet implementation from
  their docs.  Here you can see the barebones example straight from the docs.  Parameters
  from the yam
tags:
- kedro
- python
- data
templateKey: blog-post
title: Create Custom Kedro Dataset
today: 2022-10-29
year: 2020
---

Kedro provides an efficient way to build out data catalogs with their yaml api.  It allows you to be very declaritive about loading and saving your data.  For the most part you just need to tell Kedro what connector to use and its filepath.  When running Kedro takes care of all of the read/write, you just reference the catalog key.

## But what is happening behind the scenes

Under the hood there is an `AbstractDataSet` that each connector inherits from.  It sets up a lot of the behind the scenes structure for us so that we dont have to.  For the most part kedro has connectors for about anything that you want to load, csv, parquet, sql, json, from about anywhere, http, s3, localfile system are just some of the examples.

Here is a DataSet implementation from their docs.  Here you can see the barebones example straight from the docs.  Parameters from the yaml catalog will get passed in

``` python
from pathlib import Path

import pandas as pd

from kedro.io import AbstractDataSet


class MyOwnDataSet(AbstractDataSet):
    def __init__(self, param1, param2, filepath, version):
        super().__init__(Path(filepath), version)
        self._param1 = param1
        self._param2 = param2

    def _load(self) -> pd.DataFrame:
        load_path = self._get_load_path()
        return pd.read_csv(load_path)

    def _save(self, df: pd.DataFrame) -> None:
        save_path = self._get_save_path()
        df.to_csv(save_path)

 	def _exists(self) -> bool:
        path = self._get_load_path()
        return path.is_file()

    def _describe(self):
        return dict(version=self._version, param1=self._param1, param2=self._param2)
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
    
    <a class='prev' href='/create-new-kedro-project'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Create New Kedro Project</p>
        </div>
    </a>
    
    <a class='next' href='/copier-slugify'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Copier Slugify | python templating | using cookiecutter</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>