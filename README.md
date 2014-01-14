jquery-fullscreen [![Build Status](https://travis-ci.org/theopolisme/jquery-fullscreen.png?branch=master)](https://travis-ci.org/theopolisme/jquery-fullscreen)
=================

jQuery wrapper for the JavaScript Fullscreen API

## Usage

```javascript

// Make an element go fullscreen (returns false if error)
$element.enterFullscreen();

// Then take it out of fullscreen (returns false if error)
$element.exitFullscreen();
```

Events you can listen for:

* **fullscreen**, triggered when the page goes fullscreen
* **defullscreen**, triggered when the page goes back to normal
* **fullscreenerror**, triggered when fullscreening is unsuccessful

The element that is made fullscreen will have the `fullscreened` class while it is fullscreen.

### Note

Elements can only be made fullscreen based on user interaction (for example, clicking a button), to protect against malicious uses of the fullscreen functionality.

## License

`jquery.fullscreen` is licensed under the [GNU General Public License version 2](http://www.gnu.org/licenses/gpl-2.0.txt). It incorporates code from [multilightbox](https://gitorious.org/multilightbox), which is also licensed under the GNU GPLv2.
