import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import "./Main.css";

function Main({ clothingItems }) {
  return (
    <main className="main">
      <WeatherCard />
      <p className="main__text"> Today is 75° F / You may want to wear: </p>
      <ul className="main__cards">
        {clothingItems.map((card) => {
          return <ItemCard data={card} />;
        })}
      </ul>
    </main>
  );
}

export default Main;
