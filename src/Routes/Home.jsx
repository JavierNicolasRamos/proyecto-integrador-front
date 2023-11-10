import { ProductCarousel } from "../components/ProductCarousel";
import { Hero } from "../components/Hero";
import { RandomProds } from "../components/RandomProds";
import "../styles/Home.css"
import { PaginateButtons } from "../components/PaginateButtons";

export const Home = () => {

  return (
    <>
      <Hero/>
      <RandomProds/>
      <PaginateButtons/>
      <ProductCarousel/>
    </>
  )
}