/*
 * test.ml.base.array.js - Unit Tests of ml.base.array namespace
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
/*global define, test, ok, equal, strictEqual */
define([
	"lb/lb.base.array"
], function (
	array
) {
	"use strict";
	
	
	function addOne() {
		test("addOne method", function () {
			var addOne = array.addOne,
				arr = [],
				obj = {
					sample_key: "sample value"
				},
				str = "sample string";
			
			// Test if method is defined
			ok(addOne, "Test if addOne method is defined");
			
			// Add string value into the array
			addOne(arr, str);
			strictEqual(arr[0], str, "Test if array[0] is equal to expected string: " + str);
			
			// Add previously added string into the array to test avoided duplicates
			addOne(arr, str);
			strictEqual(arr[1], undefined, "Test if array[1] in not undefined to see if duplicates are avoided");
			
			// Add object into the array
			addOne(arr, obj);
			strictEqual(typeof arr[1], "object", "Test if array[1] is an object");
			strictEqual(arr[1].sample_key, obj.sample_key, "Test if '" + arr[1].sample_key + "' is equals to '" + obj.sample_key + "'");
			
			// Add previously added object into the array to test avoided duplicates
			addOne(arr, obj);
			ok(!arr[2], "Test if already existing property hasn't been added to array");
		});
	}
	
	function run() {
		addOne();
	}

	var tests = {
		run: run
	};
	
	return tests;
});