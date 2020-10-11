$(document).ready(function() {

  /*
    Открываем модальные окна
  */
  $('.button-write-us').click(function(event) {
    event.preventDefault();

    $('.write-us').css('display', 'block');
  });

  $('.about-map-link').click(function(event) {
    event.preventDefault();

    $('.modal-map').css('display', 'block');
  });

  $('.buy-button').click(function(event) {
    event.preventDefault();

    $('.product-add').css('display', 'block');
  });

  // Скрываем модальные окна
  $('.modal-close').click(function() {
    $('.modal').css('display', 'none');
  });

  $('.button-continue').click(function() {
    event.preventDefault();

    $('.modal').css('display', 'none');
  });

  /*
    Первый слайдер
  */
  $(".owl-carousel").owlCarousel({
  	items: 1,
  	loop: true,
  });

  const owl = $('.owl-carousel');
	owl.owlCarousel();

	$('.slider-next').click(function() {
		owl.trigger('next.owl.carousel', [0]);
	});
	$('.slider-prev').click(function() {
    owl.trigger('prev.owl.carousel', [0]);
  });

  /*
    Второй слайдер
  */
  const buttonList = document.querySelectorAll('.slider-services-button');

  /*
      Удаляем класс у активной кнопки слайдера
  */
  function removeActive() {
    for (let i = 0; i < buttonList.length; i++) {
      buttonList[i].classList.remove('slider-button-active');
    }
  }

  for (let i = 0; i < buttonList.length; i++) {
    buttonList[i].addEventListener('click', function(e) {
      removeActive();
      e.currentTarget.classList.add('slider-button-active');
    });
  }

  $('.delivery-btn').click(function(event) {
    event.preventDefault();

    let title = document.querySelector('.slider-services-title');
    title.innerHTML = 'Доставка';

    let desc = document.querySelector('.slider-services-description');
    desc.innerHTML = 'Мы с удовольствием доставим ваш товар прямо<br>к вашему подъезду совершенно бесплатно!<br>Ведь мы неплохо заработаем,<br>поднимая его на ваш этаж!';
  });

  $('.guarantee-btn').click(function(event) {
    event.preventDefault();

    let title = document.querySelector('.slider-services-title');
    title.innerHTML = 'Гарантия';

    let desc = document.querySelector('.slider-services-description');
    desc.innerHTML = 'Если купленный у нас товар поломается или заискрит,<br> а также в случае пожара, спровоцированного его<br> возгоранием, вы всегда можете быть уверены в нашей<br>гарантии. Мы обменяем сгоревший товар на новый.  Дом уж восстановите как-нибудь сами.';
  });

  $('.credit-btn').click(function(event) {
    event.preventDefault();

    let title = document.querySelector('.slider-services-title');
    title.innerHTML = 'Кредит  ';

    let desc = document.querySelector('.slider-services-description');
    desc.innerHTML = 'Залезть в долговую яму стало проще!<br>Кредитные консультанты придут вам на помощь.';
  });
});