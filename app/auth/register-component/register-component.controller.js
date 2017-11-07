(function () {
    'use strict'
    angular.module('sample_project')
        .controller('SignupController', SignupController);
    SignupController.$inject = ['$scope', '$http', '$q', '$state', 'SignupService'];
    function SignupController($scope, $http, $q, $state, SignupService) {

        var vm = this;
        vm.signup = function () {
           var data = SignupService.getAccount()
               .then(
                   function(result) {
                       if (result) {
                           $state.go('main');
                       }
                   },
                   function(error) {
                       console.log(error.statusText);
                   });
        }
    }

})();
