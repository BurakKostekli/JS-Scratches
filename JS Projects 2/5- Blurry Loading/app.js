const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;
let load2 = 100;
let load3 = 1.00;

let int = setInterval((blurring), 20);

function blurring() {
    if (load < 100 && load2 > 0 && load3 > 0.00) {
        load++
        load2--
        load3 -= 0.01
        bg.style.filter = `blur(${load2}px)`;
        loadText.textContent = `${load}%`;
        loadText.style.opacity = `${load3}`;
    }
    else {
        clearInterval(int);
    }
}