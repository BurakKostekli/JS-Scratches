const audioButton = document.getElementById("audioButton");
const audio = document.querySelector("audio");
const musicPlay = document.getElementById("musicPlay");

const playerTurn = document.getElementById("playerTurn");
const playerScore = document.getElementById("playerScore");
const computerTurn = document.getElementById("computerTurn");
const computerScore = document.getElementById("computerScore");
const resultText = document.getElementById("resultText");

let playerScoreNumber = 0;
let ComputerScoreNumber = 0;

// Icons

const playerRock = document.getElementById("playerRock");
const playerPaper = document.getElementById("playerPaper");
const playerScissors = document.getElementById("playerScissors");

const computerRock = document.getElementById("computerRock");
const computerPaper = document.getElementById("computerPaper");
const computerScissors = document.getElementById("computerScissors");

const allGameIcons = document.querySelectorAll(".icon");

let computerChoice = "";

const choices = {
    rock:{name:"rock",win:["scissors"]},
    paper:{name:"paper",win:["rock"]},
    scissors:{name:"scissors",win:["paper"]}
}


// Seçimi ekranda gösterme

function resetSelected() {
    allGameIcons.forEach(e => {
        e.classList.remove("selected");
        
    })
}

function computerRandomChoice() {
    const computerChoiceNumber = Math.random();

    if(computerChoiceNumber <= 0.33) {
        computerChoice = "rock";
    }
    else if(computerChoiceNumber <= 0.66){
        computerChoice = "paper";
    }
    else if(computerChoiceNumber <= 1){
        computerChoice = "scissors";
    }

}

function displayComputerChoice() {

    switch(computerChoice){
        case "rock":
            computerRock.classList.add("selected");
            computerTurn.textContent = " Rock"
            break;
        case "paper":
            computerPaper.classList.add("selected");
            computerTurn.textContent = " Paper";
            break;
        case "scissors":
            computerScissors.classList.add("selected");
            computerTurn.textContent = " Scissors";
    }
};


function resetAll() {
    playerScoreNumber = 0;
    ComputerScoreNumber = 0;
    playerScore.textContent = playerScoreNumber;
    computerScore.textContent = ComputerScoreNumber;
    playerTurn.textContent = "";
    computerTurn.textContent = "";
    resultText.textContent = "";
    resetSelected();
}


function updateScore(playerChoice) {
    

    if(playerChoice === computerChoice){
        resultText.textContent = "DRAW";
    }
    else {
        const choice = choices[playerChoice];
        
        if (choice.win.indexOf(computerChoice) === 0) {
            resultText.textContent = "Player Wins";
            playerScoreNumber++
            playerScore.textContent = playerScoreNumber;
        }
        else {
            resultText.textContent = "Computer Wins";
            ComputerScoreNumber++
            computerScore.textContent = ComputerScoreNumber;
        }
    }
}


function checkResult(playerChoice) {
    resetSelected();
    computerRandomChoice();
    displayComputerChoice();
    updateScore(playerChoice);
}

function select(playerChoice) {

    checkResult(playerChoice);

    switch(playerChoice){
        case "rock":
            playerRock.classList.add("selected");
            playerTurn.textContent = " Rock"
            break;
        case "paper":
            playerPaper.classList.add("selected");
            playerTurn.textContent = " Paper";
            break;
        case "scissors":
            playerScissors.classList.add("selected");
            playerTurn.textContent = " Scissors";
    }
};


// MÜZİK TUŞU

let isPlay = true;
audioButton.addEventListener("click",change);
function change() {
    
    if(isPlay) {
        audio.pause();
        isPlay= false;
    }
    else {
        audio.play();
        isPlay = true;
    }
    let isOpen = true;
    isOpen = audioButton.classList.contains("fa-volume-high"); 
    audioButton.classList = isOpen ? "fa-solid fa-volume-off audio" : "fa-solid fa-volume-high audio";
};

musicPlay.addEventListener("click", ()=> {
    audio.play();
});

