import React, { useState } from "react";
import "../styles/NewProduct.css";
import NewProductError from "../components/NewProductError";

const NewProduct = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [detail, setDetail] = useState("");
  const [showError, setShowError] = useState(false);
  const [images, setImages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameIsValid = validateName(name);
    const categoryIsValid = validateCategory(category);

    if (!nameIsValid || !categoryIsValid) {
      setShowError(true);
      setshowCard(false);
    } else {
      setShowError(false);
      setshowCard(true);
    }
  };

  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    setImages(selectedImages);
  };

  const validateName = (name) => {
    const trimLeftApplied = name.trimLeft();

    if (trimLeftApplied.length >= 3) {
      return true;
    } else {
      return false;
    }
  };

  const validateCategory = (category) => {
    if (category.length >= 3) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="NewProductPage">
      <section className="NewProductSection">
        <div className="NewProduct-title"><p>Agregar productos</p></div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre del Producto</label>
          <input
            id="name"
            type="text"
            placeholder="Guitarra, Piano, Platillos"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="category">Categoría</label>
          <input
            id="category"
            type="text"
            placeholder="Ingrese la categoría"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <label htmlFor="detail">Descripción</label>
          <textarea
            id="detail"
            type="text"
            placeholder="Guitarra eléctrica, marca, modelo"
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
          />

          <div className="uploadImages">
            <label htmlFor="images"></label>
            <input
              id="images"
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
            />
          </div>

          <input id="agregar" type="submit" value="Agregar" />
        </form>

        {showError && <NewProductError />}
      </section>
      <section className="lastAddedSection"></section>
    </div>
  );
};

export default NewProduct;
