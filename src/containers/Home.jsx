import { RandomInstruments, ProductCarousel } from "../containers/index";
import { Hero, Spinner } from "../components/index";
import "../styles/Home.css"
import { useGetRandomInstruments } from "../hooks/index";

export const Home = () => {
  
  const { randomsInstruments, isFetching } = useGetRandomInstruments()

  return (
    <>
      {
        isFetching
        ? <div className="home__spinner"><Spinner/></div>
        : (
          <>
          <Hero/>
          <RandomInstruments instruments={randomsInstruments}/>
          <ProductCarousel/>
          </>
        )
      }
    </>
  )
}