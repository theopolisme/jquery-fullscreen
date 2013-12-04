jquery-fullscreen
=================

jQuery wrapper for the JavaScript Fullscreen API

## Usage

```javascript

// First, initialize the fullscreen plugin (required for doing anything else):
$.fullscreenSetup();

// Make an element go fullscreen:
$element.fullscreen();

// Then take it out of fullscreen:
$element.fullscreen();
```

Events you can listen for:

* **fullscreen**, triggered when the page goes fullscreen
* **defullscreen**, triggered when the page goes back to normal

The element that is made fullscreen will have the `fullscreened` class while it is fullscreen.

### Note

Elements can only be made fullscreen based on user interaction (for example, clicking a button), to protect against malicious uses of the fullscreen functionality.
