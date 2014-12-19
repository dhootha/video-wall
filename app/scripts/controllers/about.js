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
    $scope.stills = [
      "http://localhost:9000/images/bild_1.png",
      "http://localhost:9000/images/bild_2.png",
      "http://localhost:9000/images/bild_3.jpg",
      "http://localhost:9000/images/bild_4.png",
      "http://localhost:9000/images/bild_5.jpg",
      "http://localhost:9000/images/bild_6.jpg",
      "http://localhost:9000/images/bild_7.jpg",
      "http://localhost:9000/images/bild_8.jpg",
      "http://localhost:9000/images/bild_9.png",
      "http://localhost:9000/images/bild_10.jpg"
    ];
  });
