require([
  "common-ui/angular", 
  "common-ui/angular-route",
  "marketplace/app"
  ], function(angular, Route, appConfig){
  	angular.bootstrap(document, [appConfig.moduleName]);
});
