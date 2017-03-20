'use strict'; 

const questions = () => {

  const CONTAINER_ID = "container";
  const CLASS_NAME = "scroll-form__questionset";
  const ACTIVE_CLASS = "scroll-form__questionset--active";

  return {
    getContainer: () => document.getElementById(CONTAINER_ID),
    getQuestion: (index) => document.getElementsByClassName(CLASS_NAME)[index],
    setActiveQuestion: function(index) {
      const questionList = [].slice.call(document.getElementsByClassName(CLASS_NAME));
      questionList.forEach((elm) => elm.classList.remove(ACTIVE_CLASS));
      this.getQuestion(index).classList.add(ACTIVE_CLASS);
    }
  };
};

module.exports = questions();
