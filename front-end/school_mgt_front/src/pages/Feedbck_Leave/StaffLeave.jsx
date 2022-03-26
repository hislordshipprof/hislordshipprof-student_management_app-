import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Tables from "../../components/Table/Tables";
import "./Feedbackleave.scss";
const StaffLeave = () => {
  return (
    <div className="feedlist">
      <Sidebar />
      <div className="feedlistContainer">
        <Navbar />
        <h2>Staff Apply For Leave</h2>
        <div className="feedContainer">
          <div className="feedlisttitle">Staff Leave Details</div>
          <Tables staffleave="type"  />
        </div>
      </div>
    </div>
  );
};

export default StaffLeave;
