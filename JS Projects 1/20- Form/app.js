const form = document.getElementById("form");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");
const alertMessage = document.querySelector(".alertMessage");
const alertTitle = document.getElementById("alertTitle");
let isValid = false;
let passwordMatch = false;

function validateForm() {
    isValid = form.checkValidity();

    if(!isValid) {
        alertTitle.textContent = "Please fill in all the blanks !!!";
        return;
    }

    if(password.value === repassword.value) {
        passwordMatch = true;
    }
    else {
        passwordMatch = false;
        alertTitle.textContent = "Passwords are not the same!";
        password.style.color = "red";
        repassword.style.color = "red";
        return;
    }

    if(isValid && passwordMatch) {
        alertTitle.textContent = "Successfull!";
        alertTitle.style.fontSize = "30px";
    }
}
function submitForm(e) {
    e.preventDefault();
    validateForm();

    if (isValid && passwordMatch) {
        
        takeFormInformation();
    }
}

function takeFormInformation() {
    const user = {
        name: form.name.value,
        surname: form.surname.value,
        email: form.email.value,
        phone: form.phone.value,
        password: form.password.value,
        address: form.address.value
    };

    console.log(user);
}


form.addEventListener("submit", submitForm);

