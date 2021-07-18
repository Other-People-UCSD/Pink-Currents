/**
 * Script used on index.html to create a functional slideshow.
 */
var slideIndex = 1;     // Shows the first slide
showSlides(slideIndex);

/**
 * When the arrows are clicked, the slide is adjusted by +- 1.
 * @param {number} n 
 */
function jumpSlide(n) {
  showSlides(slideIndex += n);
}

/**
 * When the dots are clicked, the corresponding slide will be displayed. 
 * @param {number} n 
 */
function currentSlide(n) {
  showSlides(slideIndex = n);
}

/**
 * Displays the nth slide and activates the corresponding dot.
 * @param {number} n The number of slides to show
 */
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide-img");
  var dots = document.getElementsByClassName("slide-dot");
  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" slide-active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " slide-active";
}