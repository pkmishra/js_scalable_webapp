/*
 * Namespace: lb.core.plugins.css
 * Cascading Style Sheets Plugin for the Sandbox API
 *
 * Authors:
 * o Eric Bréchemier <github@eric.brechemier.name>
 * o Marc Delhommeau <marc.delhommeau@legalbox.com>
 *
 * Copyright:
 * Eric Bréchemier (c) 2011, Some Rights Reserved
 * Legal-Box SAS (c) 2010-2011, All Rights Reserved
 *
 * License:
 * BSD License
 * http://creativecommons.org/licenses/BSD/
 *
 * Version:
 * 2012-03-02
 */
/*global define */
define([
	"./lb.core.plugins",
	"./lb.base.dom.css",
	"./lb.base.log"
], function (
	lbCorePlugins,
	css,
	logModule
) {
	"use strict";

	//	Assign to lb.core.plugins.css
	//	for backward-compatibility in browser environment
	lbCorePlugins.css = function (sandbox) {
		// Function: css(sandbox)
		// Define methods in the 'css' property of given sandbox.
		//
		// Parameters:
		//   sandbox - object, the sandbox instance to enrich with CSS methods

		// Define aliases
		var getId = sandbox.getId,
			isInBox = sandbox.isInBox,
			log = logModule.print;

		function addClass(element, name) {
			// Function: sandbox.css.addClass(element,name)
			// Append a CSS class to a DOM element part of the box.
			//
			// Parameters:
			//   element - DOM Element, an element of the box
			//   name - string, a CSS class name
			//
			// Note:
			//   Nothing happens if element is out of the box.

			if (!isInBox(element)) {
				log('Warning: cannot add CSS class to element "' + element +
					'" outside of box "' + getId() + '"');
				return;
			}

			css.addClass(element, name);
		}

		function removeClass(element, name) {
			// Function: sandbox.css.removeClass(element,name)
			// Remove a CSS class from a DOM element part of the box.
			//
			// Parameters:
			//   element - DOM Element, an element of the box
			//   name - string, a CSS class name
			//
			// Note:
			//   Nothing happens if element is out of the box.

			if (!isInBox(element)) {
				log('Warning: cannot remove CSS class from element "' + element +
					'" outside of box "' + getId() + '"');
				return;
			}

			css.removeClass(element, name);
		}

		sandbox.css = {
			addClass: addClass,
			removeClass: removeClass
		};
	};

	return lbCorePlugins.css;
});