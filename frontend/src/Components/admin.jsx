import React from 'react';
import '../index.css';
import header from './images/admin_header.jpg';
import {
    Link
  } from "react-router-dom";

class Admin extends React.Component
{

  render()
  {
    console.log('Render called')
    return <>
        <Link to = "/home_page" className='LinktoHome'>&#x2190;</Link>
        <div>
          <h1>Admin Page</h1>
        </div>
        <div>
            <img className = 'AdminPage_Header' src={header} alt="Header" />
        </div>
        <div className='Home_Page'>
            <Link to='/home_page/admin/display_admin' className='link'>
              <div className='Div_Link'>
                <div>Display all Admins</div>
                <img className='Image_Link' src={header} alt="Header" />
              </div>
            </Link>
            <Link to='/register' className='link'>
              <div className='Div_Link'>
                <div>Request Approval</div>
                <img className='Image_Link' src={header} alt="Header" />
              </div>
            </Link>
            <Link to='/home_page/admin/mail_management' className='link'>
              <div className='Div_Link'>
                <div>Mail to Management</div>
                <img className='Image_Link' src={header} alt="Header" />
              </div>
            </Link>
        </div>
    </>
  }
}
export {Admin}