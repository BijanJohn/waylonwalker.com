---
cover: ''
date: 2020-11-18
datetime: 2020-11-18 00:00:00+00:00
description: Inspired by discourse's link expansion I am rolling out expansions for
  one line links on the blog
edit_link: https://github.com/edit/main/pages/blog/gatsby-remark-embedder.md
jinja: false
long_description: Inspired by discourse https://twitter.com/kylemathews/status/1329817928666005504
  This covers a couple of use cases I have with very little effort. Twitter YouTube
  This was super quick and simple to setup, the only thing that was extra was to Thats
  it
now: 2022-10-29 15:54:38.063867
path: pages/blog/gatsby-remark-embedder.md
slug: gatsby-remark-embedder
status: published
super_description: Inspired by discourse https://twitter.com/kylemathews/status/1329817928666005504
  This covers a couple of use cases I have with very little effort. Twitter YouTube
  This was super quick and simple to setup, the only thing that was extra was to Thats
  it, now I can embed tweets and YouTube videos by just leaving the link on a single
  line.
tags:
- webdev
templateKey: blog-post
title: gatsby-remark-embedder
today: 2022-10-29
year: 2020
---

<iframe src="https://anchor.fm/waylon-walker/embed/episodes/gatsby-remark-embedder-en6l3j" height="102px" width="400px" frameborder="0" scrolling="no"></iframe>

Inspired by discourse's link expansion I am rolling out expansions for one line
links on the blog [waylonwalker](https://waylonwalker.com).  I was able to find
a gatsby plugin
[gatsby-remark-embedder](https://www.gatsbyjs.com/plugins/gatsby-remark-embedder/?=embed)
that expands one line links for social cards for popular platforms like twitter
and YouTube through a repose from Kyle Mathews to my tweet.

<blockquote class="twitter-tweet"><p lang="und" dir="ltr">yes! <a href="https://t.co/IKmXijS9IT">https://t.co/IKmXijS9IT</a></p>&mdash; Kyle Mathews (@kylemathews) <a href="https://twitter.com/kylemathews/status/1329817928666005504?ref_src=twsrc%5Etfw">November 20, 2020</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


## Use Cases

This covers a couple of use cases I have with very little effort.

* Twitter
* YouTube

## install

``` bash
npm i gatsby-remark-embedder gatsby-plugin-twitter
```

This was super quick and simple to setup, the only thing that was extra was to
install the `gatsby-plugin-twitter` plugin as well as the
`gatsby-remark-embedder`.

## enable

``` javascript
// In your gatsby-config.js

module.exports = {
  // Find the 'plugins' array
  plugins: [
    `gatsby-plugin-twitter`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-embedder`,
            options: {
              customTransformers: [
                // Your custom transformers
              ],
              services: {
                // The service-specific options by the name of the service
              },
            },
          },

          // Other plugins here...
        ],
      },
    },
  ],
};
```

Thats it, now I can embed tweets and YouTube videos by just leaving the link on a single line.
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
    
    <a class='prev' href='/gatsby-scripts-with-onload'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Gatsby Scripts with onload</p>
        </div>
    </a>
    
    <a class='next' href='/fuzzy-edit-zsh'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Open files FAST from zsh | or bash if thats your thing</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>