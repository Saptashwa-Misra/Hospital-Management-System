import React from 'react';
import '../index.css';
import header from './images/Not_Available.jpeg';
import {
    Link
  } from "react-router-dom";

class AdminRequestApproval extends React.Component
{

  render()
  {
    console.log('Render called')
    return <>
        <Link to = "/home_page/admin" className='LinktoHome'>&#x2190;</Link>
        <div>
            <img src={header} alt="Header" />
        </div>
        <div>
          <h1>Request Approval</h1>
        </div>
        <div>
            <h2>This website is developed following Agile Model in SDLC</h2>
            <h3>This page will be available very soon.....</h3>
            <h4>Till then you can approve a request by sending a mail to saptashwa.misra@gmail.com</h4>
        </div>
    </>
  }
}
export {AdminRequestApproval}