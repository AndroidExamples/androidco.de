'use strict'

angular.module('myApp', ['ui.router', 'yaru22.md'])

.config(function($stateProvider, $urlRouterProvider){

    // For any unmatched url, send to /route1
    $urlRouterProvider.otherwise("/home");

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
        });
})

.controller('mdExampleCtrl', function($scope){
    $scope.mdText = '## Example 3\nThis is the third example. Modify the text in the text box and see it being rendered on the fly!';
});
