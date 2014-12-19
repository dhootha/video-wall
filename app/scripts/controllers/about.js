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
      {
        url: "http://localhost:9000/images/bild_1.png"
      },{
        url: "http://localhost:9000/images/bild_2.png"
      },{
        url: "http://localhost:9000/images/bild_3.jpg"
      },{
        url: "http://localhost:9000/images/bild_4.png"
      },{
        url: "http://localhost:9000/images/bild_5.jpg"
      },{
        url: "http://localhost:9000/images/bild_6.jpg"
      },{
        url: "http://localhost:9000/images/bild_7.jpg"
      },{
        url: "http://localhost:9000/images/bild_8.jpg"
      },{
        url: "http://localhost:9000/images/bild_9.png"
      },{
        url: "http://localhost:9000/images/bild_10.jpg"
      }
    ];

  });
