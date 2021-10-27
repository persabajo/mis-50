// Array de imágenes y contador
var imageSlides = document.getElementsByClassName("imageSlides");
var leftArrow = document.getElementById("leftArrow");
var rightArrow = document.getElementById("rightArrow");
var counter = 0;

// Función para esconder todas las imágenes
function hideImages() {
  for (var i = 0; i < imageSlides.length; i++) {
    imageSlides[i].classList.remove("visible");
  }
}

// Función que hace visibile la imagen correspondiente
function imageLoop() {
  var currentImage = imageSlides[counter];
  currentImage.classList.add("visible");
  counter++;
}

// Click Event Listeners y funciones para las flechas
function arrowClick(e) {
  var target = e.target;
  if (target == leftArrow) {
    clearInterval(imageSlideshowInterval);
    hideImages();
    if (counter == 1) {
      counter = imageSlides.length - 1;
      imageLoop();
      imageSlideshowInterval = setInterval(slideshow, 4000);
    } else {
      counter--;
      counter--;
      imageLoop();
      imageSlideshowInterval = setInterval(slideshow, 4000);
    }
  } else if (target == rightArrow) {
    clearInterval(imageSlideshowInterval);
    hideImages();
    if (counter == imageSlides.length) {
      counter = 0;
      imageLoop();
      imageSlideshowInterval = setInterval(slideshow, 4000);
    } else {
      imageLoop();
      imageSlideshowInterval = setInterval(slideshow, 4000);
    }
  }
}

leftArrow.addEventListener("click", arrowClick);
rightArrow.addEventListener("click", arrowClick);

// Función del slider
function slideshow() {
  if (counter < imageSlides.length) {
    hideImages();
    imageLoop();
  } else {
    counter = 0;
    hideImages();
    imageLoop();
  }
}

// Delay para primer imagen
setTimeout(slideshow, 1000);

// Delay para las demás imágenes
var imageSlideshowInterval = setInterval(slideshow, 4000);
