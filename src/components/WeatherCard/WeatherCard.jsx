import { useContext } from "react";

import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

import { weatherConditionsImages } from "../../utils/constants";
import "./weatherCard.css";

function WeatherCard({ weatherData }) {
  //TODO destructure the currentTempUnit

  const contextValue = useContext(CurrentTemperatureUnitContext);

  return (
    <section className="weathercard">
      <p className="weathercard__temp">
        {weatherData.temp[contextValue.currentTempUnit]}&deg;{" "}
        {contextValue.currentTempUnit}
      </p>
      <img
        src={
          weatherConditionsImages[weatherData.isDay ? "day" : "night"][
            weatherData.weatherConditions
          ]?.image ||
          weatherConditionsImages[weatherData.isDay ? "day" : "night"][
            "default"
          ]?.image
        }
        alt={`${weatherData.weatherConditions} weather`}
        className="weathercard__image"
      />
    </section>
  );
}

export default WeatherCard;
