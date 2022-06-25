$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);

  });

  $('.line-up').on('click', function(event) {
    var top = $("body").height() / 2;
    var left = 20;
    var distance = ($("body").width() - 300) / (window.dancers.length - 1);
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp(top, left);
      left += distance;
    }
  });

  $('body').on('mouseover', '.dancer', function() {
    $(this).css('border', '1px solid red');
    $(this).addClass('noAnimation');
  });

  $('body').on('mouseout', '.dancer', function() {
    $(this).css('border', 'none');
    $(this).removeClass('noAnimation');
  });


  //for each dancer, calculate the distance with the selected dance (top1-top2)^2 + (left1-left2)^2
  var getDistance = function(top1, left1, top2, left2) {
    var topDiff = Math.abs(top1 - top2);
    var leftDiff = Math.abs(left1 - left2);
    return Math.sqrt(Math.pow(topDiff, 2) + Math.pow(leftDiff, 2));
  };

  // Click on the dancer
  $('body').on('click', '.dancer', function() {

    //get the position (top, left)
    var selectedTop = Math.floor($(this).position().top);
    var selectedLeft = Math.floor($(this).position().left);

    var closestDistance = {};
    var targetDancer = null;

    //iterate over window.dancers.length
    //find the target dancer
    for (var i = 0; i < window.dancers.length; i++) {

      //get the position (top, left)
      var currentTop = Math.floor(window.dancers[i].top);
      var currentLeft = Math.floor(window.dancers[i].left);
      //this can avoid switching between same dancer
      if (selectedTop === currentTop && selectedLeft === currentLeft) {
        targetDancer = window.dancers[i];
        // Skip the rest, move on to next dancer
        continue;
      }

      // Get the distance between selected dancer and the current dancer
      var currentDistance = getDistance(selectedTop, selectedLeft, currentTop, currentLeft);

      //find the shortest distance between targeted dancer with dancers around
      if (closestDistance['distance'] === undefined) {
        closestDistance['distance'] = currentDistance;
        closestDistance['dancer'] = window.dancers[i];
      } else if (currentDistance < closestDistance['distance']) {
        closestDistance['distance'] = currentDistance;
        closestDistance['dancer'] = window.dancers[i];
      }
    }

    //switch position of each other, set position for selected and target
    var targetTop = targetDancer.top; //for getting the real location
    var targetLeft = targetDancer.left;
    var closestTop = closestDistance['dancer'].top;
    var closestLeft = closestDistance['dancer'].left;
    targetDancer.setPosition(closestTop, closestLeft);
    closestDistance['dancer'].setPosition(targetTop, targetLeft);
  });

});