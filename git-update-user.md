---
cover: ''
date: 2019-01-21
datetime: 2019-01-21 00:00:00+00:00
description: This morning I log into my VCS and check activity on my projects to find
  that  Clone the repo, note it must be a  Curl down the  Run the script, and push
  the up
edit_link: https://github.com/edit/main/pages/blog/git-update-user.md
jinja: false
long_description: This morning I log into my VCS and check activity on my projects
  to find that  Clone the repo, note it must be a  Curl down the  Run the script,
  and push the updates. Delete the  I hope this helps someone, or future me who needs
  to fix their informat
now: 2022-10-29 15:54:38.063951
path: pages/blog/git-update-user.md
slug: git-update-user
status: published
super_description: This morning I log into my VCS and check activity on my projects
  to find that  Clone the repo, note it must be a  Curl down the  Run the script,
  and push the updates. Delete the  I hope this helps someone, or future me who needs
  to fix their information in git.
tags:
- git
templateKey: blog-post
title: Update Git User
today: 2022-10-29
year: 2019
---

This morning I log into my VCS and check activity on my projects to find that **someone else** has been _very_ active on my projects fo the last few weeks. I quicklyhover over the missing avatar to find that **It's Me**.  What's wrong here, why do I look like two different people throughout the day!  upon further investigation I see the issue.  while setting up a new terminal environment I mistyped my email address by **one character**.  After much searching and a few failed attempts I was able to fix it by following an article no longer available (2021) from https://help.github.com/articles.

 
## Bare Clone

Clone the repo, note it must be a `--bare` clone.

``` bash
git clone --bare https://github.com/user/repo.git
cd repo.git
```
 
## git-author-rewrite

Curl down the `git-author-rewrite` script and edit the following variables `OLD_EMAIL` `CORECT_NAME` `CORRECT_EMAIL`

``` bash
curl https://gist.githubusercontent.com/octocat/0831f3fbd83ac4d46451/raw/c197afe3e9ea2e4218f9fccbc0f36d2b8fd3c1e3/git-author-rewrite.sh > git-author-rewrite.sh
```

Run the script, and push the updates.


``` bash
bash git-author-rewrite.sh
git push --force --tags origin 'refs/heads/**'
```

## Cleanup

Delete the `--bare` repo from your local machine.
```bash
cd ..
rm -rf repo.git
```

I hope this helps someone, or future me who needs to fix their information in git.
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
    
    <a class='prev' href='/github-actions-syntax'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Getting Started with GitHub Actions</p>
        </div>
    </a>
    
    <a class='next' href='/git-rewrite-history'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Rewrite History with Git</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>