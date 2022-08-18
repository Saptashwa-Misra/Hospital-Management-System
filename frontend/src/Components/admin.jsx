import React from 'react';
import '../index.css';
import header from './images/Home_Header.jpeg';
import {
    Link
  } from "react-router-dom";

class Admin extends React.Component
{

  render()
  {
    console.log('Render called')
    return <>
        <div>
          <h1>Admin Page</h1>
        </div>
        <div>
            <img src={header} alt="Header" />
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
            <Link to='/register' className='link'>
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