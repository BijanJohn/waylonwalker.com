---
cover: ''
date: 2021-08-17
datetime: 2021-08-17 00:00:00+00:00
description: Kedro is an unopinionated Data Engineering framework that comes with
  a somewhat https://youtu.be/Wf4rnFsaFFU https://waylonwalker.com/what-is-kedro-1/
  This is a
edit_link: https://github.com/edit/main/pages/blog/what-is-kedro.md
jinja: false
long_description: Kedro is an unopinionated Data Engineering framework that comes
  with a somewhat https://youtu.be/Wf4rnFsaFFU https://waylonwalker.com/what-is-kedro-1/
  This is an updated version of my original what-is-kedro article If you are doing
  a series of operat
now: 2022-10-29 15:54:38.064814
path: pages/blog/what-is-kedro.md
slug: what-is-kedro
status: published
super_description: Kedro is an unopinionated Data Engineering framework that comes
  with a somewhat https://youtu.be/Wf4rnFsaFFU https://waylonwalker.com/what-is-kedro-1/
  This is an updated version of my original what-is-kedro article If you are doing
  a series of operations to data with python, especially if you Like I said,  Did
  I say kedro is unopionated?  Datasets are what allow kedro too be so You will not
  often be creating your own datasets, most of what you need whould Kedro takes care
  of all fo the file io f
tags:
- kedro
- python
templateKey: blog-post
title: What is Kedro
today: 2022-10-29
year: 2021
---

Kedro is an unopinionated Data Engineering framework that comes with a somewhat
opinionated template. It gives the user a way to build pipelines that
automatically take care of io through the use of abstract `DataSets` that the
user specifies through `Catalog` entries.  These `Catalog` entries are loaded,
ran through a function, and saved by `Nodes`.  The order that these `Nodes` are
executed are determined by the `Pipeline`, which is a  **DAG**.  It's the
`runner`'s job to manage the execution of the `Nodes`.

https://youtu.be/Wf4rnFsaFFU

---


<div class="onelinelink-wrapper">
    <a class="onelinelink" href="https://waylonwalker.com/what-is-kedro-1/">
        <img style="float: right;" align='right' src="https://covers.waylonwalker.com/what-is-kedro-1.jpg" alt="article cover for What is Kedro"/>
        <p><strong>What is Kedro</strong></p>
    </a>
</div>


> This is an updated version of my original what-is-kedro article

---


## Hot Take

If you are doing a series of operations to data with python, especially if you
are using something as supported as pandas, you should be using a framework
that gives you a pipeline as a DAG and abstracts io.

## Orchestrators

Like I said, `kedro` is unopinionated it does determine where or how your data
should be ran.  The kedro team does support the following **Orchestrators**
with very little add on to the base template.

