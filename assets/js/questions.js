var questions = (function () {
  var CONTAINER_ID = "container",
      CLASS_NAME = "scroll-form__questionset";

  return {
    getContainer: function () { return document.getElementById(CONTAINER_ID); },
    getQuestion: function (index) {
      return document.getElementsByClassName(CLASS_NAME)[index];
    }
  }
}());
