import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/Caracteristicas.css";

export const Caracteristicas = () => {

  const [caracteristicasProds, setcaracteristicasProds] = useState([])
  
  useEffect(() => {
    async function getcaracteristicasProds() {
      try {
        const response = await axios.get(`http://localhost:8001/instrumentos`, {
          params: {
            page: 1,
            size: 10,
            sort: 'nombre',
          },
        });
        setcaracteristicasProds(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  
    getcaracteristicasProds();
  }, []);

  return (
    <div className="caracteristicas-container">
      <h2 className="home__title">Caracteristica del Producto</h2>
      <div className="product-grid">
        {caracteristicasProds.map((caracteristicasProduct) => (
          <div className="caracteristicas-card" key={caracteristicasProduct.id}>
            <p>Marca: {caracteristicasProduct.marca}</p>
            <p>Modelo: {caracteristicasProduct.modelo}</p>
            <p>Origen: {caracteristicasProduct.origen}</p>
            <p>Año de Lanzamiento: {caracteristicasProduct.anioLanzamiento}</p>
            <p>Estuche: {caracteristicasProduct.estuche ? 'Sí' : 'No'}</p>
            <p>Acabado: {caracteristicasProduct.acabado}</p>
            <p>Vegano: {caracteristicasProduct.vegano ? 'Sí' : 'No'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Caracteristicas;