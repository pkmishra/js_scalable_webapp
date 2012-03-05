/*
 * Namespace: lb.core.plugins.url
 * Uniform Resource Locator Plugin for the Sandbox API
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
 * 2012-03-05
 */
/*global define, window */
define([
	"./lb.core.plugins",
	"./lb.base.object",
	"./lb.base.History",
	"./lb.base.History.adapter"
], function (
	lbCorePlugins,
	object,
	History,
	adapter
) {
	"use strict";

	// Assign to lb.core.plugins.url
	// for backward-compatibility in browser environment
	lbCorePlugins.url = function (sandbox) {
		// Function: url(sandbox)
		// Define methods in the 'url' property of given sandbox.
		//
		// Parameters:
		//   sandbox - object, the sandbox instance to enrich with URL methods

		// Declare aliases
		var has = object.has,
			getState = History.getState,
			pushState = History.pushState,
			replaceState = History.replaceState;

		function getLocation() {
			// Function: sandbox.url.getLocation(): object
			// Get the properties of the current URL location
			//
			// Returns:
			//   an object with a copy of properties commonly found on window.location
			//   and document.location:
			//     * href - string, the absolute URL of the current document
			//     * protocol - string, the protocol part of the URL, e.g. 'http://'
			//     * host - string, the host and port part of the url, e.g.
			//              'example.com:8080' or often just 'example.com'
			//     * hostname - the host name part of the URL, e.g. 'example:com'
			//     * port - string, the port part of the URL, e.g. '8080' or often ''
			//     * pathname - string, the relative path, e.g. '/2010/10/31/index.php'
			//     * search - string, the query part of the url, e.g. '?param=value'
			//     * hash - string, the local part of the url, e.g. '#anchor'.
			//   These properties are read-only here and not shared with other modules.
			var location = window.location;
			return {
				href: location.href,
				protocol: location.protocol,
				host: location.host,
				hostname: location.hostname,
				port: location.port,
				pathname: location.pathname,
				search: location.search,
				hash: location.hash
			};
		}
		
		function stateEnabled() {
			if (History.enabled) {
				return true;
			} else {
				return false;
			}
		}
		
		function onStateChange(callback) {
			adapter.bind(window, "statechange", callback);
		}

		sandbox.url = {
			getLocation: getLocation,
			stateEnabled: stateEnabled,
			getState: getState,
			pushState: pushState,
			replaceState: replaceState,
			onStateChange: onStateChange
		};
	};

	return lbCorePlugins.url;
});