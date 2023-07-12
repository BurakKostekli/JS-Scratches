const button = document.querySelector(".watchButton");
const videoContainer = document.getElementById("video");
const closeButton = document.getElementById("closeButton");
const video = document.getElementById("popupVideo");


function videoPopup() {
    videoContainer.classList.remove("active");
}

function closePopup() {
    videoContainer.classList.add("active");
    video.pause();
    video.currentTime = 0;
}


button.addEventListener("click",videoPopup);

closeButton.addEventListener("click",closePopup);