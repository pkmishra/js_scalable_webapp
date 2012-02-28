/*
 * Namespace: lb.base
 * Adapter Modules for Base JavaScript Library
 *
 * Authors:
 *   o Nik Sumeiko, http://manakor.org
 *
 * Copyright:
 * Nik Sumeiko (c) 2011, All Rights Reserved
 *
 * License:
 * BSD License
 * http://creativecommons.org/licenses/BSD/
 *
 * Version:
 * 2012-02-28
 */
/*global define, window */
define([
	"./lb"
], function (lb) {
	"use strict";
	
	var jQuery = jQuery || window.jQuery;
	
	// Assign to lb.base
	// for backward-compatibility in browser environment
	lb.base = { // public API
		jQuery: jQuery
	};
	
	return lb.base;
});