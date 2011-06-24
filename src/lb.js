/*
 * Namespace: lb
 * Root of Legal Box Scalable JavaScript Application
 *
 * Authors:
 *   o Eric Bréchemier <legalbox@eric.brechemier.name>
 *   o Marc Delhommeau <marc.delhommeau@legalbox.com>
 *
 * Copyright:
 * Legal-Box SAS (c) 2010-2011, All Rights Reserved
 *
 * License:
 * BSD License
 * http://creativecommons.org/licenses/BSD/
 *
 * Version:
 * 2011-06-24
 */
/*jslint white:false, plusplus:false */
/*global define, window */
define(function() {
  // Builder of
  // Closure for Root of Legal Box Scalable JavaScript Application

  // Note: no methods defined at this level currently

  var lb = { // public API
  };

  // initialize global variable lb in browser environment,
  // for backward-compatibility
  if (window){
    window.lb = lb;
  }

  return lb;
});
