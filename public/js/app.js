/*! androidco-de-website v0.1.0 2014-04-14 */
"use strict";

angular.module("myApp", [ "ui.router", "yaru22.md" ]).config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider.state("home", {
        url: "/home",
        templateUrl: "partials/home.html"
    }).state("projects", {
        url: "/projects",
        templateUrl: "partials/projects.html"
    }).state("about", {
        url: "/about",
        templateUrl: "partials/about.html"
    });
}).controller("ProjectsCtrl", function($scope, $http) {
    $http({
        method: "GET",
        url: "http://github-raw-cors-proxy.herokuapp.com/hanscappelle/more-android-examples/master/README.md"
    }).success(function(data) {
        $scope.readme = data.substring(1, data.length - 1).replace(/\\n/g, "\r\n");
    }).error(function() {
        console.log("problem retrieving readme file");
        $scope.readme = "problem retrieving readme file";
    });
});