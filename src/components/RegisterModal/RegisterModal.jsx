import { useEffect } from "react";

import { useForm } from "../../hooks/useForm";
import ModalWithFormTemplate from "../ModalWithForm/ModalWithFormTemplate";

function RegisterModal({
  isOpen,
  handleRegisterSubmit,
  onCloseClick,
  switchModal,
}) {
  const { values, handleChange, setValues } = useForm({
    name: "",
    avatar: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (!isOpen) {
      setValues({ name: "", avatar: "", email: "", password: "" });
    }
  }, [isOpen, setValues]);

  const isFormValid = Object.values(values).every((v) => v.trim() !== "");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleRegisterSubmit(values, () => {
      setValues({ name: "", avatar: "", email: "", password: "" });
    });
  };
  return (
    <ModalWithFormTemplate
      isOpen={isOpen}
      title="Sign up"
      name="register-form"
      buttonText="Sign up"
      buttonOr="or Log In"
      isFormValid={isFormValid}
      onCloseClick={onCloseClick}
      handleSubmit={handleSubmit}
      onOrClick={() => switchModal("login-modal")}
    >
      <label className="modal__label">
        {" "}
        Email*{" "}
        <input
          type="email"
          name="email"
          className="modal__input"
          value={values.email}
          onChange={handleChange}
          required
        />{" "}
      </label>{" "}
      <label className="modal__label">
        {" "}
        Password*{" "}
        <input
          type="password"
          name="password"
          className="modal__input"
          value={values.password}
          onChange={handleChange}
          required
        />
      </label>
      <label className="modal__label">
        Name *
        <input
          type="text"
          name="name"
          className="modal__input"
          value={values.name}
          onChange={handleChange}
          required
        />
      </label>
      <label className="modal__label">
        Avatar URL *
        <input
          type="url"
          name="avatar"
          className="modal__input"
          value={values.avatar}
          onChange={handleChange}
          required
        />
      </label>
    </ModalWithFormTemplate>
  );
}

export default RegisterModal;
