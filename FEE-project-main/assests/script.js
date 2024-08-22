document.addEventListener('DOMContentLoaded', function () {
  const burgerMenu = document.querySelector('.burger-menu');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  burgerMenu.addEventListener('click', function () {
      mobileMenu.classList.toggle('active');
  });
});
