var scrollForm = (function () {

  // TODO: CAN HAZ TESTS?

  // TODO: next() set ceiling
  // TODO: prev() set floor
  // TODO  index() = function () {}
  // TODO: setActiveQuestion = function () {}
  // TODO: Can haz ES6?

  var callback = function () { /* no op */ },
      scroller,
      currentPosition = 0,
      speed = 400;

  var init = function () {
    var container = questions.getContainer();
    var firstQuestion = questions.getQuestion(0);

    scroller = scrolling.createScroller(container, 0, 0)

    scrolling.scrollTo(scroller, firstQuestion, speed, callback);
  }

  var next = function () {
    var nextPosition = currentPosition + 1;
    var target = questions.getQuestion(nextPosition);

    scrolling.scrollTo(scroller, target, speed, callback)

    currentPosition += 1;
  }

  var prev = function () {
    var prevPosition = currentPosition - 1;
    var target = questions.getQuestion(prevPosition);

    scrolling.scrollTo(scroller, target, speed, callback)

    currentPosition -= 1;
  }

  return {
    init: init,
    next: next,
    prev: prev
  }
})();
