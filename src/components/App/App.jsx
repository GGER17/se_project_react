import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import AddItemModal from "../AddItemModal/AddItemModal";
import Profile from "../Profile/Profile";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";

import DeleteModal from "../DeleteModal/DeleteModal";

import { getItems, addItem, deleteItem } from "../../utils/api";

import "./App.css";
import { getWeatherData } from "../../utils/weatherApi";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function App() {
  const [clothingItems, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [selectedWeather, setSelectedWeather] = useState("");
  const [weatherData, setWeatherData] = useState({ name: "", temp: "" });
  const [currentTempUnit, setCurrentTempUnit] = useState("F");

  function handleOpenItemModal(card) {
    setActiveModal("");
    setSelectedCard(null);
    setSelectedCard(card);
    setActiveModal("item-modal");
  }

  function handleCloseItemModal() {
    setActiveModal("");
    setSelectedCard(null);
  }

  function handleDeleteModal(card) {
    setActiveModal("");
    setSelectedCard(null);
    setSelectedCard(card);
    setActiveModal("delete-modal");
  }

  function handleTempUnitChange() {
    if (currentTempUnit == "F") {
      setCurrentTempUnit("C");
    } else {
      setCurrentTempUnit("F");
    }
  }

  function handleAddItemSubmit(inputValues, resetFunction) {
    addItem(inputValues)
      .then((data) => {
        const maxId = Math.max(...clothingItems.map((clothe) => clothe._id));
        setClothingItems([
          ...clothingItems,
          { ...inputValues, _id: maxId + 1 },
        ]);
        handleCloseItemModal();
        console.log(inputValues);
        resetFunction();
      })
      .catch(console.error);
  }

  function handleDeleteItem(item) {
    deleteItem(item._id)
      .then(() => {
        setClothingItems((prev) =>
          prev.filter((card) => card._id !== item._id),
        );
        setSelectedCard(null);
        setActiveModal("");
      })
      .catch(console.error);
  }
  function handleOpenAddGarmentModal() {
    setActiveModal("");
    setSelectedCard(null);
    setActiveModal("add-garment-modal");
  }

  function handleOpenNavModal() {
    setActiveModal("nav-modal");
  }

  function handleWeatherChange(event) {
    setSelectedWeather(event.target.value);
  }

  useEffect(() => {
    getWeatherData()
      .then((data) => {
        setWeatherData(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then((items) => {
        setClothingItems(items);
      })
      .catch(console.error);
  }, []);

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTempUnit, handleTempUnitChange }}
    >
      <div className="app">
        <Header
          weatherData={weatherData}
          handleOpenAddGarmentModal={handleOpenAddGarmentModal}
          handleOpenNavModal={handleOpenNavModal}
          onCloseClick={handleCloseItemModal}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                weatherData={weatherData}
                clothingItems={clothingItems}
                handleOpenItemModal={handleOpenItemModal}
                handleDeleteModal={handleDeleteModal}
              />
            }
          ></Route>
          <Route
            path="/profile"
            element={
              <Profile
                weatherData={weatherData}
                clothingItems={clothingItems}
                handleOpenItemModal={handleOpenItemModal}
                handleOpenAddGarmentModal={handleOpenAddGarmentModal}
                handleDeleteModal={handleDeleteModal}
              />
            }
          ></Route>
        </Routes>
        <Footer />
        <ItemModal
          card={selectedCard}
          isOpen={activeModal === "item-modal"}
          onCloseClick={handleCloseItemModal}
          handleDeleteModal={handleDeleteModal}
        />
        <AddItemModal
          isOpen={activeModal === "add-garment-modal"}
          onCloseClick={handleCloseItemModal}
          handleAddItemSubmit={handleAddItemSubmit}
        />
        <DeleteModal
          card={selectedCard}
          isOpen={activeModal === "delete-modal"}
          onCloseClick={handleCloseItemModal}
          handleDeleteItem={handleDeleteItem}
        />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
