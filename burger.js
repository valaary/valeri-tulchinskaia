const burger = document.getElementById('burger');
const navbar = document.getElementById('navbar');

burger.addEventListener('click', () => {
  navbar.classList.toggle('active');
  burger.classList.toggle('active');
});
