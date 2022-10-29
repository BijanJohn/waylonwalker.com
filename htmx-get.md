---
cover: ''
date: 2022-03-25
datetime: 2022-03-25 00:00:00+00:00
description: I recently attended Start with some html boilerplate, pop in a script
  tag to add the Save this as  If you don Now the page has a button that is ready
  to replace
edit_link: https://github.com/edit/main/pages/til/htmx-get.md
jinja: false
long_description: I recently attended Start with some html boilerplate, pop in a script
  tag to add the Save this as  If you don Now the page has a button that is ready
  to replace itself, notice the To make it a bit clearer here is what the file tree
  looks like after I
now: 2022-10-29 15:54:38.066148
path: pages/til/htmx-get.md
slug: htmx-get
status: draft
super_description: I recently attended Start with some html boilerplate, pop in a
  script tag to add the Save this as  If you don Now the page has a button that is
  ready to replace itself, notice the To make it a bit clearer here is what the file
  tree looks like after I added htmx to this page and setup a partial below, check
  out this
tags:
- webdev
- webdev
- webdev
templateKey: til
title: Ease into htmx with htmx-get
today: 2022-10-29
year: 2022
---

I recently attended
[python web conf 2022](https://2022.pythonwebconf.com/)
and after seeing some incredible presentations on it I am excited to
give [htmx](https://htmx.org/) a try.

## The base page

Start with some html boilerplate, pop in a script tag to add the
htmx.org script, and a button that says click me.  I added just a tish
of style so that it does not sear your delicate developer your eyes.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title></title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
      html  { background: #1f2022; color: #eefbfe; font-size: 64px; }
      button {font-size: 64px;}
      body { height: 100vh; width: 100vw; display: flex; justify-content: center; align-items:center; }
    </style>
    <!-- Load from unpkg -->
    <script src="https://unpkg.com/htmx.org@1.7.0"></script>
  </head>
  <body>
  <!-- have a button POST a click via AJAX -->
  <button hx-get="/partial" hx-swap="outerHTML">
    Click Me
  </button>

  </body>
</html>
```

Save this as `index.html` and fire up a webserver and you will be
presented with this big beefcake of a button.

![big beefcake of a button](https://images.waylonwalker.com/htmx-get-til-click-me.png)

If you don't have a development server preference I reccomend opening
the terminal and running `python -m http.server 8000` then opening your
browser to `localhost:8000`

## The Partial

Now the page has a button that is ready to replace itself, notice the
`hx-swap="outerHTML">`, with the contents of /partial. To create a
static api of sorts we can simply host a partial page in a file at
`/partial/index.html` with the following contents.

```html
<p>
hello
</p>
```

![the final results](https://images.waylonwalker.com/htmx-get-til-hello.png)

<script src="https://unpkg.com/htmx.org@1.7.0"></script>

## Tree

To make it a bit clearer here is what the file tree looks like after
setting this up.

```txt
~/git/htmx  v3.9.7 (git)
❯ tree
.
├── clicked
│   └── index.html
└── index.html
```

## Demo

I added htmx to this page and setup a partial below, check out this
easter egg.

<button hx-get="./partial" hx-swap="outerHTML">
    Click Me
</button>


## Links

* [python web conf 2022](https://2022.pythonwebconf.com/)
* [htmx](https://htmx.org/)
* [big beefcake of a button](https://images.waylonwalker.com/htmx-get-til-click-me.png)
* [the final results](https://images.waylonwalker.com/htmx-get-til-hello.png)
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
    
    <a class='prev' href='/i-spoke-at-python-web-conf-2022'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>I spoke at Python Web Conf 2022</p>
        </div>
    </a>
    
    <a class='next' href='/how-python-tools-config'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>How python tools configure</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>