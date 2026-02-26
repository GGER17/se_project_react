import "./ModalWithForm.css";
import xgrey from "../../assets/xgrey.svg";

function ModalWithFormTemplate({
  isOpen,
  title,
  name,
  buttonText,
  isFormValid,
  buttonOr,
  onCloseClick,
  onOrClick,
  handleSubmit,
  children,
}) {
  return (
    <div
      className={`modal ${isOpen ? "modal_is-opened" : ""}`}
      onClick={onCloseClick}
    >
      {" "}
      <div
        className="modal__container modal__container-form"
        onClick={(e) => e.stopPropagation()}
      >
        {" "}
        <button
          type="button"
          className="modal__close-btn modal__close-btn_type_form"
          onClick={onCloseClick}
        >
          {" "}
          <img
            className="modal__close-icon"
            src={xgrey}
            alt="Close button"
          />{" "}
        </button>{" "}
        <form onSubmit={handleSubmit} name={name} className="modal__form">
          {" "}
          <h2 className="modal__title">{title}</h2> {children}{" "}
          <div className="modal__submit-btn-template">
            <button
              type="submit"
              className={`modal__submit-btn ${!isFormValid ? "modal__submit-btn_disabled" : ""}`}
              disabled={!isFormValid}
            >
              {" "}
              {buttonText}{" "}
            </button>{" "}
            <button type="button" className="modal__btn-or" onClick={onOrClick}>
              {" "}
              {buttonOr}{" "}
            </button>
          </div>
        </form>{" "}
      </div>{" "}
    </div>
  );
}
export default ModalWithFormTemplate;
