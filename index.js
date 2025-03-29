
  const carouselImages = document.querySelectorAll('.carousel-img');
  let current = 0;
  let interval;

  const showImage = (index) => {
    carouselImages.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
  };

  const startCarousel = () => {
    interval = setInterval(() => {
      current = (current + 1) % carouselImages.length;
      showImage(current);
    }, 3000); // change every 3 seconds
  };

  const stopCarousel = () => clearInterval(interval);

  const carousel = document.querySelector('.banner-carousel');
  carousel.addEventListener('mouseenter', stopCarousel);
  carousel.addEventListener('mouseleave', startCarousel);

  showImage(current);
  startCarousel();


// Changing images and bg colors on hover
const s2Img1 = document.querySelector('.s2-img1');
const section2 = document.querySelector('.section2');

s2Img1.addEventListener('mouseenter', () => {
  section2.classList.add('highlight-bg-purple');
});

s2Img1.addEventListener('mouseleave', () => {
  section2.classList.remove('highlight-bg-purple');
});


const s2Img2 = document.querySelector('.s2-img2');

s2Img2.addEventListener('mouseenter', () => {
  section2.classList.add('highlight-bg-pink');
});

s2Img2.addEventListener('mouseleave', () => {
  section2.classList.remove('highlight-bg-pink');
});


const s2Img3 = document.querySelector('.s2-img3');

s2Img3.addEventListener('mouseenter', () => {
  section2.classList.add('highlight-bg-orange');
});

s2Img3.addEventListener('mouseleave', () => {
  section2.classList.remove('highlight-bg-orange');
});


//toggle menu

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');
const menuIcon = document.getElementById('menuIcon');

let isOpen = false;

menuToggle.addEventListener('click', () => {
  isOpen = !isOpen;
  navLinks.classList.toggle('active');

  menuIcon.src = isOpen 
    ? 'assets/Close Box.png' // your custom close icon
    : 'assets/Menu Box.png'; // your hamburger icon
});
