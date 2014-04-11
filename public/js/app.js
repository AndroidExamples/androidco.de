var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider){

    // For any unmatched url, send to /route1
    $urlRouterProvider.otherwise("/home")

    $stateProvider

        .state('home', {
            url: "/home",
            templateUrl: "partials/home.html"
        })

        .state('projects', {
            url: "/projects",
            templateUrl: "partials/projects.html"
        })

        .state('about', {
            url: "/about",
            templateUrl: "partials/about.html"
        })
})
