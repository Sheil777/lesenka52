/* $('ul.header__navigation').classList.toggle('header__navigation-phone')*/


$(document).ready(
  function(){
      $('.menu__button').click(
          function (event) {
              $('ul.header__navigation').toggleClass('header__navigation-phone');
              $('div.menu__button').toggleClass('menu__button-close');
          }
      );
  }
);

new Swiper('.ts__slider',{

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    pagination: {
        el: '.swiper-pagination'
    },

    breakpoints: {
        700: {
            // Количество выводимых слайдов
            slidesPerView: 3,
        }
    },

    // Отступы между слайдами
    spaceBetween: 40,

    // Бесконечная прокрутка
    loop: true,

    // Автопрокрутка
    autoplay: {
        // Пауза между автопрокруткой
        delay: 3000,
        // Закончить на последнем слайде
        stopOnLastSlide: false,
        // Отключить после ручного переключения
        disableOnInteraction: true
    },

    // Скорость прокрутки
    speed: 600,

});