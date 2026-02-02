import { useEffect } from "react";

import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function AddItemModal({ isOpen, handleAddItemSubmit, onCloseClick }) {
  const { values, handleChange, setValues } = useForm({
    name: "",
    weather: "hot",
    imageUrl: "",
  });

  useEffect(() => {
    if (!isOpen) {
      setValues({ name: "", imageUrl: "", weather: "hot" });
    }
  }, [isOpen, setValues]);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddItemSubmit(values, () => {
      setValues({ name: "", imageUrl: "", weather: "hot" });
    });
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      title="New garment"
      name="add-garment-form"
      buttonText="Add garment"
      onCloseClick={onCloseClick}
      values={values}
      handleChange={handleChange}
      handleChangeSubmit={handleSubmit}
    />
  );
}

export default AddItemModal;
