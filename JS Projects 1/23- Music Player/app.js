// Audio
const music = document.querySelector("audio");
// BUTTONS
const playButton = document.getElementById("play");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
// IMAGE
const image = document.querySelector("img");
// TİTLE AND CREATOR (Headings)
const title = document.getElementById("title");
const creator = document.getElementById("creator");
// PROGRESS BAR
const progressDiv = document.getElementById("progressDiv");
const progress = document.getElementById("progress");
// TİMES
const currentTimeSpan = document.getElementById("currentTime");
const totalTimeSpan = document.getElementById("totalTime");




isPlaying = false; 
let songIndex = 0;


// CHANGE MUSIC
const songs = [{
    name:"song1",
    title:"Hikayem Solo",
    creator:"Burak Köstekli - Veysel Kaçmaz"
},
{
    name:"song2",
    title:"Hikayem",
    creator:"Burak Köstekli"
}
];

function loadSong(song) {
    title.textContent = song.title;
    creator.textContent = song.creator;
    music.src = `./music/${song.name}.mp3`;
    image.src = `./img/${song.name}.jpg`;
};

loadSong(songs[songIndex]);



// PLAY STOP MUSİC
function playSong() {
    isPlaying = true;
    playButton.classList.replace("fa-play","fa-pause");
    music.play();
};

function pauseSong() {
    isPlaying = false;
    playButton.classList.replace("fa-pause","fa-play");
    music.pause();
};


playButton.addEventListener("click",()=> 
    isPlaying ? pauseSong() : playSong());



// CHANGE BUTTONS

function prevSong(){
    songIndex--;
    if(songIndex < 0){
        songIndex = songs.length -1;
    }
    loadSong(songs[songIndex]);
    playSong();
};

function nextSong(){
    songIndex++;
    if(songIndex > songs.length -1){
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}

prevButton.addEventListener("click",prevSong);

nextButton.addEventListener("click",nextSong);


// PROGRESS BAR & TİMES

function updateProgressBar(e) {
    if(isPlaying) {
        const {currentTime,duration} = e.srcElement;

        const progressPercent = (currentTime/duration)*100;
        progress.style.width = `${progressPercent}%`;

        const durationMinutes = Math.floor(duration/60);
        let durationSeconds = Math.floor(duration%60);

        if(durationSeconds < 10) {
            durationSeconds = `0${durationSeconds}`;
        };
        if(durationSeconds){
            totalTimeSpan.textContent = `${durationMinutes}:${durationSeconds}`;
        };

        const currentMinutes = Math.floor(currentTime/60);
        let currentSeconds = Math.floor(currentTime%60);

        if(currentSeconds < 10) {
            currentSeconds = `0${currentSeconds}`;
        };
        if(currentSeconds){
            currentTimeSpan.textContent = `${currentMinutes}:${currentSeconds}`;
        };
    }
};

music.addEventListener("timeupdate",updateProgressBar); 


// CLİCK START

function setProgressBar(e){
   const width  = e.srcElement.clientWidth;
   const clickX = e.offsetX;
   
   const {duration} = music;
   music.currentTime = (clickX / width)*duration
}

progressDiv.addEventListener("click", setProgressBar);


music.addEventListener("ended",nextSong);