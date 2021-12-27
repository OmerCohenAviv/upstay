import React, { useState } from "react";
import "./App.css";
import Form from "./components/form/form";
import { types } from "./components/fields/fieldTypes";

const formFields = [
  {
    type: types.INPUT,
    name: "first_name",
    placeholder: "Your First Name",
    label: "First Name",
    rules: [(v) => !!v.trim()],
  },
  {
    rules: [(v) => !!v.trim()],
    type: types.INPUT,
    inputType: "text",
    name: "last_name",
    placeholder: "Your First Name",
    label: "Last Name",
  },
  {
    rules: [(v) => !!v.trim()],
    type: types.INPUT,
    inputType: "number",
    name: "phone",
    placeholder: "Your Phone",
    label: "Phone Number",
  },
  {
    type: types.CHECKBOX_LIST,
    name: "favorite_food",
    label: "Favorite Food",
    options: [
      { label: "Pasta", value: "pasta" },
      { label: "Pizza", value: "pizza" },
    ],
  },
  {
    type: types.DROPDOWN,
    name: "car",
    label: "Cars",
    options: [
      { label: "Ferrari", value: "ferrari" },
      { label: "Volvo", value: "volvo" },
    ],
  },
  {
    type: types.SUBMIT_BUTTON,
    text: "Submit Special From",
    name: "favorite_food",
  },
];

function App() {
  const [formValues, setFormValues] = useState(null);
  const onChangeForm = (updatedValue) => {
    setFormValues((prevForm) => ({ ...prevForm, ...updatedValue }));
  };
  return (
    <div className="App">
      <Form formFields={formFields} onChange={onChangeForm} />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          padding: "35px",
          backgroundColor: "#05f080",
          fontWeight: "bold",
        }}
      >
        {formValues ? JSON.stringify(formValues) : "Waiting For User Change"}
      </div>
    </div>
  );
}

export default App;
