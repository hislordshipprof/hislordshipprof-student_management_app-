import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Tables from '../../components/Table/Tables';
import './ManageStudent.scss'


const ManageStudent = () => {
  return (
    <div className="managestdlist">
      <Sidebar />
      <div className="managestdlistContainer">
        <Navbar />
        <h2>Manage student</h2>
        <div className="managestdContainer">
          <div className="stdlisttitle">Student Details</div>
            <Tables managestudent="type" />
        </div>
      </div>
    </div>
  );
}

export default ManageStudent