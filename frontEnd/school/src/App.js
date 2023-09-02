import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Error from "./Pages/Error";
import Login from "./Pages/Auth/Login";
import {
  AdminProtect,
  StudentProtect,
  TeacherProtect,
} from "./conponents/ProtectedRoutes";
import StudenyDashBoard from "./Pages/Student/StudenyDashBoard";
import Teacher from "./Pages/Teacher/Teacher";
import Admin from "./Pages/Admin/Admin";
import Register from "./Pages/Auth/Register";
import FeeStructure from "./Pages/FeeStructure";
import ChairmanMessage from "./Pages/ChairmanMessage";
import MissionVission from "./Pages/MissionVission";
import Infra from "./Pages/Infra";
import Transport from "./Pages/Transport";
import SchoolFacilities from "./Pages/SchoolFacilities";
import Career from "./Pages/Career";
import AdmissionEnquery from "./Pages/AdmissionEnquery";
import ImportantDoc from "./Pages/ImportantDoc";
import Procedure from "./Pages/Procedure";
import Cratiria from "./Pages/Cratiria";
import TeacherAchivement, { student, teacher } from "./Pages/TeacherAchivement";
import School from "./Pages/School";
import Lab from "./Pages/Lab";
import SmartClass from "./Pages/SmartClass";
import Event from "./Pages/Event";
import Tour from "./Pages/Tour";
import Priciple from "./Pages/Principle";
import SportIndoor from "./Pages/SportIndoor";
import Library from "./Pages/Library";
import ContactUs from "./Pages/ContactUs";
import SchoolAchivement from "./Pages/SchoolAchivement";
import Gallery from "./Pages/Gallery";
import Upto8thForm from "./Pages/AddmissionForm/Upto8thForm";
import Class9thForm from "./Pages/AddmissionForm/Class9thForm";
import StudentView from "./Pages/Teacher/StudentView";
import ForgetPass from "./Pages/Auth/ForgetPass";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/forget" element={<ForgetPass />} />
        <Route exact path="/contact" element={<ContactUs />} />
        <Route exact path="/fee-structure" element={<FeeStructure />} />
        <Route exact path="/chairman" element={<ChairmanMessage />} />
        <Route exact path="/principle" element={<Priciple />} />
        <Route exact path="/mission-vision" element={<MissionVission />} />
        <Route exact path="/class-room" element={<Infra />} />
        <Route exact path="/library" element={<Library />} />
        <Route exact path="/sport" element={<SportIndoor />} />
        <Route exact path="/transport" element={<Transport />} />
        <Route exact path="/facility" element={<SchoolFacilities />} />
        <Route exact path="/career" element={<Career />} />
        <Route exact path="/document" element={<ImportantDoc />} />
        <Route exact path="/procedure" element={<Procedure />} />
        <Route exact path="/eligibilty" element={<Cratiria />} />
        <Route exact path="/school" element={<School />} />
        <Route exact path="/class" element={<SchoolFacilities />} />
        <Route exact path="/lab" element={<Lab />} />
        <Route exact path="/smart-class" element={<SmartClass />} />
        <Route exact path="/event" element={<Event />} />
        <Route exact path="/tour" element={<Tour />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/nursery-8thclass" element={<Upto8thForm />} />
        <Route exact path="/class-9th" element={<Class9thForm />} />
        <Route
          exact
          path="/achive-teacher"
          element={<TeacherAchivement data={teacher} title="Teacher" />}
        />
        <Route
          exact
          path="/achive-student"
          element={<TeacherAchivement data={student} title="Student" />}
        />
        <Route exact path="/achieve-school" element={<SchoolAchivement />} />

        <Route
          exact
          path="/addmission-enquery"
          element={<AdmissionEnquery />}
        />

        {/* protected routes */}
        <Route exact path="/student" element={<StudentProtect />}>
          <Route path="" element={<StudenyDashBoard />} />
        </Route>
        <Route exact path="/teacher" element={<TeacherProtect />}>
          <Route path="" element={<Teacher />} />
          <Route path=":id" element={<StudentView />} />
        </Route>
        <Route exact path="/admin" element={<AdminProtect />}>
          <Route path="" element={<Admin />} />
          <Route path="student" element={<StudenyDashBoard />} />
          <Route path="teacher" element={<Teacher />} />
        </Route>
        <Route exact path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
