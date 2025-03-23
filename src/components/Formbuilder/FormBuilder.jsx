import { Link } from "react-router-dom";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

const FormBuilder = ({
  formFields,
  handleFormChange,
  handleFormSubmit,
  formData,
}) => {
  const formTemPlate = formFields.map((input) => {
    const getIcon = (inputName) => {
      switch (inputName.toLowerCase()) {
        case "email":
          return <FaEnvelope className="input-iconn" />;
        case "password":
          return <FaLock className="input-icon" />;
        case "fullname":
          return <FaUser className="input-icon" />;
        default:
          return null;
      }
    };

    switch (input.type) {
      case "date":
        return (
          <div className="relative" key={input.id}>
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
          <div className="relative" key={input.id}>
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
              {getIcon(input.name)}
            </label>
          </div>
        );
    }
  });

  return (
    <>
      <form onSubmit={handleFormSubmit} className="formdiv">
        <h2 className="signintext">Sign In</h2>
        {formTemPlate} <button className="submitbtn">Submit</button>
        <div className="signupdiv">
          <p>Don't have an Account? </p>
          <Link to={"/SignUp"} className="Link">
            {" "}
            Sign Up
          </Link>
        </div>
      </form>
    </>
  );
};

export default FormBuilder;
