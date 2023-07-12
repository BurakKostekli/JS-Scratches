const button = document.querySelector(".passwordButton");
const input = document.querySelector("input");
const icon = document.querySelector(".fa-copy");
const alertContainer = document.querySelector(".alertContainer");

button.addEventListener("click", generate);
icon.addEventListener("click", copyPassword);


function generate() {
    const passwordLength = 14;
    const characters = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    

    let password = ""

    for (let i=0; i < passwordLength; i++) {
        const randomNum = Math.floor(Math.random()*characters.length);
        password += characters[randomNum];
    }
    input.value = password;
}


function copyPassword() {

    if(input.value) {
        input.select();
        navigator.clipboard.writeText(input.value);

        alertContainer.classList.remove("active");

        setTimeout(()=> {
            alertContainer.classList.add("active");
        },2000)
    }
}









