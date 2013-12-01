'use strict';

/* App Module */
/* Developed by http://www.flux.cat */

var riureLoPatiApp = angular.module('riureLoPatiApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngAnimate',
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

riureLoPatiApp.factory('Layout', function(){
  var title = '';
  var description = '';
  return {
    title: function() { return title; },
    setTitle: function(newTitle) { title = newTitle; },
    description: function() { return description; },
    setDescription: function(newDescription) { description = newDescription; }
  };
});

riureLoPatiApp.directive('myImage', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/box-custom-image.html'
    };
  });

riureLoPatiApp.directive('myYoutube', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/box-custom-youtube.html'
    };
  });

riureLoPatiApp.directive('myVimeo', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/box-custom-vimeo.html'
    };
  });