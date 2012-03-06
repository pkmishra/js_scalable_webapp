/*
 * Namespace: ml.base.log
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
	"./ml.base"
], function (
	mlBase
) {
	"use strict";

    // Define alias
	var jQuery = mlBase.jQuery,
		history = [];
    
    function print() {
		history.push(arguments);
		
		if (window.console) {
			console.log(Array.prototype.slice.call(arguments));
		}
    }

	// Assign to ml.base.log
	// for backward-compatibility in browser environment
    mlBase.log = { // public API
		print: print
	};
	
	return mlBase.log;
});