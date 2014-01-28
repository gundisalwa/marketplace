require([
  "common-ui/angular", 
  "common-ui/angular-route",
  "common-ui/AnimatedAngularPlugin",
  "marketplace/app"
  ], function(angular, Route, AnimatedAngularPlugin, appConfig){

  var plugin = new AnimatedAngularPlugin(appConfig);
  plugin.register();

  angular.bootstrap(document, [appConfig.moduleName]);
});
