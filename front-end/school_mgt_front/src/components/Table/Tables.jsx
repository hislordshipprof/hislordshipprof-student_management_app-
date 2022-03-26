import React from 'react'
import './Table.scss'
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid";

const staffcolumns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  { field: "userName", headerName: "User name", width: 130 },
  { field: "email", headerName: "Email", width: 130 },
  { field: "address", headerName: "Address", width: 130 },
  {
    field: "lastlogin",
    headerName: "Last Login",
    type: "date",
    width: 90,
  },
  {
    field: "datejoined",
    headerName: "Date Joined",
    type: "date",
    width: 90,
  },

];
const studentcolumns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  { field: "userName", headerName: "User name", width: 130 },
  { field: "email", headerName: "Email", width: 130 },
  { field: "address", headerName: "Address", width: 130 },
  { field: "gender", headerName: "Gender", width: 130 },
  { field: "profilepic", headerName: "Profile Pic", width: 130 },
  { field: "sessionyear", headerName: "Session Year", width: 130 },
  { field: "course", headerName: "Course", width: 130 },
  {
    field: "lastlogin",
    headerName: "Last Login",
    type: "date",
    width: 90,
  },
  {
    field: "datejoined",
    headerName: "Date Joined",
    type: "date",
    width: 90,
  },

];
const managesubject = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "subjectName", headerName: "Subject Name", width: 130 },
  { field: "courseName", headerName: "Course Name", width: 130 },
  { field: "courseId", headerName: "Course ID", width: 130 },
  { field: "staffName", headerName: "Staff Name", width: 130 },
  
];
const coursecolumns = [
  { field: "id", headerName: "ID", width: 250 },
  { field: "courseName", headerName: "Course Name", width: 270 },

];
const studentfeedbackcol = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "studentId", headerName: "Student ID", width: 130 },
  { field: "studentName", headerName: "Student Name", width: 130 },
  { field: "studentsession", headerName: "Student Session", width: 130 },
  { field: "message", headerName: "Message", width: 130 },
  { field: "sendedon", headerName: "Sended On", width: 130 },
  { field: "reply", headerName: "Reply", width: 130 },

];
const stafffeedbackcol = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "staffId", headerName: "Staff ID", width: 130 },
  { field: "staffName", headerName: "Staff Name", width: 130 },
  { field: "message", headerName: "Message", width: 130 },
  { field: "sendedon", headerName: "Sended On", width: 130 },
  { field: "reply", headerName: "Reply", width: 130 },

];
const staffleavecol = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "staffId", headerName: "Staff ID", width: 130 },
  { field: "staffName", headerName: "Staff Name", width: 130 },
  { field: "leavedate", headerName: "Leave Date", width: 130 },
  { field: "leavemessage", headerName: "Leave Message", width: 130 },
  { field: "applyon", headerName: "Apply On", width: 130 },

];
const studentleavecol = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "studentId", headerName: "Student ID", width: 130 },
  { field: "studentName", headerName: "Student Name", width: 130 },
  { field: "leavedate", headerName: "Leave Date", width: 130 },
  { field: "leavemessage", headerName: "Leave Message", width: 130 },
  { field: "applyon", headerName: "Apply On", width: 130 },

];

const staffleaverows = [
  {
    id: 1,
    staffId: "1",
    staffName:"Messi",
    leavedate:"12 May,2022",
    leavemessage:"welcome to PSG",
    applyon:"21/3/22",
    
  },
];
const studentnotificationcol = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstname", headerName: "First Name", width: 130 },
  { field: "lastName", headerName: "Last Name", width: 130 },
  { field: "username", headerName: "User Name ", width: 130 },
  { field: "email", headerName: "Email", width: 130 },
 

];

const studentnotificationrows = [
  {
    id: 1,
    firstname: "Richel",
    lastname:"dancehall",
    username:"Naa",
    email:"Naa@gmail.com",
    
    
  },
];
const staffnotificationcol = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstname", headerName: "First Name", width: 130 },
  { field: "lastName", headerName: "Last Name", width: 130 },
  { field: "username", headerName: "User Name ", width: 130 },
  { field: "email", headerName: "Email", width: 130 },
 

];

const staffnotificationrows = [
  {
    id: 1,
    firstname: "Alberta",
    lastname:"Adoko",
    username:"alberta",
    email:"alberta@gmail.com",
    
    
  },
];
const studentleaverows = [
  {
    id: 1,
    studentId: "1",
    studentName:"Messi",
    leavedate:"12 May,2022",
    leavemessage:"welcome to PSG",
    applyon:"21/3/22",
    
  },
];
const studentfeedbackrows = [
  {
    id: 1,
    studentId: "1",
    studentName:"Messi",
    studentsession:"12 May,2022",
    message:"welcome to PSG",
    sendedon:"PSG",
    reply:"im grateful"
  },
];
const stafffeedbackrows = [
  {
    id: 1,
    studentId: "1",
    studentName:"Messi",
    studentsession:"12 May,2022",
    message:"welcome to PSG",
    sendedon:"PSG",
    reply:"im grateful"
  },
];

