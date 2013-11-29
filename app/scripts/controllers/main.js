'use strict';

/* App Controllers */
/* Developed by http://www.flux.cat */

var riureLoPatiControllers = angular.module('riureLoPatiControllers', []);

riureLoPatiControllers.controller('MainCtrl', ['$scope', '$http', 'Layout',
    function($scope, $http, Layout) {
        $http.get('data/pages.json').success(function(data) {
            $scope.pages = data;
          });
        Layout.setTitle('Main page');
        Layout.setDescription('Metadescription');
      }]);

riureLoPatiControllers.controller('PageDetailCtrl', ['$scope', '$http', '$routeParams', 'Layout',
    function($scope, $http, $routeParams, Layout) {
        $http.get('data/pages.json').success(function(data) {
            $scope.pages = data;
            var index = 0;
            var found = false;
            while (!found && index < $scope.pages.length) {
              if ($scope.pages[index].id === parseInt($routeParams.pageId, 10)) {
                found = true;
                $scope.currentPage = $scope.pages[index];
                Layout.setTitle($scope.currentPage.metatile);
                Layout.setDescription($scope.currentPage.metadescription);
              }
              index++;
            }
          });
      }]);

riureLoPatiControllers.controller('LayoutCtrl', ['$scope', '$http', 'Layout',
    function($scope, $http, Layout) {
        $scope.Layout = Layout;
      }]);