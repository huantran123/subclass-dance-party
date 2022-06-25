
describe('rotatingDancer', function() {

  var rotatingDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    rotatingDancer = new makeRotatingDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(rotatingDancer.$node).to.be.an.instanceof(jQuery);
  });


  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(rotatingDancer, 'step');
      expect(rotatingDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(rotatingDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(rotatingDancer.step.callCount).to.be.equal(2);
    });
  });

  describe('line-up', function() {
    it('should include line-up function', function() {
      expect(typeof rotatingDancer.lineUp).to.be.equal('function');
    });
  });

  describe('classes', function() {
    it('$node should have the rotating class', function() {
      expect(rotatingDancer.$node.hasClass('rotateDancer')).to.be.equal(true);
    });
  });
});