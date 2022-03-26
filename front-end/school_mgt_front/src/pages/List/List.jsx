import React,{useState,useEffect} from 'react'
import FormInput from '../../components/Form/FormInput'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import './List.scss'
const List = () => {
  const [values,setValue]=useState({
    username:"",
    email:"",
    firstname:"",
    lastname:"",
    changepassword:"",
  })

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      errorMessage:
        "Username should be 3-16 characters and shouldnt include any special character!",
      placeholder: "Username",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      errorMessage: "It should be a valid email address!",
      placeholder: "Email",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "firstname",
      type: "text",
      errorMessage: "",
      placeholder: "FirstName",
      label: "FirstName",
    },
    {
      id: 4,
      name: "lastname",
      type: "text",
      errorMessage: "",
      placeholder: "LastName",
      label: "LastName",
    },
    {
      id: 5,
      name: "changepassword",
      type: "password",
      placeholder: "Change Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter,1 number and 1 special character@#!",

      label: "Change Password",
      required: true,
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    },
  ];

const onChange=(e)=>{
  setValue({...values, [e.target.name]: e.target.value})
}


const handleSubmit=(e)=>{
  e.preventDefault();
}
console.log(values)
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />

        <h2>Edit User profile </h2>
        <div className="Formfield">
          <form onSubmit={handleSubmit}>
            <h1>Edit User Profile</h1>
            {inputs.map((input) => (
              <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
            ))}

            <button>Save Profile</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default List