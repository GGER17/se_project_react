import { useContext } from "react";

import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

import { weatherConditionsImages } from "../../utils/constants";
import "./WeatherCard.css";

function WeatherCard({ weatherData }) {
  const contextValue = useContext(CurrentTemperatureUnitContext);

  const defaultWeatherImage =
    weatherConditionsImages[weatherData.isDay ? "day" : "night"]["default"]
      ?.image;
  const weatherImage =
    weatherConditionsImages[weatherData.isDay ? "day" : "night"][
      weatherData.weatherConditions
    ]?.image;

  return (
    <section className="weathercard">
      <p className="weathercard__temp">
        {weatherData.temp[contextValue.currentTempUnit]}&deg;{" "}
        {contextValue.currentTempUnit}
      </p>
      <img
        src={weatherImage || defaultWeatherImage}
        alt={`${weatherData.weatherConditions} weather`}
        className="weathercard__image"
      />
    </section>
  );
}

export default WeatherCard;