const staffrows = [
  {
    id: 1,
    firstName: "Tahiru",
    lastName: "Abdulai",

    userName: "tahiru",
    email: "tahiru@gmail.com",
    address: "knust",
    lastlogin: "1st March",
    datejoined: "1st Feburary",
    // action: "Edit",
  },
  {
    id: 2,
    firstName: "Cersei",
    lastName: "Lannister",
    userName: "",
    email: "prof@gmail.com",
    address: "knust",
    lastlogin: "2rd May",
    datejoined: "1st May",
    // action: "view",
  },
  {
    id: 3,
    firstName: "Jaime",
    lastName: "Lannister",

    userName: "",
    email: "prof@gmail.com",
    address: "knust",
    lastlogin: "2rd January",
    datejoined: "1st January",
    // action: "Edit",
  },
  {
    id: 4,
    firstName: "Arya",
    lastName: "Stark",

    userName: "",
    email: "prof@gmail.com",
    address: "knust",
    lastlogin: "2rd June",
    datejoined: "1st Feburary",
    // action: "Edit",
  },
];
const studentrows = [
  {
    id: 1,
    firstName: "Tahiru",
    lastName: "Abdulai",
    userName: "tahiru",
    email: "tahiru@gmail.com",
    address: "knust",
    gender: "Male",
    profilepic: "Image",
    sessionyear: "March 19,2022",
    course: "Data analysis",
    lastlogin: "1st March",
    datejoined: "1st Feburary",
    // action: "Edit",
  },
  {
    id: 2,
    firstName: "Cersei",
    lastName: "Lannister",
    userName: "",
    email: "prof@gmail.com",
    address: "knust",
    gender: "Male",
    profilepic: "Image",
    sessionyear: "March 19,2022",
    course: "Quntum analysis",
    lastlogin: "2rd May",
    datejoined: "1st May",
    // action: "view",
  },
];
const rows2 = [
  {
    id: 1,
    subjectName: "Quantum",
    courseName: "Eigen value",

    courseId: "1",
    staffName: "tahiru",
  },
  {
    id: 2,
    subjectName: "C++ Programming",
    courseName: "String",

    courseId: "2",
    staffName: "felix",
  },
];
const courserows = [
  {
    id: 1,
    courseName: "Data Analysis",
  },
];

const Tables = ({
  managecourse,
  staff,
  managesub,
  managestudent,
  feedback,
  feedbackstaff,
  staffleave,
  studentleave,
  studentnotification,
  staffnotification,
}) => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 100,
      renderCell: () => {
        return (
          <div className="cellAction">
            <div className="viewButton">View</div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="table">
      {staff ? (
        <DataGrid
          rows={staffrows}
          columns={staffcolumns.concat(actionColumn)}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      ) : managestudent ? (
        <DataGrid
          rows={studentrows}
          columns={studentcolumns.concat(actionColumn)}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      ) : managecourse ? (
        <DataGrid
          rows={courserows}
          columns={coursecolumns.concat(actionColumn)}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      ) : managesub ? (
        <DataGrid
          rows={rows2}
          columns={managesubject.concat(actionColumn)}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      ) : feedback ? (
        <DataGrid
          rows={studentfeedbackrows}
          columns={studentfeedbackcol.concat(actionColumn)}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      ) : feedbackstaff ? (
        <DataGrid
          rows={stafffeedbackrows}
          columns={stafffeedbackcol.concat(actionColumn)}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      ) : staffleave ? (
        <DataGrid
          rows={staffleaverows}
          columns={staffleavecol.concat(actionColumn)}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      ) : studentleave ? (
        <DataGrid
          rows={studentleaverows}
          columns={studentleavecol.concat(actionColumn)}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      ) : studentnotification ? (
        <DataGrid
          rows={studentnotificationrows}
          columns={studentnotificationcol.concat(actionColumn)}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      ) : staffnotification ? (
        <DataGrid
          rows={staffnotificationrows}
          columns={staffnotificationcol.concat(actionColumn)}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      ):
      null}
    </div>
  );
};
export default Tables
//     <TableContainer component={Paper} className="table">
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell className="tableCell">ID</TableCell>
//             <TableCell className="tableCell">First Name</TableCell>
//             <TableCell className="tableCell">Last Name</TableCell>
//             <TableCell className="tableCell">User Name</TableCell>
//             <TableCell className="tableCell">Email</TableCell>
//             <TableCell className="tableCell">Address</TableCell>
//             <TableCell className="tableCell">Last Login</TableCell>
//             <TableCell className="tableCell">Date Joined</TableCell>
//             <TableCell className="tableCell">Actions</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow
//               key={row.id}
            
//             >
//               <TableCell >{row.id}</TableCell>
//               <TableCell className='tableCell'>{row.firstName}</TableCell>
//               <TableCell className='tableCell'>{row.lastName}</TableCell>
//               <TableCell className='tableCell'>{row.userName}</TableCell>
//               <TableCell className='tableCell'>{row.email}</TableCell>
//               <TableCell className='tableCell'>{row.address}</TableCell>
//               <TableCell className='tableCell'>{row.lastlogin}</TableCell>
//               <TableCell className='tableCell'>{row.datejoined}</TableCell>
//               <TableCell className='tableCell'>
//                 <div className="editbutton">
//                   <button >{row.actions}</button>
//                 </div>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

