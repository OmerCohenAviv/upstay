import React, { useEffect, useState } from "react";

const Checkboxes = ({ field, onChange }) => {
  const [checkboxesValue, setCheckboxesValue] = useState([]);
  const { name, options, label } = field;
  const onChangeCheckbox = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      return setCheckboxesValue((prevState) => [...prevState, value]);
    }
    return setCheckboxesValue((prevState) =>
      prevState.filter((v) => v !== value)
    );
  };

  useEffect(() => {
    onChange({ [name]: checkboxesValue });
  }, [checkboxesValue]);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "start" }}
    >
      <h4>{label}</h4>
      {options.map((option) => (
        <div>
          <label>{option.label}</label>
          <input
            type="checkbox"
            value={option.value}
            onChange={(e) => onChangeCheckbox(e)}
          />
        </div>
      ))}
    </div>
  );
};

export default Checkboxes;
