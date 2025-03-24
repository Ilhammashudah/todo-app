import FormBuilder2 from "../../Formbuilder/FormBuilder2"; 
import {  useState } from "react";

const Signup = () => {





    const formFields = [

    

        {
            id: 1,
            name: "Firstname",
            // placeholder: "Enter your first name",
            value: "",
            type: "text",
            required: true,
          },


        {
          id: 2,
          name: "Middlename",
          // placeholder: "Enter your middle name",
          value: "",
          type: "text",
          required: false,
        },

        {
            id: 3,
            name: "Lastname",
            // placeholder: "Enter your last name",
            value: "",
            type: "text",
            required: true,
          },

          {

            id:4,
            name:"Date Of Birth",
            value:[],
             type:"date",
             required:true,
          },
        {
          id: 5,
          name: "Email",
          // placeholder: "Enter your email",
          value: "",
          type: "text",
          required: true,
        },
        {
          id: 6,
          name: "Password",
          // placeholder: "Enter your password",
          value: "",
          type: "text",
          required: true,
        },

       
        {
          id: 7,
          name: "Gender",
        
          value: "",
          options: ["male", "female"],
          type: "radio",
          required: true,
        },
        {
          id: 8,
          name: "RememberMe",
         
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
      <FormBuilder2
        formFields={formFields}
        formData={formData}
        handleFormChange={handleFormChange}
        handleFormSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default Signup;
