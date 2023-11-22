import { RandomInstruments } from "./index";
import { Hero, ProductCarousel } from "../components/index";
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