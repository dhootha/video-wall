'use strict';

/**
 * @ngdoc function
 * @name videoWallApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the videoWallApp
 */
angular.module('videoWallApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
