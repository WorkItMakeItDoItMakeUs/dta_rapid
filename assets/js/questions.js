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
