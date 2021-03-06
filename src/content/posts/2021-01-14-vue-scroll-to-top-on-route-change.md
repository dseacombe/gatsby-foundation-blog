---
template: blog-post
title: Vue - scroll to top on route change
slug: scroll-to-top
date: 2021-01-14 17:32
description: Vue - scroll to top on route change
featuredImage: /assets/header.png
---
Single Page Applications always open new pages in the same scroll position.

If you change the route, it will take you to the new page but it won’t scroll to the top of the page. 

This trick opens the page that is navigated back to, at the top of the page, not where the previous page happened to be.

``` 
  mounted () {
    window.scrollTo(0, 0);
  }
```

This code example is for an About page:

```
<script>
export default {
  name: 'about',
  metaInfo: {
    title: "Azimuth Insights | About"
  },
  mounted () {
    window.scrollTo(0, 0);
  }
}
</script>
```