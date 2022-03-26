import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Tables from "../../components/Table/Tables";
// import "./ManageStudent.scss";

const StudentNotification = () => {
  return (
    <div className="managestdlist">
      <Sidebar />
      <div className="managestdlistContainer">
        <Navbar />
        <h2>Student Notification</h2>
        <div className="managestdContainer">
          <div className="stdlisttitle">Student Notification</div>
          <Tables studentnotification="type" />
        </div>
      </div>
    </div>
  );
};

export default StudentNotification;
