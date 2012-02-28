/*
 * Namespace: lb.base.array
 * Array Adapter Module for Base Library
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
/*global define */
define([
	"./lb.base"
], function (
	lbBase
) {
	"use strict";
	
	var jQuery = lbBase.jQuery;
	
	function addOne(array, item) {
		// Function: addOne(array, item)
		// Add an item to the array, only once (no duplicates allowed).
		//
		// Parameters:
		//   array - array, the array to modify in place
		//   item - any, the new item to insert at end, unless already present
		
		var length = array.length;
		
		if (array && jQuery.inArray(item, array) === -1) {
			array[length] = item;
		}
	}

	function removeOne(array, item) {
		// Function: removeOne(array, item])
		// Remove the first occurence of an item from the given array.
		// The identity operator === is used for the comparison.
		//
		// Parameters:
		//   array - array, the array to modify in place
		//   item - any, the item to remove
		//
		// Note:
		// Duplicates are not removed.

		gArray.remove(array,item);
	}

    function removeAll(array){
      // Function: removeAll(array)
      // Remove all items from the array.

      gArray.clear(array);
    }

    function copy(array){
      // Function: copy(array): array
      // Copy an array.
      //
      // Parameter:
      //   array - array, the array to copy
      //
      // Returns:
      //   array, a shallow copy of given array

      return gArray.clone(array);
    }

    function toArray(pseudoArray){
      // Function: toArray(pseudoArray): array
      // Convert a pseudo-array to an array.
      //
      // Parameter:
      //   pseudoArray - object, a pseudo-array such as function arguments
      //
      // Returns:
      //   array, the pseudo-array converted to a new array instance

      return gArray.toArray(pseudoArray);
    }

    // Assign to lb.base.array
    // for backward-compatibility in browser environment$
    lbBase.array = { // public API
      addOne: addOne,
      removeOne: removeOne,
      removeAll: removeAll,
      copy: copy,
      toArray: toArray
    };
    return lbBase.array;
  }
);
