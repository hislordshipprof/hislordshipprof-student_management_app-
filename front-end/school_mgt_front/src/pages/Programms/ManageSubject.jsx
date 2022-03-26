import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Tables from '../../components/Table/Tables';

const ManageSubject = () => {
  return (
    <div className="managestdlist">
      <Sidebar />
      <div className="managestdlistContainer">
        <Navbar />
        <h2>Manage staff</h2>
        <div className="managestdContainer">
          <div className="stdlisttitle">Student Details</div>
          <Tables managesub="type" />
        </div>
      </div>
    </div>
  );
}

export default ManageSubject