import { useContext } from "react";

import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import "./Main.css";
import { getWeatherData } from "../../utils/weatherApi";

function Main({ weatherData, clothingItems, handleOpenItemModal }) {
  const contextValue = useContext(CurrentTemperatureUnitContext);

  const currentWeather = getWeatherCondition({ weatherData, clothingItems });
  const filteredClothingItems = clothingItems.filter(
    (clothingItem) => clothingItem.weather === currentWeather.toLowerCase(),
  );

  function getWeatherCondition({ weatherData, clothingItems }) {
    const temp = weatherData.temp[contextValue.currentTempUnit];

    if (contextValue.currentTempUnit === "F")
      if (temp >= 86) {
        return "hot";
      } else if (temp >= 66) {
        return "warm";
      } else {
        return "cold";
      }

    if (temp >= 30) return "hot";
    if (temp >= 19) return "warm";
    return "cold";
  }

  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <p className="main__text">
        {" "}
        Today is {weatherData.temp[contextValue.currentTempUnit]}&deg;{" "}
        {contextValue.currentTempUnit} / You may want to wear:{" "}
      </p>
      <ul className="main__cards">
        {filteredClothingItems.map((card) => {
          return (
            <ItemCard
              key={card._id}
              data={card}
              onCardClick={handleOpenItemModal}
            />
          );
        })}
      </ul>
    </main>
  );
}

export default Main;