* [Argo Workflows](https://kedro.readthedocs.io/en/stable/10_deployment/04_argo.html)
* [Prefect](https://kedro.readthedocs.io/en/stable/10_deployment/05_prefect.html)
* [Kubeflow Workflows](https://kedro.readthedocs.io/en/stable/10_deployment/06_kubeflow.html)
* [AWS Batch](https://kedro.readthedocs.io/en/stable/10_deployment/07_aws_batch.html)
* [Databricks](https://kedro.readthedocs.io/en/stable/10_deployment/08_databricks.html)

## DataSets

Did I say kedro is unopionated?  Datasets are what allow kedro too be so
flexible accross a number of different python objects.  Any python object can
be made into a kedro dataset.  Kedro comes out of the box with **many** purpose built
`DataSets` like storing pandas DataFrames to parquet, csv, or a sql table.  If
kedro does not come with support for the type of python objects you work with
don't worry, you can for the closest option they support and build your own.
Or if you do not want to build your own, you can use a `PickleDataSet` for
anything.


## Catalog

You will not often be creating your own datasets, most of what you need whould
already be taken care of by the kedro framework.  What you will need to do is
to use the existing `DataSets` to build your data catalog.

Kedro takes care of all fo the file io for you, you simply need to use the
catalog to tell kedro what type of DataSet to use and any extra information
that `DataSet` needs.  Much of the time this is simply a filepath.

Typically the catalog is specified in yaml format.  If you are not familiar
with yaml, I suggest
[learnxinyminutes.com/docs/yaml/](https://learnxinyminutes.com/docs/yaml/) as a
resource of examples.

``` yaml
test:
  type: pandas.CSVDataSet
  filepath: s3://your_bucket/test.csv #
```

> Here is the most basic yaml catalog entry taken from the kedro
> [docs](https://kedro.readthedocs.io/en/stable/05_data/01_data_catalog.html?highlight=catalog)

``` yaml
cars:
  type: pandas.CSVDataSet
  filepath: data/01_raw/company/cars.csv
    sep: ','
    load_args:
  save_args:
    index: False
    date_format: '%Y-%m-%d %H:%M'
    decimal: .
```

> Here is a bit more complex example that takes in `load_args` and `save_args`
> [docs](https://kedro.readthedocs.io/en/stable/05_data/01_data_catalog.html?highlight=catalog)


## Nodes

Nodes are a very core part of kedro to build the **DAG**.  These nodes are what
provides the definition of what catalog entries, get passed into which
function, and output to another catalog entry.  

``` python
import pandas as pd
import numpy as np

def clean_data(cars: pd.DataFrame,
               boats: pd.DataFrame) -> Dict[str, pd.DataFrame]:
    return dict(cars_df=cars.dropna(), boats_df=boats.dropna())

def halve_dataframe(data: pd.DataFrame) -> List[pd.DataFrame]:
    return np.array_split(data, 2)

nodes = [
    node(clean_data,
         inputs=['cars2017', 'boats2017'],
         outputs=dict(cars_df='clean_cars2017',
                      boats_df='clean_boats2017')),
    node(halve_dataframe,
         'clean_cars2017',
         ['train_cars2017', 'test_cars2017']),
    node(halve_dataframe,
         dict(data='clean_boats2017'),
         ['train_boats2017', 'test_boats2017'])
]
```

> Here is an example of three nodes taken from their
> [docs](https://kedro.readthedocs.io/en/stable/kedro.pipeline.node.html?highlight=node)

## Pipeline

The kedro `Pipeline`, is a DAG (Directed Acyclic Graph).  It is a graph object
that flows in one direction.  You can slice into the pipeline using a few built
in graph method `to_nodes`, `from_nodes`, `to_outputs`, and `from_inputs`.  You
can chain up these method calls since each one returns a new `Pipeline` object.
You can also ask a pipline for its edges with `inputs`, and `outputs`.  You can
also list every dataset along the way with `all_inputs` or `all_outputs`.
Lastly you can convert it back into a list of nodes with `nodes`.

``` python
from kedro.pipeline import Pipeline, node

# using our nodes from last tim
Pipeline(nodes)
```

## Runner

The runner is the bridge between kedro and the orchestrators.  The kedro team
provides some basic runners for running pipelines locally, built right into the
framework, but adding on new runners for different orchestrators is done
through the use of adding in a new runner to your project.

## Hooks

Kedro allows you to hook into a number of lifecycle methods through the use of
the `pluggy` framework.  Yes the one that `pytest` is built on.  There are a
number of different lifecycle methods that allow us to hook in around where
kedro is running such as `before_pipeline_run` or `after_catalog_loaded`.

## Links

* [Node](https://kedro.readthedocs.io/en/stable/kedro.pipeline.node.html)
* [Pipeline](https://kedro.readthedocs.io/en/stable/kedro.pipeline.Pipeline.html#kedro.pipeline.Pipeline)
* [Run a pipeline](https://kedro.readthedocs.io/en/stable/06_nodes_and_pipelines/04_run_a_pipeline.html)
* [create pipelines](https://kedro.readthedocs.io/en/stable/03_tutorial/04_create_pipelines.html)
* [kedro deployment](https://kedro.readthedocs.io/en/stable/10_deployment/01_deployment_guide.html)
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
    
    <a class='prev' href='/what-is-kedro-1'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>What is Kedro</p>
        </div>
    </a>
    
    <a class='next' href='/what-are-github-actions'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>What Are GitHub Actions</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>