import React,{useState} from 'react'
import FormInput from '../../components/Form/FormInput';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import './ProgramStyle.scss'


const AddCourse = () => {
  const [values,setValues]=useState({
    coursename:"",
  

  })

  const inputs = [
    {
      id: 1,
      name: "Course Name",
      type: "text",
      placeholder: "Enter Course",
      label: "Course Name",
    },
]
const onChange = (e) => {
  setValues({ ...values, [e.target.name]: e.target.value });
};
const handleSubmit = (e) => {
  e.preventDefault();
};


  return (
    <div className="program">
      <Sidebar />
      <div className="programContainer">
        <Navbar />
        <h2>Add Course </h2>
        <div className="Formfield">
          <form onSubmit={handleSubmit}>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}

            <button>Add Course</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCourse