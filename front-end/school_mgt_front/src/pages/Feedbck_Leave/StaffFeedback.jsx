import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Tables from "../../components/Table/Tables";
import "./Feedbackleave.scss";
const StaffFeedback = () => {
  return (
    <div className="feedlist">
      <Sidebar />
      <div className="feedlistContainer">
        <Navbar />
        <h2>Staff Feedback</h2>
        <div className="feedContainer">
          <div className="feedlisttitle">Staff Feedback Details</div>
          <Tables feedbackstaff="type" action='action'/>
        </div>
      </div>
    </div>
  );
};

export default StaffFeedback;
