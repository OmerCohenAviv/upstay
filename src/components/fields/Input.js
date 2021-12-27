import React, { useEffect, useState } from "react";

const Input = ({ field, onChange }) => {
  const [error, setError] = useState("");
  const { label, placeholder, name, rules, inputType } = field;
  const validateBeforeOnChange = (value) => {
    const isValid = rules.every((r) => r(value));
    if (isValid) {
      setError("");
      return onChange({ [name]: value });
    }
    setError("Field is not valid");
  };
  return (
    <div className="input-container">
      <label style={{ marginBottom: "4px" }}>{label}</label>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input
          name={name}
          placeholder={placeholder}
          type={inputType}
          onChange={(e) => validateBeforeOnChange(e.target.value)}
        />
        {error && (
          <span
            style={{ textAlign: "start", color: "crimson", fontWeight: "bold" }}
          >
            Error
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
