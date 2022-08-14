const body = document.querySelector('body');
const navBar = document.querySelector('.navbar');
const burger = document.querySelector('.burger-menu');
const closeBtn = document.querySelector('.close-btn');

const links = document.querySelectorAll('.navbar-item');

burger.addEventListener('click', () => {
  body.classList.add('is_burgermenu_open');
  navBar.classList.add('navbar__open');
});

closeBtn.addEventListener('click', () => {
  body.classList.remove('is_burgermenu_open');
  navBar.classList.remove('navbar__open');

});

links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    body.classList.remove('is_burgermenu_open');
    navBar.classList.remove('navbar__open');
  });
});








