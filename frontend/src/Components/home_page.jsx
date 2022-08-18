import React from 'react';
import '../index.css';
import header from './images/Home_Header.jpeg';
import {
    Link
  } from "react-router-dom";

class HomePage extends React.Component
{

  render()
  {
    console.log('Render called')
    return <>
        <div>
          <h1>Welcome to our Hospital</h1>
        </div>
        <div>
            <img src={header} alt="Header" />
        </div>
        <div className='Home_Page'>
            <Link to='/register' className='link'>
              <div className='Div_Link'>
                <div>Doctors</div>
                <img className='Image_Link' src={header} alt="Header" />
              </div>
            </Link>
            <Link to='/register' className='link'>
              <div className='Div_Link'>
                <div>Patients</div>
                <img className='Image_Link' src={header} alt="Header" />
              </div>
            </Link>
            <Link to='/home_page/admin' className='link'>
              <div className='Div_Link'>
                <div>Admin</div>
                <img className='Image_Link' src={header} alt="Header" />
              </div>
            </Link>
        </div>
    </>
  }
}
export {HomePage}