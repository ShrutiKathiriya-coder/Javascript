
let slideIndex = 0;
var slides = document.querySelectorAll(".slide");
var slidesContainer = document.querySelector(".slides");

function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) { 
    slideIndex = 0; 
  }
  slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
}
