'use strict'; 

const zenscroll = require('zenscroll');

const scrolling = () => {

  let createScroller = (container, speed, offset) => {
    return zenscroll.createScroller(container, speed, offset);
  };

  let scrollTo = (scroller, element, speed, callback) => {
    scroller.center(element, speed, 0, callback)
  };

  return {
    scrollTo,
    createScroller,
  };

};

module.exports = scrolling();
