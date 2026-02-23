import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import ItemCard from "../ItemCard/ItemCard";

import "./ClothesSection.css";

function ClothesSection({
  clothingItems,
  handleOpenItemModal,
  handleOpenAddGarmentModal,
}) {
  const currentUser = useContext(CurrentUserContext);

  const userItems = clothingItems.filter(
    (item) => item.owner === currentUser._id,
  );

  return (
    <div className="clothes-section">
      {" "}
      <div className="clothes-section__row">
        {" "}
        <p className="clothes-section__title">Your items</p>{" "}
        <button
          onClick={handleOpenAddGarmentModal}
          className="clothes-section__add-btn"
        >
          {" "}
          + Add new{" "}
        </button>{" "}
      </div>{" "}
      <ul className="clothes-section__cards">
        {" "}
        {userItems.map((card) => (
          <ItemCard
            key={card._id}
            data={card}
            onCardClick={handleOpenItemModal}
          />
        ))}{" "}
      </ul>{" "}
    </div>
  );
}

export default ClothesSection;
