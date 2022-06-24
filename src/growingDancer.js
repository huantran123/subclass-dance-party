
var makeGrowingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('growing');
};

makeGrowingDancer.prototype = Object.create(makeDancer.prototype);
makeGrowingDancer.prototype.constructor = growimakeGrowingDancergDancer;

makeGrowingDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
};