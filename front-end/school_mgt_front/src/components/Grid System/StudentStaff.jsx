import React from "react";
import "./StudentStaff.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {  Doughnut, Pie } from "react-chartjs-2";

import "chart.js/auto";

const state = {
  labels: ["Student", "Staff"],

  datasets: [
    {
      backgroundColor: ["#f33a15dc", "#d6eb21ac"],

      hoverBackgroundColor: [
        // "#501800",

        // "#4B5000",

        "#175000",

        // "#003350",

        // "#35014F",
      ],

      data: [65, 59],
    },
  ],
};

const StudentStaff = ({ type, chart, color1, color2, color3, color4 }) => {
  let data;

  switch (type) {
    case "student-staff":
      data = {
        title: "Student and Staff Chart",

        icon: (
          <MoreVertIcon
            className="personicon"
            style={{ color: "green", backgroundColor: "rgba(0,128,0,0.2)" }}
          />
        ),
      };
      break;
    case "Data Analysis":
      data = {
        title: "Total Subject in Each Course",

        icon: (
          <MoreVertIcon
            className="personicon"
            style={{ color: "green", backgroundColor: "rgba(0,128,0,0.2)" }}
          />
        ),
      };
      break;
    case "Subject":
      data = {
        title: "Total Student in Each Course",

        icon: (
          <MoreVertIcon
            className="personicon"
            style={{ color: "green", backgroundColor: "rgba(0,128,0,0.2)" }}
          />
        ),
      };
      break;
    case "student-subject":
      data = {
        title: "Total Student in Each Subject",

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
    <div className="Grid">
      {color1 ? (
        <div className="top">
          <h2 className="title">{data.title}</h2>
          {data.icon}
        </div>
      ) : color2 ? (
        <div className="top1">
          <h2 className="title">{data.title}</h2>
          {data.icon}
        </div>
      ) : color3 ? (
        <div className="top2">
          <h2 className="title">{data.title}</h2>
          {data.icon}
        </div>
      ) : color4 ? (
        <div className="top3">
          <h2 className="title">{data.title}</h2>
          {data.icon}
        </div>
      ) : null}

      <div className="bottom">
        <div className="featuredchart">
          <div>
            {chart ? (
              <Pie data={{ ...state, labels: type?.split("-") }} />
            ) : (
              <Doughnut data={{ ...state, labels: type?.split("-") }} />
            )}
          </div>


        </div>
      </div>
    </div>
  );
};

export default StudentStaff;
