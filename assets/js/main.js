'use strict';


const scrollForm = require('./scroll-form');

scrollForm.init();

$('document').ready(() => {
  //const isNotMobile = ('ontouchstart' in document.documentElement && navigator.userAgent.match(/Mobi/));
  const isNotMobile = !(navigator.userAgent.match(/Mobi/));

  if (isNotMobile) {
    $('input[type=date]').pickadate();
  }
});

module.exports = scrollForm;
