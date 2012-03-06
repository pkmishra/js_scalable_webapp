/*
 * Namespace: ml.base.ajax
 * AJAX Adapter Module for Base Library
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
 * 2012-02-29
 */
/*global define */
define([
    "./ml.base"
], function (
	mlBase
) {
	"use strict";
	
	var jQuery = mlBase.jQuery,
		ajaxQueue = jQuery({});

    function send(ajaxOpts) {
		var jqXHR,
			dfd = jQuery.Deferred(),
			promise = dfd.promise();
		
		// run the actual query
		function doRequest(next) {
		    jqXHR = jQuery.ajax(ajaxOpts)
		        .then(next, next)
		        .done(dfd.resolve)
		        .fail(dfd.reject);
		}
		
		// queue our ajax request
		ajaxQueue.queue(doRequest);
		
		// add the abort method
		promise.abort = function (statusText) {
		    // proxy abort to the jqXHR if it is active
			if (jqXHR) {
			    return jqXHR.abort(statusText);
			}
		
			// if there wasn't already a jqXHR we need to remove from queue
			var queue = ajaxQueue.queue(),
			    index = jQuery.inArray(doRequest, queue);
			
			if (index > -1) {
			    queue.splice(index, 1);
			}
		
			// and then reject the deferred
			dfd.rejectWith(ajaxOpts.context || ajaxOpts, [ promise, statusText, "" ]);
		    return promise;
		};
		
		return promise;
    }

    // Assign to ml.base.ajax
    // for backward-compatibility in browser environment
    mlBase.ajax = { // public API
		send: send
    };

    return mlBase.ajax;
});