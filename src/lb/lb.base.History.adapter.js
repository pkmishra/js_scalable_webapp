/*global define */
define([
	"./lb.base",
	"./lb.base.History"
], function (
	lbBase,
	History
) {
	"use strict";

	// Localise Globals
	var jQuery = lbBase.jQuery;

	// Check Existence
	if (typeof History.Adapter !== 'undefined') {
		throw new Error('History.js Adapter has already been loaded...');
	}
	
	function bind(el, event, callback) {
		/**
		 * History.Adapter.bind(el,event,callback)
		 * @param {Element|string} el
		 * @param {string} event - custom and standard events
		 * @param {function} callback
		 * @return {void}
		 */
		jQuery(el).bind(event, callback);
	}
	
	function trigger(el, event, extra) {
		/**
		 * History.Adapter.trigger(el,event)
		 * @param {Element|string} el
		 * @param {string} event - custom and standard events
		 * @param {Object=} extra - a object of extra event data (optional)
		 * @return {void}
		 */
		jQuery(el).trigger(event, extra);
	}
	
	function extractEventData(key, event, extra) {
		/**
		 * History.Adapter.extractEventData(key,event,extra)
		 * @param {string} key - key for the event data to extract
		 * @param {string} event - custom and standard events
		 * @param {Object=} extra - a object of extra event data (optional)
		 * @return {mixed}
		 */
		// jQuery Native then jQuery Custom
		var result = (event && event.originalEvent && event.originalEvent[key]) || (extra && extra[key]) || undefined;

		// Return
		return result;
	}
	
	function onDomLoad(callback) {
		/**
		 * History.Adapter.onDomLoad(callback)
		 * @param {function} callback
		 * @return {void}
		 */
		jQuery(callback);
	}

	// Assign to History.adapter
	// for backward-compatibility in browser environment
	History.Adapter = { // public API
		bind: bind,
		trigger: trigger,
		extractEventData: extractEventData,
		onDomLoad: onDomLoad
	};
	
	// Init History after adapter has been defined
	History.init();
	
	return History.Adapter;
});