import React from "react";

const SubmitButton = ({ field }) => {
  const { text } = field;
  return (
    <button className="submit-button" type="submit" style={{ width: "100%" }}>
      {text}
    </button>
  );
};

export default SubmitButton;
