/*
 * Namespace: lb.base.dom
 * DOM (Document Object Model) Adapter Module for Base Library
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
	"./lb.base"
], function (
	lbBase
) {
	"use strict";
	
	// Declare alias
	var jQuery = lbBase.jQuery;
	
	function q(selector) {
		// Function: $(selector): DOM Element(s)
		//
		// Parameter:
		//   selector - CSS selector of the element(s)
		//
		// Returns:
		//   DOM Element(s), the element(s) with given selector, if present in the document,
		//   null otherwise
		//
		// Note: 
		//   Returned element(s) are not instances of jQuery, but just DOM elements

		return jQuery(selector).get();
	}
	
	function hasAttribute(element, attributeName) {
		// Function: hasAttribute(element, attributeName): boolean
		// Check whether an attribute with given name has been specified on
		// given element.
		//
		// The native hasAttribute() function is used when available. When missing,
		// it is emulated by checking DOM level 2 property 'specified' of the
		// attribute node.
		//
		// Parameters:
		//   element - DOM Element, the element to check for given attribute
		//   attributeName - string, an attribute name
		//
		// Returns:
		//   * true if the attribute has been defined on the element,
		//   * false otherwise

		if (typeof jQuery(element).attr(attributeName) !== "undefined") {
			return true;
		}

		return false;
	}
	
	// Assign to lb.base.dom
	// for backward-compatibility in browser environment
	
	lbBase.dom = {
		// public API
		q: q,
		hasAttribute: hasAttribute
	};
	
	return lbBase.dom;
});