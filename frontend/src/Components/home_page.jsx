import React from 'react';
import '../index.css';
import header from './images/Home_Header.jpeg';
import patients from './images/patients.jpg';
import doctors from './images/doctors.jpg';
import admin from './images/admin.jpg';
import { isLoggedIn } from './loggedInOrNot';
import { getAdminName } from '../apicalls'

import {
    Link
  } from "react-router-dom";

class HomePage extends React.Component
{
  constructor(props) 
  {
    super(props)
    this.state={
        name: ''
    }
  }

  GetAdminName_Function = async () => {
    try{
      if(this.state.name==='')
        this.setState({name: await getAdminName()})
    } catch (err) {
      this.setState({name: await getAdminName()})
    }
  }

  render()
  {
    console.log('Render called')
    console.log(isLoggedIn())
    if(isLoggedIn()===true)
    {
      //getAdminName()
      this.GetAdminName_Function()
      console.log("AdminName: " +sessionStorage.getItem('AdminName'))
      return <>
          <div>
            <div className='Welcome_HomePage'>WELCOME {sessionStorage.getItem('AdminName')} TO OUR HOSPITAL</div>
          </div>
          <div>
              <img src={header} alt="Header" />
          </div>
          <div className='Home_Page'>
              <Link to='/home_page/doctor' className='link'>
                <div className='Div_Link'>
                  <div>Doctors</div>
                  <img className='Image_Link' src={doctors} alt="Header" />
                </div>
              </Link>
              <Link to='/home_page/patients' className='link'>
                <div className='Div_Link'>
                  <div>Patients</div>
                  <img className='Image_Link' src={patients} alt="Header" />
                </div>
              </Link>
              <Link to='/home_page/admin' className='link'>
                <div className='Div_Link'>
                  <div>Admin</div>
                  <img className='Image_Link' src={admin} alt="Header" />
                </div>
              </Link>
          </div>
      </>
    }
    else
      return <>
        <h1>Unauthorised Access!! Please Login</h1>
        <div className='GotoLoginPage_UnauthorisedAccess'>
            <Link to = "/" className='LinktoLogin'>&#x2190;</Link>
            <h4>Login Page</h4>
        </div>
      </>
  }
}
export {HomePage}