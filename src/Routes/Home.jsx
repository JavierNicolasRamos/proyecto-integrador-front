import { Hero } from "../components/Hero";
import { RandomProds } from "../components/RandomProds";
import { RecommendedProds } from "../components/RecommendedProds";
import "../styles/Home.css"
import Carousel from "./Carousel";

const Home = () => {
  return (
    <>
      <Hero/>
      <RandomProds/>
      <Carousel/>
    </>
  )
}

export default Home