const playBtn = document.getElementById("musicBtn");
const music = document.getElementById("song");

//add functionality to music button
playBtn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
});

function displaySidebar() {
    const sidebar = document.querySelector(".sidebar");

    sidebar.style.display = "flex";
}

function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");

    sidebar.style.display = "none";
}