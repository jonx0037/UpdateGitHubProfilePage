(function ($) {
  // jQuery code for smooth scrolling and other behavior
  // ...
})(jQuery);

// Select gallery images and modal elements
const images = document.querySelectorAll('.gallery-image');
const modalGallery = document.getElementById('modal-gallery');
const largeImage = document.getElementById('large-image');
const modalLeft = document.getElementById('modal-left');
const modalRight = document.getElementById('modal-right');
let modalIndex = 0;

// Add click event to each gallery image
images.forEach((image, index) => {
  image.addEventListener('click', () => {
    modalIndex = index;
    largeImage.src = image.querySelector('img').src; // Get the image source
    modalGallery.style.display = 'flex'; // Display the modal gallery
  });
});

// Left arrow functionality
modalLeft.addEventListener('click', () => {
  modalIndex = (modalIndex + images.length - 1) % images.length;
  largeImage.src = images[modalIndex].querySelector('img').src;
});

// Right arrow functionality
modalRight.addEventListener('click', () => {
  modalIndex = (modalIndex + 1) % images.length;
  largeImage.src = images[modalIndex].querySelector('img').src;
});

// Click outside the image to close the modal gallery
modalGallery.addEventListener('click', (e) => {
  if (e.target === modalGallery) modalGallery.style.display = 'none';
});
