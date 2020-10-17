// Элементы которые вызывают модальные окна
const writeUs = document.querySelector('.button-write-us');
const mapLink = document.querySelector('.about-map-link');
const buyButtons = document.querySelectorAll('.buy-button');
const modalClose = document.querySelectorAll('.modal-close');

// Модальные окна
const modalWindows = document.querySelectorAll('.modal');

const feedbackForm = document.querySelector('.write-us');
const popupMap = document.querySelector('.modal-map');
const popupProductAdd = document.querySelector('.product-add');

// Форма
const writeUsForm = feedbackForm.querySelector('.feedback-form');

// Поля формы
const name = feedbackForm.querySelector('[name=name]');
const email = feedbackForm.querySelector('[name=email]');
const message = feedbackForm.querySelector('.message');

// Слайдер секции services
const buttonList = document.querySelectorAll('.slider-services-button');
const slideTitle = document.querySelector('.slider-services-title');
const slideDesc = document.querySelector('.slider-services-description');

const deliveryButton = document.querySelector('.delivery-btn');
const guaranteeButton = document.querySelector('.guarantee-btn');
const creditButton = document.querySelector('.credit-btn');

// localStorage
let isStorageSupport = true;
let storageName = '';
let storageEmail = '';

/*
  Проверяем работоспособность localStorage
*/
try {
  storageName = localStorage.getItem('name');
  storageEmail = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
}

/*
  Открываем модальные окна
*/
writeUs.addEventListener('click', function(evt) {
  evt.preventDefault();

  feedbackForm.classList.add('modal-show');
  
  if (storageName && storageEmail) {
    name.value = storageName;
    email.value = storageEmail;
    message.focus();
  } else if (storageEmail && !storageName) {
    email.value = storageEmail;
    name.focus();
  } else if (storageName && !storageEmail) {
    name.value = storageName;
    email.focus();
  } else {
    name.focus();
  }
});

mapLink.addEventListener('click', function(evt) {
  evt.preventDefault();

  popupMap.classList.add('modal-show');
});

for (let i = 0; i < buyButtons.length; i++) {
  buyButtons[i].addEventListener('click', function(evt) {
    evt.preventDefault();

    popupProductAdd.classList.add('modal-show');
  });
}

/*
  Обработчик отправки данных формы
*/
writeUsForm.addEventListener('submit', function(evt) {
  if (!name.value || !email.value || !message.value) {
    evt.preventDefault();

    feedbackForm.classList.remove('modal-error');
    feedbackForm.offsetWidth = feedbackForm.offsetWidth;
    feedbackForm.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('name', name.value);
      localStorage.setItem('email', email.value);
    }
  }
});

/*
  Закрываем модальные окна
*/
for (let i = 0; i < modalClose.length; i++) {
  modalClose[i].addEventListener('click', function(evt) {
    evt.preventDefault();

    modalWindows[i].classList.remove('modal-show');

    if (modalWindows[i].classList.contains('modal-error')) {
      modalWindows[i].classList.remove('modal-error');
    }
  });
}

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackForm.classList.contains('modal-show')) {
      evt.preventDefault();

      feedbackForm.classList.remove('modal-show');
      feedbackForm.classList.remove('modal-error');
    }

    popupMap.classList.remove('modal-show');
    popupProductAdd.classList.remove('modal-show');
  }
});

/*
  Cлайдер
*/
// Удаляем класс активного состояния кнопки у слайдера
function removeActive() {
  for (let i = 0; i < buttonList.length; i++) {
    buttonList[i].classList.remove('slider-button-active');
  }
}

for (let i = 0; i < buttonList.length; i++) {
  buttonList[i].addEventListener('click', function(evt) {
    removeActive();
    evt.currentTarget.classList.add('slider-button-active');
  });
}

deliveryButton.addEventListener('click', function(evt) {
  evt.preventDefault();

  slideTitle.innerHTML = 'Доставка';
  slideDesc.innerHTML = 'Мы с удовольствием доставим ваш товар прямо<br>к вашему подъезду совершенно бесплатно!<br>Ведь мы неплохо заработаем,<br>поднимая его на ваш этаж!'; 
});

guaranteeButton.addEventListener('click', function(evt) {
  evt.preventDefault();

  slideTitle.innerHTML = 'Гарантия';
  slideDesc.innerHTML = 'Если купленный у нас товар поломается или заискрит,<br> а также в случае пожара, спровоцированного его<br> возгоранием, вы всегда можете быть уверены в нашей<br>гарантии. Мы обменяем сгоревший товар на новый.  Дом уж восстановите как-нибудь сами.';
});

creditButton.addEventListener('click', function(evt) {
  evt.preventDefault();

  slideTitle.innerHTML = 'Кредит  ';
  slideDesc.innerHTML = 'Залезть в долговую яму стало проще!<br>Кредитные консультанты придут вам на помощь.';
});