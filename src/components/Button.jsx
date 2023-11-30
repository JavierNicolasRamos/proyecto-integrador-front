import { Link } from "react-router-dom"
import PropTypes from 'prop-types';

export const Button = ({text, route = '', color}) => {
  return (
    <>
      <Link to={route}>
        <button className={`header__action-button btn ${color}`}>
          {text}
        </button>
      </Link>
    </>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}