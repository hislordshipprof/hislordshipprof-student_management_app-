import React from 'react'
import BarChart from '../../components/Grid System/BarChart'

import StudentStaff from '../../components/Grid System/StudentStaff'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Widget from '../../components/Widget/Widget'
import "./home.scss"
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home_container">
        <Navbar />
        <div className="widgets">
          <Widget type="Student" />
          <Widget type="Staff" />
          <Widget type="Course" />
          <Widget type="Subject" />
        </div>
        <div className="student_card">
          <StudentStaff type="student-staff" chart="pie" color1="color1" />
          <StudentStaff type="Data Analysis" color2="color2" />
        </div>
        <div className="student_card">
          <StudentStaff type="Subject" chart="pie" color3="color3" />
          <StudentStaff type="student-subject" chart="pie" color4="color4" />
        </div>
        <div className="student_card1">
          <BarChart option="student-attendance"  color1="color1" />

        </div>
        <div className="student_card1">
          <BarChart option="staff-attendance"  color3="color3" />
         
        </div>
    
      </div>
    </div>
  );
}

export default Home