---
cover: ''
date: 2022-03-22
datetime: 2022-03-22 00:00:00+00:00
description: Today I was watching the python web conf 2022 and saw I https://waylonwalker.com/python-args-kwargs/
  More on unpacking in this post. With the release there is a
edit_link: https://github.com/edit/main/pages/til/python-pep-584.md
jinja: false
long_description: 'Today I was watching the python web conf 2022 and saw I https://waylonwalker.com/python-args-kwargs/
  More on unpacking in this post. With the release there is also a new update syntax  Are
  you writing libraries/applications that are only going to be '
now: 2022-10-29 15:54:38.065815
path: pages/til/python-pep-584.md
slug: python-pep-584
status: draft
super_description: Today I was watching the python web conf 2022 and saw I https://waylonwalker.com/python-args-kwargs/
  More on unpacking in this post. With the release there is also a new update syntax  Are
  you writing libraries/applications that are only going to be ran on 3.9? This is
  what comes first to my mind on how to use this new syntax, read
tags:
- python
- python
- python
templateKey: til
title: Python's Dict Union Operator | Pep 584
today: 2022-10-29
year: 2022
---

Today I was watching the python web conf 2022 and saw
[@davidbujic](https://twitter.com/davidvujic) use the new Dict Union Operator
Live on stage during his [Functional
Programming](https://2022.pythonwebconf.com/presentations/functional-python)
talk.  This operator was first introduced into python 3.9 with [pep584](https://peps.python.org/pep-0584/).

## Merge Dicts

I've long updated dicts through the use of unpacking.  Note that the last item
always wins.  It makes it pretty easy to make user overrides to default
configurations.  With pep584 landing in python 3.9 we can now leverage the `|`
operator to achieve the same result.

``` python
default_config = {'url': 'https://example.com', 'assets_dir': 'static' }
user_config = {'url': 'https://waylonwalker.com'}

# **unpacking goes back much further than 3.9

config = {**default_config, **user_config}
print(config)
# {'url': 'https://waylonwalker.com', 'assets_dir': 'static'}


# the same can be achieved through the new to python 3.9 | operator

config = default_config | user_config
print(config)
# {'url': 'https://waylonwalker.com', 'assets_dir': 'static'}
```



<div class="onelinelink-wrapper">
    <a class="onelinelink" href="https://waylonwalker.com/python-args-kwargs/">
        <img style="float: right;" align='right' src="https://covers.waylonwalker.com/python-args-kwargs.jpg" alt="article cover for understanding python \*args and \*\*kwargs"/>
        <p><strong>understanding python \*args and \*\*kwargs</strong></p>
    </a>
</div>


> More on unpacking in this post.

## Update Dicts

With the release there is also a new update syntax `|=` that you can use to
update.  I dont often mutate variables for some reason, so I cant think of a
better example for this from my personal use cases. So I will give a similar
example to above, except creating a config, then updating it.

``` python
# old python <3.9 way
config = {'url': 'https://example.com', 'assets_dir': 'static' }
config.update({'url': 'https://waylonwalker.com'})

# new python 3.9+ way
config = {'url': 'https://example.com', 'assets_dir': 'static' }
config |= {'url': 'https://waylonwalker.com'}

print(config)
# {'url': 'https://waylonwalker.com', 'assets_dir': 'static'}
```

## Should you use it?

Are you writing libraries/applications that are only going to be ran on 3.9?
Then ya go for it there is nothing to loose.  If there is any chance someone is
going to run your code on 3.8 or older then just use `**`, or `.update`.

## RTFM

This is what comes first to my mind on how to use this new syntax, read
[pep584](https://peps.python.org/pep-0584/) for all the gritty details on it.

## Links

* [@davidbujic](https://twitter.com/davidvujic)
* [pep584](https://peps.python.org/pep-0584/)
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
    
    <a class='prev' href='/python-pluggable-architecture'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>🐍 Pluggable Architecture with Python</p>
        </div>
    </a>
    
    <a class='next' href='/python-pathlib-glob'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>How I glob for Files in Python</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>