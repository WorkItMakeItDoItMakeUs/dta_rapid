var scroll = scroll || {}

$(function () {
  var container = $('#container').get(0);
  var speed = 500;
  var offset = 30;
  var scroller = zenscroll.createScroller(container, speed, offset);

  scroll.next = function (me) {
    var nextElement = $(me).closest('.scroll-form__form-element').next('.scroll-form__form-element');
    scroller.center(nextElement.get(0), speed, offset, nextElement.toggleClass('scroll-form__form-element--focused', true));
  };

  var formElements = $('.scroll-form__form-element');
  scroller.center(formElements.get(0), speed, offset, function () {
    $(formElements.get(0)).toggleClass('scroll-form__form-element--focused', true);
  });
})
