/**
 * Created by Zachari on 1/15/2015.
 */

angular.module('Instagram')
    .controller('SignupCtrl', function($scope, $auth) {

        $scope.signup = function() {
            var user = {
                email: $scope.email,
                password: $scope.password
            };

            // Satellizer
            $auth.signup(user)
                .catch(function(response){
                    console.log(response.data);
                });

        };
    });