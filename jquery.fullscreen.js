/**
 * jQuery fullscreen plugin
 * https://github.com/theopolisme/jquery-fullscreen
 *
 * Copyright (c) 2013 Theopolisme <theopolismewiki@gmail.com>
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along
 * with this program; if not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */
( function ( $ ) {
	var setupFullscreen;

	// Helper function
	function returnFalse () {
		return false;
	}

	/**
	 * On fullscreenchange, trigger appropriate event (either jq-fullscreen or jq-defullscreen)
	 * and also remove the 'fullscreened' class from elements that are no longer fullscreen
	 */
	function handleFullscreenChange () {
		if ( !document.fullscreenElement &&
				!document.mozFullScreenElement &&
				!document.webkitFullscreenElement &&
				!document.msFullscreenElement ) {
			$( '.fullscreened' ).removeClass( 'fullscreened' );
			$( document ).trigger( $.Event( 'jq-defullscreen' ) );
		} else {
			// We don't mess with styling here because we don't know if we
			// induced the fullscreening or if it was something else
			$( document ).trigger( $.Event( 'jq-fullscreen' ) );
		}
	}

	function enterFullscreen () {
		var element = this.get(0);

		if ( !element ) {
			return false;
		}

		if ( element.requestFullscreen ) {
			element.requestFullscreen();
		} else if ( element.mozRequestFullScreen ) {
			element.mozRequestFullScreen();
		} else if ( element.webkitRequestFullscreen ) {
			element.webkitRequestFullscreen();
		} else if ( element.msRequestFullscreen ) {
			element.msRequestFullscreen();
		} else {
			// Unable to make fullscreen
			return false;
		}

		// Assume that the element has now been made fullscreen
		// and apply the fullscreened class
		this.first().addClass( 'fullscreened' );

		return true;
	}

	function exitFullscreen () {
		var fullscreenElement = ( document.fullscreenElement ||
				document.mozFullScreenElement ||
				document.webkitFullscreenElement ||
				document.msFullscreenElement );

		// Ensure that we only exit fullscreen if exitFullscreen() is being called on the same element that is currently fullscreen
		if ( fullscreenElement && this.get(0) === fullscreenElement ) {
			if ( document.exitFullscreen ) {
				document.exitFullscreen();
			} else if ( document.mozCancelFullScreen ) {
				document.mozCancelFullScreen();
			} else if ( document.webkitCancelFullScreen ) {
				document.webkitCancelFullScreen();
			} else if ( document.msCancelFullScreen ) {
				document.msCancelFullScreen();
			} else {
				// Unable to cancel fullscreen mode
				return false;
			}
			// We don't need to remove the 'fullscreened' class here,
			// because it will be removed in handleFullscreenChange.
		}
		return true;
	}

	/**
	 * Set up fullscreen handling and install necessary event handlers.
	 * Return false if fullscreen is not supported.
	 */
	setupFullscreen = function () {
		if ( document.fullscreenEnabled ||
				document.mozFullScreenEnabled ||
				document.webkitFullscreenEnabled ||
				document.msFullscreenEnabled
		) {
			// When the fullscreen mode is changed, trigger the
			// defullscreen or fullscreen events (and when exiting,
			// also remove the `fullscreened` class)
			$( document ).on( 'fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange', handleFullscreenChange);
			// Convenience wrapper so that one only needs to listen for
			// 'fullscreenerror', not all of the prefixed versions
			$( document ).on( 'webkitfullscreenerror mozfullscreenerror msfullscreenerror', function () {
				$( document ).trigger( $.Event( 'fullscreenerror' ) );
			} );
			// Fullscreen has been set up, so always return true
			setupFullscreen = function () {
				return true;
			};
			return true;
		}
		// Otherwise, always return false from now on, since fullscreen is not supported
		setupFullscreen = returnFalse;
		return false;
	};

	/**
	 * Set up fullscreen handling if necessary, then make the first element
	 * matching the given selector fullscreen
	 *
	 * @return {boolean} Fullscreen was enabled successfully
	 */
	$.fn.enterFullscreen = function () {
		if ( setupFullscreen() ) {
			$.fn.enterFullscreen = enterFullscreen;
			return this.enterFullscreen();
		}
		// Otherwise, always return false
		$.fn.enterFullscreen = returnFalse;
		return false;
	};

	/**
	 * Set up fullscreen handling if necessary, then cancel fullscreen mode
	 * for the first element matching the given selector.
	 *
	 * @return {boolean} The selected element is no longer in fullscreen mode
	 */
	$.fn.exitFullscreen = function () {
		if ( setupFullscreen() ) {
			$.fn.exitFullscreen = exitFullscreen;
			return this.exitFullscreen();
		}
		// Otherwise, always return false
		$.fn.exitFullscreen = returnFalse;
		return false;
	};
}( jQuery ) );
