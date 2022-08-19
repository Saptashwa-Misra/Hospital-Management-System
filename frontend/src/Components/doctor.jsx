import React from 'react';
import '../index.css';
import header from './images/admin_header.jpg';
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
                <img className='Image_Link' src={header} alt="Header" />
              </div>
            </Link>
            <Link to='/home_page/doctor/search_doctor' className='link'>
              <div className='Div_Link'>
                <div>Search Doctors</div>
                <img className='Image_Link' src={header} alt="Header" />
              </div>
            </Link>
            <Link to='/register' className='link'>
              <div className='Div_Link'>
                <div>Appointments</div>
                <img className='Image_Link' src={header} alt="Header" />
              </div>
            </Link>
        </div>
    </>
  }
}
export {Doctor}