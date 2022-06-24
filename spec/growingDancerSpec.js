// describe('growingDancer', function() {

//   var growingDancer, clock;
//   var timeBetweenSteps = 100;

//   beforeEach(function() {
//     clock = sinon.useFakeTimers();
//     growDancer = new growingDancer(10, 20, timeBetweenSteps);
//   });

//   it('should have a jQuery $node object', function() {
//     expect(growDancer.$node).to.be.an.instanceof(jQuery);
//   });

//   // it('should have a step function that makes its node grow', function() {
//   //   sinon.spy(growingDancer.$node, 'toggle');
//   //   growingDancer.step();
//   //   expect(growingDancer.$node.toggle.called).to.be.true;
//   // });

//   describe('grow', function() {
//     it('should call step at least once per second', function() {
//       sinon.spy(growDancer, 'step');
//       expect(growDancer.step.callCount).to.be.equal(0);
//       clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
//       clock.tick(timeBetweenSteps);

//       expect(growDancer.step.callCount).to.be.equal(1);

//       clock.tick(timeBetweenSteps);
//       expect(growDancer.step.callCount).to.be.equal(2);
//     });
//   });
// });


describe('growingDancer', function() {

  var growingDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    growingDancer = new makeGrowingDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(growingDancer.$node).to.be.an.instanceof(jQuery);
  });

  // it('should have a step function that makes its node blink', function() {
  //   sinon.spy(growingDancer.$node, 'toggle');
  //   blinkyDancer.step();
  //   expect(blinkyDancer.$node.toggle.called).to.be.true;
  // });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(growingDancer, 'step');
      expect(growingDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(growingDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(growingDancer.step.callCount).to.be.equal(2);
    });
  });
});