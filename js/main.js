$(document).ready(function(){
  // search field icon
  $('.search-input').focus(function() {
    $(this).parent().addClass('search-field-focus');
    $(this).css('color', 'var(--black)');
  }).blur(function() {
      $(this).parent().removeClass('search-field-focus');
      $(this).css('color', 'var(--white)');
    });

  // First slider
  $(".owl-carousel").owlCarousel({
  	items: 1,
  	loop: true,
  	dots: false
  });

  var owl = $('.owl-carousel');
	owl.owlCarousel();

	$('.slider-next').click(function() {
		owl.trigger('next.owl.carousel', [0]);
	});
	$('.slider-prev').click(function() {
    owl.trigger('prev.owl.carousel', [0]);
  });

  // Second slider
  let buttonList = document.querySelectorAll('.slider-services-button');

  function removeActive() {
    for (var i = 0; i < buttonList.length; i++) {
      buttonList[i].classList.remove('slider-button-active');
    }
  }

  for (var i = 0; i < buttonList.length; i++) {
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