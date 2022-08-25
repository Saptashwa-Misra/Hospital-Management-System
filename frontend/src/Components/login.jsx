import React from 'react';
import '../index.css';
import header from './images/Header.jpeg';
import {
    Link
  } from "react-router-dom";
import { Login_User } from '../apicalls';
import { LoggedIn } from './loggedInOrNot';

class Login extends React.Component
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
    if(this.state.email_username==="")
      alert("Please enter your registered email id or username")
    else if (this.state.password==="")
      alert("Please enter your password")
    else{
          Login_User(this.state.email_username, this.state.password).then((res)=>{
            console.log("Received response from DB: " + res)
            if(res==='Login Success')
                {
                    LoggedIn(this.state.email_username)
                    //window.open('/home_page',"_self","");
                    window.open('/master--hospital-management-system-saptashwa.netlify.app/home_page')
                    console.log('Login Successful')
                    //window.close();
                }
            else
                {
                    console.log("Login Unsuccessful")   
                    alert(res)
                }
        })
    }
  }

  render()
  {
    console.log('Render called')
    return <>
        <div>
            <img src={header} alt="Header" />
        </div>
        <div className='Body'>
            <h1>Welcome Admin!!</h1>
            <div className='Login_Inputs'>
              <div className='grid-container'>
                
                    <label>Email or Userid: </label>
                    <input type="text" className="inputs" placeholder="Enter email id or userid" onChange={this.changeEmail} />
                
                
                    <label>Password: </label>
                    <input type="password" className="inputs" placeholder='Enter your password' onChange={this.changePassword} />
                
              </div>
                <button type='submit' className='Submit_button' onClick={this.submitButton}>LOGIN</button>
        <div className='nav'>
          <Link to='/register' className='link'>Want to add new admin? Please register</Link>
        </div>
            </div>
        </div>
    </>
  }
}
export {Login}