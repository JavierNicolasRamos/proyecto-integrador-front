import Card from "./Card";
import { useFetchRandomProds } from "../hooks/index";

export const RandomProds = () => {
  const { randomProds , isFetching } = useFetchRandomProds();

  if ( isFetching ) return <h4>Cargando...</h4>; //hacer un spinner

  return (
    <>
      <h2 className="home__title">Productos que pueden interesarte</h2>
      <div className="product-grid">
        {randomProds.map((randomProduct) => (
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
