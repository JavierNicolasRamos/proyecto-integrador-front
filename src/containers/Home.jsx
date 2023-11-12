import { ProductCarousel, RandomInstruments } from "./index";
import { Hero } from "../components/index";
import "../styles/Home.css"

export const Home = () => {
  return (
    <>
      <Hero/>
      <RandomInstruments/>
      <ProductCarousel/>
    </>
  )
}