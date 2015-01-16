'use strict';

/* App Controllers */
/* Developed by http://www.flux.cat */

var riureLoPatiControllers = angular.module('riureLoPatiControllers', []);

riureLoPatiControllers.controller('MainCtrl', ['$scope', '$http', '$location', 'Layout',
    function($scope, $http, $location, Layout) {
        Layout.setTitle('Main page');
        $location.path('/2');
        /*$http.get('data/pages.json').success(function(data) {
            $scope.pages = data;
          });        
        Layout.setDescription('Metadescription');*/
      }]);

riureLoPatiControllers.controller('DefaultPageDetailCtrl', ['$scope', '$http', '$location', 'Layout',
    function($scope, $http, $location, Layout) {
        Layout.setTitle('Main page');
        $location.path('/2/ca');
        /*$http.get('data/pages.json').success(function(data) {
            $scope.pages = data;
          });        
        Layout.setDescription('Metadescription');*/
      }]);

riureLoPatiControllers.controller('PageDetailCtrl', ['$scope', '$http', '$routeParams', '$interval', '$sce', 'Layout',
    function($scope, $http, $routeParams, $interval, $sce, Layout) {
        /* Avoid async load for SEO reasons */
        /*$http.get('data/pages.json').success(function(data) {
          });*/
        if ($routeParams.locale === 'es') {
          $scope.pages = pageses;
        } else {
          $scope.pages = pagesca;
        }
        var index = 0;
        var found = false;
        while (!found && index < $scope.pages.length) {
          if ($scope.pages[index].id === parseInt($routeParams.pageId, 10)) {
            found = true;
            $scope.currentPage = $scope.pages[index];
            Layout.setTitle($scope.currentPage.metatitle);
            Layout.setDescription($scope.currentPage.metadescription);
          }
          index++;
        }
        $scope.textPanelCollapsed = true;
        $scope.trustSrc = function(src) {
            return $sce.trustAsResourceUrl(src);
          };
        $scope.getImagePath = function(path) {
            return 'images/' + path;
          };
        $scope.getThumbImagePath = function(path) {
            return 'images/thumbs/' + path;
          };
        $scope.getAttatchmentPath = function(path) {
            return 'attatchments/' + path;
          };
      }]);

riureLoPatiControllers.controller('LayoutCtrl', ['$scope', '$http', 'Layout',
    function($scope, $http, Layout) {
        $scope.Layout = Layout;
      }]);

function moveMe() {
  $('html,body').animate({scrollLeft: $("#tope").offset().left-1000}, 5500, 'easeOutQuad');
}
