import { ProductCarousel, RandomProds } from "../containers/index";
import { Hero } from "../components/index";
import "../styles/Home.css"

export const Home = () => {
  return (
    <>
      <Hero/>
      <RandomProds/>
      <ProductCarousel/>
    </>
  )
}