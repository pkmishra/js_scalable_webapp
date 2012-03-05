/*
 * Namespace: lb.base.dom.factory
 * DOM (Document Object Model) Factory, Adapter Module for Base Library
 *
 * This module provides the base implementation of a factory to create DOM
 * elements, listeners and events. It is intended to be replaced with a custom
 * factory creating widgets on top of regular DOM elements for the support of
 * Rich Internet Applications.
 *
 * How to design a custom factory:
 * A custom factory is an object with the same methods defined in this module.
 * All the methods defined in the base factory must be supported by your
 * custom factory.
 *
 * The custom factory can be configured by calling setOptions on the
 * application core:
 * | lb.core.application.setOptions({ lbFactory: your.customFactory })
 *
 * To develop your own custom factory, you can start by creating a new module
 * as a closure assigned to your own namespace. You can then add all required
 * methods, just calling the same method in the base factory to use the default
 * implementation. You may find it handy to declare an alias for the base
 * factory at the start of your module:
 * | var baseFactory = lb.base.dom.factory;
 *
 * In addition to the mandatory methods defined by the base factory, you may
 * optionally support the initElement method, which is an extra extension
 * point intended for use in custom factories:
 * o <initElement(element)>
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

	// Declare aliases
	var jQuery = lbBase.jQuery;
	
	function createElement(tag, attributes) {
		var el, args = arguments, l = args.length;
		
		if (l === 1) {
			el = jQuery("<" + tag + "/>");
		
		} else if (l === 2) {
			el = jQuery("<" + tag + "/>", attributes);
		
		//} else if (l === 3) {
		// TODO: Not sure, how exactly nested nodes are going to be passed,
		// need to work-out a solution for that
		}
		
		return el;
	}
	
	function destroyElement(el) {
		// Function: destroyElement(element)
		// Terminate usage of a DOM element by removing it from its parent.
		//
		// Parameter:
		//   element - DOM element, an element (with or without parent)
		//
		// Note:
		// Nothing happens in case the element has no parent.

		jQuery(el).remove();
	}
	
	function createListener(el, type, callback) {
		jQuery(el).on(type, callback);
	}
	
	function destroyListener(el, type) {
		if (type) {
			jQuery(el).off(type);
		} else {
			jQuery(el).off();
		}
	}
	
	function destroyAllListeners(scope, types) {
		jQuery(scope).off(types, "*");
	}
	
	
	//	Assign to lb.base.dom.factory
	//	for backward-compatibility in browser environment
	lbBaseDom.factory = { // public API
		createElement: createElement,
		destroyElement: destroyElement,
		destroyAllListeners: destroyAllListeners,
		createListener: createListener,
		destroyListener: destroyListener
	};
	
	return lbBaseDom.factory;
});