const trackBack = document.querySelector(".carousel-track-back");

let slidesBack = Array.from(trackBack.children);

slidesBack.forEach(slide => {
  const clone = slide.cloneNode(true);
  trackBack.appendChild(clone);
});

let positionBack = 0;
const speedBack = 0.4;

let trackBackWidth = 0;

function updateWidthBack() {

  trackBackWidth = 0;

  slidesBack.forEach(slide => {
    trackBackWidth += slide.clientWidth;
  })

}

updateWidthBack();

function animateBack() {

  positionBack += speedBack;

  if (positionBack >= trackBackWidth) {

    positionBack = 0;

  }

  trackBack.style.transform = `translateX(-${positionBack}px)`;

  requestAnimationFrame(animateBack);

}

animateBack();

window.addEventListener("resize", updateWidthBack);


//GALERIA IMAGENES
var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: false,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  slideToClickedSlide: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 1,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
});


// Animacion desaparecer NAVBAR
const navbar = document.getElementById("navbar");
const trigger = document.getElementById("fin");

window.addEventListener("scroll", () => {
  const triggerTop = trigger.getBoundingClientRect().top;

  // Cuando el trigger llega al top de la pantalla
  if (triggerTop <= 0) {
    navbar.classList.add("hidden");
  } else {
    navbar.classList.remove("hidden");
  }
});
