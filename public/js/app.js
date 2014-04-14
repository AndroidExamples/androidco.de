/*! androidco-de-website v0.1.0 2014-04-14 */
"use strict";

angular.module("myApp", [ "ui.router", "yaru22.md" ]).config(function($httpProvider, $stateProvider, $urlRouterProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common["X-Requested-With"];
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
        url: "https://raw.githubusercontent.com/hanscappelle/more-android-examples/master/README.md"
    }).success(function(data) {
        $scope.readme = data;
    }).error(function() {
        console.log("problem retrieving readme file");
        $scope.readme = "problem retrieving readme file";
    });
});