'use strict';

(function() {

  // Mobile menu

  var nav = document.querySelector('.header__wrapper');
  var burger = nav.querySelector('.header__burger');

  function burgerClickHandler() {
    nav.classList.toggle('header__wrapper--show');
    // burger.classList.toggle('header__burger--open');
  }

  burger.addEventListener('click', burgerClickHandler);

  // Progress block

  var progress = document.querySelector('.demo__progress');
  var btnBefore = progress.querySelector('.demo__progress-button--before');
  var btnAfter = progress.querySelector('.demo__progress-button--after');

  if (btnBefore || btnAfter) {
    btnBefore.addEventListener('click', function() {
      if (progress.classList.contains('demo__progress--after')) {
        progress.classList.remove('demo__progress--after');
      }
    })

    btnAfter.addEventListener('click', function() {
      if (!progress.classList.contains('demo__progress--after')) {
        progress.classList.add('demo__progress--after');
      }
    })
  }

})();