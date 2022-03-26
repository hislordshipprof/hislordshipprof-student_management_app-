
import { BrowserRouter, Routes,Route } from "react-router-dom";
import StaffFeedback from "./pages/Feedbck_Leave/StaffFeedback";
import StaffLeave from "./pages/Feedbck_Leave/StaffLeave";
import StudentFeedback from "./pages/Feedbck_Leave/StudentFeedback";
import StudentLeave from "./pages/Feedbck_Leave/StudentLeave";
import ViewAttendance from "./pages/Feedbck_Leave/ViewAttendance";
import Home from "./pages/Home/Home";
import List from "./pages/List/List";
import Login from "./pages/Login/Login";
import New from "./pages/New/New";
import StaffNotification from "./pages/Notification/StaffNotification";
import StudentNotification from "./pages/Notification/StudentNotification";
import AddCourse from "./pages/Programms/AddCourse";
import AddSubject from "./pages/Programms/AddSubject";
import ManageCourse from "./pages/Programms/ManageCourse";
import ManageSubject from "./pages/Programms/ManageSubject";
import SchoolCalender from "./pages/Programms/SchoolCalender";
import AddStaff from "./pages/Users/AddStaff";
import AddStudent from "./pages/Users/AddStudent";
import ManageStaff from "./pages/Users/ManageStaff";
import ManageStudent from "./pages/Users/ManageStudent";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="admin">
            <Route index element={<List />} />
            <Route path="addstaff" element={<AddStaff />} />
            <Route path="addstudent" element={<AddStudent />} />
            <Route path="managestaff" element={<ManageStaff />} />
            <Route path="managestudent" element={<ManageStudent />} />
            <Route path="new" element={<New />} />
          </Route>
          <Route path="programms">
            <Route index element={<List />} />
            <Route path="addcourse" element={<AddCourse />} />
            <Route path="managecourse" element={<ManageCourse />} />
            <Route path="addsubject" element={<AddSubject />} />
            <Route path="managesubject" element={<ManageSubject />} />
            <Route path="schoolcalender" element={<SchoolCalender />} />
            <Route path="studentfeedback" element={<StudentFeedback />} />
            <Route path="stafffeedback" element={<StaffFeedback />} />
            <Route path="staffleave" element={<StaffLeave />} />
            <Route path="studentleave" element={<StudentLeave />} />
            <Route path="viewattendance" element={<ViewAttendance />} />

            <Route path=":productId" element={<AddStaff />} />
            <Route path="new" element={<New />} />
          </Route>

          <Route path="notification">
            
            <Route path="studentnotification" element={<StudentNotification />} />
            <Route path="staffnotification" element={<StaffNotification />} />
          
      
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
