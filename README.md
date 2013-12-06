jquery-fullscreen
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

The element that is made fullscreen will have the `fullscreened` class while it is fullscreen.

### Note

Elements can only be made fullscreen based on user interaction (for example, clicking a button), to protect against malicious uses of the fullscreen functionality.
