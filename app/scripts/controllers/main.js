'use strict';

var riureLoPatiControllers = angular.module('riureLoPatiControllers', []);

riureLoPatiControllers.controller('MainCtrl', ['$scope', '$http', 'Page',
    function($scope, $http, Page) {
        $scope.awesomeThings = [
          'HTML5 Boilerplate',
          'AngularJS',
          'Karma'
        ];
        $http.get('data/pages.json').success(function(data) {
            $scope.pages = data;
          });
        $scope.Page = Page;
        Page.setTitle('Main page');
      }]);

riureLoPatiControllers.controller('PageDetailCtrl', ['$scope', '$http', 'Page',
    function($scope, $http, Page) {
        $scope.notSoAwesomeThings = [
          'XML',
          'jQuery'
        ];
        $http.get('data/pages.json').success(function(data) {
            $scope.pages = data;
          });
        $scope.Page = Page;
        Page.setTitle('Page detail');
      }]);