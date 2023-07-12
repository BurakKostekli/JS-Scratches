const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", () => {
    jokeEl.textContent = "Loading..."
    generateJoke();
});

generateJoke();

async function generateJoke() {
    const config = {
        headers: {
            'Accept': 'Application/json'
        }
    }

    const res = await fetch('https://icanhazdadjoke.com/', config)

    const data = await res.json();

    jokeEl.innerHTML = data.joke;
}

