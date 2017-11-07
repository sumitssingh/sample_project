(function () {
angular.module('sample_project.auth',['angular-jwt']).factory('AuthService',AuthService)

    AuthService.$inject =['$q', 'angular-jwt']
        function AuthService($q, jwtHelper) {

            var vm = this;

            vm.isUserLoggedIn = function () {
                const token = localStorage.getItem('token');
                const payload = jwtHelper.decodeToken(token);
                if (payload.exp < Date.now()) {

                    return false;
                } else {
                    const user= {};
                    user.name = payload.name;
                    user.id = payload.id;
                    return user;

                }
            }
    }

})();