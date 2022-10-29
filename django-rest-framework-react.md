---
cover: ''
date: 2022-10-09
datetime: 2022-10-09 00:00:00+00:00
description: ''
edit_link: https://github.com/edit/main/pages/til/django-rest-framework-react.md
jinja: false
long_description: ''
now: 2022-10-29 15:54:38.066084
path: pages/til/django-rest-framework-react.md
slug: django-rest-framework-react
status: draft
super_description: ''
tags:
- python
- django
- react
- webdev
templateKey: til
title: Using Django Rest Framework inside react
today: 2022-10-29
year: 2022
---

``` bash
npx create-react-app todoreact
```

``` javascript
import React,{useState,useEffect} from 'react';
import './App.css';

function App() {
  const [data,setData]=useState([]);
  const [newName,setNewName]=useState([]);
  const getData=()=>{
    fetch('/api'
    ,{
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])

  const addItem= async () => {
    const rawResponse = await fetch('/api/add/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },

    body: JSON.stringify({"name": newName})
    });
    const content = await rawResponse;

    console.log(content);
    getData()
  }




  return (
    <div className="App">
     {
       data && data.length>0 && data.map((item)=><p>{item.id}{item.priority}{item.name}<button>raise priority</button></p>)
     }
    <input type='text' value={newName} onChange={(e) => (setNewName(e.target.value))} />
    <button onClick={addItem} >add item</button>
    </div>
  );
}

export default App;
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
    
    <a class='prev' href='/do-you-hoist'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Do You Hoist</p>
        </div>
    </a>
    
    <a class='next' href='/django-rest-framework-getting-started'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Getting Started with Django REST framework</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>