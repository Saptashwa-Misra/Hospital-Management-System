
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Login } from './Components/login';
import { Register } from './Components/registration'
import { HomePage } from './Components/home_page';
import { Admin } from './Components/admin';
import { DisplayAdmin } from './Components/display_admin';
import { AdminMail } from './Components/admin_mail';
import { Doctor } from './Components/doctor';
import { DoctorRegister } from './Components/doctor_register';
import { SearchDoctor } from './Components/search_doctor';
import { Patients } from './Components/patients';
import { PatientRegister } from './Components/patient_register';
import { SearchPatients } from './Components/patient_display';
import { PatientUpdate } from './Components/patient_update';
import { WrongURL } from './Components/wrongURL';
import { DoctorUpdate } from './Components/doctor_update';
import { DoctorRemove } from './Components/doctor_remove';
import { PatientRemove } from './Components/patient_remove';
import { AdminRequestApproval } from './Components/admin_requestApproval';
import { BookAppointment } from './Components/Book_Appointment';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <div className='nav'>
          <Link to='react-protrips' className='link'><i class="bi bi-house-door-fill"></i></Link>
          <Link to='react-protrips/addtrip' className='link'><i class="bi bi-calendar-plus"></i></Link>
          <Link to='react-protrips/list' className='link'><i class="bi bi-grid-3x3"></i></Link>
        </div> */}
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/home_page" element={<HomePage/>} />
            <Route path="/home_page/admin" element={<Admin/>} />
            <Route path="/home_page/admin/display_admin" element={<DisplayAdmin/>} />
            <Route path="/home_page/admin/admin_request_approval" element={<AdminRequestApproval/>} />
            <Route path="/home_page/admin/mail_management" element={<AdminMail/>} />
            <Route path="/home_page/doctor" element={<Doctor/>} />
            <Route path="/home_page/doctor/register" element={<DoctorRegister/>} />
            <Route path="/home_page/doctor/search_doctor" element={<SearchDoctor/>} />
            <Route path="/home_page/doctor/update_doctorDetails" element={<DoctorUpdate/>} />
            <Route path="/home_page/doctor/remove_doctor" element={<DoctorRemove/>} />
            <Route path="/home_page/patients" element={<Patients/>} />
            <Route path="/home_page/patients/register" element={<PatientRegister/>} />
            <Route path="/home_page/patients/search_patient" element={<SearchPatients/>} />
            <Route path="/home_page/patients/update_patientDetails" element={<PatientUpdate/>} />
            <Route path="/home_page/patients/remove_patient" element={<PatientRemove/>} />
            <Route path="/home_page/patients/book_appointment" element={<BookAppointment/>} />
            <Route path="*" element={<WrongURL/>} />
          </Routes>
        </BrowserRouter>
      {Login}
    </div>
  );
}

export default App;
