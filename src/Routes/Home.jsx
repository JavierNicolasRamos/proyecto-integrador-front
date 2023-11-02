import { RandomProds } from "../components/RandomProds";
import { RecommendedProds } from "../components/RecommendedProds";
import "../styles/Home.css"
import Carousel from "./Carousel";

const Home = () => {
  return (
    <>
      <img className="home__hero" src="src/images/banner.svg" alt="imagenes de guitarras Yamaha" />
      <RandomProds/>
      <Carousel/>
    </>
  )
}

export default Home