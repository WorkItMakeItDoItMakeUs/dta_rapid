'use strict';

const expect = require('chai').expect;
const simple = require('simple-mock');
const scrolling = require('../assets/js/scrolling');
const questions = require('../assets/js/questions');
const scrollForm = require('../assets/js/scroll-form');

describe('scrollForm', function () {

  beforeEach(function() {
    simple.mock(scrolling, 'scrollTo').returnWith(undefined);
    simple.mock(scrolling, 'createScroller').returnWith(undefined);
    simple.mock(scrolling, 'center').returnWith(undefined);
    simple.mock(questions, 'setActiveQuestion').returnWith(undefined);
    simple.mock(questions, 'getContainer').returnWith({});
    simple.mock(questions, 'getQuestion').returnWith(1);
  });

  describe('next()', function () {

    afterEach(function() {
      simple.restore();
    });

    it('scrolls to the next questionset', function () {
      scrollForm.next();

      expect(scrolling.scrollTo.called).to.be.true;
    });
  });

  describe('prev()', function () {

    afterEach(function() {
      simple.restore();
    });

    it('scrolls to the previous questionset', function () {
      scrollForm.prev();

      expect(scrolling.scrollTo.called).to.be.true;
    });
  });

  describe('init()', function () {

    afterEach(function() {
      simple.restore();
    });

    it('scrolls to the first questionset', function () {
      scrollForm.init();

      expect(scrolling.createScroller.called).to.be.true;
      expect(scrolling.scrollTo.called).to.be.true;
    });
  });
});
