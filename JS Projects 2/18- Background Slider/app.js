// MY CODE

const buttons = document.querySelectorAll(".arrow");
const slides = document.querySelectorAll(".slide");
const body = document.body

let count = 0;

body.classList.add("background-image");


buttons.forEach((button) => {

    button.addEventListener("click", () => {

        slides.forEach((slide) => {
            slide.classList.remove("active");
        });

        if (button.classList.contains("left-arrow")) {
            if (count == 0) {
                count = slides.length - 1;
            }
            else {
                count--;
            }
            slides[count].classList.add("active");

        }
        else if (button.classList.contains("right-arrow")) {
            if (count == slides.length - 1) {
                count = 0;
            }
            else {
                count++;
            }
            slides[count].classList.add("active");
        }

        body.style["background-image"] = slides[count].style["background-image"];
    })

})