/*
 * Namespace: lb.core.plugins
 * Core Plugins which define API methods for the Sandbox.
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
 * 2012-03-03
 */
/*global define */
define([
	"./lb.core"
], function (
	lbCore
) {
	"use strict";

    // Note: no methods defined at this level currently

    // Assign to lb.core.plugins
    // for backward-compatibility in browser environment
    lbCore.plugins = { // public API
    };

    return lbCore.plugins;
});