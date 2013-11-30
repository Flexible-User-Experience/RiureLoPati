"use strict";var riureLoPatiApp=angular.module("riureLoPatiApp",["ngCookies","ngResource","ngSanitize","ngRoute","ngAnimate","riureLoPatiControllers"]);riureLoPatiApp.config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/:pageId",{templateUrl:"views/page-detail.html",controller:"PageDetailCtrl"}).otherwise({redirectTo:"/"})}]),riureLoPatiApp.factory("Layout",function(){var a="",b="";return{title:function(){return a},setTitle:function(b){a=b},description:function(){return b},setDescription:function(a){b=a}}}),riureLoPatiApp.directive("myImage",function(){return{restrict:"E",templateUrl:"views/boxes/box-custom-image.html"}}),riureLoPatiApp.directive("myYoutube",function(){return{restrict:"E",templateUrl:"views/boxes/box-custom-youtube.html"}}),riureLoPatiApp.directive("myVimeo",function(){return{restrict:"E",templateUrl:"views/boxes/box-custom-vimeo.html"}});var riureLoPatiControllers=angular.module("riureLoPatiControllers",[]);riureLoPatiControllers.controller("MainCtrl",["$scope","$http","Layout",function(a,b,c){b.get("data/pages.json").success(function(b){a.pages=b}),c.setTitle("Main page"),c.setDescription("Metadescription")}]),riureLoPatiControllers.controller("PageDetailCtrl",["$scope","$http","$routeParams","$interval","$sce","Layout",function(a,b,c,d,e,f){b.get("data/pages.json").success(function(b){a.pages=b;for(var d=0,e=!1;!e&&d<a.pages.length;)a.pages[d].id===parseInt(c.pageId,10)&&(e=!0,a.currentPage=a.pages[d],f.setTitle(a.currentPage.metatile),f.setDescription(a.currentPage.metadescription),a.textPanel=a.currentPage.text.substring(0,a.currentPage.text.length-a.textPanelPointer)),d++}),a.textPanelCollapsed=!0,a.trustSrc=function(a){return e.trustAsResourceUrl(a)}}]),riureLoPatiControllers.controller("LayoutCtrl",["$scope","$http","Layout",function(a,b,c){a.Layout=c}]);