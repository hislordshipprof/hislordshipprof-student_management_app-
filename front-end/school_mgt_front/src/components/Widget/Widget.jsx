import React from 'react'
import './Widget.scss'
import PieChartIcon from "@mui/icons-material/PieChart";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import MenuBookIcon from "@mui/icons-material/MenuBook";
const Widget = ({type}) => {
  let data;

    switch (type) {
      case "Student":
        data = {
          counter:"1",
          title: "Total Student",
          link: "Student Info",
          icon: <PersonOutlineIcon className="personicon" style={{color:"crimson", backgroundColor:"#0400ff33",
        }} />,
        };
        break;

      case "Staff":
        data = {
          counter: "2",
          title: "Total Staffs",
          link: "Staff Info",
          icon: (
            <PersonOutlineIcon
              className="personicon"
              style={{ color: "goldenrod", backgroundColor: "rgba(218,165,32,0.2)" }}
            />
          ),
        };
        break;
      case "Course":
        data = {
          counter: "3",
          title: "Total Course",
          link: "Course Info",
          icon: (
            <LibraryBooksIcon
              className="personicon"
              style={{ color: "purple", backgroundColor: "rgba(128,0,128,0.2)" }}
            />
          ),
        };
        break;
      case "Subject":
        data = {
          counter:"4",
          title: "Total Subject",
          link: "Subject Info",
          icon: <MenuBookIcon className="personicon" style={{color:"green", backgroundColor:"rgba(0,128,0,0.2)",
        }}/>,
        };
        break;
      default:
        break;
    }
  return (
    <div className='widget'>
        <div className="left">
            <span className="counter">{data.counter}</span>
            <span className="title">{data.title}</span>

            <span className="link">{data.link} <ArrowForwardIcon className='icons' /></span>
        </div>
        <div className="right">
            <div className="piechart">
                <PieChartIcon className='icon' />
            </div>
            {data.icon}
        </div>
        
    </div>
  )
}

export default Widget