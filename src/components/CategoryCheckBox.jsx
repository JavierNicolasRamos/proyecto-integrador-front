import "../styles/CategoryCheckBox.css";
import PropTypes from 'prop-types';

export const CategoryCheckBox = ({ name, id, checked, handleCheckboxChange, handleClick }) => {

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
          onChange={handleCheckboxChange}
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
  handleCheckboxChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired
};