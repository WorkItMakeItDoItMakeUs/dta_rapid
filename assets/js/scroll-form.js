var scrollForm = (function () {

  // TODO: CAN HAZ TESTS?
  // TODO  index() = function () {}
  // TODO: Can haz ES6?

  var callback = function () { },
      scroller,
      currentPosition = 0,
      speed = 400;

  var init = function () {
    var container = questions.getContainer();
    var firstQuestion = questions.getQuestion(0);

    scroller = scrolling.createScroller(container, 0, 0)

    scrolling.scrollTo(scroller, firstQuestion, speed, function() {
      questions.setActiveQuestion(firstQuestion);
    });
  }

  var next = function () {
    var nextPosition = currentPosition + 1;
    var currentTarget = questions.getQuestion(currentPosition);
    var newTarget = questions.getQuestion(nextPosition);

    if (newTarget) {
      scrolling.scrollTo(scroller, newTarget, speed, function() {
        questions.setActiveQuestion(newTarget);
      });

      currentPosition += 1;
    }
  }

  var prev = function () {
    var prevPosition = currentPosition - 1;
    var newTarget = questions.getQuestion(prevPosition);
    var currentTarget = questions.getQuestion(currentTarget);

    if (newTarget) {
      scrolling.scrollTo(scroller, target, speed, function() {
        questions.setActiveQuestion(newTarget);
      });

      currentPosition -= 1;
    }
  }

  return {
    init: init,
    next: next,
    prev: prev
  }
})();
