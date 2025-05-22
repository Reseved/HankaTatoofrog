const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.header__menu-list');

menuBtn.addEventListener('click', () => {

  menu.classList.toggle('header__menu-list--active');
});
