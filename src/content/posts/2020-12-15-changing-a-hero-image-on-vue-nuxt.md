---
template: blog-post
title: Changing a Hero image on Vue/Nuxt
slug: /background-image
date: 2020-12-15 16:25
description: Updating a background image
featuredImage: /assets/hero1.png
---
Existing code was pointing to an external URL as the source of the hero graphic. This created an unnecessary dependency on an external resource.

```
<style lang="scss" scoped>
  .hero {    
    text-align: center;
    background-image: url('https://cdn.auth0.com/blog/vue-meetup/event-banner.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 400px;
  }
  .hero-body .title {
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);
    padding: 40px 0 20px 0;
    font-size: 60px;
  }
</style>

```

Instead, a more relevant image was stored in a suitable sub-directry, within src, and referenced from the css.

![File structure](/assets/screenshot-2020-12-15-at-16.35.17.png "File structure")

and the code updated:

```
background-image: url('../assets/banners/Hero1.png');
```

Note the .. relative path and the use of single quotes.



Alternatively...

The hero image could be replaced with a colour. In this case the background is a linear gradient.

```
background: linear-gradient(90deg, rgba(249,168,38,1) 0%, rgba(240,90,40,1) 70%);
```

A really useful took is [cssgradient.io](https://cssgradient.io/) which allows you to model what you want to achieve, and then grab the code.

![](/assets/screenshot-2020-12-15-at-16.47.03.png)

That's all for now.