import React from 'react';
import '../index.css';
import header from './images/Header.jpeg';
import {
    Link
  } from "react-router-dom";

class HomePage extends React.Component
{
  constructor(props) 
  {
    super(props)
    this.state={
        email_username: '',
        password: '',
    }
  }

  changeEmail = (event) =>{
    console.log(event.target.value)
    this.setState({email_username: event.target.value})
  }

  changePassword = (event) =>{
    console.log(event.target.value)
    this.setState({password: event.target.value})
  }


  submitButton = () => {
    //document.getElementById("submitted_or_not").innerText="SUBMITTED SUCCESSFULLY!!"
    console.log(this.state.email_username+"\t"+this.state.password)
  }

  render()
  {
    console.log('Render called')
    return <>
        <div>
            <img src={header} alt="Header" />
        </div>
        <div class='Body'>
            <h1>Home Page</h1>
            <div className='Login_Inputs'>
              <div className='grid-container'>
                
                    <label>Email or Userid: </label>
                    <input type="text" className="inputs" placeholder="Enter email id or userid" onChange={this.changeEmail} />
                
                
                    <label>Password: </label>
                    <input type="password" className="inputs" placeholder='Enter your password' onChange={this.changePassword} />
                
              </div>
                <button type='submit' className='Submit_button' onClick={this.submitButton}>LOGIN</button>
        <div className='nav'>
        </div>
            </div>
        </div>
    </>
  }
}
export {HomePage}