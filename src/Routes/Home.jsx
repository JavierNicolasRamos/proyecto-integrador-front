import Card from "../components/Card";
import productos from '../components/Product';
import { RandomProds } from "../components/RandomProds";
import { RecommendedProds } from "../components/RecommendedProds";
import "../styles/Home.css"

const Home = () => {
  return (
    <>
      <img className="home__hero" src="src/images/banner.svg" alt="imagenes de guitarras Yamaha" />
      <RandomProds/>
      <RecommendedProds/>
    </>
  )
}

export default Home