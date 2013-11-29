'use strict';

var riureLoPatiApp = angular.module('riureLoPatiApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
]);

riureLoPatiApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
