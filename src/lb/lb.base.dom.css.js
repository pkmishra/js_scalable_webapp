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
	
	// TODO:
	// 1) Check where getClasses method is used and re-work it and it's use,
	//    as it's not needed to return an object of classes, instead an array
	//	  could be returned, or even a string with classes separated by space.
	// 2) Make dom methods return object on which they are called to allow calling
	//	  them as a chain methods.
	
	function getClasses(element) {
		// Function: getClasses(element): object
		// Get a hash of classes found on given DOM element.
		//
		// Parameters:
		//   element - DOM Element, an element node
		//             (with or without a class attribute)
		//
		// Returns:
		//   object, a hash object with properties named after the classes found,
		//   e.g.
		//   | {'big':true, 'box':true}
		//   for
		//   | <div class='big box'></div>.
		//   When no class attribute is present, or when it is empty, an empty
		//   object is returned.

		var hash, array, classes, i, l;

		hash = {};
		classes = jQuery(element).attr("class");
		array = classes.split(" ");
		l = array.length;
		
		for (i = 0; i < l; i += 1) {
			hash[array[i]] = true;
		}
		return hash;
	}
	
	function addClass(el, name) {
		// Function: addClass(el, name)
		// Append a CSS class to the className of a DOM element.
		//
		// Parameters:
		//   el - DOM Element, an element (with or without a class attribute)
		//   name - string, the name of a new CSS class to append to existing ones
		//
		// Note:
		//   Nothing happens in case a class with the same name is already present.

		jQuery(el).addClass(name);
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
		getClasses: getClasses,
		addClass: addClass,
		removeClass: removeClass
	};
	
	return lbBaseDom.css;
});