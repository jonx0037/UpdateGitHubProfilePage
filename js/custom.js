(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
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