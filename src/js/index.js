import '../scss/style.scss';
import '../scss/Normalize.scss';

import Swiper from "swiper";

import 'swiper/swiper-bundle';

const swiper = new Swiper(".swiper", {

  init: true,

  slidesPerView: "auto",

  spaceBetween: 10,

  centeredSlides: "auto",

  direction: "horizontal",

  loop: true,

  pagination: {
    el: ".swiper-pagination",
    type: 'bullets',
    clickable: true,
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },

  effect: 'coverflow',
  coverflowEffect: {
    rotate: 60,
    slideShadows: true,
  },
});

if (window.innerWidth >= 768) {
  swiper.destroy();
}

const swiperTech = new Swiper(".swiper-technics-types", {

  init: true,

  slidesPerView: "auto",

  spaceBetween: 10,

  centeredSlides: "auto",

  keyboard: {
    enabled: true,
  },

  direction: "horizontal",

  loop: true,

  pagination: {
    el: ".swiper-pagination",
    type: 'bullets',
    clickable: true,
  },

  effect: 'coverflow',
  coverflowEffect: {
    rotate: 60,
    slideShadows: true,
  },
});

if (window.innerWidth >= 768) {
  swiperTech.destroy();
}


const swiperPrices = new Swiper(".swiper-prices", {

  init: true,

  slidesPerView: "auto",

  spaceBetween: 10,

  centeredSlides: "auto",

  direction: "horizontal",

  loop: true,

  pagination: {
    el: ".swiper-pagination",
    type: 'bullets',
    clickable: true,
  },

  effect: 'coverflow',
  coverflowEffect: {
    rotate: 60,
    slideShadows: true,
  },
});

if (window.innerWidth >= 768) {
  swiperPrices.destroy();
}

let description = document.querySelector('.section-description')
let linkReadNextMain = document.querySelector(".main .link-read-next");
let linkTextMain = document.querySelector(".main .link-read-next__text");
let linkPicMain = document.querySelector(".main .link-read-next__pic");

linkReadNextMain.addEventListener("click", function () {
  description.classList.toggle('section-description--open-all');
  if (linkTextMain.innerHTML === "Читать далее") {
    linkTextMain.innerHTML = "Скрыть";
    linkPicMain.style.rotate = "180deg";
  } else {
    linkTextMain.innerHTML = "Читать далее";
    linkPicMain.style.rotate = "0deg";
  }
});

let brands = document.querySelector(".brands .swiper-wrapper");
let linkReadNextBrands = document.querySelector(".brands .link-read-next");
let linkTextBrands = document.querySelector(".brands .link-read-next__text");
let linkPicBrands = document.querySelector(".brands .link-read-next__pic");

linkReadNextBrands.addEventListener("click", function (event) {
  event.preventDefault();
  brands.classList.toggle('brands--open-all');
  if (linkTextBrands.innerHTML === "Показать все") {
    linkTextBrands.innerHTML = "Скрыть";
    linkPicBrands.style.rotate = "180deg";
  } else {
    linkTextBrands.innerHTML = "Показать все";
    linkPicBrands.style.rotate = "0deg";
  }
});

let technicsTypes = document.querySelector(".technics-types .swiper-wrapper");
let linkReadNextTechnicsTypes = document.querySelector(".technics-types .link-read-next");
let linkTextTechnicsTypes = document.querySelector(".technics-types .link-read-next__text");
let linkPicTechnicsTypes = document.querySelector(".technics-types .link-read-next__pic");

linkReadNextTechnicsTypes.addEventListener("click", function (event) {
  event.preventDefault();
  technicsTypes.classList.toggle('technics-types--open-all');
  if (linkTextTechnicsTypes.innerHTML === "Показать все") {
    linkTextTechnicsTypes.innerHTML = "Скрыть";
    linkPicTechnicsTypes.style.rotate = "180deg";
    linkPicTechnicsTypes.style.overflow = "scroll";
  } else {
    linkTextTechnicsTypes.innerHTML = "Показать все";
    linkPicTechnicsTypes.style.rotate = "0deg";
  }
});

function CloseModal () {
  asideBody.classList.remove('show-aside');
  modalFeedback.classList.remove('modal-feedback--show');
  modalCall.classList.remove('modal-call--show');
  overlay.classList.remove('modal-overlay--active');
  document.body.classList.remove('modal-open');
}

let overlay = document.querySelector('.modal-overlay');

