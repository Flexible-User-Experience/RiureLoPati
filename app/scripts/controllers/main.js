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

riureLoPatiControllers.controller('PageDetailCtrl', ['$scope', '$http', '$routeParams', '$interval', 'Layout',
    function($scope, $http, $routeParams, $interval, Layout) {
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
                $scope.textPanel = $scope.currentPage.text.substring(0, $scope.currentPage.text.length - $scope.textPanelPointer);
              }
              index++;
            }
          });
        $scope.textPanelCollapsed = true;
        $scope.textPanel = '';
        $scope.textPanelPointer = 3162;
        $scope.changeTextLength = function() {
            $scope.textPanelCollapsed = !$scope.textPanelCollapsed;
            if ($scope.textPanelCollapsed) {
              $interval(function() {
                $scope.textPanelPointer++;
                $scope.textPanel = $scope.currentPage.text.substring(0, $scope.currentPage.text.length - $scope.textPanelPointer);
              }, 1, 3162);
            } else {
              $interval(function() {
                $scope.textPanelPointer--;
                $scope.textPanel = $scope.currentPage.text.substring(0, $scope.currentPage.text.length - $scope.textPanelPointer);
              }, 1, 3162);
            }
          };
      }]);

riureLoPatiControllers.controller('LayoutCtrl', ['$scope', '$http', 'Layout',
    function($scope, $http, Layout) {
        $scope.Layout = Layout;
      }]);