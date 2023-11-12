import { useFormCreateInstrument, useImageHandlerCreateInstrument, useFetchCategories } from "../hooks/index";
import { postInstrument } from "../services/index";
import { CreateInstrumentError } from "../components/index";
import "../styles/CreateProduct.css";

export const CreateInstrument = () => {
  const validate = (values) => {
    let errors = {};
    if (!values.name || values.name.trim().length < 3) {
      errors.name = "El nombre es requerido y debe tener al menos 3 caracteres.";
    }
    return errors;
  };

  const { values, /*errors,*/ showError, /*showCard,*/ handleChange/*, handleSubmit*/ } = useFormCreateInstrument(
    { name: "", detail: "" },
    validate
  );

  const { images, handleImageChange } = useImageHandlerCreateInstrument();
  const { categories, selectedCategoryId, setSelectedCategoryId/*, isFetching */ } = useFetchCategories();

  const submitForm = async () => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("detail", values.detail);
    images.forEach((image, index) => {
      formData.append(`images[${index}]`, image);
    });
    formData.append("category", selectedCategoryId);
    await postInstrument(formData);
  };
  
  return (
    <div className="createProductPage">
      <section className="createProductSection">
        <div className="CreateInstrument-title">
          <p>Agregar producto</p>
        </div>
        <form onSubmit={submitForm}>
          <label htmlFor="name">Nombre del Producto</label>
          <input
            id="name"
            type="text"
            placeholder="Guitarra, Piano, Platillos"
            value={name}
            onChange={handleChange}
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
            value={values.detail}
            onChange={handleChange}
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

        {showError && <CreateInstrumentError />}
      </section>
    </div>
  );
};
