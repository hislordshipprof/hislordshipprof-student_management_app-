import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Tables from "../../components/Table/Tables";
import "./Feedbackleave.scss";
const StudentLeave = () => {
  return (
    <div className="feedlist">
      <Sidebar />
      <div className="feedlistContainer">
        <Navbar />
        <h2>Apply For Student Leave</h2>
        <div className="feedContainer">
          <div className="feedlisttitle">Student Leave Details</div>
          <Tables studentleave="type" />
        </div>
      </div>
    </div>
  );
};

export default StudentLeave;
