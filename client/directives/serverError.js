/**
 * Created by Zachari on 1/15/2015.
 */

angular.module('Instagram')
    .directive('serverError', function() {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, element, attrs, ctrl) {
                element.on('keydown', function() {
                    ctrl.$setValidity('server', true);
                });
            }
        }
    });