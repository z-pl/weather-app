import '../css/results.css';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

const weatherData = JSON.parse(localStorage.getItem("data"));
console.log(weatherData);


const weatherDescription = document.querySelector(".weather-desc");
const weatherLocation = document.querySelector(".weather-location");
const weatherTemp = document.querySelector(".temp-value");
const weatherTempUnit = document.querySelector(".temp-unit");
const feelsLikeInfo = document.querySelector(".feels-like");
const windInfo = document.querySelector(".wind");
const humidityInfo = document.querySelector(".humidity");
let celsius = '&#8451;';
console.log(weatherData.weather[0].description);
console.log(weatherData.name);
console.log(weatherData.sys.country);
console.log(weatherData.main.temp);
console.log(weatherData.main.feels_like);
console.log(weatherData.wind.speed);
console.log(weatherData.main.humidity);


weatherDescription.innerText = (weatherData.weather[0].description).toUpperCase();
weatherLocation.innerText = `${weatherData.name}, ${weatherData.sys.country}`;
weatherTemp.innerText = `${weatherData.main.temp}`;
weatherTempUnit.innerHTML = `${celsius}`;
feelsLikeInfo.innerHTML =
`<span class = "sub-info"> FEELS LIKE:</span>` + weatherData.main.feels_like + ` <span class = "temp-unit-other">${celsius}</span>`;
windInfo.innerHTML = `<span class = "sub-info">WIND: </span>`+ weatherData.wind.speed + " MPH";
humidityInfo.innerHTML = `<span class = "sub-info">HUMIDITY: </span>`+ weatherData.main.humidity + "%";
