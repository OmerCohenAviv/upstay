import React from "react";
import { types } from "./fieldTypes";
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import Checkboxes from "./CheckboxList";
import Dropdown from "./Dropdown";

const FieldGenerator = ({ field, onChange }) => {
  const { type } = field;
  switch (type) {
    case types.INPUT: {
      return <Input field={field} onChange={onChange} />;
    }
    case types.CHECKBOX_LIST: {
      return <Checkboxes field={field} onChange={onChange} />;
    }
    case types.DROPDOWN: {
      return <Dropdown field={field} onChange={onChange} />;
    }
    case types.SUBMIT_BUTTON: {
      return <SubmitButton field={field} onChange={onChange} />;
    }
    default:
      return <></>;
  }
};

export default FieldGenerator;
