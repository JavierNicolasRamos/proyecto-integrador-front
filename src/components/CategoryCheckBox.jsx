import { useState } from "react";
import "../styles/CategoryCheckBox.css";
import PropTypes from 'prop-types';

export const CategoryCheckBox = ({ name }) => {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    console.log(isChecked)
    setChecked(!isChecked);
  };

  return (
    <div className="checkbox">
      <div className="checkbox__filter">
        <input
          type="checkbox"
          name={name}
          id={name}
          checked={isChecked}
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
};
