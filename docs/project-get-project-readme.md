---
title: Get a project's README
sidebar_label: Get a project's README
slug: /project/get-project-readme
id: project-get-project-readme
---
Get a project's README.md via its domain.

### Endpoint

```
/projects/{project_domain}/readme
```

### Endpoint Method
`GET`

### Authentication required?
No.

### Sample response:

This endpoint returns the README of a project in raw text format, rather than JSON.

This is the response of [~hello-webpage](https://glitch.com/~hello-webpage), the default template for Glitch projects.

```md
Welcome to Glitch
=================

Click `Show` in the header to see your app live. Updates to your code will instantly deploy and update live.

**Glitch** is the friendly community where you'll build the app of your dreams. Glitch lets you instantly create, remix, edit, and host an app, bot or site, and you can invite collaborators or helpers to simultaneously edit code with you.

Find out more [about Glitch](https://glitch.com/about).


Your Project
------------

### ← README.md

That's this file, where you can tell people what your cool website does and how you built it.

### ← index.html

Where you'll write the content of your website. 

### ← style.css

CSS files add styling rules to your content.

### ← script.js

If you're feeling fancy you can add interactivity to your site with JavaScript.

### ← assets

Drag in `assets`, like images or music, to add them to your project

Made by [Glitch](https://glitch.com/)
-------------------

\ ゜o゜)ノ

```
