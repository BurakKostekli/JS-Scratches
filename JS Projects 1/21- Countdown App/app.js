const remainingDiv = document.getElementById("remainingDiv");
const remainingForm = document.getElementById("remainingForm");
const dateInput = document.getElementById("date-picker");
const timeDiv = document.getElementById("timeDiv");
const timeSpans = document.querySelectorAll("span");
const completeDiv = document.getElementById("complete");
const completeButton = document.getElementById("completeButton");

const resetButton = document.getElementById("resetButton");
const howMuch = document.getElementById("ask");

let chosenDate = "";
let currentDateValue = new Date().getTime();
let currentTimeInterval;
let localStorageTime;

const second = 1000;
const minute = second*60;
const hour = minute*60;
const day = hour*24;

const today = new Date().toISOString().split("T")[0];
dateInput.setAttribute("min",today);


function updateDOM() {

    currentTimeInterval = setInterval(()=> {
        const now = new Date().getTime();
        const betweenDate = currentDateValue - now;
    
        const days = Math.floor(betweenDate/day);
        const hours = Math.floor((betweenDate%day)/hour);
        const minutes = Math.floor((betweenDate%hour)/minute);
        const seconds = Math.floor((betweenDate%minute)/second);

        remainingDiv.style.display = "none";

        if(betweenDate < 0) {
            completeDiv.style.display = "block";
            clearInterval(currentTimeInterval);
            timeDiv.style.display = "none";
        }
        else {
            
            timeDiv.style.display = "block";
        
            timeSpans[0].textContent = `${days}`;
            timeSpans[1].textContent = `${hours}`;
            timeSpans[2].textContent = `${minutes}`;
            timeSpans[3].textContent = `${seconds}`;
        }

    },1000);
};

function calculateTime(e) {
    e.preventDefault();
    howMuch.textContent = "Loading.."
    chosenDate = remainingForm.date.value;

    localStorageTime = {
        date: chosenDate
    };
    
    localStorage.setItem("time", JSON.stringify(localStorageTime));

    if(chosenDate == ""){
        alert("Please pick a date");
        howMuch.textContent = "How much time left?"
    }
    else {
        currentDateValue = new Date(chosenDate).getTime();
        updateDOM();
    }
};


function reset() {
    clearInterval(currentTimeInterval);
    remainingDiv.style.display = "block";
    timeDiv.style.display = "none";
    howMuch.textContent = "How much time left?";
    completeDiv.style.display = "none";
    localStorage.removeItem("time");
};

function refreshTime() {
    
    if(localStorage.getItem("time")) {
        remainingDiv.style.display = "none";
        localStorageTime = JSON.parse(localStorage.getItem("time"));
        chosenDate = localStorageTime.date;
        currentDateValue = new Date(chosenDate).getTime();
        updateDOM();
    }
};


remainingForm.addEventListener("submit",calculateTime);

resetButton.addEventListener("click",reset);

completeButton.addEventListener("click",reset);

refreshTime();