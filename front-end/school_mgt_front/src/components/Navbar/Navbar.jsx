import React from 'react'
import "./Navbar.scss"
import LogoutIcon from "@mui/icons-material/Logout";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="wrapper">
        <div className="search">
          <h3>Student Management System HOD </h3>
        </div>
        <div className="items">
          <div className="item">
            <LogoutIcon className='icon' />
            <p>logout </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar