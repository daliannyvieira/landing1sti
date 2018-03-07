(function() {

  smoothScroll.init({
    selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
    selectorHeader: null, // Selector for fixed headers (must be a valid CSS selector) [optional]
    speed: 500, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutCubic', // Easing pattern to use
    offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
    callback: function ( anchor, toggle ) {} // Function to run after scrolling
  });

  var section = document.querySelectorAll('section');
  var sections = {};
  var i = 0;
  var logo = document.querySelector('.menu-logo');
  var menuItem = document.querySelectorAll('.menu-item');
  var deeperText = document.querySelector('.deeper-text');
  var serviceBox = document.querySelectorAll('.services-box');

  Array.prototype.forEach.call(section, function(e) {
    sections[e.id] = e.offsetTop;
  });

  window.onscroll = function() {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    
    for (i in sections) {
      if ((sections[i]) - 100 <= scrollPosition) { 
        if (i === 'deeper') {
          logo.classList.add('--scale-down')
          menuItem.forEach((element) => {
            element.classList.add('--fade-in')
          });
          deeperText.classList.toggle('--fade-in')
        } if (i === 'home') {
          logo.classList.remove('--scale-down')
          menuItem.forEach((element) => {
            element.classList.remove('--fade-in')
          });
        } if (i === 'services') {
          serviceBox.forEach((element) => {
            element.classList.add('--fade-in')
          });
        } if (i === 'footer') {
        }
      }
    }
  };
})();