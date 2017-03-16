var scrollForm = (function () {
  var scroller,
      questionsets = document.getElementsByClassName('scroll-form__questionset'),
      currentPosition = 0,
      speed = 500,
      offset = 0;

  var init = function () {
    var container = document.getElementById('container');

    scroller = zenscroll.createScroller(container, speed, offset);

    var target = questionsets[currentPosition];

    scroller.center(target, 0, offset, function () {
      target.classList.add('scroll-form__questionset--active');
    });
  }

  var next = function () {
    var nextPosition = currentPosition + 1;
    var target = questionsets[nextPosition];

    scroller.center(target, speed, offset, function () {
      questionsets[currentPosition].classList.remove('scroll-form__questionset--active');
      target.classList.add('scroll-form__questionset--active');
    })

    currentPosition += 1;
  }

  var prev = function () {
    var prevPosition = currentPosition - 1;
    var target = questionsets[prevPosition];

    scroller.center(target, speed, offset, function () {
      questionsets[currentPosition].classList.remove('scroll-form__questionset--active');
      target.classList.add('scroll-form__questionset--active');
    })

    currentPosition -= 1;
  }

  return {
    init: init,
    next: next,
    prev: prev
  }
})();
