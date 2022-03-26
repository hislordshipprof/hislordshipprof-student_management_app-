import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Tables from '../../components/Table/Tables';
import './Feedbackleave.scss'
const StudentFeedback = () => {
  return (
    <div className="feedlist">
      <Sidebar />
      <div className="feedlistContainer">
        <Navbar />
        <h2>Student Feedback</h2>
        <div className="feedContainer">
          <div className="feedlisttitle">Student Feedback Details</div>
          <Tables feedback="type" />
        </div>
      </div>
    </div>
  );
}

export default StudentFeedback