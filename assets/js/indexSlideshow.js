var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function jumpSlide(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide-img");
  var dots = document.getElementsByClassName("slide-dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" slide-active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " slide-active";
}