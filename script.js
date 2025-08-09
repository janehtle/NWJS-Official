const playBtn = document.getElementById("playBtn");
const music = document.getElementById("song");

playBtn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
});