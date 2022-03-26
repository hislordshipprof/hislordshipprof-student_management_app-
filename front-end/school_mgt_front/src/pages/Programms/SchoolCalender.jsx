import React,{useState} from 'react'
import FormInput from '../../components/Form/FormInput';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';

const SchoolCalender = () => {
    const [values, setValues] = useState({
      sessionstartyear: "",
      sessionendyear:"",
    });

    const inputs = [
      {
        id: 1,
        name: "Session Start Year",
        type: "date",
        placeholder: "",
        label: "Session Start Year",
      },
      {
        id: 2,
        name: "Session End Year",
        type: "date",
        placeholder: "",
        label: "Session End Year",
      },
    ];
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
        <h2>Add Session Year </h2>
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

            <button>Add Session Year</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SchoolCalender