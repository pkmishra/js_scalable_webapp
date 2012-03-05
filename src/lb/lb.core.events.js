/*
 * Namespace: lb.core.events
 * Core Events Modules based on a Publish/Subscribe Design Pattern.
 *
 * Authors:
 *   o Eric Brechemier <github@eric.brechemier.name>
 *   o Marc Delhommeau <marc.delhommeau@legalbox.com>
 *
 * Copyright:
 * Eric Brechemier (c) 2011, Some Rights Reserved
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
	"./lb.core"
], function (
	lbCore
) {
	"use strict";
	// Note: no methods defined at this level currently
	
	// Assign to lb.core.events
	// for backward-compatibility in browser environment
	lbCore.events = { // public API
	};
	
	return lbCore.events;
});