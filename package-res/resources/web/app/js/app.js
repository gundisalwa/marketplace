/* App Module */
define([
  "common-ui/angular", 
  "common-ui/angular-route", 
  "common-ui/AnimatedAngularPluginHandler",
  "marketplace/controllers/controllers",
  "marketplace/services/services",
  "marketplace/filters/filters",
  "marketplace/util",
  "common-ui/angular-ui-bootstrap",
  "common-ui/angular-resource"
  ], function(angular, Route, AnimatedAngularPluginHandler, controllers, services, filters, Util){
  'use strict';
  var pluginHandler = new AnimatedAngularPluginHandler();
  pluginHandler.module('marketplaceApp', ['ui.bootstrap', 'ngResource']);

  var routes = function($routeProvider) {
    $routeProvider.
        when('/view1',
          {
            templateUrl: Util.buildResourceUrl('partials/view1.html'),
            controller: 'View1Ctrl'
          }).
        when('/view2',
          {
            templateUrl: Util.buildResourceUrl('partials/view2.html'),
            controller: 'View2Ctrl'
          });
  }

	return {
    moduleName         : 'marketplaceApp',
    routerCallback     : routes,
    controllerCallback : controllers,
    serviceCallback    : services,
    filterCallback     : filters,
    pluginHandler      : pluginHandler
  };
});
