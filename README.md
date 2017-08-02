<h1 align="center">
  <br>
  <a href="#"><img width="150" src="https://github.com/HQarroum/preloader/blob/master/assets/images/rotating-square.gif" alt="preloader-js" /></a>
  <br><br>
</h1>

<h4 align="center">A web component allowing to display opaque animations while an HTML page is loading.</h4>

<p align="center">
  <a href="https://travis-ci.org/HQarroum/preloader">
    <img src="https://travis-ci.org/HQarroum/preloader.svg?branch=master"
         alt="Build Status">
  </a>
  <a href="https://badge.fury.io/js/preloader-js">
    <img src="https://badge.fury.io/js/preloader-js.svg" alt="npm version" height="18">
  </a>
</p>
<br>

This component aims to be used in web applications for which the rendering process is done on the client-side. It provides an elegant solution to the [glitch problem](https://www.bennadel.com/blog/2758-creating-a-pre-bootstrap-loading-screen-in-angularjs.htm) encountered by this type of applications by displaying early in the rendering process of the page an animation until the developer decides to hide it when the rendering is done.

Current version: **1.0.0**

Lead Maintainer: [Halim Qarroum](mailto:hqm.post@gmail.com)

## Install

##### Using NPM

```bash
npm install --save preloader-js
```

##### Using Bower
```bash
bower install --save preloader-js
```

## Usage

You first need to include the `preloader.css` stylesheet into your application.

```html
<link rel="stylesheet" href="path/to/preloader/assets/css/preloader.css">
```

Then simply declare at the top of your `body` tag the preloader container, along with the animation of your choice.

```html
<!-- Preloader using the `rotating-square` animation -->
<div class="preloader">
  <div class="animation animation-rotating-square"></div>
</div>
```

Finally, once you have included the `preloader.js` asset into your application using either a `<script>` tag, an AMD loader, or a CommonJS loader, you can call the `.show` or the `.hide` methods to control the lifecycle of the preloader module.

```js
// Hides the preloader with a fade out animation.
preloader.hide();
// Shows the preloader.
preloader.show();
```
