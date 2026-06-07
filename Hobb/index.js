//! seccion para mirar imagenes mas grandes
const images = document.querySelectorAll(".intro--img");
const overlay = document.getElementById("overlay");
const overlayImg = document.getElementById("overlayImg");
const overlayText = document.getElementById("overlayText");

images.forEach(img => {
    img.addEventListener("click", () => {
        overlayImg.src = img.src;
        overlayText.textContent = img.dataset.text;
        overlay.classList.add("active");
    });
});

overlay.addEventListener("click", () => {
    overlay.classList.remove("active");
});
//! seccion para evitar el scroll al mirar una imagen
images.forEach(img => {
    img.addEventListener("click", () => {
        overlayImg.src = img.src;
        overlay.classList.add("active");
        document.body.classList.add("no-scroll");
    });
});

overlay.addEventListener("click", () => {
    overlay.classList.remove("active");
    document.body.classList.remove("no-scroll");
});
//! Seccion para copiar IDs dentro de la pagina
document.querySelectorAll(".copy-text").forEach(el => {
    el.addEventListener("click", async () => {

        await navigator.clipboard.writeText(el.textContent);

        const aviso = document.createElement("div");
        aviso.textContent = "✓ Copiado";
        aviso.className = "copied-toast";

        document.body.appendChild(aviso);

        setTimeout(() => aviso.remove(), 1500);
    });
});

//! Musica
const tracks = document.querySelectorAll(".track");
const player = document.getElementById("music--player");

let currentTrack = null;

tracks.forEach(track => {

    track.addEventListener("click", () => {
        const img = track.querySelector("img");
        if (img) {
            cursor.style.backgroundImage = `url('${img.src}')`;
        }

        if (currentTrack == track) {

            if (!player.paused) {
                player.pause();
                const img = track.querySelector("img");
                img.src = track.dataset.static;
                track.classList.remove("active");
            } else {
                player.play();
                const img = track.querySelector("img");
                track.classList.add("active");
            }
            return;
        }
        if (currentTrack) {

            const oldImg = currentTrack.querySelector("img");

            oldImg.src = currentTrack.dataset.static;

            currentTrack.classList.remove("active");
        }

        player.src = track.dataset.song;
        player.volume = .5;
        player.play();


        track.classList.add("active");

        currentTrack = track;
    });
});
player.addEventListener("ended", () => {
    if (currentTrack) {
        const img = currentTrack.querySelector("img");

        img.src = currentTrack.dataset.static;

        currentTrack.classList.remove("active");
        currentTrack = null;
    }
});
const playlist = document.querySelector(".playlist");
const toggleBtn = document.getElementById("togglePlaylist");

toggleBtn.addEventListener("click", () => {
    playlist.classList.toggle("open");

    toggleBtn.textContent =
        playlist.classList.contains("open")
            ? "[X]"
            : "[O]";
});
//! cursor
const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});
let rotation = 0;
function animate() {
    currentX += (mouseX - currentX) * 0.2;
    currentY += (mouseY - currentY) * 0.2;
    rotation += 2;
    cursor.style.left = currentX + "px";
    cursor.style.top = currentY + "px";
    cursor.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;

    requestAnimationFrame(animate);
}

animate();

//! Swiper
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    thumbs: {
        swiper: swiper,
    },
});