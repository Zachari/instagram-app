/**
 * Created by Zachari on 1/15/2015.
 */

angular.module('Instagram')
    .controller('HomeCtrl', function($scope, $window, $rootScope, $auth, API) {

        if($auth.isAuthenticated() && ($rootScope.currentUser && $rootScope.currentUser.username)) {
            API.getFeed()
                .success(function(data) {
                    $scope.photos = data;
                })
                .error(function(data){
                    swal('Oops...', 'Something went wrong!', 'error');
                });
        }

        $scope.isAuthenticated = function() {
            return $auth.isAuthenticated();
        };

        $scope.linkInstagram = function() {
            $auth.link('instagram')
                .then(function(response) {
                    $window.localStorage.currentUser = JSON.stringify(response.data.user);
                    $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
                    API.getFeed().success(function(data) {
                        $scope.photos = data;
                        swal("Heyo!", "Your account is now linked!", "success");
                    });

                });
        };
    });