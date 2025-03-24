import { useEffect, useState } from "react";
import FormBuilder from "../../Formbuilder/FormBuilder";
import { useSelector } from "react-redux";
// import { userSlice } from "../../../brain/features/user";

const SignIn = () => {
  const userSlice = useSelector((store) => store.userSlice.user);

  useEffect(() => {
    console.log(userSlice);
  }, []);

  const formFields = [
    {
      id: 1,
      name: "Fullname",
      // placeholder: "Enter your full name",
      value: "",
      type: "text",
      required: true,
    },
    {
      id: 2,
      name: "Email",
      // placeholder: "Enter your email",
      value: "",
      type: "text",
      required: true,
    },
    {
      id: 3,
      name: "Password",
      // placeholder: "Enter your password",
      value: "",
      type: "text",
      required: true,
    },
   
    {
      id: 5,
      name: "Remember me",

      value: "",
      type: "checkbox",
      required: true,
    },
  ];

  const formValues = formFields.reduce(
    (acc, curr) => ({ ...acc, [curr.name]: curr.value }, {})
  );

  const [formData, setFOrmData] = useState(formValues);

  const handleFormChange = (newValue, name) => {
    setFOrmData((prev) => ({ ...prev, [name]: newValue }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="signin-maincontainer">
      <FormBuilder
        formFields={formFields}
        formData={formData}
        handleFormChange={handleFormChange}
        handleFormSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default SignIn;
