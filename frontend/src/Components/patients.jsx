import React from 'react';
import '../index.css';
import header from './images/patientsHome.jpg';
import register_pic from './images/register_pic.jpeg';
import search_pic from './images/search.jpg';
import update_pic from './images/Update.jpg';
import delete_pic from './images/delete.jpg';
import doctorAppointment_pic from './images/doctor_appointment.jpg';
import {
    Link
  } from "react-router-dom";

class Patients extends React.Component
{

  render()
  {
    console.log('Render called')
    return <>
        <Link to = "/home_page" className='LinktoHome'>&#x2190;</Link>
        <div>
          <h1>Patient's Page</h1>
        </div>
        <div>
            <img className = 'AdminPage_Header' src={header} alt="Header" />
        </div>
        <div className='Home_Page'>
            <Link to='/home_page/patients/register' className='link'>
              <div className='Div_Link'>
                <div>Register Patient</div>
                <img className='Image_Link' src={register_pic} alt="Header" />
              </div>
            </Link>
            <Link to='/home_page/patients/search_patient' className='link'>
              <div className='Div_Link'>
                <div>Search Patients</div>
                <img className='Image_Link' src={search_pic} alt="Header" />
              </div>
            </Link>
            <Link to='/home_page/patients/update_patientDetails' className='link'>
              <div className='Div_Link'>
                <div>Update Patient Details</div>
                <img className='Image_Link' src={update_pic} alt="Header" />
              </div>
            </Link>
            <Link to='/home_page/patients/remove_patient' className='link'>
              <div className='Div_Link'>
                <div>Remove Patient</div>
                <img className='Image_Link' src={delete_pic} alt="Header" />
              </div>
            </Link>
            <Link to='/home_page/patients/book_appointment' className='link'>
              <div className='Div_Link'>
                <div>Book Appointment</div>
                <img className='Image_Link' src={doctorAppointment_pic} alt="Header" />
              </div>
            </Link>
            <Link to='/home_page/patients/book_appointment' className='link'>
              <div className='Div_Link'>
                <div>Cancel Appointment</div>
                <img className='Image_Link' src={doctorAppointment_pic} alt="Header" />
              </div>
            </Link>
        </div>
    </>
  }
}
export {Patients}