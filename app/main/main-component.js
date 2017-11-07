(function () {
    'use strict'
    angular.module('sample_project')
        .controller('MainController',MainController);
    MainController.$inject = ['$scope'];
    function MainController($scope) {
        $scope.msg = "SPORT EXCHANGE";
    }
})();