// select HTML elements in the document
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

//create an "url" variable using const that stores the API call
const url =
  "https://api.openweathermap.org/data/2.5/weather?q=Aguascalientes&units=imperial&appid=797bff854894fe6d1e97c0dfb703f0bd";

//write a defined asynchronous function that will use fetch() to request the given weather api url and then try to convert the response using a JSON parser that is built-in
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}
function displayResults(weatherData) {
  currentTemp.innerHTML = weatherData.main.temp.toFixed(0);

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", "desc");
  captionDesc.textContent = desc;
}
apiFetch();