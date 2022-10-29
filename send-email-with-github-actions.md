---
cover: ''
date: 2020-03-31
datetime: 2020-03-31 00:00:00+00:00
description: Here is one useful thing that you can do with GitHub actions no matter
  what language you use, send email.  You might want to know right away when your
  ci passes
edit_link: https://github.com/edit/main/pages/blog/send-email-with-github-actions.md
jinja: false
long_description: Here is one useful thing that you can do with GitHub actions no
  matter what language you use, send email.  You might want to know right away when
  your ci passes.  You might want to give your team a nice pat on the back when a
  new release is deployed.
now: 2022-10-29 15:54:38.065165
path: pages/blog/send-email-with-github-actions.md
slug: send-email-with-github-actions
status: published
super_description: Here is one useful thing that you can do with GitHub actions no
  matter what language you use, send email.  You might want to know right away when
  your ci passes.  You might want to give your team a nice pat on the back when a
  new release is deployed.  There might be subscribers wanting to see the latest release
  notes in their inbox as soon as the latest version is deployed.  Whatever it is,
  its pretty easy to do with an action right out of the actions marketplace. Here
  is a silly example that se
tags:
- actions
templateKey: blog-post
title: Send Emails with GitHub Actions
today: 2022-10-29
year: 2020
---

Here is one useful thing that you can do with GitHub actions no matter what language you use, send email.  You might want to know right away when your ci passes.  You might want to give your team a nice pat on the back when a new release is deployed.  There might be subscribers wanting to see the latest release notes in their inbox as soon as the latest version is deployed.  Whatever it is, its pretty easy to do with an action right out of the actions marketplace.

## Mail on Star

Here is a silly example that sends an email to yourself anytime someone stars your repo.

``` yml
name: Mail on Star

on:
  watch:
    types: [ started ]

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  # This workflow contains a single job called "email"
  email:
    # The type of runner that the job will run on
    runs-on: ubuntu-latest

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
      - name: ✨ Send email, you star
        uses: dawidd6/action-send-mail@v1.3.0
        with:
          server_address: smtp.gmail.com
          server_port: 465
          username: quadmx08
          password: ${{ secrets.GMAIL_PASS }}
          subject: Your a star ✨
          body: ${{ github.actor }} just starred your mail-on-star repo!!! ${{ github.repository }}
          to: ${{ secrets.GMAIL_ADDRESS }}
          from: ${{ secrets.GMAIL_ADDRESS }}
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
    
    <a class='prev' href='/serverless-things-to-investigate'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Serverless things to investigate</p>
        </div>
    </a>
    
    <a class='next' href='/save-vim-macro'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Save Vim Macro</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>