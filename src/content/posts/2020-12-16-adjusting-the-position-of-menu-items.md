---
template: blog-post
title: Adjusting the position of menu items
slug: positioning-menu-items
date: 2020-12-16 14:18
description: positioning menu-items
featuredImage: /assets/adjusting-menu-items.png
---
This template had the menu items too close to the site title:

![](/assets/header-start.png)

This code:

```
   <div class="navbar-start">
      <router-link to="/" class="navbar-item">Home</router-link>
      <router-link to="/about" class="navbar-item">About</router-link>
   </div>
```

was updated by replacing `navbar-start` with `navbar-end`:

```
    <div class="navbar-end">
      <router-link to="/" class="navbar-item">Home</router-link>
      <router-link to="/about" class="navbar-item">About</router-link>
    </div>
```

resulting in:

![](/assets/header-end.png)