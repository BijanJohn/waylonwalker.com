---
cover: ''
date: 2021-05-13
datetime: 2021-05-13 00:00:00+00:00
description: ''
edit_link: https://github.com/edit/main/pages/blog/cherry-pick.md
jinja: false
long_description: ''
now: 2022-10-29 15:54:38.064192
path: pages/blog/cherry-pick.md
slug: cherry-pick
status: draft
super_description: ''
tags:
- cli
- git
templateKey: blog-post
title: How to use git cherry pick
today: 2022-10-29
year: 2021
---

``` bash
~/git via 🐍 v3.8.5
❯ mkdir git-cherry-pick-learn

~/git via 🐍 v3.8.5
❯ cd git-cherry-pick-learn

~/git/git-cherry-pick-learn
❯ git init
Initialized empty Git repository in /home/walkews/git/git-cherry-pick-learn/.git/

git-cherry-pick-learn on  main
❯ touch readme.md

git-cherry-pick-learn on  main [?]
❯ git status
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        readme.md

nothing added to commit but untracked files present (use "git add" to track)

git-cherry-pick-learn on  main [?]
❯ git add .

git-cherry-pick-learn on  main [+]
❯ git commit -m "init readme"
[main (root-commit) ebd1ff2] init readme
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 readme.md

git-cherry-pick-learn on  main
❯ echo "Learn Cherry Pick"
Learn Cherry Pick

git-cherry-pick-learn on  main
❯ git add .

git-cherry-pick-learn on  main
❯ git commit -m "add title

git-cherry-pick-learn on  main
❯ echo "# Learn Cherry Pick" > readme.md

git-cherry-pick-learn on  main [!]
❯ git add .

git-cherry-pick-learn on  main [+]
❯ git diff

git-cherry-pick-learn on  main [+]
❯ git diff --staged
diff --git a/readme.md b/readme.md
index e69de29..3490cef 100644
--- a/readme.md
+++ b/readme.md
@@ -0,0 +1 @@
+# Learn Cherry Pick

git-cherry-pick-learn on  main [+]
❯ git commit -m "add title"
[main 148264d] add title
 1 file changed, 1 insertion(+)

git-cherry-pick-learn on  main
❯ git checkout -b trash-branch
Switched to a new branch 'trash-branch'

git-cherry-pick-learn on  trash-branch
❯ echo >> readme.md

git-cherry-pick-learn on  trash-branch [!]
❯ echo >> readme.md

git-cherry-pick-learn on  trash-branch [!]
❯ echo >> "Cherry Pick is amazing"

git-cherry-pick-learn on  trash-branch [!?]
❯ cat readme.md
───────┬────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
       │ File: readme.md
───────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
   1   │ # Learn Cherry Pick
   2 + │
   3 + │
───────┴────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

git-cherry-pick-learn on  trash-branch [!?]
❯ echo  "Cherry Pick is amazing" >>

git-cherry-pick-learn on  trash-branch [!?]
❯ git commit -m "add whitespace"
On branch trash-branch
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   readme.md

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        Cherry Pick is amazing

no changes added to commit (use "git add" and/or "git commit -a")

git-cherry-pick-learn on  trash-branch [!?]
❯ git add .

git-cherry-pick-learn on  trash-branch [+]
❯ git commit -m "add whitespace"
[trash-branch 94f734b] add whitespace
 2 files changed, 3 insertions(+)
 create mode 100644 Cherry Pick is amazing
```

``` bash
git-cherry-pick-learn on  trash-branch
❯ echo "TRASH" >> readme.md

git-cherry-pick-learn on  trash-branch [!]
❯ git add .

git-cherry-pick-learn on  trash-branch [+]
❯ git commit -m "add trash"
[trash-branch ec43879] add trash
 1 file changed, 1 insertion(+)

git-cherry-pick-learn on  trash-branch
❯ echo "Cherry Pick is Amazing" >> readme.md

git-cherry-pick-learn on  trash-branch [!]
❯ git commit -m "add cherry pick is amazing"
On branch trash-branch
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   readme.md

no changes added to commit (use "git add" and/or "git commit -a")

git-cherry-pick-learn on  trash-branch [!]
❯ git add .

git-cherry-pick-learn on  trash-branch [+]
❯ git commit -m "add cherry pick is amazing"
[trash-branch 6691a34] add cherry pick is amazing
 1 file changed, 1 insertion(+)

git-cherry-pick-learn on  trash-branch
❯ cat readme.md
───────┬────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
       │ File: readme.md
───────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
   1   │ # Learn Cherry Pick
   2   │
   3   │
   4   │ TRASH
   5   │ Cherry Pick is Amazing
───────┴────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
```

``` bash
git-cherry-pick-learn on  trash-branch
❯ git log
commit 6691a343e0ba35d0700c49ec09a99fa8f1f385b9 (HEAD -> trash-branch)
Author: Waylon Walker <walker_waylon_s@cat.com>
Date:   Thu May 13 08:54:58 2021 -0500

    add cherry pick is amazing

commit ec438790af36c23aef8eee2122f0dda95313496b
Author: Waylon Walker <walker_waylon_s@cat.com>
Date:   Thu May 13 08:54:07 2021 -0500

    add trash

commit 94f734b1adcee0f503c818c0f6bc9da97a0066e2
Author: Waylon Walker <walker_waylon_s@cat.com>
Date:   Thu May 13 08:50:35 2021 -0500

    add whitespace

commit 148264da5641033caa537727c6d5199068d58a4d (main)
Author: Waylon Walker <walker_waylon_s@cat.com>
Date:   Thu May 13 08:48:58 2021 -0500

    add title

commit ebd1ff22493d860e001f2b96ec948684d496355b
Author: Waylon Walker <walker_waylon_s@cat.com>
Date:   Thu May 13 08:47:10 2021 -0500

    init readme
```

``` bash
git-cherry-pick-learn on  trash-branch
❯ git checkout main
Switched to branch 'main'

git-cherry-pick-learn on  main
❯ cat readme.md
───────┬────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
       │ File: readme.md
───────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
   1   │ # Learn Cherry Pick
───────┴────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

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
    
    <a class='prev' href='/chrome-extensions-i-use'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Chrome Extensions I use</p>
        </div>
    </a>
    
    <a class='next' href='/career-day-wapello-2021'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Career Day Wapello 2021</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>