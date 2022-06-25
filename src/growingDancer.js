
var makeGrowingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('growing');
};

makeGrowingDancer.prototype = Object.create(makeDancer.prototype);
makeGrowingDancer.prototype.constructor = makeGrowingDancer;

makeGrowingDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
};

makeGrowingDancer.prototype.lineUp = function(top, left) {
  this.setPosition(top, left);
};