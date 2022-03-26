import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Tables from '../../components/Table/Tables';

const ManageCourse = () => {
  return (
    <div className="managestdlist">
      <Sidebar />
      <div className="managestdlistContainer">
        <Navbar />
        <h2>Manage Course</h2>
        <div className="managestdContainer">
          <div className="stdlisttitle">Course Details</div>
          <Tables managecourse="type"/>
        </div>
      </div>
    </div>
  );
}

export default ManageCourse