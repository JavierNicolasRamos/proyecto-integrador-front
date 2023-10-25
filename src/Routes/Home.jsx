import Card from "../components/Card";
import productos from '../components/Product';
import "../styles/Home.css"

const Home = () => {
  return (
    <>
      <img className="home__hero" src="src/images/banner.svg" alt="imagenes de guitarras Yamaha" />
      <h2 className="home__title">Productos que pueden interesarte</h2>
      <div className="product-grid">
        {
          productos.map((producto) => (
            <Card key={producto.id} producto={producto} />
          ))
        }
      </div>
    </>
  )
}

export default Home