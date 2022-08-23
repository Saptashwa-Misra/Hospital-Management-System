import React from 'react';
import '../index.css';
import header from './images/noPageFound.jpg';
import { isLoggedIn } from './loggedInOrNot';
import {
    Link
  } from "react-router-dom";

class WrongURL extends React.Component
{

  render()
  {
    console.log('Render called')
    console.log(isLoggedIn())
    if(isLoggedIn()===true)
      return <>
          <div>
              <img className='NoPageFound' src={header} alt="Header" />
          </div>
          <div>
            <h1>No Page Available!!</h1>
          </div>
          <div>
              <h2>Thank you for visiting our Hospital</h2>
              <h3>Unfortunately, there is no active page for this URL</h3>
          </div>
          <div className='GotoHomePage_NoPageFound'>
              <Link to = "/home_page" className='LinktoHome'>&#x2190;</Link>
              <h4>Go to home page</h4>
          </div>
      </>
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
export {WrongURL}