---
cover: ''
date: 2020-07-13
datetime: 2020-07-13 00:00:00+00:00
description: 'I am looking into a way to replace my google reader experience that
  I had back This is how I used python to parse rss and setup my own custom feed.
  Install the '
edit_link: https://github.com/edit/main/pages/blog/parsing-rss-python.md
jinja: false
long_description: I am looking into a way to replace my google reader experience that
  I had back This is how I used python to parse rss and setup my own custom feed.
  Install the feedparser library. The feed is a feedparser.FeedParserDict.  For all
  intents and purposes
now: 2022-10-29 15:54:38.065382
path: pages/blog/parsing-rss-python.md
slug: parsing-rss-python
status: published
super_description: I am looking into a way to replace my google reader experience
  that I had back This is how I used python to parse rss and setup my own custom feed.
  Install the feedparser library. The feed is a feedparser.FeedParserDict.  For all
  intents and purposes this I grabbed a few popular RSS feeds that I was familiar
  with to get started. I checked out the keys, all three had the following keys.  Mine
  also had the I also pulled the  Now that I have a list of feeds, I can create a
  single feed sorted by dat
tags:
- python
templateKey: blog-post
title: "\U0001F40D Parsing RSS feeds with Python"
today: 2022-10-29
year: 2020
---

I am looking into a way to replace my google reader experience that I had back
in 2013 before google took it from us.  I am starting by learning how to parse
feeds with python, and without much previous knowledge, it proved to be much
easier than anticipated thanks to the `feedparser` library.

This is how I used python to parse rss and setup my own custom feed.


## Install

Install the feedparser library.

``` bash
conda create -n reader python=3.8 -y
source activate reader
pip install feedparser
```

## Get the content

```python
import feedparser
feed = feedparser.parse('https://waylonwalker.com/rss.xml')
```

## The feed object

The feed is a feedparser.FeedParserDict.  For all intents and purposes this
seems to just behave like a dict with the following `keys()`.

``` python
feed.keys()
['feed', 'entries', 'bozo', 'headers', 'etag', 'href', 'status', 'encoding', 'version', 'namespaces', 'content'])
```

**feed** has some general information about the rss feed, but the meat of the
feed is in **entries**.  The rest of the keys weren't all that useful for me at
the moment.


## pulling multiple feeds

I grabbed a few popular RSS feeds that I was familiar with to get started.

```python
urls = ['https://waylonwalker.com/rss.xml',
        'https://joelhooks.com/rss.xml',
        'https://swyx.io/rss.xml',
    ]
feeds = [feedparser.parse(url)['entries'] for url in urls]
```

I checked out the keys, all three had the following keys.  Mine also had the
full post under `'content'`, this is because I added an extra `custom_element`
for publishing to `dev.to` from an RSS feed.

``` python
feeds[1][0].keys()
>>> dict_keys(['title', 'title_detail', 'summary', 'summary_detail', 'links', 'link', 'id', 'guidislink', 'published'
, 'published_parsed'])
```


## NOTE: dev.to/feed

I also pulled the [dev.to/feed](https://dev.to/feed).  Since is it setup for
more Authors it had a few extra keys.

``` python
feedparser.parse('https://dev.to/feed')[0].keys()
>>> dict_keys(['title', 'title_detail', 'authors', 'author', 'author_detail', 'published', 'published_parsed', 'links
', 'link', 'id', 'guidislink', 'summary', 'summary_detail', 'tags'])
```


## Combining Feeds

Now that I have a list of feeds, I can create a single feed sorted by date with
a list comprehension.  Note I did need to pull in `dateutil.parser` to convert
the date strings to datetime objects to be sorted.

``` python
import dateutil.parser

feed = [item for feed in feeds for item in feed]
feed.sort(key=lambda x: dateutil.parser.parse(x['published']), reverse=True)
```

```python
[ins] In [115]: [{'title': i['title'], 'date': i['published'], 'link': i['link']}  for i in feed[:10]]
>>>
[{'title': '🙋\u200d♂️ Can Anyone Explain Twitter Cards to me?',
  'date': 'Sat, 11 Jul 2020 03:00:00 GMT',
  'link': 'https://waylonwalker.com/explain-twitter-cards/'},
 {'title': 'How I Built My GitHub Profile',
  'date': 'Fri, 10 Jul 2020 03:00:00 GMT',
  'link': 'https://waylonwalker.com/my-github-profile/'},
 {'title': 'Lessons and Regrets from My $25000 Launch',
  'date': 'Fri, 03 Jul 2020 04:06:47 GMT',
  'link': 'https://swyx.io/writing/coding-career-launch'},
 {'title': 'SLIDES - understanding python *args and **kwargs',
  'date': 'Thu, 02 Jul 2020 05:00:00 GMT',
  'link': 'https://waylonwalker.com/python-args-kwargs-slides/'},
 {'title': 'Launching the Coding Career Handbook!',
  'date': 'Wed, 01 Jul 2020 13:08:37 GMT',
  'link': 'https://swyx.io/writing/launching-coding-career'},
 {'title': 'Gracefully adopt kedro, the catalog',
  'date': 'Mon, 29 Jun 2020 03:00:00 GMT',
  'link': 'https://waylonwalker.com/graceful-kedro-catalog/'},
 {'title': "🤓 What's on your GitHub Profile",
  'date': 'Mon, 29 Jun 2020 03:00:00 GMT',
  'link': 'https://waylonwalker.com/whats-on-your-github-profile/'},
 {'title': "Versioned Docs in 30 Seconds with Amplify Console's Branch Subdomains",
  'date': 'Fri, 26 Jun 2020 16:34:09 GMT',
  'link': 'https://swyx.io/writing/amplify-console-branch-subdomains'},
 {'title': "What's New in React",
  'date': 'Wed, 24 Jun 2020 00:00:00 GMT',
  'link': 'https://swyx.io/speaking/react-whats-new'},
 {'title': 'Coding Careers - Vincit',
  'date': 'Wed, 24 Jun 2020 00:00:00 GMT',
  'link': 'https://swyx.io/speaking/coding-careers-vincit'}]
```


## Decentralized Feed

I think the idea of RSS is super cool, and the idea that I can potentially
create my own custom platform-agnostic decentralized feed is pretty cool.  I
would love to have a google reader like experience back.

This post was super fun to explore.  I used an external library (`feedparser`)
to pull in the feeds, but other than that It was all vanilla python 3.8.  In
DataScience we tend to get very `DataFrame` heavy and I miss working with
vanilla datatypes sometimes.

## Trying to step up your python game

While trying to step up your skills you will need lots of practice.  Its good
to have several options to try out ideas quickly.  I often use replit.com,
check out this post to see how I use it.


<div class="onelinelink-wrapper">
    <a class="onelinelink" href="https://waylonwalker.com/practice-python-online/">
        <img style="float: right;" align='right' src="https://covers.waylonwalker.com/practice-python-online.jpg" alt="article cover for 🐍 Practice Python Online"/>
        <p><strong>🐍 Practice Python Online</strong></p>
    </a>
</div>


> Not a sponsor REPL.it is a great way to practice.
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
    
    <a class='prev' href='/personal-url-shortener'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Personal URL shortener with Netlify Redirects</p>
        </div>
    </a>
    
    <a class='next' href='/pariss-athena-on-black-tech-pipeline'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Black Tech Pipeline</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>