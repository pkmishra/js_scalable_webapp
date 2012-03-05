/*
 * Namespace: lb.core.plugins.dom
 * Document Object Model Plugin for the Sandbox API
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
	"./lb.base.array",
	"./lb.base.config",
	"./lb.base.dom.factory",
	"./lb.base.dom",
	"./lb.base.log"
], function (
	lbCorePlugins,
	array,
	config,
	defaultFactory,
	dom,
	logModule
) {
	"use strict";

	// Assign to lb.core.plugins.dom
	// for backward-compatibility in browser environment$
	lbCorePlugins.dom = function (sandbox) {
		// Function: dom(sandbox)
		// Define methods in the 'dom' property of given sandbox.
		//
		// Parameters:
		//   sandbox - object, the sandbox instance to enrich with DOM methods

		// Define aliases
		var getId = sandbox.getId,
			isInBox = sandbox.isInBox,
			addOne = array.addOne,
			removeOne = array.removeOne,
			removeAll = array.removeAll,
			toString = array.toString,
			log = logModule.print,

			// Private fields
	
			// object, the factory used to create DOM elements, listeners and events.
			// A custom factory can be configured by setting the property lbFactory.
			// Defaults to lb.base.dom.factory.
			factory = config.getOption("lbFactory", defaultFactory),
			
			listenerTypes = [];

		function q(selector) {
			// Function: sandbox.dom.$(localId): DOM Element
			// Get the element of the box with given local identifier.
			//
			// Parameter:
			//   localId - string, the local identifier of the element, without prefix.
			//             See getId() for details.
			//
			// Returns:
			//   * DOM Element, the element from the box with corresponding localId
			//   * null if no element is found in the box with the localId
			//
			// Note:
			//   A call to $() with no argument will return the box element, similarly
			//   to getBox(false).
			var el, i, l;
			
			selector = selector || "#" + getId();
			
			if (selector.charAt(0) === "#") {
				selector = "#" + getId() + "\\." + selector.substr(1);
			}
			
			el = dom.q(selector);
			
			for (i = 0, l = el.length; i < l; i += 1) {
				if (!isInBox(el[i])) {
					removeOne(el, el[i]);
				}
			}
			
			if (el.length !== l) {
				log('Warning: Some queried elements are not part of box "' + getId() + '"');
			}
			
			if (el.length) {
				return el;
			}
			
			return null;
		}

		function element(tag, attributes) {
			// Function: sandbox.dom.element(name[,attributes[,childNodes]]): DOM Element
			// Create a new DOM element using the configured DOM factory.
			// For example, using the default DOM factory,
			// |  element('a',{href:'#here',title:'Here'},'Click here')
			// will create a new DOM element
			// |  <a href='#here' title='Here'>Click here</a>
			//
			// A custom DOM factory can be configured using the property lbFactory
			// with <lb.core.application.setOptions(options)>.
			//
			// Parameters:
			//   name - string, the name of the element
			//   attributes - object, optional arguments as a set of named properties
			//   childNodes - array or list of arguments, the optional child nodes.
			//                Text nodes shall be represented simply as strings.
			//
			// Returns:
			//   DOM Element, the newly created DOM element.

			return factory.createElement(tag, arguments);
		}

		
		function addListener(el, type, callback) {
			var createListener = factory.createListener;
			
			if (!isInBox(el)) {
				log('Warning: cannot add listener to element "' + element +
					'" outside of box "' + getId() + '"');
				return null;
			}
			
			addOne(listenerTypes, type);
			createListener(el, type, callback);
		}

		
		function removeListener(el, type) {
			var destroyListener = factory.destroyListener;
			
			removeOne(listenerTypes, type);
			
			destroyListener(el, type);
		}

		
		function removeAllListeners() {
			var destroyAllListeners = factory.destroyAllListeners,
				box = q("#" + getId()),
				types = toString(listenerTypes, "");
				
			destroyAllListeners(box, types);
			
			removeAll(listenerTypes);
		}

		sandbox.dom = {
			q: q,
			each: dom.each,
			find: dom.find,
			parent: dom.parent,
			attribute: dom.attribute,
			element: element,
			addListener: addListener,
			removeListener: removeListener,
			removeAllListeners: removeAllListeners
		};
	};

	return lbCorePlugins.dom;
});