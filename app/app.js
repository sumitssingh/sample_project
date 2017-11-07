'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ui.router',
    'sample_project'
])
    .constant("SERVER_BASE_URL","https://api.github.com/users/sumitssingh")
    .config(function($locationProvider, $urlRouterProvider, $stateProvider) {
  $locationProvider.hashPrefix('!');

    $stateProvider
        .state('main', {
            url: '/main',
            templateUrl: './main/main-component.html',
            controller: 'MainController',
            access:{
                requiresLogin : true
            }
    })

    $urlRouterProvider.otherwise('/signin');

})


