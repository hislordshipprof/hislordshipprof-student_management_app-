import React from 'react'
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import FeedbackIcon from "@mui/icons-material/Feedback";
import ChatIcon from "@mui/icons-material/Chat";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HA from '../../assest/HA.png'
import "./Sidebar.scss"
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="Sidebar_top">
        <span className="logo">HpalAdmin</span>
      </div>
      <hr />
      <div className="Sidebar_center">
        <ul>
          <li>
            <img src={HA} alt="" className="avatar" />
            <span>Admin</span>
          </li>
          <hr />
          <li>
            <DashboardIcon className="icon" />
            <Link to="/">
              <span>Home</span>
            </Link>
          </li>
          <hr />

          <p className="title">USERS</p>

          <li>
            <PersonAddIcon className="icon" />
            <Link to="/admin/addstaff">
              <span>Add Staff</span>
            </Link>
          </li>
          <li>
            <PersonOutlineIcon className="icon" />
            <Link to="/admin/managestaff">
              <span>Manage Staff</span>
            </Link>
          </li>
          <li>
            <PersonAddIcon className="icon" />
            <Link to="/admin/addstudent">
              <span>Add Student</span>
            </Link>
          </li>
          <li>
            <PersonOutlineIcon className="icon" />
            <Link to="/admin/managestudent">
              <span>Manage Student</span>
            </Link>
          </li>
          <hr />
          <p className="title">PROGRAMMS</p>

          <li>
            <LibraryBooksIcon className="icon" />
            <Link to="/programms/addcourse">
              <span>Add Course</span>
            </Link>
          </li>
          <li>
            <LibraryBooksIcon className="icon" />
            <Link to="/programms/managecourse">
              <span>Manage Course</span>
            </Link>
          </li>
          <li>
            <MenuBookIcon className="icon" />
            <Link to="/programms/addsubject">
              <span>Add Subject</span>
            </Link>
          </li>
          <li>
            <MenuBookIcon className="icon" />
            <Link to="/programms/managesubject">
              <span>Manage Subject</span>
            </Link>
          </li>
          <hr />

          <p className="title">SCHOOL CALENDER YEAR</p>

          <li>
            <CalendarMonthIcon className="icon" />
            <Link to="/programms/schoolcalender">
              <span>Manage Session Year</span>
            </Link>
          </li>
          <hr />

          <p className="title">FEEDBACK</p>

          <li>
            <FeedbackIcon className="icon" />
            <Link to="/programms/studentfeedback">
              <span>Student Feedback</span>
            </Link>
          </li>
          <li>
            <FeedbackIcon className="icon" />
            <Link to="/programms/stafffeedback">
              <span>Staff Feedback</span>
            </Link>
          </li>
          <hr />
          <p className="title">LEAVE REQUEST</p>

          <li>
            <ChatIcon className="icon" />
            <Link to="/programms/staffleave">
              <span>Staff Leave</span>
            </Link>
          </li>
          <li>
            <ChatIcon className="icon" />
            <Link to="/programms/studentleave">
              <span>Student Leave</span>
            </Link>
          </li>
          <hr />
          <li>
            <ChatBubbleOutlineIcon className="icon" />
            <Link to="/programms/viewattendance">
              <span>View Attendance</span>
            </Link>
          </li>
          <hr />

          <p className="title">NOTIFICATION</p>

          <li>
            <NotificationsActiveIcon className="icon" />
            <Link to="/notification/studentnotification">
              <span>Student Notification</span>
            </Link>
          </li>
          <li>
            <NotificationsActiveIcon className="icon" />
            <Link to="/notification/staffnotification">
              <span>Staff Notification</span>
            </Link>
          </li>
          <hr />
        </ul>
      </div>

      <div className="Sidebar_bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
}

export default Sidebar