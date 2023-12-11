import { PropTypes } from "prop-types"
import { Link } from "react-router-dom"
import "../styles/AboutUsCard.css"

export const AboutUsCard = ({image, name, github, linkedin}) => {
  return (
    <>
      <div className="about-us__card">
        <p className="about-us__card__name">{name}</p>
        <img className="about-us__card__image" src={image} alt={`caricatura de ${name}`} />
        <div className="about-us__card__buttons">
          <Link target="_blank" to={`https://github.com/${github}`}>Github</Link>
          <Link target="_blank" to={`http://www.linkedin.com/in/${linkedin}`}>LinkedIn</Link>
        </div>
      </div>
    </>
  )
}

AboutUsCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
};