---
cover: ''
date: 2022-08-24
datetime: 2022-08-24 00:00:00+00:00
description: Today I https://twitter.com/ While waiting for that reply let Lets import
  all the classes that we need from  Now we need some code to highlight. I am going
  to r
edit_link: https://github.com/edit/main/pages/til/rich-syntax-range-style.md
jinja: false
long_description: Today I https://twitter.com/ While waiting for that reply let Lets
  import all the classes that we need from  Now we need some code to highlight. I
  am going to rip my  We could simply print out the code we have as a variable, but
  thats a bit hard prin
now: 2022-10-29 15:54:38.066115
path: pages/til/rich-syntax-range-style.md
slug: rich-syntax-range-style
status: published
super_description: Today I https://twitter.com/ While waiting for that reply let Lets
  import all the classes that we need from  Now we need some code to highlight. I
  am going to rip my  We could simply print out the code we have as a variable, but
  thats a bit hard printing with  We can pull from  Now we are getting some really
  impressive print outs right in the terminal note that I have ipython set to use  Now
  we can start highlighting lines right when we initialize our  This hows the line,
  but still is not very a
tags:
- python
templateKey: til
title: Highlighting text ranges with Rich | python
today: 2022-10-29
year: 2022
---

Today I've been playing with
[py-tree-sitter](https://github.com/tree-sitter/py-tree-sitter) a bit and I
wanted to highlight match ranges, but was unable to figure out how to do it
with [rich](https://github.com/Textualize/rich), so I reached out to
[@textualizeio](https://twitter.com/textualizeio) for help.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Does rich syntax highlighting support highlighting columns? <a href="https://twitter.com/textualizeio?ref_src=twsrc%5Etfw">@textualizeio</a> <br><br>I&#39;d like to be able to highlight tree-sitter query ranges more precisely. <a href="https://t.co/qLfjEsschc">pic.twitter.com/qLfjEsschc</a></p>&mdash; Waylon Walker 🐍 (@_WaylonWalker) <a href="https://twitter.com/_WaylonWalker/status/1562469770766589952?ref_src=twsrc%5Etfw">August 24, 2022</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


While waiting for that reply let's show how we got this far.

## imports

Lets import all the classes that we need from [rich](https://github.com/Textualize/rich) and setup a console to print
to.

``` python
from rich.console import Console
from rich.syntax import Syntax
from rich.style import Style

console = Console()
```

## some code

Now we need some code to highlight. I am going to rip my `register_pipeline`
from [another post](https://waylonwalker.com/designing-kedro-router).

``` python
code = '''
from find_kedro import find_kedro

def register_pipelines(self) -> Dict[str, Pipeline]:
    """Register the project's pipeline.
    Returns:
        A mapping from a pipeline name to a ``Pipeline`` object.
    """
    return find_kedro()
'''
```

## print

We could simply print out the code we have as a variable, but thats a bit hard
to read.

![print-register-pipelines](https://screenshots.waylonwalker.com/print-register-pipelines.webp)

## console.print

printing with [rich](https://github.com/Textualize/rich)'s console makes it a little better, but not much by default.

![console-print-register-pipelines](https://screenshots.waylonwalker.com/console-print-register-pipelines.webp)

## Syntax

We can pull from [rich](https://github.com/Textualize/rich)'s syntax module to really pretty this up.

``` python
syntax = Syntax(code, 'python', line_numbers=True)
console.print(syntax)
```

![syntax-print-register-pipelines](https://screenshots.waylonwalker.com/syntax-print-register-pipelines.webp)

Now we are getting some really impressive print outs right in the terminal!

> note that I have ipython set to use [rich](https://github.com/Textualize/rich), you will need to console.print() in scripts

## highlight lines

Now we can start highlighting lines right when we initialize our `Syntax`
instance.  It looks ok.  It's not super visible, but more importantly its not
granular enough.  I want to highlight specific ranges like the word
register_pipelines.

``` python
syntax = Syntax(code, 'python', line_numbers=True, highlight_lines=[4])
console.print(syntax)
```

![syntax-print-register-pipelines-highlight-line](https://screenshots.waylonwalker.com/syntax-print-register-pipelines-highlight-line.webp)

This hows the line, but still is not very accurate.

## highlight text

[@textualizeio] got back to me, let's see if What we can do with stylize_range!

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Off the top of my head, I think there is a styleize_ranges method which applies arbitrary styles.</p>&mdash; textualize.io (@textualizeio) <a href="https://twitter.com/textualizeio/status/1562487302274043904?ref_src=twsrc%5Etfw">August 24, 2022</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


``` python
syntax = Syntax(code, 'python', line_numbers=True)
style = Style(bgcolor='deep_pink4')
syntax.stylize_range(style, (4, 4), (4, 22))
console.print(syntax)
```

This gives us the final result we are looking for, we can easily see what is
being targeted here.  In this case the function name `register_pipelines`.

![syntax-highlight-range-register-pipelines](https://screenshots.waylonwalker.com/syntax-highlight-range-register-pipelines.webp)

This turns out to be exacly what I am looking for.  Now I have an easy way to
print out highlighted code wtih my
[py-tree-sitter](https://github.com/tree-sitter/py-tree-sitter) query results.

## Links

* [@textualizeio](https://twitter.com/textualizeio)
* [another post](https://waylonwalker.com/designing-kedro-router)
* [console-print-register-pipelines](https://screenshots.waylonwalker.com/console-print-register-pipelines.webp)
* [print-register-pipelines](https://screenshots.waylonwalker.com/print-register-pipelines.webp)
* [py-tree-sitter](https://github.com/tree-sitter/py-tree-sitter)
* [rich](https://github.com/Textualize/rich)
* [syntax-print-register-pipelines-highlight-line](https://screenshots.waylonwalker.com/syntax-print-register-pipelines-highlight-line.webp)
* [syntax-print-register-pipelines](https://screenshots.waylonwalker.com/syntax-print-register-pipelines.webp)
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
    
    <a class='prev' href='/save-vim-macro'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Save Vim Macro</p>
        </div>
    </a>
    
    <a class='next' href='/reusable-bash'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Creating Reusable Bash Scripts</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>