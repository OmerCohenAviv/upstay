import React from "react";

const DynamicFormField = ({ input }) => {
  const { label, placeholder, name, rules, type } = input;
  return (
    <div>
      <label>{label}</label>
      <input name={name} placeholder={placeholder} type={type} />
    </div>
  );
};

export default DynamicFormField;
