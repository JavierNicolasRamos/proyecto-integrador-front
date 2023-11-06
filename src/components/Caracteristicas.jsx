// import axios from "axios";
// import { useEffect, useState } from "react";
import "../styles/Caracteristicas.css";
// import { useParams } from "react-router-dom";

export const Caracteristicas = () => {

  // const id = useParams()
  // const [caracteristicasProds, setcaracteristicasProds] = useState([])
  
  // useEffect(() => {
  //   async function getcaracteristicasProds() {
  //     try {
  //       const response = await axios.get(`http://localhost:8001/instrumentos/${id}`)
  //       // setcaracteristicasProds(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  
  //   getcaracteristicasProds();
  // }, []);

  return (
    <div className="caracteristicas-container">
      <div className="data-grid">
        <div className="caracteristicas-card">
          <p>Marca:</p>
          <p>Modelo:</p>
          <p>Origen:</p>
          <p>Año de Lanzamiento: </p>
          <p>Estuche:</p>
          <p>Acabado:</p>
          <p>Vegano:</p>
        </div>
      </div>
    </div>
  );
};
export default Caracteristicas;