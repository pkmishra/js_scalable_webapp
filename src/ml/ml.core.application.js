/*
 * Namespace: ml.core.application
 * Core Application
 *
 * The Core Application manages the life cycle of modules.
 *
 * Authors:
 * o Eric Brechemier <github@eric.brechemier.name>
 * o Marc Delhommeau <marc.delhommeau@legalbox.com>
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
 * 2012-03-01
 */
/*global define, window */
define([
	"./ml.core",
	"./ml.base.dom",
	"./ml.base.dom.factory",
	"./ml.base.array",
	"./ml.base.config",
	"./ml.base.log"
], function (
	mlCore,
	dom,
	factory,
	array,
	config,
	logModule
) {
	"use strict";

    // Declare aliases
	var q = dom.q,
		createListener = factory.createListener,
		destroyListener = factory.destroyListener,
		addOne = array.addOne,
	    removeOne = array.removeOne,
	    removeAll = array.removeAll,
	    log = logModule.print,
	
		// Private members
		
		// array, the list of modules (ml.core.Module) added in the application
		modules = [];

	// Function: setOptions(options)
	// Configure a set of option properties.
	//
	// Each new option is added to the configuration, replacing any existing
	// value of the same name. Options previously set are otherwise preserved.
	//
	// Supported Properties:
	//   mlBuilder - builder used in <ml.core.Module> to create an instance of
	//               the Sandbox for the new module from a selection of plugins
	//               which define different parts of the Sandbox API.
	//               Defaults to <ml.core.plugins.builder>, which creates a
	//               Sandbox with all the plugins defined in the framework.
	//               Use of a custom builder allows to customize the Sandbox
	//               API by loading custom plugins besides or instead of the
	//               plugins defined in the framework.
	//   mlFactory - factory used in the Sandbox methods to create and destroy
	//               DOM elements, DOM listeners and DOM events, and used in
	//               ml.core.Module to "initialize" the box elements of a new
	//               module. Defaults to <ml.base.dom.factory>. Use of a custom
	//               factory allows to "initialize" the box by creating widgets
	//               associated with DOM elements within which, for example,
	//               carry particular CSS class names.
	//
	// Parameter:
	//   options - object, a hash of configuration properties.
	
	// This is an alias on ml.base.config.setOptions()

	function getModules() {
		// Function: getModules(): array
		// Get the list of modules added in the application.
		//
		// Returns:
		//   array, the list of modules (ml.core.Module) added with addModule().
		
		return modules;
	}

	function addModule(module) {
		// Function: addModule(module)
		// Add a new module to the application.
		//
		// Parameter:
		//   module - object, the new module (ml.core.Module) to add
		//
		// Note:
		// Nothing happens in case the same instance of module is already present.

		addOne(modules, module);
	}

	function removeModule(module) {
		// Function: removeModule(module)
		// Remove a module from the application.
		//
		// Parameter:
		//   module - object, the module (ml.core.Module) to remove

		removeOne(modules, module);
	}

	function startAll() {
		// Function: startAll()
		// Start all registered modules.

		var i;
		for (i = 0; i < modules.length; i += 1) {
			try {
				modules[i].start();
			} catch (e) {
				log('Error while starting module ' + modules[i] + ': ' + e);
			}
		}
	}

	function endAll() {
		// Function: endAll()
		// Terminate all registered modules.
		//
		// All registered modules are discarded.

		var i, loadListener, unloadListener;
		for (i = 0; i < modules.length; i += 1) {
			try {
				modules[i].end();
			} catch (e) {
				log('Error while ending module ' + modules[i] + ': ' + e);
			}
		}
		
		removeAll(modules);
		
		destroyListener(q(window), "load");
		destroyListener(q(window), "unload");
	}

	function run() {
		// Function: run()
		// Run the application.
		//
		// * startAll gets registered as listener for window 'load' event
		// * endAll gets registered as listener for window 'unload' event
		createListener(q(window), "load", startAll);
		createListener(q(window), "unload", endAll);
	}

	// Assign to ml.core.application
	// for backward-compatibility in browser environment
	mlCore.application = { // Public API
		setOptions: config.setOptions,
		getModules: getModules,
		addModule: addModule,
		removeModule: removeModule,
		startAll: startAll,
		endAll: endAll,
		run: run
	};

    return mlCore.application;
});