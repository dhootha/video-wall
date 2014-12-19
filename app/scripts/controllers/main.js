'use strict';

/**
 * @ngdoc function
 * @name videoWallApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the videoWallApp
 */
angular.module('videoWallApp')
  .controller('MainCtrl', function ($scope, $modal, $log) {
                $scope.videos = [
                  {
                    name: "Lake MP4",
                    still: "http://www.jod.uk.com/media/1506/natural-world-hero.jpg?width=1280"
                  },
                  {
                    name: "Tree MP4",
                    still: "http://www.chakalacquer.dk/wp-content/uploads/2014/08/Autumn-Nature-Desktop.jpg"
                  }
                ];

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
