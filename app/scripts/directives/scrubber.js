'use strict';

angular.module('mi24-scrubber', [])

  .directive('vmScrubber', function() {

    function link(scope, element, attrs) {
      console.log(attrs.stills);
      var stills = eval(attrs.stills);
      element.css("background-image", "url("+stills[0] + ")");
      var stepSize = element.context.clientWidth / stills.length;

      element.bind('mousemove', function(event) {
        var xValue = event.pageX - element.context.offsetLeft;
        var index = Math.floor(xValue / stepSize);
        if(index < 0) index = 0;
        element.css("background-image", "url("+stills[index] + ")");
      });

      element.bind('load', function(event) {
        console.log("bla");
      })

    }
    return {
      link: link,
      restrict: 'AEC'
    }

  });