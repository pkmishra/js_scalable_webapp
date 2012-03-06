/*
 * Namespace: ml.core.events.publisher
 * Core Events Publisher
 *
 * The publisher manages a list of subscribers, which get all notified of
 * every event published until they get removed from the list.
 *
 * Authors:
 * o Eric Bréchemier <github@eric.brechemier.name>
 * o Marc Delhommeau <marc.delhommeau@localbox.com>
 *
 * Copyright:
 * Eric Bréchemier (c) 2011, Some Rights Reserved
 * Legal-Box SAS (c) 2010-2011, All Rights Reserved
 *
 * License:
 * BSD License
 * http://creativecommons.org/licenses/BSD/
 *
 * Version:
 * 2012-03-02
 */
/*global define */
define([
	"./ml.core.events",
	"./ml.base.log",
	"./ml.base.array"
], function (
	mlCoreEvents,
	logModule,
	array
) {
	"use strict";
	
	// Define aliases
	var log = logModule.print,
	    copy = array.copy,
	    addOne = array.addOne,
	    removeOne = array.removeOne,
	
	// Private members
	
	// array, the list of subscribers (ml.core.events.Subscriber) subscribed to
	// event notifications
	    subscribers = [];

	function getSubscribers() {
		// Function: getSubscribers(): array
		// Get the list of subscribers.
		//
		// Returns:
		//   array, the list of subscribers (<ml.core.events.Subscriber>)
	
		return subscribers;
	}

	function addSubscriber(subscriber) {
		// Function: addSubscriber(subscriber)
		// Add a new subscriber to the list.
		//
		// Parameter:
		//   subscriber - object, the new subscriber (<ml.core.events.Subscriber>)
		//
		// Note:
		// Nothing happens in case the subscriber is already present.

		addOne(subscribers, subscriber);
	}

	function removeSubscriber(subscriber) {
		// Function: removeSubscriber(subscriber)
		// Remove an existing subscriber from the list.
		//
		// Parameter:
		//   subscriber - object, the old subscriber (<ml.core.events.Subscriber>)
		//
		// Note:
		// Nothing happens in case the subscriber is not present.

		removeOne(subscribers, subscriber);
	}

	function publish(event) {
		// Function: publish(event)
		// Publish an event to be broadcast to all subscribers.
		//
		// Parameter:
		//   event - object, the event object
		//
		// Note:
		//   All subscribers present at the start of the call will get notified.
		//   Adding or removing a subscriber during the publication of an event
		//   will only have effect for subsequent events.

		// take a snapshot of the list of subscribers to avoid running into
		// infinite loops or skipping subscribers in case the list is modified.
		var currentSubscribers = copy(subscribers),
			i;
		for (i = 0; i < currentSubscribers.length; i += 1) {
			try {
				currentSubscribers[i].notify(event);
			} catch (e) {
				log('ERROR: Failed to notify subscriber "' + currentSubscribers[i] + '", "' + e + '"');
			}
		}
	}

	// Assign to ml.core.events.publisher
	// for backward-compatibility in browser environment
	mlCoreEvents.publisher = { // Facade API
		getSubscribers: getSubscribers,
		addSubscriber: addSubscriber,
		removeSubscriber: removeSubscriber,
		publish: publish
	};
	
	return mlCoreEvents.publisher;
});