'use strict';

angular.module('mi24-scrubber', [])

  .directive('vmScrubber', function ($http) {

               function link(scope, element, attrs) {

                 //var stills = eval(attrs.stills); //evil, besser über controller scope an stills kommen

                 //var Stills = $resource('http://10.10.4.30/vam/rest/vms/1/videos/:videoId/stills', {
                 //  videoId: '@videoId'});

                 var stills = [];

                 var stepSize;

                 $http.get('http://10.10.4.30/vam/rest/vms/1/videos/' + attrs.id + '/stills').success(function (response) {

                   //var stills = stills;
                   //element.css("background-image", "url("+stills[0] + ")");

                   stills = response;
                   stepSize = element.context.clientWidth / stills.length;
                 })
                   .error(function () {
                            console.log("Dammm!!!");
                          });



                 element.bind('mousemove', function (event) {
                   var xValue = event.pageX - element.context.offsetLeft;
                   var index = Math.floor(xValue / stepSize);
                   if (index < 0) index = 0;
                   element.css("background-image", "url(" + stills[index].url + ")");

                   scope.$apply();
                 });


               }

               return {
                 link: link,
                 restrict: 'AEC'
               }

             });
