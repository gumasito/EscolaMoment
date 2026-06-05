const images = document.querySelectorAll(".intro--img");
const overlay = document.getElementById("overlay");
const overlayImg = document.getElementById("overlayImg");

images.forEach(img => {
    img.addEventListener("click", () => {
        overlayImg.src = img.src;
        overlay.classList.add("active");
    });
});

overlay.addEventListener("click", () => {
    overlay.classList.remove("active");
});