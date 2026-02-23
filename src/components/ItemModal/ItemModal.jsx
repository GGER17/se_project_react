import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import "./ItemModal.css";
import DeleteModal from "../DeleteModal/DeleteModal";

import xwhite from "../../assets/xwhite.svg";

function ItemModal({
  card,
  isOpen,
  onCloseClick,
  handleDeleteItem,
  handleDeleteModal,
}) {
  function handleCloseItemModal() {
    onCloseClick();
  }

  if (!card) {
    return null;
  }

  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner === currentUser._id;

  return (
    <div
      className={`modal ${isOpen ? "modal_is-opened" : ""}`}
      onClick={onCloseClick}
    >
      <div
        className="modal__container modal__container_type_image"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal__close-btn" onClick={handleCloseItemModal}>
          <img
            className="modal__close-icon"
            src={xwhite}
            alt="Close button"
          />{" "}
        </button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <div className="modal__footer-row">
            <p className="modal__text">{card.name}</p>
            {isOwn && (
              <button
                onClick={() => handleDeleteModal(card)}
                className="modal__delete-btn"
              >
                {" "}
                Delete item
              </button>
            )}
          </div>
          <p className="modal__text">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
