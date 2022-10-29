---
cover: ''
date: 2021-05-07
datetime: 2021-05-07 00:00:00+00:00
description: When a python module is called it is assigned the  Let I have set this
  module up to execute one of two if statements based on whether Note it is not common
  to h
edit_link: https://github.com/edit/main/pages/blog/if_name_main.md
jinja: false
long_description: When a python module is called it is assigned the  Let I have set
  this module up to execute one of two if statements based on whether Note it is not
  common to have a  Running a python script with the command  This will print out  https://waylonwalker
now: 2022-10-29 15:54:38.064237
path: pages/blog/if_name_main.md
slug: if-name-main
status: published
super_description: When a python module is called it is assigned the  Let I have set
  this module up to execute one of two if statements based on whether Note it is not
  common to have a  Running a python script with the command  This will print out  https://waylonwalker.com/install-miniconda/
  If you don You can also simply execute the script from bash if you first set the
  module to Note once you have set the file to be executable, it will remain executable
  Let Just like nodes we can run pipeline either way if it Ei
tags:
- python
templateKey: blog-post
title: What is if __name__ == "__main___", and how do I use it.
today: 2022-10-29
year: 2021
---

<script>
change_speed = (speed) => [...document.querySelectorAll('video')].map(v => v.playbackRate=v.playbackRate+speed)
</script>

When a python module is called it is assigned the `__name__` of `__main__`
otherwise if it's imported it will be assigned the `__name__` of the module.

## Concrete example

Let's create a module to play with `__name__` a bit.  We will call this module
`nodes.py`.  It is a module that we may want to run by it'self or import and use
in other modules.

```python
#!python
# nodes.py

if __name__ == "nodes":
    import sys
    import __main__

    print(f"you have imported me {__name__} from {sys.modules['__main__'].__file__}")

if __name__ == "__main__":
    print("you are running me as main")
```

I have set this module up to execute one of two if statements based on whether
the module it'self is being ran or if the module is being imported.  

> Note it is not common to have a `if __name__ == "nodes":` block, this is just
> for demnonstration purposes.

## running python nodes.py

Running a python script with the command `python <filename.py>` will execute
your script top to bottom.

```bash
python nodes.py
```

> This will print out `you are running me as main`

<video controls muted autoplay playsinline loop=true width="100%">
    <source src="https://images.waylonwalker.com/if_name_main_python_nodes.webm"
            type="video/webm">
    <source src="https://images.waylonwalker.com/if_name_main_python_nodes.mp4"
            type="video/mp4">
    Sorry, your browser doesn't support embedded videos.
</video>
<div class='speed-control'>
    <button onclick="change_speed(.25)" >
        speed up
    </button>
    <button onclick="change_speed(-.25)" >
        slow down
    </button>
</div>


<div class="onelinelink-wrapper">
    <a class="onelinelink" href="https://waylonwalker.com/install-miniconda/">
        <img style="float: right;" align='right' src="https://covers.waylonwalker.com/install-miniconda.jpg" alt="article cover for How to Install miniconda on linux (from the command line only)"/>
        <p><strong>How to Install miniconda on linux (from the command line only)</strong></p>
    </a>
</div>


> If you don't already have python installed try using miniconda or replit.com

## running ./nodes.py

You can also simply execute the script from bash if you first set the module to
be executable.

```
chmod +x nodes.py
./nodes.py
```

<video controls muted autoplay playsinline loop=true width="100%">
    <source src="https://images.waylonwalker.com/if_name_main_nodes.webm"
            type="video/webm">
    <source src="https://images.waylonwalker.com/if_name_main_nodes.mp4"
            type="video/mp4">
    Sorry, your browser doesn't support embedded videos.
</video>
<div class='speed-control'>
    <button onclick="change_speed(.25)" >
        speed up
    </button>
    <button onclick="change_speed(-.25)" >
        slow down
    </button>
</div>

> Note once you have set the file to be executable, it will remain executable
> `chmod +x nodes.py` is only needed one time, even if you edit the file.

## pipeline.py

Let's create a second module `pipeline.py` and import the first module `nodes` and see what happens.

``` python
#!python
# pipeline.py
import nodes
```

Just like nodes we can run pipeline either way if it's executable

```bash
python pipeline.py
# must run chmod +x pipeline.py first.
./pipeline.py
```

> Either way it will print out `you have imported me nodes from ./pipeline.py`

<video controls muted autoplay playsinline loop=true width="100%">
    <source src="https://images.waylonwalker.com/if_name_main_pipeline.webm"
            type="video/webm">
    <source src="https://images.waylonwalker.com/if_name_main_pipeline.mp4"
            type="video/mp4">
    Sorry, your browser doesn't support embedded videos.
</video>
<div class='speed-control'>
    <button onclick="change_speed(.25)" >
        speed up
    </button>
    <button onclick="change_speed(-.25)" >
        slow down
    </button>
</div>

## REPL

If we were to `import nodes` from the repl we would see an error in this case,
due to the fact that there is no `__main__` file since it's a repl session.

## Use Cases

The main use case for `if __name__ == "__main__":` is flexibility.  Simply
importing a module should not execute any code, print anything to the screen,
change your filesystem, or generally have any side effects in most cases. It is
something that most python users would not expect.  We can use this block to
make it such that the module can be both imported and executed.

### rich

The [rich](https://github.com/willmcgugan/rich) library uses it to make
examples of each module print to the screen if it's executed.  I personally
think this is a fantastic idea.

<video controls muted autoplay playsinline loop=true width="100%">
    <source src="https://images.waylonwalker.com/if_name_main_rich.webm"
            type="video/webm">
    <source src="https://images.waylonwalker.com/if_name_main_rich.mp4"
            type="video/mp4">
    Sorry, your browser doesn't support embedded videos.
</video>
<div class='speed-control'>
    <button onclick="change_speed(.25)" >
        speed up
    </button>
    <button onclick="change_speed(-.25)" >
        slow down
    </button>
</div>

### etl

In my world of data analysis we often setup a script of functions that will
behave as an etl pipeline of sorts.  Since we may want to reuse some of these
functions in other scripts it's common to hide the actual execution of these
functions in a `if __name__ == "__main__":` block so that we don't start making
changes to the data simply by importing the module.

### cli

Most cli applications will leverage `if __name__ == "__main__":` to run
something when called as a script instead of being imported. This allows us dt
do things such as testing much easier.

> Check out the example on the first page of the
> [click](https://click.palletsprojects.com/en/7.x/) framework's docs

## Recap

`if __name__ == "__main__":` is not so cryptic or scary, it's just looking to
see if this module was called as a script or imported from somewhere else, and
executing some different behavior based on how it was called.

```python
if __name__ == "__main__":
    print("you are running me as main")
```

## Related Links

* example from [rich.live](https://github.com/willmcgugan/rich/blob/master/rich/live.py#L271)
* [click](https://click.palletsprojects.com/en/7.x/) framework's docs
* try it yourself in your browser with [replit.com](https://replit.com)
* StackOverflow: [What does if **name** == “**main**”: do?](https://stackoverflow.com/questions/419163/what-does-if-name-main-do)
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
    
    <a class='prev' href='/if-tmux'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>If Tmux</p>
        </div>
    </a>
    
    <a class='next' href='/i-spoke-at-python-web-conf-2022'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>I spoke at Python Web Conf 2022</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>