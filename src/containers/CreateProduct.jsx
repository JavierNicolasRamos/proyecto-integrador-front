import { useState, useEffect } from "react";
import { CreateProductError } from "../components/CreateProductError";
import axios from "axios";
import "../styles/CreateProduct.css";

//TODO: Falta refactorizar el componente en hooks y servicios
export const CreateProduct = () => {
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [showError, setShowError] = useState(false);
  const [images, setImages] = useState([]);
  const [, /*showCard*/ setShowCard] = useState(false);
  const [formData/*, setFormData*/] = useState(new FormData());

  // Name validation

  const validateName = (name) => {
    const trimLeftApplied = name.trimLeft();

    if (trimLeftApplied.length >= 3) {
      return true;
    } else {
      return false;
    }
  };

  // Submit Handler

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameIsValid = validateName(name);

    if (!nameIsValid) {
      setShowError(true);
      setShowCard(false);
    } else {
      setShowError(false);
      setShowCard(true);

      // Add properties to FormData
      formData.append("name", name);
      formData.append("detail", detail);
      formData.append("categoryDto[id]", selectedCategoryId);
      images.forEach((image, index) => {
        formData.append(`image[${index}]`, image);
      });

      // To make a POST request to the API:
      axios
      .post("http://localhost:8001/instruments", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then((response) => {
          console.log("Producto agregado exitosamente:", response.data);
          setName("");
          setDetail("");
          setImages([]);
          setSelectedCategoryId("");
        })
        .catch((error) => {
          console.error("Error al agregar el producto:", error);
        });
    }
  };

  // Images handler
  const handleImageChange = (e) => {
    const newImages = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  // Fetch Categories
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8001/category/list")
      .then((response) => {
        const sortedCategories = response.data.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        setCategories(sortedCategories);
      })
      .catch((error) => {
        console.error("Error al obtener categorías:", error);
      });
  }, []);

  return (
    <div className="createProductPage">
      <section className="createProductSection">
        <div className="createProduct-title">
          <p>Agregar producto</p>
        </div>
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
          <select
            id="category"
            name="category"
            value={selectedCategoryId}
            onChange={(e) => {
              setSelectedCategoryId(e.target.value);
            }}
          >
            <option value="">Seleccione una categoría</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>

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

        {showError && <CreateProductError />}
      </section>
    </div>
  );
};