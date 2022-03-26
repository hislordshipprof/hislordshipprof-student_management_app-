import React from 'react'
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Bar } from "react-chartjs-2";
import './BarChart.scss'

// import "chart.js/auto";

// const state = {
//   labels: ["attendance", "leave"],

//   datasets: [
//     {
//       backgroundColor: ["#f33a15dc", "#d6eb21ac"],
//       borderWidth:2,

//       hoverBackgroundColor: [
//         // "#501800",

//         // "#4B5000",

//         "#175000",

//         // "#003350",

//         // "#35014F",
//       ],

//       data: [65, 59],
//     },
//   ],
// };

const state = {
  
  labels: ["1st bar", "2nd bar"],
  datasets: [
    { 
      // Label for bars
      label: "total count/value",
      // Data or value of your each variable
      data: [1552, 1319],
      // Color of each bar
      backgroundColor: ["aqua", "green"],
      // Border color of each bar
      borderColor: ["aqua", "green"],
      borderWidth: 0.5,
    },
  ],
};



const BarChart = ({ option,  color1,  color3 }) => {

     let data;

  switch (option) {
    case "student-attendance":
      data = {
        title: "Student Leaves vs Attendance",

        icon: (
          <MoreVertIcon
            className="personicon"
            style={{ color: "green", backgroundColor: "rgba(0,128,0,0.2)" }}
          />
        ),
      };
      break;
    case "staff-attendance":
      data = {
        title: "Staff Leaves vs Attendance",

        icon: (
          <MoreVertIcon
            className="personicon"
            style={{ color: "green", backgroundColor: "rgba(0,128,0,0.2)" }}
          />
        ),
      };
      break;
    default:
      break;
  }
  return (
    <div className="grid">
      {color1 ? (
        <div className="top">
          <h2 className="title">{data.title}</h2>
          {data.icon}
        </div>
      ) : color3 ? (
        <div className="top1">
          <h2 className="title">{data.title}</h2>
          {data.icon}
        </div>
      ) : null}

      <div className="bottom1">

          <div>
            {/* <Bar data={{ ...state, labels: type?.split("-") }}
             /> */}
            <Bar
              data={{ ...state, labels: option?.split("-") }}
              height={300}
            //   width={350}
              options={{
                maintainAspectRatio: false,
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        // The y-axis value will start from zero
                        beginAtZero: true,
                      },
                    },
                  ],
                },
                legend: {
                  labels: {
                    fontSize: 15,
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
  );
}

export default BarChart