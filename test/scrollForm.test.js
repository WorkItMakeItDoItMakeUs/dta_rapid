'use strict';

const expect = require('chai').expect;
const simple = require('simple-mock');
const scrolling = require('../assets/js/scrolling');
const questions = require('../assets/js/questions');
const scrollForm = require('../assets/js/scroll-form');

describe('scrollForm', () => {

  beforeEach(() => {
    simple.mock(scrolling, 'scrollTo').returnWith(undefined);
    simple.mock(scrolling, 'createScroller').returnWith(undefined);
    simple.mock(scrolling, 'center').returnWith(undefined);
    simple.mock(questions, 'setActiveQuestion').returnWith(undefined);
    simple.mock(questions, 'getContainer').returnWith({});
    simple.mock(questions, 'getQuestion').returnWith(1);
  });

  describe('next()', () => {

    afterEach(() => simple.restore());

    it('scrolls to the next questionset', () => {
      scrollForm.next();

      expect(scrolling.scrollTo.called).to.be.true;
    });
  });

  describe('prev()', () => {

    afterEach(() => simple.restore());

    it('scrolls to the previous questionset', () => {
      scrollForm.prev();

      expect(scrolling.scrollTo.called).to.be.true;
    });
  });

  describe('init()', () => {

    afterEach(() => simple.restore());

    it('scrolls to the first questionset', () => {
      scrollForm.init();

      expect(scrolling.createScroller.called).to.be.true;
      expect(scrolling.scrollTo.called).to.be.true;
    });
  });
});
