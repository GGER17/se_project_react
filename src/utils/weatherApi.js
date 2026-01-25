import { coordinates, apiKey, weatherConditionsImages } from "./constants";

export function getWeatherData() {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&units=imperial&appid=${apiKey}`,
  )
    .then((res) => {
      return res.ok
        ? res.json()
        : Promise.reject(`Error from weather API: ${res.status}`);
    })
    .then((data) => {
      return parseWeatherData(data);
    });
}

function parseWeatherData(data) {
  const parsedData = { temp: {} };

  const fahr = Math.round(data.main.temp);

  parsedData.city = data.name;
  parsedData.temp.F = fahr;
  parsedData.temp.C = Math.round(((fahr - 32) * 5) / 9);

  parsedData.weatherConditions = data.weather[0].main.toLowerCase();

  parsedData.isDay = isDay(data.sys, data.dt);

  return parsedData;
}

function isDay({ sunrise, sunset }, timestamp) {
  return sunrise <= timestamp && timestamp <= sunset;
}
