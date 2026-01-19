import "./ItemModal.css";

import xwhite from "../../assets/xwhite.svg";

function ItemModal({ card, isOpen, onCloseClick }) {
  function handleCloseItemModal() {
    onCloseClick();
  }

  if (!card) {
    return null;
  }

  return (
    <div className={`modal ${isOpen ? "modal_is-opened" : ""}`}>
      <div className="modal__container">
        <button className="modal__close-btn" onClick={handleCloseItemModal}>
          <img
            className="modal__close-icon"
            src={xwhite}
            alt="Close button"
          />{" "}
        </button>
        <img src={card.link} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <p className="modal__text">{card.name}</p>
          <p className="modal__text">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
