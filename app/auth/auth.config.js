(function () {
    'use strict'

    angular.module('sample_project',[ 'ui.router','ngResource'])
        .config(function ($stateProvider, $urlRouterProvider,$locationProvider) {
            // jwtInterceptorProvider.tokenGetter = function() {
            //     return localStorage.getItem('JWT');
            // }
            // $httpProvider.interceptors.push('jwtInterceptor');

            $stateProvider
                .state('signin',{
                    url:'/signin',
                    templateUrl: './auth/login-component/login-component.html',
                    controller: 'LoginController',
                    controllerAs: 'vm'
                })
                .state('signup',{
                    url:'/signup',
                    templateUrl: './auth/register-component/register-component.html',
                    controller: 'SignupController',
                    controllerAs: 'vm'
                })
        })
        .run(function($rootScope,$location,$window) {
            $rootScope.$on('$stateChangeStart',
                function(event, toState, toParams, fromState, fromParams, $scope, AuthService) {
                    var loginURL = '#/login';
                    console.log(loginURL);
                    console.log(AuthService.isUserLoggedIn);
                    if (toParams.access.requiresLogin) {
                        if (!AuthService.isUserLoggedIn) {
                            console.log(AuthService.isUserLoggedIn);
                            e.preventDefault();
                            $state.go('/login');
                        }
                    }
                    $rootScope.$on('$stateChangeSuccess', function () {
                        $("html, body").animate({scrollTop: 10}, 50);
                    })
                })
        });
        // .run(function (toState, toParams, AuthService) {
        //
        // })
})()
