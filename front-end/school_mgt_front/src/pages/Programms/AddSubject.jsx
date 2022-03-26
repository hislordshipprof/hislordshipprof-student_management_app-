import React,{useState} from 'react'
import FormInput from '../../components/Form/FormInput';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import './ProgramStyle.scss'
const AddSubject = () => {
const [values, setValues] = useState({
  subjectname: "",
  course:"",
  staff:"",
});

const inputs=[
  {
    id:1,
    name:"Subject Name",
    type:"text",
    placeholder:"Enter Subject",
    label:"Subject Name"
  },
  {
    id:2,
    name:"Course",
    type:"text",
    placeholder:"",
    label:"Course"
  },
  {
    id:3,
    name:"Staff",
    type:"text",
    placeholder:"",
    label:"Staff"
  },
]

const onChange=(e)=>{
  setValues({...values, [e.target.name]: e.target.name})
}
const handleSubmit=(e)=>(
  e.preventDefault
)
  return (
    <div className="program">
      <Sidebar />
      <div className="programContainer">
        <Navbar />
        <h2>Add Subject </h2>
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

export default AddSubject