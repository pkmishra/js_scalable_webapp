/*
 * test.ml.base.js - Unit Tests of ml.base namespace
 *
 * Author: Nik Sumeiko, http://manakor.org
 * Copyright:
 * Nik Sumeiko (c) 2012, All Rights Reserved.
 *
 * License:
 * BSD License
 * http://creativecommons.org/licenses/BSD/
 *
 * Version: 2012-02-28
 *
 * Based on QUnit jQuery test framework
 * jQuery QUnit: http://docs.jquery.com/QUnit
 */

/*jslint vars:true */
/*global define, test, ok, equal */
define([
	"lb/lb.base"
], function (
	base
) {
	"use strict";
	
	
	function testjQuery() {
		test("jQuery", function () {
			var jQuery = base.jQuery;
			
			ok(jQuery, "jQuery is not defined");
		});
	}
	
	function run() {
		testjQuery();
	}

	var tests = {
		run: run
	};
	
	return tests;
});
