---
cover: ''
date: 2020-07-10
datetime: 2020-07-10 00:00:00+00:00
description: I ran a discussion on dev that collected quite a list of examples in
  the comment section.  So many great calls to action, animations, memes, and weird
  tricks. U
edit_link: https://github.com/edit/main/pages/blog/my-github-profile.md
jinja: false
long_description: 'I ran a discussion on dev that collected quite a list of examples
  in the comment section.  So many great calls to action, animations, memes, and weird
  tricks. Upload all of your icons to the repo in a directory such as  Aligning things
  in the center '
now: 2022-10-29 15:54:38.065354
path: pages/blog/my-github-profile.md
slug: my-github-profile
status: published
super_description: I ran a discussion on dev that collected quite a list of examples
  in the comment section.  So many great calls to action, animations, memes, and weird
  tricks. Upload all of your icons to the repo in a directory such as  Aligning things
  in the center of the readme is super simple.  I used this trick to align my social
  icons in the middle. For my  You may need to play with where you put this in the
  document, and the size of elements to get things to flow right. In order to keep
  my latest post alwa
tags:
- webdev
- catalytic
templateKey: blog-post
title: How I Built My GitHub Profile
today: 2022-10-29
year: 2020
---

I ran a discussion on dev that collected quite a list of examples in the comment section.  So many great calls to action, animations, memes, and weird tricks.

[![dev.to whats-on-your-github-profile](https://images.waylonwalker.com/whats-on-your-github-profile.png)](https://dev.to/waylonwalker/what-s-on-your-github-profile-40p3)


## My current profile

[![Waylon Walkers GitHub profile](https://images.waylonwalker.com/github-profile.png)](https://github.com/waylonwalker/)

## social icons

Upload all of your icons to the repo in a directory such as `icons` or `assets`, then link them with a `height` attribute like below.  I used html for mine, not sure if you can set the `height` in markdown.

``` markdown
<a href="https://dev.to/waylonwalker"><img height="30" src="https://raw.githubusercontent.com/WaylonWalker/WaylonWalker/main/icon/dev.png"></a>&nbsp;&nbsp;
```

**note** I did add a bit of `&nbsp;` (non-breaking-whitespace) between my icons.  Without adding css this seemed like the simplest way to do it.

## Center

Aligning things in the center of the readme is super simple.  I used this trick to align my social icons in the middle.

``` markdown
<p align='center'>
 ...html
</p>

```

## right

For my [latest post](https://waylonwalker.com/latest) I floated it to the right with a little bit of `align='right'` action.

``` markdown
<p>
  <a href="https://images.waylonwalker.com/latest"><img width="400" align='right' src="https://waylonwalker.com/latest.png?raw=true"></a>
</p>
```

You may need to play with where you put this in the document, and the size of elements to get things to flow right.

## redirects

In order to keep my latest post always up to date on my readme I implemented a netlify redirect to always point to my latest post.  As a digital gardener this helps me keep pointed to a the best one in my opinion.  Any automated way would pick up half finished posts.

```
# /static/_redirects
# netlify redirects

# latest post
/latest            /blog/kedro-catalog-search/
/latest.png        /kedro-catalog-search.png
```

Now I can reference both the post and the post cover image.

## summary/details

I also wanted to list out a few of my favorite posts without taking up a ton of space, so I used `details` and `summary` tags so that it would collapse.


``` markdown
<details>
 <summary><strong>other favorite posts</strong></summary>
 <a href="https://images.waylonwalker.com/eight-years-cat/"><img width="400" src="https://waylonwalker.com/eight-years-cat.png?raw=true"></a>
 <a href="https://images.waylonwalker.com/keyboard-driven-vscode/"><img width="400" src="https://waylonwalker.com/alt%20b.png?raw=true"></a>
 <a href="https://images.waylonwalker.com/what-are-github-actions/"><img width="400" src="https://waylonwalker.com/what-are-github-actions.png?raw=true"></a>

</details>
```

Go ham on your profile, its your own slice of GitHub to completely personalize and speak your brand.  Give a powerfule call to action, share a funny meme, record a wicked cool GIF, its your space.
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
    
    <a class='prev' href='/named-tuples-data-science'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Clean up Your Data Science with Named Tuples</p>
        </div>
    </a>
    
    <a class='next' href='/more-itertools-windowed'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Windowing Python Lists</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>