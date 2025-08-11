const playBtn = document.getElementById("playBtn");
const music = document.getElementById("song");

//add functionality to music button
playBtn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
});