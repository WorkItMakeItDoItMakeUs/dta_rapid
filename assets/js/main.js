'use strict';

const scrollForm = require('./scroll-form');
const Pikaday = require('pikaday');

scrollForm.init();

const initPickADate = () => {
    $('input[type=date]').pickadate();
}

const initPikADay = () => {

  new Pikaday({
    field: document.querySelectorAll('input[type=date]')[0]
  });

  // turn it into a text type so Chrome doesn't show it's native picker
  $('input[type="date"]').attr('type','text');
}

$('document').ready(() => {
  //const isNotMobile = ('ontouchstart' in document.documentElement && navigator.userAgent.match(/Mobi/));
  const isNotMobile = !(navigator.userAgent.match(/Mobi/));

  if (isNotMobile) {
    initPikADay();
  }
});

module.exports = scrollForm;
