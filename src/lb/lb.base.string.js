/*
 * Namespace: lb.base.string
 * String Adapter Module for Base Library
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

	function trim(string) {
		// Function: trim(string): string
		// Remove white space from the start and end of the string.
		//
		// Parameter:
		//   string - string, a string
		//
		// Returns:
		//   a string with whitespace removed from start and end.
		//   The whitespace within is neither removed nor normalized.

		return jQuery.trim(string);
	}

	// Assign to lb.base.string
	// for backward-compatibility in browser environment
	lbBase.string = { // public API
		trim: trim
	};
	
	return lbBase.string;
});