import { useEffect, useState } from 'react';
import Card  from './Card'
import axios from 'axios';

export const RecommendedProds = () => {
  
  const [bestProds, setBestProds] = useState([])

  useEffect(() => {
    async function getBestProds() {
      try {
        const response = await axios.get(`http://localhost:8002/instrumentos/paginado`, {
          params: {
            page: 0,
            size: 5,
            sort: 'puntuacion,desc',
          },
        });
        setBestProds(response.data.content);
      } catch (error) {
        console.error(error);
      }
    }
  
    getBestProds();
  }, []);

  return (
    <>
      <h2 className="home__title">Mejores puntuados</h2>
      <div className="product-grid">
        {
          bestProds.map((bestProduct) => (
            <Card 
              key={bestProduct.id} 
              id={bestProduct.id} 
              name={bestProduct.nombre} 
              image={bestProduct.imagen[0].imagen} 
              score={bestProduct.puntuacion}
              category={bestProduct.categoria.descripcion}  
            />
          ))
        }
      </div>
    </>
  )
}