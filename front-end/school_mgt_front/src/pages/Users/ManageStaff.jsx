import React from 'react'
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Tables from '../../components/Table/Tables';
import './ManageStaff.scss'
const ManageStaff = () => {
  return (
    <div className="managelist">
      <Sidebar />
      <div className="managelistContainer">
        <Navbar />
        <h2>Manage staff</h2>
        <div className="manageContainer">
          <div className="listtitle">Staff Details</div>

<Tables staff="type" />
        </div>
      </div>
    </div>
  );
}

export default ManageStaff