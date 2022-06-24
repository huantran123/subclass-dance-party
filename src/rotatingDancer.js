


var makeRotatingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('rotateDancer');
};

makeRotatingDancer.prototype = Object.create(makeDancer.prototype);
makeRotatingDancer.prototype.constructor = makeRotatingDancer;

makeRotatingDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
};


