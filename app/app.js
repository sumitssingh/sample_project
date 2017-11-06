'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ui.router',
    'sample_project'
]).
config(function($locationProvider, $urlRouterProvider, $stateProvider) {
  $locationProvider.hashPrefix('!');

    // $stateProvider.
    // state('', {
    //     url: '/',
    //     template: '<div>login</div>',
    //     controller: 'LoginController'
    // })

    $urlRouterProvider.otherwise('/login');
});
