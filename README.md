jquery-fullscreen [![Build Status](https://travis-ci.org/theopolisme/jquery-fullscreen.png?branch=master)](https://travis-ci.org/theopolisme/jquery-fullscreen)
=================

jQuery wrapper for the JavaScript Fullscreen API

## Usage

```javascript

// Make an element go fullscreen (chainable, check $element.data( 'isFullscreened' ) for success)
$element.enterFullscreen();

// Then take it out of fullscreen (chainable, check $element.data( 'isFullscreened' ) for success)
$element.exitFullscreen();
```

Events you can listen for:

* **jq-fullscreen-change**, triggered when the page enters fullscreen or exits fullscreen
* **fullscreenerror**, triggered when fullscreening is unsuccessful (note that this is also the browser standard for fullscreen errors; in this case it simply makes the vendor-specific events behave like the standard).

The element that is made fullscreen will have the `jq-fullscreened` class while it is fullscreen. If you wish to check if an element is fullscreen, look for the `isFullscreened` data attribute (true when fullscreen).

### Note

Elements can only be made fullscreen based on user interaction (for example, clicking a button), to protect against malicious uses of the fullscreen functionality.

## License

`jquery.fullscreen` is licensed under the [GNU General Public License version 2](http://www.gnu.org/licenses/gpl-2.0.txt). It incorporates code from [multilightbox](https://gitorious.org/multilightbox), which is also licensed under the GNU GPLv2.
