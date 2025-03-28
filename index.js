
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

