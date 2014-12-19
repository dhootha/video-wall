'use strict';

/**
 * @ngdoc function
 * @name videoWallApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the videoWallApp
 */
angular.module('videoWallApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
