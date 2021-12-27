import React from "react";

const Checkboxes = ({ field, onChange }) => {
  const { name, options } = field;

  return (
    <div>
      {options.map((option) => (
        <div>
          <label>{option.label}</label>
          <input
            type="checkbox"
            value={option.value}
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default Checkboxes;
