---
cover: ''
date: 2020-08-03
datetime: 2020-08-03 00:00:00+00:00
description: It Check out the repo for  It This has been by far the easiest way to
  commit back to a repo that I have seen.  Other patterns often require fully setting
  up the
edit_link: https://github.com/edit/main/pages/blog/git-auto-commit-action-review.md
jinja: false
long_description: It Check out the repo for  It This has been by far the easiest way
  to commit back to a repo that I have seen.  Other patterns often require fully setting
  up the git user and everything.  While it You must give it a commit message and
  thats it.  Optio
now: 2022-10-29 15:54:38.063789
path: pages/blog/git-auto-commit-action-review.md
slug: git-auto-commit-action-review
status: published
super_description: It Check out the repo for  It This has been by far the easiest
  way to commit back to a repo that I have seen.  Other patterns often require fully
  setting up the git user and everything.  While it You must give it a commit message
  and thats it.  Optionally you can configure a number of things.  Its possible to
  configure the  If you If you You do need to be careful to checkout the repo just
  a bit different than normal. You must use  You have to do this do avoid that the  If
  you
tags:
- actions
templateKey: blog-post
title: Review of the git-auto-commit-action
today: 2022-10-29
year: 2020
---

It's a really cool GitHub action that will automatically commit files changed
during the action. I was using this to render a new readme based on a template.

Check out the repo for [git-auto-commit-action](https://github.com/stefanzweifel/git-auto-commit-action).

It's a really cool GitHub action that will automatically commit files changed during the action.  I was using this to render a new readme based on a template.

This has been by far the easiest way to commit back to a repo that I have seen.  Other patterns often require fully setting up the git user and everything.  While it's not all that hard, this action already has all of that covered.

You must give it a commit message and thats it.  Optionally you can configure a number of things.  Its possible to configure the `commit_user_name`, `commit_user_email`, and `commit_author`.  I often also scope the `file_pattern` to a certain subset of files.

---

<p style='text-align: center'>
<a href='https://waylonwalker.com/github-actions-syntax/'>
  <img
    style='width:500px; max-width:80%; margin: auto;'
    src="https://images.waylonwalker.com/github-actions-syntax-rm.png"
    alt="GitHub Actions Syntax article card"
  />
  </a>
</p>

> If you're new to actions check out this article on using actions.

<p style='text-align: center'>
<a href='https://waylonwalker.com/github-actions-syntax/'>
  <img
    style='width:500px; max-width:80%; margin: auto;'
    src="https://images.waylonwalker.com/github-actions-syntax-rm.png"
    alt="GitHub Actions Syntax article card"
  />
  </a>
</p>

> If you're new to actions check out this article on using actions.

---

You do need to be careful to checkout the repo just a bit different than normal.


## Limitations & Gotchas
_directly from the repo_

### Checkout the correct branch

You must use `action/checkout@v2` or later versions to checkout the repository. In non-push events, such as pull_request, make sure to specify the ref to checkout:

``` yaml
- uses: actions/checkout@v2
  with:
    ref: ${{ github.head_ref }}
```

You have to do this do avoid that the `checkout`-Action clones your repository in a detached state.

## Usage
_from the repo_

``` yaml
- uses: stefanzweifel/git-auto-commit-action@v4
  with:
    # Required
    commit_message: Apply automatic changes

    # Optional branch to push to, defaults to the current branch
    branch: feature-123

    # Optional options appended to `git-commit`
    # See https://git-scm.com/docs/git-commit for a list of available options
    commit_options: '--no-verify --signoff'

    # Optional glob pattern of files which should be added to the commit
    # See the `pathspec`-documentation for git
    # - https://git-scm.com/docs/git-add#Documentation/git-add.txt-ltpathspecgt82308203
    # - https://git-scm.com/docs/gitglossary#Documentation/gitglossary.txt-aiddefpathspecapathspec
    file_pattern: src/*.js tests/*.js

    # Optional local file path to the repository
    repository: .

    # Optional commit user and author settings
    commit_user_name: My GitHub Actions Bot
    commit_user_email: my-github-actions-bot@example.org
    commit_author: Author <actions@github.com>

    # Optional tag message
    # Action will create and push a new tag to the remote repository and the defined branch
    tagging_message: 'v1.0.0'

    # Optional options appended to `git-push`
    push_options: '--force'

    # Optional: Disable dirty check and always try to create a commit and push
    skip_dirty_check: true

  ```

## More Actions

If you're new to actions check out these articles on using actions.

<TABLE>
  <TR>
    <TD>
      <a href='https://waylonwalker.com/four-github-actions-website/'>
      <img
        style='width:250px; max-width:80%; margin: auto; float: left'
        src="https://images.waylonwalker.com/four-github-actions-website-rm.png"
        alt="GitHub Actions Syntax article card"
        />
      </a>
    </TD>
    <TD>
      <a href='https://waylonwalker.com/four-github-actions-python/'>
      <img
        style='width:250px; max-width:80%; margin: auto; float: right;'
        src="https://images.waylonwalker.com/four-github-actions-python-rm.png"
        alt="GitHub Actions Syntax article card"
        />
      </a>
    </TD>
  </TR>
</TABLE>
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
    
    <a class='prev' href='/git-diff-branches'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Today I learned `git diff feature..main`</p>
        </div>
    </a>
    
    <a class='next' href='/gh-rm-workflow-runs'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>GitHub Actions Delete all Workflow Runs</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>