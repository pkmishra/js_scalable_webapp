/*
 * Namespace: lb.base.ajax
 * AJAX (Asynchronous JavaScript And XML) Adapter Module for Base Library
 *
 * Authors:
 *   o Nik Sumeiko, http://manakor.org
 *
 * Copyright:
 * Nik Sumeiko (c) 2012, All Rights Reserved
 *
 * License:
 * BSD License
 * http://creativecommons.org/licenses/BSD/
 *
 * Version:
 * 2012-02-28
 */
/*global define */
define([
	"./lb.base"
], function (
	lbBase
) {
	"use strict";
	
	var jQuery = lbBase.jQuery;
	
	function send(data) {
		jQuery.ajax(data);
	}
	
	// Assign to lb.base.ajax
	// for backward-compatibility in browser environment
	lbBase.ajax = { // public API
		send: send
	};
	
	return lbBase.ajax;
});