/*! androidco-de-website v0.1.0 2014-05-23 */
"use strict";

angular.module("myApp", [ "ui.router", "yaru22.md" ]).config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider.state("home", {
        url: "/home",
        templateUrl: "partials/home.html"
    }).state("projects", {
        url: "/projects",
        templateUrl: "partials/projects.html"
    }).state("contribute", {
        url: "/contribute",
        templateUrl: "partials/contribute.html"
    }).state("about", {
        url: "/about",
        templateUrl: "partials/about.html"
    });
}).controller("ProjectsCtrl", function($scope, $http) {
    $http({
        method: "GET",
        url: "http://github-raw-cors-proxy.herokuapp.com/AndroidExamples/androidco.de/master/PROJECTS.md"
    }).success(function(data) {
        $scope.markedContent = data.substring(1, data.length - 1).replace(/\\n/g, "\r\n");
    }).error(function() {
        console.log("problem retrieving marked content file");
        $scope.markedContent = "problem retrieving marked content file";
    });
});