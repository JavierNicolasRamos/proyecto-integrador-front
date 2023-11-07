import { useFetchRandomProds } from "../hooks/index";
import { Card } from "./Card";

export const RandomProds = () => {
  const { randomProds , isFetching } = useFetchRandomProds();

  if ( isFetching ) return <h4>Cargando...</h4>; //hacer un spinner

  return (
    <>
      <h2 className="home__title">Productos que pueden interesarte</h2>
        <div className="product__grid-content">
          {randomProds.map((randomProduct) => (
            <Card 
              key={randomProduct.id} 
              id={randomProduct.id} 
              name={randomProduct.name} 
              image={randomProduct.image[0].image}
              score={randomProduct.score}
              category={randomProduct.category.name}   
            />
          ))}
        </div>
    </>
  );
};
