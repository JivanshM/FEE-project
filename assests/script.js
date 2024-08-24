document.addEventListener('DOMContentLoaded', function () {
  const burgerMenu = document.querySelector('.burger-menu');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  burgerMenu.addEventListener('click', function () {
      mobileMenu.classList.toggle('active');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const scrollContainer = document.querySelector('.character-scroll');
  const scrollLeftButton = document.getElementById('scroll-left');
  const scrollRightButton = document.getElementById('scroll-right');
  const scrollAmount = 200; // Adjust the scroll amount as needed

  scrollLeftButton.addEventListener('click', () => {
      scrollContainer.scrollBy({
          left: -scrollAmount,
          behavior: 'smooth'
      });
  });

  scrollRightButton.addEventListener('click', () => {
      scrollContainer.scrollBy({
          left: scrollAmount,
          behavior: 'smooth'
      });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const scrollContainer = document.querySelector('.scroll-1');
  const scrollLeftButton = scrollContainer.parentNode.querySelector('.scroll-left');
  const scrollRightButton = scrollContainer.parentNode.querySelector('.scroll-right');
  const scrollAmount = 200; // Adjust the scroll amount as needed

  scrollLeftButton.addEventListener('click', () => {
      scrollContainer.scrollBy({
          left: -scrollAmount,
          behavior: 'smooth'
      });
  });

  scrollRightButton.addEventListener('click', () => {
      scrollContainer.scrollBy({
          left: scrollAmount,
          behavior: 'smooth'
      });
  });
});


