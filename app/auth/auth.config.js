(function () {
    'use strict'

    angular.module('sample_project',[ 'ui.router'])
        .config(function ($stateProvider, $urlRouterProvider,$locationProvider) {
            // jwtInterceptorProvider.tokenGetter = function() {
            //     return localStorage.getItem('JWT');
            // }
            // $httpProvider.interceptors.push('jwtInterceptor');

            $stateProvider
                .state('login',{
                    url:'/login',
                    templateUrl: './auth/login-component/login-component.html',
                    controller: 'LoginController',
                    controllerAs: 'vm'
                })
        })
        // .run(function (toState, toParams, AuthService) {
        //
        // })
})()
