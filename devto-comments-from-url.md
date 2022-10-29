---
cover: ''
date: 2020-05-20
datetime: 2020-05-20 00:00:00+00:00
description: "I want to incorporate some of the wonderful comments,  I want to incorporate
  some of the wonderful comments, \U0001F495, \U0001F984, and \U0001F516 dev.to has
  an open API that allows us t"
edit_link: https://github.com/edit/main/pages/blog/devto-comments-from-url.md
jinja: false
long_description: "I want to incorporate some of the wonderful comments,  I want to
  incorporate some of the wonderful comments, \U0001F495, \U0001F984, and \U0001F516
  dev.to has an open API that allows us to easily get comments as HTML.  They have
  their API hosted at  Here we can see that going "
now: 2022-10-29 15:54:38.064141
path: pages/blog/devto-comments-from-url.md
slug: devto-comments-from-url
status: published
super_description: "I want to incorporate some of the wonderful comments,  I want
  to incorporate some of the wonderful comments, \U0001F495, \U0001F984, and \U0001F516
  dev.to has an open API that allows us to easily get comments as HTML.  They have
  their API hosted at  Here we can see that going to  That is an  With this knowledge,
  we can fetch the contents of an article and pull the  The main event is here, what
  you all have waited for, and it The hardest part of this was figuring out what the "
tags:
- blog
- javascript
templateKey: blog-post
title: How to get Dev Comments from an article Url
today: 2022-10-29
year: 2020
---

I want to incorporate some of the wonderful comments, \U0001F495, \U0001F984,
and \U0001F516's that I have been getting on dev.to on my website.  I have
dabbled once or twice with no avail this time I am taking notes on my journey,
so follow along and let's get there together.  By the end of this post, I will
have a way to get comments from posts on the client-side thanks to the
wonderfully open dev.to API.

I want to incorporate some of the wonderful comments, 💕, 🦄, and 🔖's that I have been getting on **dev.to** on my website.  I have dabbled once or twice with no avail this time I am taking notes on my journey, so follow along and let's get there together.  By the end of this post, I will have a way to get comments from posts on the client-side thanks to the wonderfully open dev.to API.

## The API

dev.to has an open API that allows us to easily get comments as HTML.  They have their API hosted at [https://docs.forem.com/api/#tag/comments](https://docs.forem.com/api/#tag/comments), let's take a look at it.

![](https://images.waylonwalker.com/dev-to-api-comments.png)

Here we can see that going to [https://dev.to/api/comments?a_id=270180](https://dev.to/api/comments?a_id=270180) returns us some json, that contains an array of comments.

``` json
[
  {body_html: '<the comment rendered as html>',
   user: {<an array with quite a bit of information about the commenting user>},
   children: [<an array of child comment objects>]
   <other stuff we don't care about>
  },
  <more comments>
  ]
```

## What the heck is that a_id

That is an `article_id`.  Though a bit of searching I found that it occurs in at least four places on every page as a data attribute.  Using chrome dev tools I found a good place to "query" it from.

![](https://images.waylonwalker.com/dev-to-article-id.png)

With this knowledge, we can fetch the contents of an article and pull the `articleId` from it.

``` javascript
    async function getDevToAId(url) {
        // Gets the articleId of a dev.to article
        const root = 'https://dev.to/'
        if (!url.includes(root)) {
            url = root + url
        }
        let domparser = new DOMParser()
        const html = await fetch(url).then(r => r.text())
        const doc = domparser.parseFromString(html, 'text/html')
        const articleId = doc.querySelector('#article-body').dataset.articleId
        return articleId
    }
```

**note**  I do check to see if a full URL or slug was given, if it was just the slug I tack on `https://dev.to/` before fetching.

## Now the comments

The main event is here, what you all have waited for, and it's by far the easiest part.

``` javascript
    async function getDevToComments(url) {
        const articleId = await getDevToAId(url)
        const response = await fetch(`https://dev.to/api/comments?a_id=${articleId}`)
        const comments = await response.json()
        return comments
    }
```

The hardest part of this was figuring out what the `a_id` was and how I was going to get it from some more commonly known information about my articles, the URL, or the slug

## Try it out

**F12** pop open your console right in dev tools of this post and try it out.

![](https://images.waylonwalker.com/dev-to-comments-in-devtools.png)
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
    
    <a class='prev' href='/diffurcate'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Code Review from the comfort of vim | Diffurcate</p>
        </div>
    </a>
    
    <a class='next' href='/designing-kedro-router'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Designing a "Router" for kedro</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>