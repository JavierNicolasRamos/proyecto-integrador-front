import { Link } from "react-router-dom"
import PropTypes from 'prop-types';

export const Button = ({text}) => {
  return (
    <>
      <Link>
        <button className="header__action-button btn">
          {text}
        </button>
      </Link>
    </>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired
}