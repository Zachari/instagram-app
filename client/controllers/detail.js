/**
 * Created by Zachari on 1/15/2015.
 */

angular.module('Instagram')
    .controller('DetailCtrl', function($scope, $rootScope, $location, API) {

        var mediaId = $location.path().split('/').pop();

        API.getMediaById(mediaId).success(function(media) {
            $scope.hasLiked = media.user_has_liked;
            $scope.photo = media;
        });

        $scope.like = function() {
            $scope.hasLiked = true;
            API.likeMedia(mediaId).error(function(data) {
                swal('Uh oh!', 'We\'ve encountered an error. \nError: ' + data.message, 'error');
            });
        };
    });