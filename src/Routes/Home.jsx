import { Hero } from "../components/Hero";
import { RandomProds } from "../components/RandomProds";
import { RecommendedProds } from "../components/RecommendedProds";
import "../styles/Home.css"

const Home = () => {
  return (
    <>
      <Hero/>
      <RandomProds/>
      <RecommendedProds/>
    </>
  )
}

export default Home