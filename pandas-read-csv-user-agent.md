---
cover: ''
date: 2022-03-27
datetime: 2022-03-27 00:00:00+00:00
description: I keep a small  I recently switched hosting from netlify over to cloudflare.  Well
  cloudflare This breaks my go to example dataset. What After a bit of googling
edit_link: https://github.com/edit/main/pages/til/pandas-read-csv-user-agent.md
jinja: false
long_description: I keep a small  I recently switched hosting from netlify over to
  cloudflare.  Well cloudflare This breaks my go to example dataset. What After a
  bit of googling I realize that this is a common thing, and that setting Now this
  works again, but it feel
now: 2022-10-29 15:54:38.065707
path: pages/til/pandas-read-csv-user-agent.md
slug: pandas-read-csv-user-agent
status: draft
super_description: I keep a small  I recently switched hosting from netlify over to
  cloudflare.  Well cloudflare This breaks my go to example dataset. What After a
  bit of googling I realize that this is a common thing, and that setting Now this
  works again, but it feels like just a bit more effort than I want to
tags:
- python
templateKey: til
title: Set User Agent on pandas read_csv
today: 2022-10-29
year: 2022
---

I keep a small [cars.csv](https://waylonwalker.com/cars.csv) on my website for
quickly trying out different pandas operations.  It's very handy to keep around
to help what a method you are unfamiliar with does, or give a teammate an
example they can replicate.

## Hosts switched

I recently switched hosting from netlify over to cloudflare.  Well cloudflare
does some work to block certain requests that it does not think is a real user.
One of these checks is to ensure there is a real user agent on the request.

## Not my go to dataset 😭

This breaks my go to example dataset.

```python
pd.read_csv("https://waylonwalker.com/cars.csv")

# HTTPError: HTTP Error 403: Forbidden
```

## But requests works???

What's weird is, requests still works just fine!  Not sure why using urllib the
way pandas does breaks the request, but it does.

```python
requests.get("https://waylonwalker.com/cars.csv")

<Response [200]>
```

## Setting the User Agent in pandas.read_csv

_this fixed the issue for me!_

After a bit of googling I realize that this is a common thing, and that setting
the user-agent fixes it.  This is the point I remember seeing in the cloudflare
dashbard that they protect against a lot of different attacks, aparantly it
treats `pd.read_csv` as an attack on my cloudflare pages site.

```python
pd.read_csv("https://waylonwalker.com/cars.csv", storage_options = {'User-Agent': 'Mozilla/5.0'})

# success
```

## Now my data is back

Now this works again, but it feels like just a bit more effort than I want to
do by hand.  I might need to look into my cloudflare settings to see if I can
allow this dataset to be accessed by `pd.read_csv`.
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
    
    <a class='prev' href='/pariss-athena-on-black-tech-pipeline'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Black Tech Pipeline</p>
        </div>
    </a>
    
    <a class='next' href='/pandas-pattern'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>My favorite pandas pattern</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>