/*
 * Namespace: ml.core.plugins
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
	"./ml.core"
], function (
	mlCore
) {
	"use strict";

    // Note: no methods defined at this level currently

    // Assign to ml.core.plugins
    // for backward-compatibility in browser environment
	mlCore.plugins = { // public API
    };

    return mlCore.plugins;
});