import { AboutUsCard } from "../components"
import "../styles/AboutUs.css"

export const AboutUs = () => {
  return (
    <div className="about-us">
      <h2 className="about-us__title">Sobre nosotros</h2>
      <div className="about-us__container">
        <AboutUsCard 
          name={"Dirty Daro"} image={"https://s3.us-east-2.amazonaws.com/1023c04-grupo1/1702311499047-daro.svg"} 
          github={"dmartin07"} linkedin={"dariomartinbenavidez"}
        />
        <AboutUsCard 
          name={"Dirty Fede"} image={"https://s3.us-east-2.amazonaws.com/1023c04-grupo1/1702311503615-fede.svg"} 
          github={"federico-cloud"} linkedin={"federico-ezequiel-galan"}
        />
        <AboutUsCard 
          name={"Dirty Javi"} image={"https://s3.us-east-2.amazonaws.com/1023c04-grupo1/1702311504132-javi.svg"} 
          github={"JavierNicolasRamos"} linkedin={"javier-nicolas-ramos"}
        />
        <AboutUsCard 
          name={"Dirty Juanse"} image={"https://s3.us-east-2.amazonaws.com/1023c04-grupo1/1702311504647-juanse.svg"} 
          github={"JuanBenassi"} linkedin={"juan-benassi-8979a61b0"}
        />
        <AboutUsCard 
          name={"Dirty Manu"} image={"https://s3.us-east-2.amazonaws.com/1023c04-grupo1/1702311505171-manu.svg"} 
          github={"Figueroajf"} linkedin={"juan-manuel-figueroa-"}
        />
        <AboutUsCard 
          name={"Dirty Nacho"} image={"https://s3.us-east-2.amazonaws.com/1023c04-grupo1/1702311506198-nacho.svg"} 
          github={"IgnacioGibbs"} linkedin={"ignacio-gibbs"}
        />
        <AboutUsCard 
          name={"Dirty Rodri"} image={"https://s3.us-east-2.amazonaws.com/1023c04-grupo1/1702311506662-rodri.svg"} 
          github={"JavierNicolasRamos"} linkedin={"javier-nicolas-ramos"}
        />
      </div>
    </div>
  )
}
