import { Link } from "react-router-dom"
import PropTypes from 'prop-types';

export const Button = ({text, route = ''}) => {
  return (
    <>
      <Link to={route}>
        <button className="header__action-button btn">
          {text}
        </button>
      </Link>
    </>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired
}