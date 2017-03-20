'use strict';

const scrolling = require('./scrolling');
const questions = require('./questions');

const scrollForm = () => {

  // TODO  index() = function () {}

  let scroller;
  let currentPosition = 0;

  const speed = 400;

  const init = () => {
    const container = questions.getContainer();
    const firstQuestion = questions.getQuestion(0);

    scroller = scrolling.createScroller(container, 0, 0)

    scrolling.scrollTo(scroller, firstQuestion, speed, () => questions.setActiveQuestion(0));
  };

  const next = () => {
    const nextPosition = currentPosition + 1;
    const newTarget = questions.getQuestion(nextPosition);

    if (newTarget) {
      scrolling.scrollTo(scroller, newTarget, speed, () => questions.setActiveQuestion(nextPosition));
      currentPosition += 1;
    }
  };

  const prev = () => {
    const prevPosition = currentPosition - 1;
    const newTarget = questions.getQuestion(prevPosition);

    if (newTarget) {
      scrolling.scrollTo(scroller, newTarget, speed, () => questions.setActiveQuestion(prevPosition));
      currentPosition -= 1;
    }
  };

  return {
    init,
    next,
    prev,
  };

};

module.exports = scrollForm();
