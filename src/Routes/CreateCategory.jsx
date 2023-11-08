import React from "react";
import { usePostCategory } from "../hooks/usePostCategory";
import "../styles/CreateCategory.css";

export const CreateCategory = () => {

    const { isFetching, name, setName, detail, setDetail, setImage, handleSubmit} = usePostCategory();

  return (
    <div className="createCategoryPage">
      <section className="createCategorySection">
        <div className="createCategory-title">
          <p>Agregar categoría</p>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Título</label>
          <input
            id="name"
            type="text"
            placeholder="Ingresa el título de la categoría"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="detail">Descripción</label>
          <textarea
            id="detail"
            type="text"
            placeholder="Ingresa una descripción"
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
              onChange={(e) => setImage(e.target.value)}
            />
          </div>

          <input id="agregar" type="submit" value="Agregar" />
        </form>


      </section>
    </div>
  );
};
