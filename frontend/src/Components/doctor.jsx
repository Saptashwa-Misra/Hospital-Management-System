import React from 'react';
import '../index.css';
import header from './images/doctor_header.jpg';
import register_pic from './images/register_pic.jpeg';
import search_pic from './images/search.jpg';
import update_pic from './images/Update.jpg';
import delete_pic from './images/delete.jpg';
import displayDoctorAppointment_pic from './images/displayDoctor_appointment.jpg';
import {
    Link
  } from "react-router-dom";

class Doctor extends React.Component
{

  render()
  {
    console.log('Render called')
    return <>
        <Link to = "/home_page" className='LinktoHome'>&#x2190;</Link>
        <div>
          <h1>Doctor's Page</h1>
        </div>
        <div>
            <img className = 'AdminPage_Header' src={header} alt="Header" />
        </div>
        <div className='Home_Page'>
            <Link to='/home_page/doctor/register' className='link'>
              <div className='Div_Link'>
                <div>Register Doctors</div>
                <img className='Image_Link' src={register_pic} alt="Header" />
              </div>
            </Link>
            <Link to='/home_page/doctor/search_doctor' className='link'>
              <div className='Div_Link'>
                <div>Search Doctors</div>
                <img className='Image_Link' src={search_pic} alt="Header" />
              </div>
            </Link>
            <Link to='/register' className='link'>
              <div className='Div_Link'>
                <div>Appointments</div>
                <img className='Image_Link' src={displayDoctorAppointment_pic} alt="Header" />
              </div>
            </Link>
            <Link to='/home_page/doctor/update_doctorDetails' className='link'>
              <div className='Div_Link'>
                <div>Update Doctor Details</div>
                <img className='Image_Link' src={update_pic} alt="Header" />
              </div>
            </Link>
            <Link to='/home_page/doctor/remove_doctor' className='link'>
              <div className='Div_Link'>
                <div>Remove Doctor</div>
                <img className='Image_Link' src={delete_pic} alt="Header" />
              </div>
            </Link>
        </div>
    </>
  }
}
export {Doctor}