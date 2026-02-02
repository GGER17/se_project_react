import "./DeleteModal.css";
import xgrey from "../../assets/xgrey.svg";

function DeleteModal({ card, isOpen, onCloseClick, handleDeleteItem }) {
  if (!card) return null;

  function handleDelete() {
    handleDeleteItem(card);
  }

  return (
    <div
      className={`modal ${isOpen ? "modal_is-opened" : ""}`}
      onClick={onCloseClick}
    >
      {" "}
      <div
        className="modal__container modal__container_type_delete"
        onClick={(e) => e.stopPropagation()}
      >
        {" "}
        <button
          className="modal__close-btn modal__close-delete-btn"
          onClick={onCloseClick}
        >
          {" "}
          <img
            className="modal__close-icon"
            src={xgrey}
            alt="Close button"
          />{" "}
        </button>{" "}
        <div className="modal__delete-container">
          {" "}
          <div className="modal__texts-container">
            <p className="modal__text">
              {" "}
              Are you sure you want to delete this item?{" "}
            </p>{" "}
            <p className="modal__text">This action is irreversible.</p>{" "}
          </div>
          <div className="modal__delete-btns">
            <button className="modal__delete-button" onClick={handleDelete}>
              {" "}
              Yes, delete item{" "}
            </button>{" "}
            <button className="modal__cancel-button" onClick={onCloseClick}>
              {" "}
              Cancel{" "}
            </button>{" "}
          </div>
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default DeleteModal;