let modalFeedback = document.querySelector('.modal-feedback');
let adressEmail = document.querySelector('.adress__email');
let buttonChatMain = document.querySelector('.main .button-chat');
let buttonChatAside = document.querySelector('.aside-body .button-chat');

function openModalFeedback () {
    CloseModal ();
    modalFeedback.classList.add('modal-feedback--show');
    overlay.classList.add('modal-overlay--active');
    document.body.classList.add('modal-open');
}

adressEmail.addEventListener('click', function(event){
  event.preventDefault();
  if (window.innerWidth >= 1440) {
    asideBody.style.zIndex = 0;
  }
  openModalFeedback ();
});

buttonChatMain.addEventListener('click', function(event){
  event.preventDefault();
  if (window.innerWidth >= 1440) {
    asideBody.style.zIndex = 0;
  }
  openModalFeedback ();
});

buttonChatAside.addEventListener('click', function(event){
  event.preventDefault();
  if (window.innerWidth >= 1440) {
    asideBody.style.zIndex = 0;
  }
  openModalFeedback ();
});



let feedbackButtonClose = document.querySelector('.feedback__button-close');

feedbackButtonClose.addEventListener('click', function(event){
  event.preventDefault();
  CloseModal ();
});

let adressPhone = document.querySelector('.adress__phone');
let modalCall = document.querySelector('.modal-call');
let buttonCallMain = document.querySelector('.main .button-call');
let buttonCallAside = document.querySelector('.aside-body .button-call');

function openModalCall () {
  CloseModal ();
  modalCall.classList.add('modal-call--show');
  overlay.classList.add('modal-overlay--active');
  document.body.classList.add('modal-open');
}

adressPhone.addEventListener('click', function(event){
  if (window.innerWidth >= 1440) {
    asideBody.style.zIndex = 0;
  }
  event.preventDefault();
  openModalCall ();
});

buttonCallMain.addEventListener('click', function(event){
  if (window.innerWidth >= 1440) {
    asideBody.style.zIndex = 0;
  }
  event.preventDefault();
  openModalCall ();
});

buttonCallAside.addEventListener('click', function(event){
  if (window.innerWidth >= 1440) {
    asideBody.style.zIndex = 0;
  }
  event.preventDefault();
  openModalCall ();
});

let callButtonClose = document.querySelector('.call__button-close');

callButtonClose.addEventListener('click', function(event){
  event.preventDefault();
    CloseModal ();
});

document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    CloseModal ();
  }
});

overlay.addEventListener('click', function (evt) {
    CloseModal ();
});



let servisesListItems = document.querySelectorAll('.servises-list__item');

let servisesListItemCheck = function (servisesListItem ) {
  servisesListItem.addEventListener('click', function() {
    for (let i = 0; i < servisesListItems.length; i++) {
      servisesListItems[i].classList.remove('servises-list__item--checked');
    }

    servisesListItem.classList.add('servises-list__item--checked');
  });
}

for (let i = 0; i < servisesListItems.length; i++) {
  servisesListItemCheck(servisesListItems[i]);
}

let menuItems = document.querySelectorAll('.menu__item');
let menuItemCheck = function (menuItem ) {
  menuItem.addEventListener('click', function() {
    for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].classList.remove('menu__item--checked');
    }
    menuItem.classList.add('menu__item--checked');
  });
}

for (let i = 0; i < menuItems.length; i++) {
  menuItemCheck(menuItems[i]);
}

let langsItems = document.querySelectorAll('.langs__item');
let langsItemCheck = function (item ) {
  item.addEventListener('click', function() {
    for (let i = 0; i < langsItems.length; i++) {
      langsItems[i].classList.remove('langs__item--checked');
    }
    item.classList.add('langs__item--checked');
  });
}

for (let i = 0; i < langsItems.length; i++) {
  langsItemCheck(langsItems[i]);
}

let burgerButton = document.querySelector('.nav-list__items .button:first-child');
let asideBody = document.querySelector('.aside-body');

burgerButton.addEventListener('click', function(event) {
  event.preventDefault();
  asideBody.style.zIndex = 2;
  asideBody.classList.add('show-aside');
  overlay.classList.add('modal-overlay--active');
  document.body.classList.add('modal-open')
});

let burgerButtonClose = document.querySelector('.button-close');

burgerButtonClose.addEventListener('click', function(event){
  event.preventDefault();
    CloseModal ();
});




