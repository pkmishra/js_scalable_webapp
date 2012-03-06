/*
 * Namespace: ml.base
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
	"./ml"
], function (
	ml
) {
	"use strict";
	
	var jQuery = jQuery || window.jQuery;
	
	// Assign to ml.base
	// for backward-compatibility in browser environment
	ml.base = { // public API
		jQuery: jQuery
	};
	
	return ml.base;
});