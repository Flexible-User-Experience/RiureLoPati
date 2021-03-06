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
                templateUrl: 'views/page-detail.html',
                controller: 'MainCtrl'
            })
            .when('/info', {
                templateUrl: 'views/page-info-ca.html',
                controller: 'DefaultPageInfoCtrl'
            })
            .when('/info/ca', {
                templateUrl: 'views/page-info-ca.html',
                controller: 'PageInfoCtrl'
            })
            .when('/info/es', {
                templateUrl: 'views/page-info-es.html',
                controller: 'PageInfoCtrl'
            })
            .when('/:pageId', {
                templateUrl: 'views/page-detail.html',
                controller: 'DefaultPageDetailCtrl'
            })
            .when('/:pageId/:locale', {
                templateUrl: 'views/page-detail.html',
                controller: 'PageDetailCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);

riureLoPatiApp.factory('Layout', function () {
    var id = 0;
    var title = '';
    var description = '';
    var locale = '';
    return {
        id: function () {
            return id;
        },
        setId: function (newId) {
            id = newId;
        },
        title: function () {
            return title;
        },
        setTitle: function (newTitle) {
            title = newTitle;
        },
        description: function () {
            return description;
        },
        setDescription: function (newDescription) {
            description = newDescription;
        },
        locale: function () {
            return locale;
        },
        setLocale: function (newLocale) {
            locale = newLocale;
        }
    };
});

riureLoPatiApp.directive('myImage', function () {
    return {
        restrict: 'E',
        templateUrl: 'views/box-custom-image.html'
    };
});

riureLoPatiApp.directive('myYoutube', function () {
    return {
        restrict: 'E',
        templateUrl: 'views/box-custom-youtube.html'
    };
});

riureLoPatiApp.directive('myVimeo', function () {
    return {
        restrict: 'E',
        templateUrl: 'views/box-custom-vimeo.html'
    };
});
