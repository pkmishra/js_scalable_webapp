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
	
	function q(selector, scope) {
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
		
		if (scope) {
			return jQuery(selector, scope).get();
		}

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
	
	function each(el, callback) {
		jQuery(el).each(callback);
	}
	
	function find(el, scope) {
		// el: element || selector
		// scope: element || selector
		return jQuery(scope).find(el).get();
	}
	
	function parent(el, selector) {
		return jQuery(el).parent(selector).get();
	}
	
	function attribute(el, name, value) {
		// attribute(el, name[, value])
		
		if (value) {
			jQuery(el).attr(name, value);
		
		} else {
			return jQuery(el).attr(name);
		}
	}
	
	// Assign to lb.base.dom
	// for backward-compatibility in browser environmen
	lbBase.dom = {
		// public API
		q: q,
		hasAttribute: hasAttribute,
		each: each,
		find: find,
		parent: parent,
		attribute: attribute
	};
	
	return lbBase.dom;
});