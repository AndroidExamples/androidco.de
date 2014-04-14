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

  .controller('ProjectsCtrl', function($scope, $http){

    // retrieve raw project md files here
    $http({method: 'GET', url: 'http://github-raw-cors-proxy.herokuapp.com/hanscappelle/more-android-examples/master/README.md'})
      .success(function(data) {
        // this callback will be called asynchronously
        // when the response is available
        $scope.readme = data.substring(1, data.length-1).replace(/\\n/g, '\r\n');
      })
      .error(function() {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log('problem retrieving readme file');
        $scope.readme = 'problem retrieving readme file';
      });

  });
