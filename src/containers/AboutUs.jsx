import { AboutUsCard } from "../components"
import "../styles/AboutUs.css"

export const AboutUs = () => {
  return (
    <div className="about-us">
      <h2 className="about-us__title">Sobre nosotros</h2>
      <div className="about-us__container">
        <AboutUsCard 
          name={"Dirty Daro"} image={"daro"} 
          github={"dmartin07"} linkedin={"darío-martín-benavidez-306299252"}
        />
        <AboutUsCard 
          name={"Dirty Fede"} image={"fede"} 
          github={"federico-cloud"} linkedin={"federico-ezequiel-galan"}
        />
        <AboutUsCard 
          name={"Dirty Javi"} image={"javi"} 
          github={"JavierNicolasRamos"} linkedin={"javier-nicolas-ramos"}
        />
        <AboutUsCard 
          name={"Dirty Juanse"} image={"juanse"} 
          github={"JuanBenassi"} linkedin={"juan-benassi-8979a61b0"}
        />
        <AboutUsCard 
          name={"Dirty Manu"} image={"manu"} 
          github={"Figueroajf"} linkedin={"juan-manuel-figueroa-"}
        />
        <AboutUsCard 
          name={"Dirty Nacho"} image={"nacho"} 
          github={"IgnacioGibbs"} linkedin={"ignacio-gibbs"}
        />
        <AboutUsCard 
          name={"Dirty Rodri"} image={"rodri"} 
          github={"JavierNicolasRamos"} linkedin={"javier-nicolas-ramos"}
        />
      </div>
    </div>
  )
}
