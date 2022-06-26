import '../css/styles.css';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'


const form = document.querySelector("#form_id");
const input = document.querySelector("#search-bar");
const error = document.querySelector(".failure-text");

async function getWeather(location) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=a6dc08ad1a525beab23e4ffda17b9580&units=metric`);
  if (response.status === 200) {
    const data = await response.json();
    error.style.visibility = "hidden";
    form.submit();
  }
  else {
    error.style.visibility = "visible";
    form.reset();
    return response.status;
  }
}

const submitForm = (e) => {
  e.preventDefault();
  getWeather(input.value);
}


form.addEventListener('submit', submitForm);
