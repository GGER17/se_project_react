import "./ModalWithForm.css";
import xgrey from "../../assets/xgrey.svg";

function ModalWithForm({
  isOpen,
  children,
  title,
  buttonText,
  name,
  onCloseClick,
  values,
  handleChange,
  handleChangeSubmit,
  isFormValid,
}) {
  function handleCloseItemModal() {
    onCloseClick();
  }

  return (
    <div
      className={`modal ${isOpen ? "modal_is-opened" : ""}`}
      onClick={onCloseClick}
    >
      <div
        className="modal__container modal__container-form"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal__close-btn modal__close-btn_type_form"
          onClick={handleCloseItemModal}
        >
          <img className="modal__close-icon" src={xgrey} alt="Close button" />
        </button>
        <form onSubmit={handleChangeSubmit} name={name} className="modal__form">
          <h2 className="modal__title">{title}</h2>{" "}
          <label htmlFor="add-garment-name" className="modal__label">
            Name
            <input
              id="add-garment-name"
              type="text"
              className="modal__input"
              placeholder="Name"
              name="name"
              required
              minLength="2"
              maxLength="30"
              value={values.name}
              onChange={handleChange}
            />
            <span id="add-garment-name-error" className="modal__error"></span>
          </label>
          <label htmlFor="add-garment-link" className="modal__label">
            Image
            <input
              id="add-garment-link"
              type="url"
              className="modal__input"
              placeholder="Image URL"
              name="imageUrl"
              required
              value={values.imageUrl}
              onChange={handleChange}
            />
            <span id="add-garment-link-error" className="modal__error"></span>
          </label>
          <fieldset className="modal__weather">
            <legend className="modal__legend">Select the weather type:</legend>
            <div className="modal__radio-group">
              <div className="modal__radio-label">
                <input
                  className="modal__radio"
                  type="radio"
                  id="hot"
                  name="weather"
                  value="hot"
                  checked={values.weather === "hot"}
                  onChange={handleChange}
                />
                <label className="modal__radio-weather" htmlFor="hot">
                  Hot
                </label>
              </div>

              <div className="modal__radio-label">
                <input
                  className="modal__radio"
                  type="radio"
                  id="warm"
                  name="weather"
                  value="warm"
                  checked={values.weather === "warm"}
                  onChange={handleChange}
                />
                <label className="modal__radio-weather" htmlFor="warm">
                  Warm
                </label>
              </div>

              <div className="modal__radio-label">
                <input
                  className="modal__radio"
                  type="radio"
                  id="cold"
                  name="weather"
                  value="cold"
                  checked={values.weather === "cold"}
                  onChange={handleChange}
                />
                <label className="modal__radio-weather" htmlFor="cold">
                  Cold
                </label>
              </div>
            </div>
          </fieldset>
          <button
            type="submit"
            className={`modal__submit-btn ${!isFormValid ? "modal__submit-btn_disabled" : ""}`}
            disabled={!isFormValid}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
