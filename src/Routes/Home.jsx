import { ProductCarrusel } from "../components/ProductCarrusel";
import { Hero } from "../components/Hero";
import { RandomProds } from "../components/RandomProds";
import "../styles/Home.css"

export const Home = () => {
  return (
    <>
      <Hero/>
      <RandomProds/>
      <ProductCarrusel/>
    </>
  )
}