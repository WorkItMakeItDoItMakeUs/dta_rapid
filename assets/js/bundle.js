(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.technologic = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var scrollForm = require('./scroll-form');

scrollForm.init();

module.exports = scrollForm;

},{"./scroll-form":3}],2:[function(require,module,exports){
var questions = function () {

  var CONTAINER_ID = "container",
      CLASS_NAME = "scroll-form__questionset",
      ACTIVE_CLASS = "scroll-form__questionset--active";

  return {
    getContainer: function () { return document.getElementById(CONTAINER_ID); },
    getQuestion: function (index) {
      return document.getElementsByClassName(CLASS_NAME)[index];
    },
    setActiveQuestion: function(index) {
      var questionList = [].slice.call(document.getElementsByClassName(CLASS_NAME));

      questionList.forEach(function(elm) {
        elm.classList.remove(ACTIVE_CLASS);
      });

      this.getQuestion(index).classList.add(ACTIVE_CLASS);
    }
  };

};

module.exports = questions();

},{}],3:[function(require,module,exports){
var scrolling = require('./scrolling');
var questions = require('./questions');

var scrollForm = function () {

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
      questions.setActiveQuestion(0);
    });
  };

  var next = function () {
    var nextPosition = currentPosition + 1;
    var currentTarget = questions.getQuestion(currentPosition);
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
    var currentTarget = questions.getQuestion(currentTarget);

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

},{"./questions":2,"./scrolling":4}],4:[function(require,module,exports){
var zenscroll = require('./vendor/zenscroll-min');

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

},{"./vendor/zenscroll-min":5}],5:[function(require,module,exports){
!function(t,e){"function"==typeof define&&define.amd?define([],e()):"object"==typeof module&&module.exports?module.exports=e():t.zenscroll=e()}(this,function(){"use strict";var t=function(t){return"getComputedStyle"in window&&"smooth"===window.getComputedStyle(t)["scroll-behavior"]};if("undefined"==typeof window||!("document"in window))return{};var e=function(e,n,o){n=n||999,o||0===o||(o=9);var i,r=function(t){i=t},c=document.documentElement,u=function(){return e?e.scrollTop:window.scrollY||c.scrollTop},l=function(){return e?Math.min(e.offsetHeight,window.innerHeight):window.innerHeight||c.clientHeight},a=function(t){return e?t.offsetTop:t.getBoundingClientRect().top+u()-c.offsetTop},s=function(){clearTimeout(i),r(0)},f=function(o,i,a){if(s(),t(e?e:document.body))(e||window).scrollTo(0,o),a&&a();else{var f=u(),d=Math.max(o,0)-f;i=i||Math.min(Math.abs(d),n);var h=(new Date).getTime();!function t(){r(setTimeout(function(){var n=Math.min(((new Date).getTime()-h)/i,1),o=Math.max(Math.floor(f+d*(n<.5?2*n*n:n*(4-2*n)-1)),0);e?e.scrollTop=o:window.scrollTo(0,o),n<1&&l()+o<(e||c).scrollHeight?t():(setTimeout(s,99),a&&a())},9))}()}},d=function(t,e,n){var i=a(t)-o;return f(i,e,n),i},h=function(t,e,n){var i=t.getBoundingClientRect().height,r=a(t),c=r+i,s=l(),h=u(),w=h+s;r-o<h||i+o>s?d(t,e,n):c+o>w?f(c-s+o,e,n):n&&n()},w=function(t,e,n,o){f(Math.max(a(t)-l()/2+(n||t.getBoundingClientRect().height/2),0),e,o)},m=function(t,e){t&&(n=t),(0===e||e)&&(o=e)};return{setup:m,to:d,toY:f,intoView:h,center:w,stop:s,moving:function(){return!!i},getY:u}},n=e();if("addEventListener"in window&&!t(document.body)&&!window.noZensmooth){"scrollRestoration"in history&&(history.scrollRestoration="manual",window.addEventListener("popstate",function(t){t.state&&t.state.scrollY&&n.toY(t.state.scrollY)},!1));var o=function(t,e){try{history.replaceState({scrollY:n.getY()},""),history.pushState({scrollY:e},"",t)}catch(t){}};window.addEventListener("click",function(t){for(var e=t.target;e&&"A"!==e.tagName;)e=e.parentNode;if(!(!e||1!==t.which||t.shiftKey||t.metaKey||t.ctrlKey||t.altKey)){var i=e.getAttribute("href")||"";if(0===i.indexOf("#"))if("#"===i)t.preventDefault(),n.toY(0),o(window.location.href.split("#")[0],0);else{var r=e.hash.substring(1),c=document.getElementById(r);c&&(t.preventDefault(),o("#"+r,n.to(c)))}}},!1)}return{createScroller:e,setup:n.setup,to:n.to,toY:n.toY,intoView:n.intoView,center:n.center,stop:n.stop,moving:n.moving}});

},{}]},{},[1])(1)
});