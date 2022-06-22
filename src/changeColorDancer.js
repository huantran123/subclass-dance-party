


var changeColorDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('yellow');
};

changeColorDancer.prototype = Object.create(makeDancer.prototype);
changeColorDancer.prototype.constructor = changeColorDancer;

changeColorDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
};


