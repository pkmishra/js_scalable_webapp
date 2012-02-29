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
/*global define, test, stop, start, ok, equal, notEqual, strictEqual, notStrictEqual, deepEqual, notDeepEqual, raises */
define([
	"lb/lb.base.array"
], function (
	array
) {
	"use strict";
	
	function run() {
		test("addOne method", 6, function () {
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
			deepEqual(arr[1], obj, "Test if object on array[1] is equals to added object");
			
			// Add previously added object into the array to test avoided duplicates
			addOne(arr, obj);
			ok(!arr[2], "Test if already existing property hasn't been added to array");
		});
		
		
		test("removeOne method", 5, function () {
			var removeOne = array.removeOne,
				obj = { key: "value" },
				arr = ["b", "a", "c", obj, "19", "a"];
			
			// Test if method is defined
			ok(removeOne, "Test if removeOne method is defined");
			
			// Remove one element from the array
			removeOne(arr, "c");
			notStrictEqual(arr[2], "c", "Test if array has removed element on previous index");
			
			// Remove another item (object this time)
			removeOne(arr, obj);
			strictEqual(arr[2], "19", "Test if array[2] has expected value of '19'");
			
			// Remove another element that is duplicated inside an array
			removeOne(arr, "a");
			strictEqual(arr[arr.length - 1], "a", "Test if array last element is as expected 'a'");
			
			// Test new length at the end
			strictEqual(arr.length, 3, "Test if array length has decreased to expected length");
		});
		
		
		test("removeAll method", 2, function () {
			var removeAll = array.removeAll,
				arr = ["b", "a", "c", { key: "value" }, "19", "a"];
			
			// Test if method is defined
			ok(removeAll, "Test if removeAll method is defined");
			
			// Remove all elements from the array
			removeAll(arr);
			strictEqual(arr.length, 0, "Test if array length is 0");
		});
		
		
		test("copy method", 4, function () {
			var copy = array.copy,
				arr = ["b", "a", "c", { key: "value" }, 19, "a"],
				clone;
			
			// Test if method is defined
			ok(copy, "Test if copy method is defined");
			
			// Clone existing array
			clone = copy(arr);
			strictEqual(clone.length, arr.length, "Test if both array length is equal");
			strictEqual(clone[2], arr[2], "Test if arrays has same elements (strings)");
			deepEqual(clone[3], arr[3], "Test if arrays has same elements (objects)");
		});
		
		
		test("toArray method", 2, function () {
			var toArray = array.toArray,
				arr,
				pseudoArr = {
					0: "b", 
					1: "a", 
					2: "c", 
					3: { key: "value" }, 
					4: 19, 
					5: "a"
				};
			
			// Test if method is defined
			ok(toArray, "Test if toArray method is defined");
			
			// TODO: Prepare some tests to check if pseudo-array
			arr = toArray(pseudoArr);
			ok(arr.hasOwnProperty("length"), "Test if new array has length property");
		});
	}

	return {
		run: run
	};
});