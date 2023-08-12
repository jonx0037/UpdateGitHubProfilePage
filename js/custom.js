(function ($) {
  // jQuery code for smooth scrolling and other behavior
  // ...
})(jQuery);

// Scroll video play/pause logic
// ...

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');

let slideIndex = 0;

// Function to move slides
const moveSlides = (direction) => {
  if (direction === 'left' && slideIndex > 0) {
    slideIndex--;
  } else if (direction === 'right' && slideIndex < slides.length - 1) {
    slideIndex++;
  }
  const offset = slideIndex * 300; // Width of each slide
  slider.style.transform = `translateX(-${offset}px)`;
};

leftArrow.addEventListener('click', () => moveSlides('left'));
rightArrow.addEventListener('click', () => moveSlides('right'));

// Code for other functionalities goes here

// Modal gallery logic
const images = document.querySelectorAll('.gallery-image');
const modalGallery = document.getElementById('modal-gallery');
const largeImage = document.getElementById('large-image');
const modalLeft = document.getElementById('modal-left');
const modalRight = document.getElementById('modal-right');
let modalIndex = 0;

images.forEach((image, index) => {
  image.addEventListener('click', () => {
    modalIndex = index;
    largeImage.src = image.src;
    modalGallery.style.display = 'flex';
  });
});

modalLeft.addEventListener('click', () => {
  modalIndex = (modalIndex + images.length - 1) % images.length;
  largeImage.src = images[modalIndex].src;
});

modalRight.addEventListener('click', () => {
  modalIndex = (modalIndex + 1) % images.length;
  largeImage.src = images[modalIndex].src;
});

modalGallery.addEventListener('click', (e) => {
  if (e.target === modalGallery) modalGallery.style.display = 'none';
});
