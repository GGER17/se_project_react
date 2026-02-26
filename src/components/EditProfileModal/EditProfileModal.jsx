import { useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import ModalWithFormTemplate from "../ModalWithForm/ModalWithFormTemplate";

function EditProfileModal({ isOpen, onCloseClick, onSubmit, currentUser }) {
  const { values, handleChange, setValues } = useForm({
    name: "",
    avatar: "",
  });

  useEffect(() => {
    if (isOpen && currentUser) {
      setValues({
        name: currentUser.name || "",
        avatar: currentUser.avatar || "",
      });
    }
  }, [isOpen, currentUser, setValues]);

  const isFormValid = Object.values(values).every((v) => v.trim() !== "");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(values);
  };

  return (
    <ModalWithFormTemplate
      isOpen={isOpen}
      title="Change profile data"
      name="edit-profile-form"
      buttonText="Save changes"
      isFormValid={isFormValid}
      onCloseClick={onCloseClick}
      handleSubmit={handleSubmit}
    >
      {" "}
      <label className="modal__label">
        {" "}
        Name *{" "}
        <input
          type="text"
          name="name"
          className="modal__input"
          value={values.name}
          onChange={handleChange}
          placeholder="Your name"
          required
        />{" "}
      </label>{" "}
      <label className="modal__label">
        {" "}
        Avatar *{" "}
        <input
          type="url"
          name="avatar"
          className="modal__input"
          value={values.avatar}
          onChange={handleChange}
          placeholder="Link to avatar"
          required
        />{" "}
      </label>{" "}
    </ModalWithFormTemplate>
  );
}

export default EditProfileModal;
