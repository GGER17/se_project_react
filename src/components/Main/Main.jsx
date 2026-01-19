import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import "./Main.css";

function Main({ clothingItems, handleOpenItemModal }) {
  return (
    <main className="main">
      <WeatherCard />
      <p className="main__text"> Today is 75° F / You may want to wear: </p>
      <ul className="main__cards">
        {clothingItems.map((card) => {
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
