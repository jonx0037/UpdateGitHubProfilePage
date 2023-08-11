(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: (target.offset().top)
      }, 1000, 'easeInOutExpo');
      return false;
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict

function validateForm() {

  // Get first and last name instead of full name
  const firstName = document.getElementById('firstName');
  const lastName = document.getElementById('lastName');

  // Validate length of each field
  if (firstName.value.length < 2) {
    alert('First name required');
    return false;
  }

  if (lastName.value.length < 2) {
    alert('Last name required');
    return false;
  }

  // Get form fields
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  // Email validation
  if (!email.value.match(/^[\w\-\.]+@[\w\-]+\.[a-z]{2,4}$/i)) {
    alert('Invalid email');
    return false;
  }

  // Message length validation
  if (message.value.length < 10) {
    alert('Message must be at least 10 characters');
    return false;
  }

  // If everything validates
  return true;

}

document.addEventListener('scroll', function () {
  var video = document.getElementById('myVideo');
  var videoBounds = video.getBoundingClientRect();
  var viewportHeight = window.innerHeight;

  // If video is in viewport and not already playing, play it.
  if (videoBounds.top <= viewportHeight && videoBounds.bottom >= 0 && !video.playing) {
    video.play();
  }
  // If video is out of viewport and playing, pause it.
  else if ((videoBounds.top > viewportHeight || videoBounds.bottom < 0) && video.playing) {
    video.pause();
  }
});

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');

let currentIndex = 0;

leftArrow.addEventListener('click', () => {
  currentIndex = (currentIndex + slides.length - 1) % slides.length;
  updateSlider();
});

rightArrow.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
});

function updateSlider() {
  const offset = -currentIndex * 900; /* 300px * 3 */
  slider.style.transform = `translateX(${offset}px)`;
}
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
let currentImageIndex = 0;
const images = [
  'img/Content Gallery/CG-11.png',
  'img/Content Gallery/CG-12.png',
  // ... Add the other image paths here
];

document.getElementById('modal-right').addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  updateModalImage();
});

document.getElementById('modal-left').addEventListener('click', () => {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  updateModalImage();
});

function updateModalImage() {
  document.getElementById('large-image').src = images[currentImageIndex];
}
