
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
import { Appointments } from './Components/Appointments';
import { AppointmentCancel } from './Components/Appointments_Cancel';


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
            <Route path="/master--hospital-management-system-saptashwa.netlify.app/home_page" element={<HomePage/>} />
            <Route path="/home_page/admin" element={<Admin/>} />
            <Route path="/home_page/admin/display_admin" element={<DisplayAdmin/>} />
            <Route path="/home_page/admin/admin_request_approval" element={<AdminRequestApproval/>} />
            <Route path="/home_page/admin/mail_management" element={<AdminMail/>} />
            <Route path="/home_page/doctor" element={<Doctor/>} />
            <Route path="/home_page/doctor/register" element={<DoctorRegister/>} />
            <Route path="/home_page/doctor/search_doctor" element={<SearchDoctor/>} />
            <Route path="/home_page/doctor/appointments" element={<Appointments/>} />
            <Route path="/home_page/doctor/update_doctorDetails" element={<DoctorUpdate/>} />
            <Route path="/home_page/doctor/remove_doctor" element={<DoctorRemove/>} />
            <Route path="/home_page/patients" element={<Patients/>} />
            <Route path="/home_page/patients/register" element={<PatientRegister/>} />
            <Route path="/home_page/patients/search_patient" element={<SearchPatients/>} />
            <Route path="/home_page/patients/update_patientDetails" element={<PatientUpdate/>} />
            <Route path="/home_page/patients/remove_patient" element={<PatientRemove/>} />
            <Route path="/home_page/patients/book_appointment" element={<BookAppointment/>} />
            <Route path="/home_page/patients/appointment_cancel" element={<AppointmentCancel/>} />
            <Route path="*" element={<WrongURL/>} />
          </Routes>
        </BrowserRouter>
      {/* {Login} */}
      <div className='Copyright_div'>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-c-circle" viewBox="0 0 16 16">
          <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512Z"/>
        </svg>
        2022 Saptashwa Misra
        <div className='Contact_Copyright_div'>
          Contact:
          <a className='Contact_Link' href="https://wa.me/919051665222" target="_blank" rel="noreferrer"><i class="bi bi-whatsapp"></i></a>
          <a className='Contact_Link' href="https://www.linkedin.com/in/saptashwa-misra-84504016b/" target="_blank" rel="noreferrer"><i class="bi bi-linkedin"></i></a>
          <a className='Contact_Link' href="https://github.com/Saptashwa-Misra" target="_blank" rel="noreferrer"><i class="bi bi-github"></i></a>
          <a className='Contact_Link' href="https://www.facebook.com/saptashwa.misra" target="_blank" rel="noreferrer"><i class="bi bi-facebook"></i></a>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
