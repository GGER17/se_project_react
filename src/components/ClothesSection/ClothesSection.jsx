import ItemCard from "../ItemCard/ItemCard";

import "./ClothesSection.css";

function ClothesSection({
  clothingItems,
  handleOpenItemModal,
  handleOpenAddGarmentModal,
}) {
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
        {clothingItems.map((card) => (
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
