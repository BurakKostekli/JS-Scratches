const jokeButton = document.getElementById("jokeButton");
const joke = document.getElementById("joke");

const apiKey = "L4bStT8VUsv7PIhpii46Lw==LEYTwbWD8uI0cPGi";
const apiURL = "https://api.api-ninjas.com/v6/dadjokes?limit=1";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey
    }
}

async function getJoke() {

    try {
        joke.textContent = "Loading...";
        jokeButton.textContent = "Wait a second";
        jokeButton.disabled = true;

        const response = await fetch(apiURL,options);
        const data = await response.json();
        debugger;

        joke.textContent = data[0].joke;

        jokeButton.textContent = "TELL ME A JOKE!"
        jokeButton.disabled = false;

    } catch (error){
        joke.textContent = "Try again later";
        jokeButton.disabled = false;
        jokeButton.textContent = "TELL ME A JOKE!"
    }
}

jokeButton.addEventListener("click", getJoke);
