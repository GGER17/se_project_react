import { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { defaultClothingItems } from "../../utils/defaultClothingItems";
import "./App.css";

function App() {
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [selectedWeather, setSelectedWeather] = useState("");

  function handleOpenItemModal(card) {
    setActiveModal("item-modal");
    setSelectedCard(card);
  }

  function handleCloseItemModal() {
    setActiveModal("");
    setSelectedCard("");
  }

  function handleSubmit(data) {
    const maxId = Math.max(...clothingItems.map((clothe) => clothe._id));
    setClothingItems([...clothingItems, { ...data, _id: maxId + 1 }]);
    handleCloseItemModal();
  }

  function handleOpenAddGarmentModal() {
    setActiveModal("add-garment-modal");
  }

  function handleOpenNavModal() {
    setActiveModal("nav-modal");
  }

  function handleWeatherChange(event) {
    setSelectedWeather(event.target.value);
  }

  return (
    <div className="app">
      <Header
        handleOpenAddGarmentModal={handleOpenAddGarmentModal}
        handleOpenNavModal={handleOpenNavModal}
        onCloseClick={handleCloseItemModal}
      />
      <Main
        clothingItems={clothingItems}
        handleOpenItemModal={handleOpenItemModal}
      />
      <Footer />
      <ItemModal
        card={selectedCard}
        isOpen={activeModal === "item-modal"}
        onCloseClick={handleCloseItemModal}
      />
      <ModalWithForm
        isOpen={activeModal === "add-garment-modal"}
        title="New garment"
        buttonText="Add garment"
        name="add-garment-form"
        handleWeatherChange={handleWeatherChange}
        onCloseClick={handleCloseItemModal}
        handleSubmit={handleSubmit}
        selectedWeather={selectedWeather}
      ></ModalWithForm>
    </div>
  );
}

export default App;
