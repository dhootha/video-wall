'use strict';

angular.module('mi24-scrubber', [])

  .directive('vmScrubber', function() {

    function link(scope, element, attrs) {

      var stills = eval(attrs.stills); //evil, besser über controller scope an stills kommen
      /*
      var stills2 = [];
      element.css("background-image", "url("+stills[0] + ")");
      angular.forEach(element, function(value) {
        $http.GET(value, function(result) {
          value = btoa(result.body);
        })
      });
      */

      var stepSize = element.context.clientWidth / stills.length;

      element.bind('mousemove', function(event) {
        var xValue = event.pageX - element.context.offsetLeft;
        var index = Math.floor(xValue / stepSize);
        if(index < 0) index = 0;
        element.css("background-image", "url("+stills[index] + ")");
      });

    }
    return {
      link: link,
      restrict: 'AEC'
    }

  });