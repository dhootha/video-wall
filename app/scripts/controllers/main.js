'use strict';

/**
 * @ngdoc function
 * @name videoWallApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the videoWallApp
 */
angular.module('videoWallApp')
  .controller('MainCtrl', function ($scope, $modal, $log, $resource) {
    var VideoListItem = $resource('http://10.10.4.30/vam/rest/vms/1/video-list-items');
    var Stills = $resource('http://10.10.4.30/vam/rest/vms/1/videos/:stillId/stills');

    $scope.videos = VideoListItem.query(function(result) {
      $scope.videos = result;
    });



   /* $scope.videos = [
      {
        name: "Lake MP4",
        stills: "http://www.jod.uk.com/media/1506/natural-world-hero.jpg?width=1280"
      },
      {
        name: "Tree MP4",
        stills: "http://www.chakalacquer.dk/wp-content/uploads/2014/08/Autumn-Nature-Desktop.jpg"
      }
    ];
*/
    $scope.open = function (video) {
      var modalInstance = $modal.open({
        templateUrl: 'views/VideoModal.html',
        controller: 'ModalCtrl',
        resolve: {
          video: function () {
            return video;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

  })
  .controller('ModalCtrl', function ($scope, $modalInstance, video) {

    $scope.video = video;

    $scope.ok = function () {
      $modalInstance.close($scope.selected.item);
    };

    $scope.close = function () {
      $modalInstance.dismiss('cancel');
    };

  });
