import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import AddItemModal from "../AddItemModal/AddItemModal";
import Profile from "../Profile/Profile";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";

import DeleteModal from "../DeleteModal/DeleteModal";

import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import { signup, signin, checkToken } from "../../utils/auth";

import CurrentUserContext from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

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
    const token = localStorage.getItem("jwt");

    addItem(inputValues, token)
      .then((newItem) => {
        console.log(newItem);
        setClothingItems((prev) => [...prev, newItem]);
        handleCloseItemModal();
        resetFunction();
      })
      .catch(console.error);
  }

  function handleDeleteItem(item) {
    const token = localStorage.getItem("jwt");

    deleteItem(item._id, token)
      .then(() => {
        setClothingItems((prev) =>
          prev.filter((card) => card._id !== item._id),
        );
        setSelectedCard(null);
        setActiveModal("");
      })
      .catch(console.error);
  }

  function handleRegister({ name, avatar, email, password }) {
    signup({ name, avatar, email, password })
      .then(() => signin({ email, password }))
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setIsLoggedIn(true);
        return checkToken(res.token);
      })
      .then((user) => {
        setCurrentUser(user);
        handleCloseItemModal();
      })
      .catch(console.error);
  }

  function handleLogin({ email, password }) {
    signin({ email, password })
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setIsLoggedIn(true);
        return checkToken(res.token);
      })
      .then((user) => {
        setCurrentUser(user);
        handleCloseItemModal();
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

  function handleOpenRegisterModal() {
    setActiveModal("register-modal");
  }

  function handleOpenLoginModal() {
    setActiveModal("login-modal");
  }

  function handleSignOut() {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser({});
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

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) return;
    checkToken(token)
      .then((user) => {
        setCurrentUser(user);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        console.error(err);
        setIsLoggedIn(false);
      });
  }, []);

  function switchModal(target) {
    setActiveModal("");
    setTimeout(() => {
      setActiveModal(target);
    }, 0);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTempUnit, handleTempUnitChange }}
      >
        <div className="app">
          <Header
            weatherData={weatherData}
            handleOpenAddGarmentModal={handleOpenAddGarmentModal}
            handleOpenNavModal={handleOpenNavModal}
            handleOpenLoginModal={handleOpenLoginModal}
            handleOpenRegisterModal={handleOpenRegisterModal}
            isLoggedIn={isLoggedIn}
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
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Profile
                    weatherData={weatherData}
                    clothingItems={clothingItems}
                    handleOpenItemModal={handleOpenItemModal}
                    handleOpenAddGarmentModal={handleOpenAddGarmentModal}
                    handleDeleteModal={handleDeleteModal}
                    handleSignOut={handleSignOut}
                  />
                </ProtectedRoute>
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
          <RegisterModal
            isOpen={activeModal === "register-modal"}
            onCloseClick={handleCloseItemModal}
            handleRegisterSubmit={handleRegister}
            switchModal={switchModal}
          />
          <LoginModal
            isOpen={activeModal === "login-modal"}
            onCloseClick={handleCloseItemModal}
            handleLoginSubmit={handleLogin}
            switchModal={switchModal}
          />
        </div>
      </CurrentTemperatureUnitContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
