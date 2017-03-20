var scrolling = require('./scrolling');
var questions = require('./questions');

var scrollForm = function () {

  // TODO  index() = function () {}
  // TODO: Can haz ES6?

  var scroller,
      currentPosition = 0,
      speed = 400;

  var init = function () {
    var container = questions.getContainer();
    var firstQuestion = questions.getQuestion(0);

    scroller = scrolling.createScroller(container, 0, 0)

    scrolling.scrollTo(scroller, firstQuestion, speed, function() {
      questions.setActiveQuestion(0);
    });
  };

  var next = function () {
    var nextPosition = currentPosition + 1;
    var newTarget = questions.getQuestion(nextPosition);

    if (newTarget) {
      scrolling.scrollTo(scroller, newTarget, speed, function() {
        questions.setActiveQuestion(nextPosition);
      });

      currentPosition += 1;
    }
  };

  var prev = function () {
    var prevPosition = currentPosition - 1;
    var newTarget = questions.getQuestion(prevPosition);

    if (newTarget) {
      scrolling.scrollTo(scroller, newTarget, speed, function() {
        questions.setActiveQuestion(prevPosition);
      });

      currentPosition -= 1;
    }
  };

  return {
    init: init,
    next: next,
    prev: prev
  };

};

module.exports = scrollForm();
