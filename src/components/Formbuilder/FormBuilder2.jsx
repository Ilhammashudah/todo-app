import React from "react";

const FormBuilder2 = ({
  formFields,
  handleFormChange,
  handleFormSubmit,
  formData,
}) => {
  const formTemPlate = formFields.map((input) => {
    switch (input.type) {
      case "date":
        return (
          <div className="relativee" key={input.id}>
            <label>
              <b>{input.name}</b>

              <input
                type="date"
                name={input.name}
                value={formData[input.name]}
                onChange={(e) => handleFormChange(e.target.value, input.name)}
              />
            </label>
          </div>
        );

      case "radio":
        return (
          <div className="checkbox" key={input.id}>
            <label>
              <b>{input.options[0]}</b>

              <input
                type="radio"
                name={input.name}
                value={input.options[0]}
                onChange={(e) => handleFormChange(e.target.value, input.name)}
              />
            </label>
            <label>
              <b>{input.options[1]}</b>
              <input
                type="radio"
                onChange={(e) => handleFormChange(e.target.value, input.name)}
                name={input.name}
                value={input.options[1]}
              />
            </label>
          </div>
        );
      case "checkbox":
        return (
          <div className="relative" key={input.id}>
            <label>
              <b>{input.name}</b>
              <input
                onChange={(e) =>
                  handleFormChange(e.currentTarget.checked, input.name)
                }
                type="checkbox"
                name={input.name}
                value={formData[input.name]}
              />
            </label>
          </div>
        );
      default:
        return (
          <div className="relativee" key={input.id}>
            <label>
              <b>{input.name}</b>
              <input
                className="signin-input"
                placeholder={input.placeholder}
                onChange={(e) => handleFormChange(e.target.value, input.name)}
                type="text"
                name={input.name}
                value={formData[input.name]}
              />
            </label>
          </div>
        );
    }
  });

  return (
    <>
      <form onSubmit={handleFormSubmit} className="formdiv2">
        <h2 className="signintext">Sign Up</h2>
        {formTemPlate} <button className="submitbtn">Submit</button>
      </form>
    </>
  );
};

export default FormBuilder2;
