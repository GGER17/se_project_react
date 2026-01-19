import "./ModalWithForm.css";
import xgrey from "../../assets/xgrey.svg";

function ModalWithForm({
  isOpen,
  children,
  handleSubmit,
  title,
  buttonText,
  name,
  handleWeatherChange,
  onCloseClick,
  selectedWeather,
}) {
  function handleCloseItemModal() {
    onCloseClick();
  }

  function handleFormInfo(evt) {
    evt.preventDefault();
    const nameInput = document.getElementById("add-garment-name");
    const nameValue = nameInput.value;
    const linkInput = document.getElementById("add-garment-link");
    const linkValue = linkInput.value;
    const formInputs = {
      name: nameValue,
      link: linkValue,
      weather: selectedWeather,
    };

    handleSubmit(formInputs);

    evt.target.reset();
  }

  return (
    <div id="form" className={`modal ${isOpen ? "modal_is-opened" : ""}`}>
      <div className="modal__container modal__form-container">
        <h2 className="modal__title">{title}</h2>
        <button
          type="button"
          className="modal__close-btn modal__close-btn_type_form"
          onClick={handleCloseItemModal}
        >
          <img className="modal__close-icon" src={xgrey} alt="Close button" />
        </button>
        <form onSubmit={handleFormInfo} name={name} className="modal__form">
          {" "}
          <p className="modal__form-header">New garment</p>
          <label htmlFor="add-garment-name" className="modal__form-label">
            Name
            <input
              id="add-garment-name"
              type="text"
              className="modal__form-input"
              placeholder="Name"
              required
              minLength="2"
              maxLength="30"
            />
            <span id="add-garment-name-error" className="modal__error"></span>
          </label>
          <label htmlFor="add-garment-link" className="modal__form-label">
            Image
            <input
              id="add-garment-link"
              type="url"
              className="modal__form-input"
              placeholder="Image URL"
              required
            />
            <span id="add-garment-link-error" className="modal__error"></span>
          </label>
          <fieldset className="modal__form-weather">
            <legend className="modal__form-legend">
              Select the weather type:
            </legend>
            <div className="modal__form-weather-container">
              <div className="modal__form-label-btn">
                <input
                  className="modal__form-radio-btn"
                  type="radio"
                  id="hot"
                  name="weather"
                  value="hot"
                  checked
                  onChange={handleWeatherChange}
                />
                <label className="modal__form-label" htmlFor="hot">
                  Hot
                </label>
              </div>

              <div className="modal__form-label-btn">
                <input
                  className="modal__form-radio-btn"
                  type="radio"
                  id="warm"
                  name="weather"
                  value="warm"
                  onChange={handleWeatherChange}
                />
                <label className="modal__form-label" htmlFor="warm">
                  Warm
                </label>
              </div>

              <div className="modal__form-label-btn">
                <input
                  className="modal__form-radio-btn"
                  type="radio"
                  id="cold"
                  name="weather"
                  value="cold"
                  onChange={handleWeatherChange}
                />
                <label className="modal__form-label" htmlFor="cold">
                  Cold
                </label>
              </div>
            </div>
          </fieldset>
          <button type="submit" className="modal__form-btn">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
