---
cover: ''
date: 2020-07-18
datetime: 2020-07-18 00:00:00+00:00
description: I recently added a button to my blog, and subsequently my posts on I
  refer back to my old posts quite a bit, sometimes I find errors in them. The slug
  that I am
edit_link: https://github.com/edit/main/pages/blog/edit-on-github.md
jinja: false
long_description: I recently added a button to my blog, and subsequently my posts
  on I refer back to my old posts quite a bit, sometimes I find errors in them. The
  slug that I am getting from gatsby is formatted as  GitHub makes it super easy to
  form a URL that puts y
now: 2022-10-29 15:54:38.063945
path: pages/blog/edit-on-github.md
slug: edit-on-github
status: published
super_description: I recently added a button to my blog, and subsequently my posts
  on I refer back to my old posts quite a bit, sometimes I find errors in them. The
  slug that I am getting from gatsby is formatted as  GitHub makes it super easy to
  form a URL that puts you right into edit mode on Wrapping that URL up in a short
  snippet gave me the following result. I know better than hard coding the GitHub
  url in, but I did it anyway, my This was a super quick change that brought me a
  lot of value without much
tags:
- blog
templateKey: blog-post
title: Edit On GitHub
today: 2022-10-29
year: 2020
---

I recently added a button to my blog, and subsequently my posts on
[DEV.to](https://dev.to/waylonwalker).  It's the best thing that I have done
for it in a while.  It makes it so easy to do quick edits.

## finding errors

I refer back to my old posts quite a bit, sometimes I find errors in them.
Honestly most of the time its too much effort to load up my editor make the
change and `git add` and `git commit`.  It's not much, but when I am referring
to my own post generally I am just trying to get something done and don't have
time for that.


## The slug

The slug that I am getting from gatsby is formatted as `/blog/this-post/`.
Note the trailing slash and missing file extension, thats where the
`${slug.slice(0, -1)}.md` comes in.


## The Full Link


GitHub makes it super easy to form a URL that puts you right into edit mode on
the exact post you are looking for.  This is format for the URL... you can
always figure it out easily by clicking edit on one.

```
https://github.com/<user>/<repo>/edit/<branch>/<filepath>
```

## The Final Result

Wrapping that URL up in a short snippet gave me the following result.

``` jsx
<p style={{ display: 'flex', justify: 'center', textAlign: 'center', margin: '3rem auto' }}>
  <span role='img' aria-label=''>👀</span>
  see an issue, edit this post on
  <a
    href={`https://github.com/WaylonWalker/waylonwalkerv2/edit/main/src/pages${slug.slice(0, -1)}.md`}
    alt='edit post url'
    title='edit this post'
   >
  <FiGithub />
  GitHub
  </a>
</p>
```
![Edit on GitHub](https://dev-to-uploads.s3.amazonaws.com/i/sgqd23rbbusjpfxqr7bl.PNG)

I know better than hard coding the GitHub url in, but I did it anyway, my
personal site gets to be a bit of a rats nest of hotfixes over time.

This was a super quick change that brought me a lot of value without much
effort.  I will probably change up the styling/layout of it in the future. For
now I have something that functions, and I can get back to creating content.
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
    
    <a class='prev' href='/eight-years-cat'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>My first eight years as a working professional.</p>
        </div>
    </a>
    
    <a class='next' href='/drawing-ascii-boxes'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>drawing ascii boxes</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>