import axios from "axios";
import Card from "./Card";
// import productos from "./Product";
import { useEffect, useState } from "react";

export const RandomProds = () => {

  const [randomProds, setRandomProds] = useState([])
  
  useEffect(() => {
    async function getRandomProds() {
      try {
        const response = await axios.get(`http://localhost:8001/instrumentos`, {
          params: {
            page: 1,
            size: 10,
            sort: 'nombre',
          },
        });
        setRandomProds(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  
    getRandomProds();
  }, []);

  return (
    <>
      <h2 className="home__title">Productos que pueden interesarte</h2>
      <div className="product-grid">
        {randomProds.map((randomProduct) => (
          // console.log(randomProduct)
          <Card 
            key={randomProduct.id} 
            id={randomProduct.id} 
            name={randomProduct.nombre} 
            image={randomProduct.imagen[0].imagen}
            score={randomProduct.puntuacion}
            category={randomProduct.categoria.descripcion}   
          />
        ))}
      </div>
    </>
  );
};
