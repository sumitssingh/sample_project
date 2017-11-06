(function () {
    'use strict'
    angular.module('sample_project')
        .controller('LoginController',LoginController);
    LoginController.$inject= ['$scope'];

    function LoginController($scope) {
        $scope.msg= "hi";
    }
})();