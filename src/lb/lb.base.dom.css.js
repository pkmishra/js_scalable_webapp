/*
 * Namespace: lb.base.dom.css
 * DOM (Document Object Model) CSS (Cascading Style Sheets) Adapter Module for
 * Base Library
 *
 * Authors:
 * o Nik Sumeiko, http://manakor.org
 *
 * Copyright:
 * Nik Sumeiko (c) 2012, All Rights Reserved
 *
 * License:
 * BSD License
 * http://creativecommons.org/licenses/BSD/
 *
 * Version:
 * 2012-03-01
 */
/*global define */
define([
	"./lb.base",
	"./lb.base.dom"
], function (
	lbBase,
	lbBaseDom
) {
	"use strict";
	
	var jQuery = lbBase.jQuery;
	
	function addClass(el, className) {
		// Function: addClass(el, name)
		// Append a CSS class to the className of a DOM element.
		//
		// Parameters:
		//   el - DOM Element, an element (with or without a class attribute)
		//   name - string, the name of a new CSS class to append to existing ones
		//
		// Note:
		//   Nothing happens in case a class with the same name is already present.
		
		jQuery(el).addClass(className);
	}
	
	function removeClass(el, name) {
		// Function: removeClass(el, name)
		// Remove a CSS class from the className of a DOM element.
		//
		// Parameters:
		//   el - DOM Element, an element (with or without a class attribute)
		//   name - string, the name of a CSS class to remove from existing ones
		//
		// Note:
		//   Nothing happens in case no class with this name is present.

		jQuery(el).removeClass(name);
	}
	
	// Assign to lb.base.dom.css
	// for backward-compatibility in browser environment
	lbBaseDom.css = { // public API
		addClass: addClass,
		removeClass: removeClass
	};
	
	return lbBaseDom.css;
});