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
	
	// Function: initElement(element)
	// (optional) Customize a newly inserted element.
	// Not implemented in the base factory.
	//
	// The method differs from createElement which is responsible for the
	// actual creation of the element node and is called before the node is
	// inserted in the DOM. On the contrary, this method will be called on
	// elements already part of the DOM.
	//
	// When available on the configured factory, this method is currently called
	// before a module starts, with the box element at the root of the module.
	// It is also intended to get called in a template engine, to be added in a
	// future version of the library, after inserting new contents in the box.
	//
	// A custom factory may, for example, iterate recursively on the children
	// of the given element, creating Rich Internet Application widgets when
	// expected CSS classes are found on an element.
	//
	// Parameter:
	//   element - DOM Element, an element part of the document.
	
	function createElement(tag, attributes) {
		// Function: createElement(tag[,attributes[,childNodes]]): DOM Element
		// Create a new element with given name, attributes and child nodes.
		//
		// Parameters:
		//   tag - string, the name of the element, e.g. 'div'
		//   attributes - object, the set of attributes, 
		//                e.g. {id:'myDiv', 'class':'big box'}
		//   childNodes - array or list, the list of child nodes.
		//                The child nodes may be provided as an array,
		//                or as a list of arguments (after name and attributes).
		//
		// Returns:
		//   DOM Element, the newly created element
		
		var el,
			args = arguments,
			l = args.length;
		
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
		// Function: createListener(element, type, callback[, useCapture])
		// Create a new listener for a type of event on a DOM element.
		//
		// Parameters:
		//   element - DOM Element, an element
		//   type - string, the name of an event (without 'on') e.g. 'click'
		//   callback - function, a function to call when the event is dispatched.
		//   useCapture - boolean, whether the callback is set for capture phase.
		//                Optional: defaults to false. See [1] for details.
		//
		// Returns:
		//   object, a new instance of <lb.base.dom.Listener>
		//
		// Reference:
		//   [1] DOM Level 2 Events: addEventListener
		//   <http://bit.ly/9SQoL4>
		
		jQuery(el).on(type, callback);
	}
	
	function destroyListener(el, type) {
		// Function: destroyListener(el, type)
		// Terminate a listener by removing it from the target DOM element.
		//
		// Parameter:
		
		if (type) {
			jQuery(el).off(type);
		} else {
			jQuery(el).off();
		}
	}
	
	//	Assign to lb.base.dom.factory
	//	for backward-compatibility in browser environment
	lbBaseDom.factory = { // public API
		createElement: createElement,
		destroyElement: destroyElement,
		createListener: createListener,
		destroyListener: destroyListener
	};
	
	return lbBaseDom.factory;
});