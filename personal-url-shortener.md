---
cover: ''
date: 2020-01-29
datetime: 2020-01-29 00:00:00+00:00
description: Personal URL shortener with Netlify Redirects
edit_link: https://github.com/edit/main/pages/blog/personal-url-shortener.md
jinja: false
long_description: I love using URL shorteners to easily share links without hitting
  character I recently discovered a really cool feature of netlify that I have always
  looked past,  simply add a  Now with shorter links we have more space for our content
  without needin
now: 2022-10-29 15:54:38.064787
path: pages/blog/personal-url-shortener.md
slug: personal-url-shortener
status: published
super_description: I love using URL shorteners to easily share links without hitting
  character I recently discovered a really cool feature of netlify that I have always
  looked past,  simply add a  Now with shorter links we have more space for our content
  without needing to use a service like bit.ly that makes our links unreadable. ![
tags:
- webdev
- blog
templateKey: blog-post
title: Personal URL shortener with Netlify Redirects
today: 2022-10-29
year: 2020
---

I love using URL shorteners to easily share links without hitting character
limits, but they loose their meaning. Services like bit.ly will save my links
for me so that I can find them, but I would rather them to be easy to remember.
[https://bit.ly/2ruLwQz](https://bit.ly/2ruLwQz "https://bit.ly/2ruLwQz") does
not roll of the tongue so well.

## 301 🤸‍♀️

I recently discovered a really cool feature of netlify that I have always looked past, `_redirects`. It is so simple cool and powerful, every netlify site should do this!

## But how 🤷‍♀️

simply add a `_redirects` file to the root of your your published site with the following format. The trick I found with my gatsby site was that it needed to be in my static directory `/static/_redirects`, not root. Next you just put space separated links on separate lines. #'s can be used for comments.

``` markdown
# netlify redirects
# from_url to_url

# Short-Blog

/blog/scli         /blog/simple-click/
/blog/cmdt         /blog/cmd-exe-tips/
.
.
.


# splats

/b*             /blog/:splat
/n*             /notes/:splat


# External

/twitter        https://twitter.com/_WaylonWalker
/github         https://github.com/WaylonWalker
/devto          https://dev.to/waylonwalker/
```

## 🙌 Share those short links

Now with shorter links we have more space for our content without needing to use a service like bit.ly that makes our links unreadable.

![url shortener](https://images.waylonwalker.com/URL shortener.png)
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
    
    <a class='prev' href='/pipx-textual-devtools'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>pipx textual devtools</p>
        </div>
    </a>
    
    <a class='next' href='/parsing-rss-python'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>🐍 Parsing RSS feeds with Python</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>