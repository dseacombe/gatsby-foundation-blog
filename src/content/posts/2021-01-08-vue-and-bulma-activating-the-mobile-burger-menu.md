---
template: blog-post
title: "Vue and Bulma: activating the mobile (burger) menu"
slug: /activating-mobile-menu
date: 2021-01-08 13:41
description: Vue and Bulma - activating the mobile (burger) menu
featuredImage: /assets/toggle.png
---
Bulma has a neat Navbar solution, but it is CSS only. One option to make the mobile menu option work is to make it active by toggling it.

This the full-size screen, with menu options:

![](/assets/screenshot-2021-01-08-at-12.37.05.png)

And this is the mobile version. The burger menu does not work out of the box.

![](/assets/screenshot-2021-01-08-at-12.44.07.png)

Within the container their are two divs: navbar-brand and navbar-menu. The mobile burger menu is hidden as part of navbar-brand.

First the link must be made so that the mobile burger bar mimics the main navigation menu.

The burger bar button is given a `data-target="navbar"`. Similarly, the navbar-menu is given an `id="navbar"`.

Next, the toggle is put in place, to bind the menu values to the burger bar when the burger bar is clicked, and made active.

The burger bar button is given futher attributes: `@click="isOpen = !isOpen" v-bind:class="{'is-active': isOpen}"`. Similarly, the navbar-menu is given `v-bind:class="{'is-active': isOpen}"`.

A data function is added to the script, to initialise the value.

```
data: function() {
  return {
    isOpen: false
    }
} //You may need a closing comma
```

Finally, you may want to apply some styling. By default, the mobile menu is displayed on the left of the device. To move it to the right, add `is-pulled-right` to `class="navbar-menu is-pulled-right"`.

You can add colour and padding to the burger bar menu items by amending `.navbar-menu.is-active`.

```
.navbar-menu.is-active {
  display: block;
  background: linear-gradient(90deg,#ffffff,#c8c8c8);
  padding-left: 5px;
}
```