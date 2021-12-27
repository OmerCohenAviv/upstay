import React from "react";

const Dropdown = ({ field, onChange }) => {
  const { name, options, label } = field;
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "start" }}
    >
      <span style={{ marginBottom: "10px" }}>{label}</span>
      <select
        name={name}
        id="cars"
        onChange={(e) => onChange({ [name]: e.target.value })}
      >
        {options.map((o) => (
          <option value={o.value} key={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
