---
cover: ''
date: 2019-12-21
datetime: 2019-12-21 00:00:00+00:00
description: My Notes about using sqlalchemy models
edit_link: https://github.com/edit/main/pages/notes/sqlalchemy-models.md
jinja: false
long_description: ''
now: 2022-10-29 15:54:38.061828
path: pages/notes/sqlalchemy-models.md
slug: sqlalchemy-models
status: published
super_description: ''
tags:
- python
templateKey: blog-post
title: SqlAlchemy Models
today: 2022-10-29
year: 2019
---

## Make a connection

```python
from sqlalchemy import create_engine
def get_engine():
    return create_engine("sqlite:///mode_examples.sqlite")
```


## Make a session

``` python
from sqlalchemy.orm import sessionmaker
def get_session():
    con = get_engine()
    Base.bind = con
    Base.metadata.create_all()
    Session = sessionmaker(bind=con)
    session = Session()
    return session
```

## Make a Base Class

``` python
from sqlalchemy.ext.declarative import declarative_base
Base = declarative_base()
Base.metadata.bind = get_engine()
```

## Make your First Model

``` python
class User(Base):
    __tablename__ = "users"
    username = Column('username', Text())
    firstname = Column('firstname', Text())
    lastname = Column('lastname', Text())
```

## Make your own Base Class to inherit From

``` python
class MyBaseHelper:
    def to_dict(self):
        return {k: v for k, v in self.__dict__.items() if k[0] != "_"}

    def update(self, **attrs):
        for key, value in attrs.items():
            if hasattr(self, key):
                setattr(self, key, value)
```

## Use the Custom Base Class

``` python
class User(Base, MyBaseHelper):
    __tablename__ = "users"
    username = Column('username', Text())
    firstname = Column('firstname', Text())
    lastname = Column('lastname', Text())
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
    
    <a class='prev' href='/stand-with-your-team'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Stand With Your Team</p>
        </div>
    </a>
    
    <a class='next' href='/simple-click'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>simple click</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>