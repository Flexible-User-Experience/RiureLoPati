'use strict';

var riureLoPatiControllers = angular.module('riureLoPatiControllers', []);

riureLoPatiControllers.controller('MainCtrl', ['$scope', '$http',
    function($scope, $http) {
        $scope.awesomeThings = [
          'HTML5 Boilerplate',
          'AngularJS',
          'Karma'
        ];
        $http.get('data/pages.json').success(function(data) {
            $scope.pages = data;
          });
      }]);

riureLoPatiControllers.controller('PageDetailCtrl', ['$scope', '$http',
    function($scope, $http) {
        $scope.notSoAwesomeThings = [
          'XML',
          'jQuery'
        ];
        $http.get('data/pages.json').success(function(data) {
            $scope.pages = data;
          });
      }]);