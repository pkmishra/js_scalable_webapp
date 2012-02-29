/*
 * test.ml.base.ajax.js - Unit Tests of ml.base.ajax namespace
 *
 * Author: Nik Sumeiko, http://manakor.org
 * Copyright:
 * Nik Sumeiko (c) 2012, All Rights Reserved.
 *
 * License:
 * BSD License
 * http://creativecommons.org/licenses/BSD/
 *
 * Version: 2012-02-29
 *
 * Based on QUnit jQuery test framework
 * jQuery QUnit: http://docs.jquery.com/QUnit
 */

/*jslint vars:true */
/*global define, test, stop, start, ok, equal, notEqual, strictEqual, notStrictEqual, deepEqual, notDeepEqual, raises */
define([
	"lb/lb.base.ajax"
], function (
	ajax
) {
	"use strict";
	
	function run() {
		test("send method", 4, function () {
			var send = ajax.send,
				data = {
					name: "Nik",
					surname: "Sumeiko",
					projects: ["manakorJS", "thrivesapp"]
				};
			
			// Test if method is defined
			ok(send, "Test if send method is defined");
			
			// Add string value into the array
			stop();
			send({
				url: "./jsonp.php",
				dataType: "json",
				data: data,
				success: function (response) {
					ok(response, "Test if response returned");
					strictEqual(response.name, "Nik", "Test if response has name property and its value is expected");
					strictEqual(response.projects[1], data.projects[1], "Test if response has projects array[1] value is expected");
					start();
				}
			});
		});
	}

	return {
		run: run
	};
});