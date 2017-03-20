var zenscroll = require('zenscroll');

var scrolling = function () {

  var createScroller = function (container, speed, offset) {
    return zenscroll.createScroller(container, speed, offset);
  }

  var scrollTo = function(scroller, element, speed, callback) {
    scroller.center(element, speed, 0, callback)
  };

  return {
    scrollTo: scrollTo,
    createScroller: createScroller
  };

};

module.exports = scrolling();
