import React,{useState} from 'react'
import FormInput from '../../components/Form/FormInput';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import './AddStaff.scss'


const AddStaff = () => {
  const [values,setValues]=useState({
    username:"",
    email:"",
    firstname:"",
    lastname:"",
    password:"",
    address:"",

  })

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "User Name",
      label: "User Name",
      required: true,
      errorMessage:
        "Username should be 3-16 characters and shouldnt include any special character!",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      errorMessage: "It should be a valid email address!",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      errorMessage:"Password should be 8-20 characters and include at least 1 letter,1 number and 1 special character@##!",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 4,
      name: "firstname",
      type: "text",
      placeholder: "First Name",
      label: "First Nmae",
    },

    {
      id: 5,
      name: "lastname",
      type: "text",
      placeholder: "Last Name",
      label: "Last Name",
    },

    {
      id: 6,
      name: "address",
      type: "text",
      placeholder: "Address",
      label: "Address",
    },
  ];

const onChange=(e)=>{
  setValues({...values,[e.target.name]:e.target.value})
}  
const handleSubmit=(e)=>{
  e.preventDefault()
 
}
  return (
    <div className="stafflist">
      <Sidebar />
      <div className="stafflistContainer">
        <Navbar />

        <h2>Add Staff </h2>
        <div className="Formfield">
          <form onSubmit={handleSubmit}>
            <h1>Add Staff</h1>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}

            <button>Add Staff</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddStaff