import PropTypes from 'prop-types';
import "../styles/CategoryCheckBox.css";

export const CategoryCheckBox = ({ name, id, checked, handlerChange }) => {

  return (
    <div className="checkbox">
      <div className="checkbox__filter">
        <input
          type="checkbox"
          name={name}
          id={name}
          value={id}
          checked={checked}
          onChange={handlerChange}
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
  handlerChange: PropTypes.func.isRequired
};