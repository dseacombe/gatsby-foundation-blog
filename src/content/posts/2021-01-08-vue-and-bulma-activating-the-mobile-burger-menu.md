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

Here is the working solution:

![](/assets/screenshot-2021-01-08-at-14.00.06.png)

Finally, you may want to apply some styling, as in teh image above.  By default, the mobile menu is displayed on the left of the device. To move it to the right, add `is-pulled-right` to `class="navbar-menu is-pulled-right"`.

You can add colour and padding to the burger bar menu items by amending `.navbar-menu.is-active`.

```
.navbar-menu.is-active {
  display: block;
  background: linear-gradient(90deg,#ffffff,#c8c8c8);
  padding-left: 5px;
}
```



Here is the whole code block:

```
<template>
  <nav class="navbar container.is-fluid" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/"> <img class="img-responsive" src="favicon.ico" alt="">
      <strong class="is-size-4">Azimuth Insights</strong>
    </a>
    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbar" @click="isOpen = !isOpen" v-bind:class="{'is-active': isOpen}">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
  <div class="navbar-menu is-pulled-right" id="navbar" v-bind:class="{'is-active': isOpen}">
    <div class="navbar-end">
      <router-link to="/" class="navbar-item">Home</router-link>
      <router-link to="/about" class="navbar-item">About</router-link>
      <router-link to="/clients" class="navbar-item">Clients</router-link>
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <!-- Check that the SDK client is not currently loading before accessing is methods -->
          <div v-if="!$auth.loading">
            <!-- show login when not authenticated -->
            <a v-if="!$auth.isAuthenticated" @click="login" class="button is-dark"><strong>Sign in</strong></a>
            <!-- show logout when authenticated -->
            <a v-if="$auth.isAuthenticated" @click="logout" class="button is-dark"><strong>Log out</strong></a>
          </div>
        </div>
     </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Nav',
  // Nav Burger for mobile devices
  data: function() {
       return {
           isOpen: false
       }
   },
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  }
}
</script>

<style lang="scss" scoped>
  nav {
    margin-top: 0px;
    margin-bottom: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #F05A28;
      }
    }  
  } 
</style>
```