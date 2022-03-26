import React, { useState } from "react";
import FormInput from "../../components/Form/FormInput";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
// import "./ProgramStyle.scss";

const ViewAttendance = () => {
  const [values, setValues] = useState({
    coursename: "",
  });

  const inputs = [
    {
      id: 1,
      name: "Subject",
      type: "text",
      placeholder: "quantum",
      label: "Subject",
    },
    {
      id: 2,
      name: "sessionYear",
      type: "date",
      placeholder: "",
      label: "Session Year",
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
        <h2>View Attendance </h2>
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

            <button>Fetch Attendance Date</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ViewAttendance;
