import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Tables from "../../components/Table/Tables";
// import "./ManageStudent.scss";

const StaffNotification = () => {
  return (
    <div className="managestdlist">
      <Sidebar />
      <div className="managestdlistContainer">
        <Navbar />
        <h2>Staff Notifications</h2>
        <div className="managestdContainer">
          <div className="stdlisttitle">Staff Notification Details</div>
          <Tables staffnotification="type" />
        </div>
      </div>
    </div>
  );
};

export default StaffNotification;
