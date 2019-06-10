angular.module('CordovaMobileApp', [
  'ngRoute',
  'mobile-angular-ui',
  'CordovaMobileApp.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
});