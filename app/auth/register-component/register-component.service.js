(function () {
    'use strict'
    angular.module('sample_project')
        .service('SignupService', SignupService);
    SignupService.$inject = ['SERVER_BASE_URL', '$q', '$http', '$resource'];
        function SignupService(SERVER_BASE_URL,$q, $http ,$resource) {
            var deferred = $q.defer();
            this.getAccount = function() {
                return $http.get(SERVER_BASE_URL)
                    .then(function (response) {
                        deferred.resolve(response.data);
                        return deferred.promise;
                    }, function (response) {
                        deferred.reject(response);
                        return deferred.promise;
                    });
            };
        }
})();
