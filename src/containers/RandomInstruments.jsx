import { useGetRandomInstruments} from "../hooks/index";
import { Card }  from "../components/index";

export const RandomInstruments = () => {
  const { randomsInstruments } = useGetRandomInstruments()  
  const isHome = location.pathname === "/home"

  return (
    <>
      <div className="product-content">
        <h2 className={`home__title ${isHome ? '' : 'hide'}`}>Productos que pueden interesarte</h2>
        <div className="product__grid-randomprods">
        {randomsInstruments.map(({ id, name, image, score, category }) => (
            <Card 
              key={id} 
              id={id} 
              name={name} 
              image={image[0].image}
              score={score}
              category={category.name}   
            />
          ))}
        </div>
      </div>
    </>
  );
};
