import { Link } from "react-router-dom"
import "../styles/AboutUsCard.css"
import { Button } from "./Button"

export const AboutUsCard = ({image, name, github, linkedin}) => {
  return (
    <>
      <div className="about-us__card">
        <p className="about-us__card__name">{name}</p>
        <img className="about-us__card__image" src={`/src/images/${image}.svg`} alt={`caricatura de ${name}`} />
        <div className="about-us__card__buttons">
          <Link target="_blank" to={`https://github.com/${github}`}>Github</Link>
          <Link to={`http://www.linkedin.com/in/${linkedin}`}>LinkedIn</Link>
        </div>
      </div>
    </>
  )
}
