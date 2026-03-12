const trackBack = document.querySelector(".carousel-track-back");

let slidesBack = Array.from(trackBack.children);

slidesBack.forEach(slide => {
  const clone = slide.cloneNode(true);
  trackBack.appendChild(clone);
});

let positionBack = 0;
const speedBack = 0.4;

let trackBackWidth = 0;

function updateWidthBack(){

trackBackWidth = 0;

slidesBack.forEach(slide=>{
trackBackWidth += slide.clientWidth;
})

}

updateWidthBack();

function animateBack(){

positionBack += speedBack;

if(positionBack >= trackBackWidth){

positionBack = 0;

}

trackBack.style.transform = `translateX(-${positionBack}px)`;

requestAnimationFrame(animateBack);

}

animateBack();

window.addEventListener("resize",updateWidthBack);