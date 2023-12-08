import { RandomInstruments, ProductCarousel, MainSearchBar } from "../containers/index";
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
          <MainSearchBar/>
          <RandomInstruments instruments={randomsInstruments}/>
          <ProductCarousel/>
          </>
        )
      }
    </>
  )
}