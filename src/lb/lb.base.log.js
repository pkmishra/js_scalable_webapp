/*
 * Namespace: lb.base.log
 * Logging Adapter Module for Base Library
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
/*global define, window, console */
define([
	"./lb.base"
], function (
	lbBase
) {
	"use strict";

    // Define alias
	var jQuery = lbBase.jQuery,
		history = [];
    
    function print() {
		history.push(arguments);
		
		if (window.console) {
			console.log(Array.prototype.slice.call(arguments));
		}
    }

	// Assign to lb.base.log
	// for backward-compatibility in browser environment
	lbBase.log = { // public API
		print: print
	};
	
	return lbBase.log;
});