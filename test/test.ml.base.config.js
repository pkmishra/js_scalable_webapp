/*
 * test.ml.base.config.js - Unit Tests of ml.base.config namespace
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
/*global define, test, stop, start, ok, equal, notEqual, strictEqual, notStrictEqual, deepEqual, notDeepEqual, raises */
define([
	"lb/lb.base.config"
], function (
	config
) {
	"use strict";
	
	function run() {
		test("setOptions method", 4, function () {
			var setOptions = config.setOptions,
				getOption = config.getOption;
			
			ok(setOptions, "Test if setOptions method is defined");
			
			setOptions({
				name: "Nik",
				surname: "Sumeiko",
				projects: ["manakorJS", "thrivesapp"]
			});
			
			strictEqual(getOption("name"), "Nik", "Test if expected property exists and its value is predictable");
			deepEqual(getOption("projects"), ["manakorJS", "thrivesapp"], "Test if nested arrays are equal");
			
			setOptions({ name: "Nikita" });
			
			notStrictEqual(getOption("name"), "Nik", "Test if expected property exists and its value has been changed");
		});
		
		
		test("getOption method", 2, function () {
			var setOptions = config.setOptions,
				getOption = config.getOption;
			
			ok(getOption, "Test if getOption method is defined");
			
			setOptions({ name: "Nik" });
			setOptions({ birthday: {
				day: 25,
				month: "December",
				year: 1986
			} });
			
			strictEqual(getOption("birthday").day, 25, "Test if expected property value is set");
		});
		
		
		test("reset method", 3, function () {
			var setOptions = config.setOptions,
				getOption = config.getOption,
				reset = config.reset;
			
			ok(reset, "Test if reset method is defined");
			
			setOptions({
				name: "Nik",
				surname: "Sumeiko",
				projects: ["manakorJS", "thrivesapp"]
			});
			
			reset();
			
			ok(!getOption("surname"), "Test if removed property doesn't exist")
			ok(!getOption("projects"), "Test if removed property doesn't exist");
		});
	}

	return {
		run: run
	};
});