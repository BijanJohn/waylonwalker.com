---
author: '@_waylonwalker'
cover: ''
date: 2022-03-24
datetime: 2022-03-24 00:00:00+00:00
description: I recently gave a talk at python web conf 2022, and one of the things
  I did Lets use this section to show what it  ☝ This is how my  write markdown build
  site p
edit_link: https://github.com/edit/main/pages/til/lookatme-styles.md
jinja: false
long_description: I recently gave a talk at python web conf 2022, and one of the things
  I did Lets use this section to show what it  ☝ This is how my  write markdown build
  site publish This is what the above slide looks like in lookatme. The way I write
  my slides I wa
now: 2022-10-29 15:54:38.066282
path: pages/til/lookatme-styles.md
slug: lookatme-styles
status: draft
styles:
  author:
    bg: default
    fg: '#368ce2'
  date:
    bg: default
    fg: '#368ce2'
  headings:
    '1':
      bg: default
      fg: '#ff66c4,bold,italics'
      prefix: ' ⇁ '
      suffix: ' ↽ '
  padding:
    bottom: 0
    left: 0
    right: 0
    top: 0
  quote:
    bottom_corner: ╰
    side: │
    style:
      bg: default
      fg: '#aaa'
    top_corner: ╭
  slides:
    bg: default
    fg: '#368ce2'
  title:
    bg: default
    fg: '#e1af66'
super_description: I recently gave a talk at python web conf 2022, and one of the
  things I did Lets use this section to show what it  ☝ This is how my  write markdown
  build site publish This is what the above slide looks like in lookatme. The way
  I write my slides I want the most prominant element to be the slides by default
  he prefix/suffix was a full block that just went transparant into The box characters
  are fine really, but it really bothers me that they are not Adding author to the
  root of the frontmatter of
tags:
- python
- cli
- python
templateKey: til
title: Style Lookatme Slides a bit more Personal
today: 2022-10-29
year: 2022
---

I recently gave a talk at python web conf 2022, and one of the things I did
when I should have been working on my presentation was workig on how my
presentation looked... classic procrastination technique.

## Slide One

Lets use this section to show what it _looks_ like as I change **my** styles.


``` python
from markata import Markata
Markata()
markata.run()
```

> ☝ This is how my **website** is built

* write markdown
* build site
* publish

## default

This is what the above slide looks like in lookatme.

![default styles](https://images.waylonwalker.com/lookatme-styles-default.png)

## Set focus to the most important element

The way I write my slides I want the most prominant element to be the slides
title, not the presentation title.  The slides title is generally the point I
am trying to make, I will leave some supporting information if I want, but
sometimes, I _just_ have a title.

``` yaml
styles:
    title:
        bg: default
        fg: '#e1af66'
    headings:
        '1':
            bg: default
            fg: '#ff66c4,bold,italics'
            prefix: ' ⇁ '
            suffix: ' ↽ '
```

![set the focus on the slide title styles](https://images.waylonwalker.com/lookatme-styles-focus-to-slide-title.png)


> by default he prefix/suffix was a full block that just went transparant into
> the slide.  I thought the harpoons were fun and went with them on a whim

## The box characters bother me

The box characters are fine really, but it really bothers me that they are not
conneted.  The author is probably doing this because it looks ok on most
systems, and many terminals dont have their fonts right and wont align anyways.
I am not sure if I ever had a windows terminal other than their new Terminal
that properly connected box characters.

```yaml
    quote:
        side: '│'
        style:
            bg: default
            fg: '#aaa'
        top_corner: '╭'
        bottom_corner: '╰'
````

## Add Author

Adding author to the root of the frontmatter of the document will add it to the bottom left of the slides.

```yaml
author: '@_waylonwalker'
```

![lookatme slides with author defined](https://images.waylonwalker.com/lookatme-styles-add-author.png)

## Style the author

We can style the foreground and background of this text by adding something
like this to the styles section of the frontmatter.

```yaml
author:
    bg: default
    fg: '#368ce2'
```

## The rest of the footer

While we are at it, lets style the rest of the footer to my own theme.  Let's pop this into the style and see what it looks like.

```yaml
date:
    bg: default
    fg: '#368ce2'
slides:
    bg: default
    fg: '#368ce2'
```

![lookatme slides with author styled](https://images.waylonwalker.com/lookatme-styles-add-author-styles.png)

## reduce the padding

When I am presenting I am punched in as big as I can go, and which makes
the padding massive.  I want as much as the screen real estate devoted to
making big readable text as I can.

```yaml
padding:
    bottom: 0
    left: 0
    right: 0
    top: 0
```

![lookatme slides with no more padding](https://images.waylonwalker.com/lookatme-styles-no-padding.png)


## final results

Here is what the final frontmatter looks like to fully style my talk.

```yaml
---
date: 2022-03-24
templateKey: til
title: Style Lookatme Slides a bit more Personal
tags:
  - python
  - cli
  - python
author: '@_waylonwalker'
styles:
    padding:
        bottom: 0
        left: 0
        right: 0
        top: 0
    title:
        bg: default
        fg: '#e1af66'
    date:
        bg: default
        fg: '#368ce2'
    slides:
        bg: default
        fg: '#368ce2'
    headings:
        '1':
            bg: default
            fg: '#ff66c4,bold,italics'
            prefix: ' ⇁ '
            suffix: ' ↽ '
    quote:
        side: '│'
        style:
            bg: default
            fg: '#aaa'
        top_corner: '╭'
        bottom_corner: '╰'
    author:
        bg: default
        fg: '#368ce2'
---
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
    
    <a class='prev' href='/maintianing-multiple-git-remotes'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Maintianing multiple git remotes</p>
        </div>
    </a>
    
    <a class='next' href='/lookatme-slides'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>How I Present Markdown Slides from the Terminal</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>