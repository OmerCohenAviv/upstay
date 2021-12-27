import React from "react";
import "../fields/inputs.css";
import FieldGenerator from "../fields/FieldGenerator";

const Form = ({ formFields, onChange }) => {
  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      {formFields.map((field, i) => (
        <div style={{ margin: "10px 0" }}>
          <FieldGenerator key={i} field={field} onChange={onChange} />
        </div>
      ))}
    </form>
  );
};

export default Form;
