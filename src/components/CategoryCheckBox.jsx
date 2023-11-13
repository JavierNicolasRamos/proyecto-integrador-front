import PropTypes from 'prop-types';
import "../styles/CategoryCheckBox.css";

export const CategoryCheckBox = ({ name, id, checked, handleClick }) => {

  return (
    <div className="checkbox">
      <div className="checkbox__filter">
        <input
          type="checkbox"
          name={name}
          id={name}
          value={id}
          defaultChecked={checked}
          onClick={handleClick}
        />
        <label htmlFor={name}>
          {name}
        </label>
      </div>
    </div>
  );
};

CategoryCheckBox.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  checked: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired
};