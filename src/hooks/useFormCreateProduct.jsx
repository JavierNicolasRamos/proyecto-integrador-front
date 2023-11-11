import { useState } from "react";

export const useFormCreateProduct = (initialState, validate) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [showError, setShowError] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setShowError(false);
      setShowCard(true);
      return values;
    } else {
      setShowError(true);
      setShowCard(false);
    }
  };

  return { values, errors, showError, showCard, handleChange, handleSubmit };
};