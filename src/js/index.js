const urlAPI = "https://api.open-meteo.com/v1/forecast";
const paramsAPI =
  "?latitude=38.9161&longitude=-6.3437&current=temperature_2m,is_day,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code&timezone=Europe%2FBerlin&forecast_days=3";
const URL = `${urlAPI}${paramsAPI}`;

const currentTemperature = document.getElementById("current-temperature");
const iconImage = document.querySelector("#icon-container>img");

const rowTime = document.querySelectorAll(".row-time");
const rowIcon = document.querySelectorAll(".row-icon");
const rowTemperature = document.querySelectorAll(".row-temperature");
const weatherPhrase = document.querySelector("#weather-phrase");

const miguelPhrases = [
  "Si el viento sigue así, la cerveza va a ser mi única compañera de vuelo.",
  "Este viento me está llevando directo a la nevera, ¡a buscar otra cerveza!",
  "Con este viento, la cerveza no necesita volar para conquistarme.",
];

async function request(url) {
  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error de red: ${response.statusText}`);
    }
    let data = await response.json();
    currentTemperature.innerText = data.current.temperature_2m;

    if (data.current.is_day === 0) {
      iconImage.setAttribute("src", "./src/images/moon.png");
    } else if (data.current.is_day === 1) {
      iconImage.setAttribute("src", "./src/images/sun.png");
    }

    let currentTime = data.current.time;
    currentTime = data.current.time.split(":")[0] + ":00".trim();

    let hourlyTime = data.hourly.time;
    let hourlyWeatherCode = data.hourly.weather_code;
    let hourlyTemperature = data.hourly.temperature_2m;

    let index = hourlyTime.findIndex((el) => el === currentTime);

    rowTime[0].innerHTML = `
      <span>Now</span>
    `;

    rowIcon[0].innerHTML = `
      <span>${hourlyWeatherCode[index]}</span>
    `;

    let temperature = Math.round(hourlyTemperature[index]);

    rowTemperature[0].innerHTML = `
      <span>${temperature}º</span>
  `;

    let counter = 1;
    for (let i = index + 1; i < index + 6; i++) {
      let formatHourlyTime = hourlyTime[i].split("T")[1];
      rowTime[counter].innerHTML = `
      <span>${formatHourlyTime}</span>
    `;

      rowIcon[counter].innerHTML = `
        <span>${hourlyWeatherCode[i]}</span>
      `;

      rowTemperature[counter].innerHTML = `
      <span>${hourlyTemperature[i]}</span>
    `;

      counter++;
    }

    let currentWindSpeed = data.current.wind_speed_10m;
    const strongWind = 41;
    if (currentWindSpeed > strongWind) {
      weatherPhrase.innerText = "No saques el paraguas";
    } else {
      let id = getRandomFloatArbitrary(0, miguelPhrases.length);
      weatherPhrase.innerText = miguelPhrases[id];
    }
  } catch (error) {
    console.error("Error en la solicitud:", error.message);
  }
}

function getRandomFloatArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

request(URL);
