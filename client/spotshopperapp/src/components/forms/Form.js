import React from "react";
import { makeRequest } from "../../api/utils";
import FormInput from "./FormInput";
import arrowsymbol from "../../arrow-button.png";
import { useState } from "react";
import "./Form.css";

const dataTypeDefaults = {
  text: "",
  password: "",
};

const getDefault = (input) => {
  return input.default ?? dataTypeDefaults?.[input.type] ?? "";
};

const Form = ({ handleData, method, action, inputs, handleValidation }) => {
  const [values, setValues] = useState({});
  const [loading, setLoading] = useState(false);
  React.useEffect(() => {
    setValues(
      Object.assign(
        {},
        ...inputs.map((input) => ({ [input.name]: getDefault(input) }))
      )
    );
  }, [inputs]);
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const setError = ({ name, message }) => {
    setValues({
      ...values,
      [name]: { ...values[name], errorMessage: message },
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const isValid = handleValidation ?handleValidation({ values, setValues, setError }):true;
    isValid
      ? makeRequest({
          absoluteUrl: action,
          method: method,
          body:JSON.stringify(values),
          onError: () => {
            setLoading(false);
          },
          onSuccess: (data) => {
            handleData({ setLoading, apiData: data });
          },
        })
      : setLoading(false);
  };
  return (
    <form method={method} action={action} onSubmit={handleSubmit}>
      {inputs.map((input) => (
        <FormInput
          key={input.id}
          {...input}
          value={values[input.name]}
          onChange={onChange}
        />
      ))}

      <div>
        <button className="submitbutton" type="submit">
          <img
            src={arrowsymbol}
            width="50"
            height="50"
            alt="Right Arrow Button"
          />
        </button>
      </div>
    </form>
  );
};

export default Form;
