---
cover: ''
date: 2021-01-10
datetime: 2021-01-10 00:00:00+00:00
description: Replacing text based on whats in the current search register is a quite
  handy https://www.youtube.com/watch?v=fP If there is one thing that I Like most
  about vi
edit_link: https://github.com/edit/main/pages/blog/vim-replace-visual-star.md
jinja: false
long_description: 'Replacing text based on whats in the current search register is
  a quite handy https://www.youtube.com/watch?v=fP If there is one thing that I Like
  most about vim it Vim can often be a bit verbose, but that I have a keybinding in
  my  In command mode  '
now: 2022-10-29 15:54:38.063658
path: pages/blog/vim-replace-visual-star.md
slug: vim-replace-visual-star
status: published
super_description: 'Replacing text based on whats in the current search register is
  a quite handy https://www.youtube.com/watch?v=fP If there is one thing that I Like
  most about vim it Vim can often be a bit verbose, but that I have a keybinding in
  my  In command mode  <C-R> https://waylonwalker.com/save-vim-macro/ Also see how
  to use '
tags:
- vim
templateKey: blog-post
title: Vim Replace Visual Star
today: 2022-10-29
year: 2021
---

Replacing text based on whats in the current search register is a quite handy
tool that I use often.  I believe I picked this tip up from Nick Janetakis,
check out his YouTube channel for some amazing vim tips.

https://www.youtube.com/watch?v=fP_ckZ30gbs

If there is one thing that I Like most about vim it's the ability to hack on it
and make it work well for you.

## Replacing text in vim

Vim can often be a bit verbose, but that's ok because we can hack on it, and 
make our own shortcuts and keybindings.  For instance, finding and replacing 
text requires using a command at the vim command-line `:`.  Replacing foo with
bar looks like this `:%s/foo/bar/g`, the final g means all of the foos, not just 
the first one on the line.

## making it better

I have a keybinding in my `init.vim` that will allow me to search for a pattern
with the usual `/` character, page through them as normal with `n` and `N`, but
when I press `<C-R>` it will populate the replace command for me so that all I
need to do is type out the new text.

``` vim
nnoremap <c-r> :%s/<C-R>///g<Left><Left>
```

## Note on the `<C-R>/`

In command mode `:` vim allows you to paste any text from any register into the
current command.  The `<C-R>/` will paste the text from the current search
register into the command.

`<C-R>` in command mode can paste text from any register, you can see what
registers are in use with the `:reg` command.  There are a lot of them and many
get populated automatically as you yank text or create macros.


<div class="onelinelink-wrapper">
    <a class="onelinelink" href="https://waylonwalker.com/save-vim-macro/">
        <img style="float: right;" align='right' src="https://covers.waylonwalker.com/save-vim-macro.jpg" alt="article cover for Save Vim Macro"/>
        <p><strong>Save Vim Macro</strong></p>
    </a>
</div>


> Also see how to use <C-R> to save macros to key bindings easily
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
    
    <a class='prev' href='/vim-sort-u'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>use vim to remove duplicates</p>
        </div>
    </a>
    
    <a class='next' href='/vim-augroup'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>You must use augroup with autocmd in vim | Here's how</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>