---
cover: ''
date: 2021-03-22
datetime: 2021-03-22 00:00:00+00:00
description: I have automated my process to create virtual environments in my python
  I https://waylonwalker.com/tmux-nav-2021/ You can learn more about  direnv is in
  many pa
edit_link: https://github.com/edit/main/pages/blog/auto_conda_env.md
jinja: false
long_description: I have automated my process to create virtual environments in my
  python I https://waylonwalker.com/tmux-nav-2021/ You can learn more about  direnv
  is in many package repos, or can be installed from binary builds with a direnv works
  by executing the c
now: 2022-10-29 15:54:38.063415
path: pages/blog/auto_conda_env.md
slug: auto-conda-env
status: draft
super_description: I have automated my process to create virtual environments in my
  python I https://waylonwalker.com/tmux-nav-2021/ You can learn more about  direnv
  is in many package repos, or can be installed from binary builds with a direnv works
  by executing the contents of known safe  I most often use conda to manage my virtual
  environments.  I dont use it to every time I start a new project I need to create
  a new environment every subsequent time I start work in that project I need to remember
  to activate I
tags:
- python
templateKey: blog-post
title: Automatic Conda Environments
today: 2022-10-29
year: 2021
---

I have automated my process to create virtual environments in my python
projects, here is how I did it.

I've really been digging my new tmux session management setup.  Now I have
leveled it up by adding direnv to my workflow.  It will execute a shell script
whenever I cd into a directory.  One thing I wanted to add to this was,
automatic activation of python environments whenever I cd into a directory, or
create a new environment if one does not exist.


<div class="onelinelink-wrapper">
    <a class="onelinelink" href="https://waylonwalker.com/tmux-nav-2021/">
        <img style="float: right;" align='right' src="https://covers.waylonwalker.com/tmux-nav-2021.jpg" alt="article cover for How I navigate tmux in 2021"/>
        <p><strong>How I navigate tmux in 2021</strong></p>
    </a>
</div>


## Direnv

You can learn more about [direnv](https://direnv.net/) on their website.  There
are several libraries that seem to do a similar concept, _run a bash script
when I cd into a directory_ direnv is the one that I chose to use, but you can
likely do the same concept in other ones.

### Installation

direnv is in many package repos, or can be installed from binary builds with a
one liner. See their [installation](https://direnv.net/docs/installation.html)
instructions for more information.

``` bash
curl -sfL https://direnv.net/install.sh | bash
```

### .envrc

direnv works by executing the contents of known safe `.envrc` files.  Here are
some of the basic commands to get you started.

``` bash
# edit or create a new .envrc and flag it as allowed
direnv edit .

# flag a .envrc file as allowed or not
direnv allow .
direnv deny .

# reexecute a .envrc
direnv reload
```

## Conda

I most often use conda to manage my virtual environments.  I dont use it to
`conda install` packages, but I really like the convenience of combinging the
python interpreter with the environment.


``` bash
conda create -n my-project python=3.9 -y
```

> every time I start a new project I need to create a new environment

``` bash
conda activate my-project
# or source depending on if conda init has been ran on the system
source activate my-project
```

> every subsequent time I start work in that project I need to remember to activate

### lazy

I'll admit that sometimes I get lazy and will use an existing environment with
similar dependencies.  This kind of works in a pinch, but almost always I need
more packages and start trampling in that other projects environment.


## naming the environment

Since I want this process to be easily automated I chose to name my
environments after the name of the directory the project is in.  In bash we can
get the current directory with `$PWD`, and trim it to just the directory name
with the `basename` command.

``` bash
basename $PWD
```

> this will return the name of the current working directory

## condanew

I reates a short bash function that will create a new conda environment,
activate it, and install anything extra that the project needs.

``` bash
condanew() {
    conda create -n $(basename $PWD) python=3.8 -y
    source activate $(basename $PWD)
    pip install lolcat
}
```

> This will create a new python environment named after the current directory.

### project install

Often I will modify the condanew function to install project specific things.
I leverage editable installs of projects I am working on quite extensively,
that's what the `-e` is.

``` bash
condanew() {
    conda create -n $(basename $PWD) python=3.8 -y
    source activate $(basename $PWD)
    pip install -e ".[dev]"
    # or
    pip install -r requirements.txt
}
```

## Bash error handling

I dive deeper into this subject in this post about creating
[reusable-bash](https://waylonwalker.com/reusable-bash/#error-handling)
scripts.  But to auto create the environment I am going to try to activate.  If
it fails, create a new environment based on the name of the project.

https://waylonwalker.com/reusable-bash/#error-handling

``` bash
source activate $(basename $PWD) || condanew
```

> Try to activate the environment, if it fails make a new one.

## Final Result


### Conda


``` bash
direnv edit .
```

``` bash
#!/bin/bash
# shortcut for creating new conda environments based on the current working directory
condanew() {
    conda create -n $(basename $PWD) python=3.8 -y
    source activate $(basename $PWD)
    pip install lolcat
}
echo $(basename $PWD) | lolcat
source activate $(basename $PWD) || condanew
```

### Venv

Here is a modified version using venv from the standard library.

``` bash
#!/bin/bash
# shortcut for creating new virtual environments
venvnew() {
    python -m venv .venv
    source .venv/bin/activate
    pip install lolcat
}
echo $(basename $PWD) | lolcat
source .venv/bin/activate || venvnew
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
    
    <a class='prev' href='/automate-your-deploys'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>automate your deploys</p>
        </div>
    </a>
    
    <a class='next' href='/aug2020'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Newsletter 3</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>