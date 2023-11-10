import { useGetRandomProds } from "../hooks/useGetRandomProds";
import { Card }  from "./Card";

export const RandomProds = () => {
  
  const { randomProds } = useGetRandomProds()  
  const isHome = location.pathname === "/home"

  return (
    <>
      <div className="product-content">
        <h2 className={`home__title ${isHome ? '' : 'hide'}`}>Productos que pueden interesarte</h2>
        <div className="product__grid-randomprods">
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
      </div>
    </>
  );
};
