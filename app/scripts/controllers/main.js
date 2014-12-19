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

    $scope.videos = VideoListItem.query(function(result) {
      $scope.videos = result;
    });

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
