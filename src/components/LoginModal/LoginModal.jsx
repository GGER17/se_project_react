import { useEffect } from "react";

import { useForm } from "../../hooks/useForm";
import ModalWithFormTemplate from "../ModalWithForm/ModalWithFormTemplate";

function LoginModal({ isOpen, handleLoginSubmit, onCloseClick, switchModal }) {
  const { values, handleChange, setValues } = useForm({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (!isOpen) {
      setValues({ email: "", password: "" });
    }
  }, [isOpen, setValues]);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLoginSubmit(values, () => {
      setValues({ email: "", password: "" });
    });
  };

  return (
    <ModalWithFormTemplate
      isOpen={isOpen}
      title="Log In"
      name="login-form"
      buttonText="Log In"
      buttonOr="or Sign Up"
      onCloseClick={onCloseClick}
      handleSubmit={handleSubmit}
      onOrClick={() => switchModal("register-modal")}
    >
      {" "}
      <label className="modal__label">
        {" "}
        Email{" "}
        <input
          type="email"
          name="email"
          className="modal__input"
          value={values.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />{" "}
      </label>{" "}
      <label className="modal__label">
        {" "}
        Password{" "}
        <input
          type="password"
          name="password"
          className="modal__input"
          value={values.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />{" "}
      </label>{" "}
    </ModalWithFormTemplate>
  );
}

export default LoginModal;
