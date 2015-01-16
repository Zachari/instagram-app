/**
 * Created by Zachari on 1/15/2015.
 */

angular.module('Instagram')
    .controller('NavbarCtrl', function($scope, $rootScope, $window, $auth) {
        $scope.isAuthenticated = function() {
            return $auth.isAuthenticated();
        };

        $scope.logout = function() {
            $auth.logout();
            delete $window.localStorage.currentUser;
        };
    });