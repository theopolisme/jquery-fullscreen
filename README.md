jquery-fullscreen [![Build Status](https://travis-ci.org/theopolisme/jquery-fullscreen.png?branch=master)](https://travis-ci.org/theopolisme/jquery-fullscreen)
=================

jQuery wrapper for the JavaScript Fullscreen API

## Usage

```javascript

// Make an element go fullscreen
$element.enterFullscreen();

// Then take it out of fullscreen
$element.exitFullscreen();
```

Events you can listen for:

* **jq-fullscreen-change**, triggered when the page enters fullscreen or exits fullscreen. The `fullscreen` property is also passed with the event; it is true if there is a fullscreen element, false if not. If `fullscreen` is true, `element` will also be available with the element that is currently fullscreen.
* **fullscreenerror**, triggered when fullscreening is unsuccessful (note that this is also the browser standard for fullscreen errors; in this case it simply makes the vendor-specific events behave like the standard).

enterFullscreen and exitFullscreen can be called on any jQuery object; only the first element matched will be affected. The `jq-fullscreened` class is also added to elements while fullscreen. If you wish to check if an element is fullscreen, look for the `isFullscreened` data attribute (true when fullscreen). Both enterFullscreen and exitFullscreen are chainable. 

`$.support.fullscreen` is true if fullscreen is supported (useful for conditionally displaying a fullscreen
button, for example).

### Note

Elements can only be made fullscreen based on user interaction (for example, clicking a button), to protect against malicious uses of the fullscreen functionality.

## License

`jquery.fullscreen` is licensed under the [GNU General Public License version 2](http://www.gnu.org/licenses/gpl-2.0.txt). It incorporates code from [multilightbox](https://gitorious.org/multilightbox), which is also licensed under the GNU GPLv2.
