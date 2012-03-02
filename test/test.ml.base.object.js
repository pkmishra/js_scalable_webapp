/*
 * test.ml.base.object.js - Unit Tests of ml.base.object namespace
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
	"lb/lb.base.object"
], function (
	object
) {
	"use strict";
	
	function run() {
		test("has method", 3, function () {
			var has = object.has,
				obj = {
					name: "Nik",
					surname: "Sumeiko",
					projects: ["manakorJS", "thrivesapp"]
				};
			
			ok(has, "Test if has method is defined");
			ok(has(obj, "surname"), "Test if object has expected property");
			ok(has(obj, "name", "projects"), "Test if object has expected properties");
		});
		
		test("clone method", 3, function () {
			var clone = object.clone,
				obj = {
					name: "Nik",
					surname: "Sumeiko",
					birthday: {
						day: 25,
						month: "December",
						year: 1986
					}
				},
				shallowObj,
				deepObj;
			
			ok(clone, "Test if clone method is defined");
			
			shallowObj = clone(obj);
			deepObj = clone(obj, true);
			obj.birthday.year = 2012;
			
			deepEqual(shallowObj.birthday.year, 2012, "Test if object shallow copy is the same as original object");
			deepEqual(deepObj.birthday.year, 1986, "Test if object deep copy is different from original object");
		});
	}

	return {
		run: run
	};
});