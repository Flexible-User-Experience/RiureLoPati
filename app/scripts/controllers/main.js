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
            $scope.currentPage = $scope.pages[$routeParams.pageId];
            Layout.setTitle($scope.currentPage.metatile);
            Layout.setDescription($scope.currentPage.metadescription);
          });
      }]);

riureLoPatiControllers.controller('LayoutCtrl', ['$scope', '$http', 'Layout',
    function($scope, $http, Layout) {
        $scope.Layout = Layout;
      }]);