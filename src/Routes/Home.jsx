import ProductCarrusel from "../components/ProductCarrusel";
import { RandomProds } from "../components/RandomProds";
import "../styles/Home.css"

const Home = () => {
  return (
    <>
      <img className="home__hero" src="src/images/banner.svg" alt="imagenes de guitarras Yamaha" />
      <RandomProds/>
      <ProductCarrusel/>
    </>
  )
}

export default Home