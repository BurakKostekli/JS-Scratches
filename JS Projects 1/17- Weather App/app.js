const apiKey = "4d9cd2cc8addc9e35e96ac4ae57899c5"
const form = document.getElementById("form");
const city = document.getElementById("city");

const weatherDiv = document.getElementById("weather");
const iconDiv = document.getElementById("icon");
const temperatureDiv = document.getElementById("temperature");
const descriptionDiv = document.getElementById("description");
const detailsDiv = document.getElementById("details");

function converter(temp) {
    return (Number(temp) - 273.32).toFixed(1);
}


form.addEventListener("submit",(e)=> {
    e.preventDefault();
    const cityValue = city.value;
    getWeather(cityValue);
})


async function getWeather(cityValue){

    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}`);
        const data = await response.json();

        const temperature = converter(data.main.temp);
        const icon = data.weather[0].icon;
        const icondes = data.weather[0].description;
        const details = [
            `RealFeel :${converter(data.main.feels_like)}`,
            `Humidity :${data.main.humidity}%`,
            `Wind :${data.wind.speed} m/s`
        ];

        descriptionDiv.textContent = "";

        iconDiv.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon"> <p>${icondes.toUpperCase()}</p>`;
        temperatureDiv.textContent = `${temperature}°C`;

        let detailsNew = details.map((detail)=> `<div>${detail}</div>`).join("");
        detailsDiv.innerHTML = detailsNew;
    }
    catch (error){
        iconDiv.innerHTML = "";
        temperatureDiv.textContent = "";
        detailsDiv.innerHTML = "";

        descriptionDiv.textContent = "Please Enter A True Location";
    }
    
}


