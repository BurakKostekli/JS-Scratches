const nextIcon = document.querySelector(".next");
const prewIcon = document.querySelector(".prew");
const imageContainer = document.querySelector(".imageContainer");
const imgs = document.querySelectorAll("img")
let timeout;
let currentImg = 1;

prewIcon.addEventListener("click", () =>{
    currentImg--;
    clearTimeout(timeout);
    updateImg();
})

nextIcon.addEventListener("click", () =>{
    currentImg++;
    clearTimeout(timeout);
    updateImg();
})

function updateImg() {
    if(currentImg > imgs.length) {
        currentImg = 1;
    }
    else if (currentImg < 1) {
        currentImg = imgs.length;
    }
    console.log(imgs.length);
    imageContainer.style.transform = `translateX(-${(currentImg - 1) * 700}px)`; 

    timeout = setTimeout(() => {
        currentImg++;
        updateImg();
    },4000)
} 

updateImg()
