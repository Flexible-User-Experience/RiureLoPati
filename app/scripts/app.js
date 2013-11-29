'use strict';

/* App Module */
/* Developed by http://www.flux.cat */

var riureLoPatiApp = angular.module('riureLoPatiApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'riureLoPatiControllers'
]);

riureLoPatiApp.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/:pageId', {
        templateUrl: 'views/page-detail.html',
        controller: 'PageDetailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

riureLoPatiApp.factory('Page', function(){
  var title = 'default';
  return {
    title: function() { return title; },
    setTitle: function(newTitle) { title = newTitle; }
  };
});