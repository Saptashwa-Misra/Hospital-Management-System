import React from 'react';
import '../index.css';
import header from './images/Header.jpeg';
import {
    Link,
    // useNavigate
  } from "react-router-dom";
import { Register_User } from '../apicalls';
import { Validate_Name } from './validate'
import { Validate_Email } from './validate'
import { Validate_Phone } from './validate'
import { Validate_Password } from './validate'

class Register extends React.Component
{
  constructor(props) 
  {
    super(props)
    this.state={
        name: '',
        phone_number: '',
        email_username: '',
        password: '',
        confirm_password: '',
        access_id: ''
    }
  }

  changeName = (event) =>{
    console.log(event.target.value)
    this.setState({name: event.target.value})
  }

  changePhoneNumber = (event) =>{
    console.log(event.target.value)
    this.setState({phone_number: event.target.value})
  }

  changeEmail = (event) =>{
    console.log(event.target.value)
    this.setState({email_username: event.target.value})
  }

  changePassword = (event) =>{
    console.log(event.target.value)
    this.setState({password: event.target.value})
  }

  changeConfirmPassword = (event) =>{
    console.log(event.target.value)
    this.setState({confirm_password: event.target.value})
  }

  changeAccessID = (event) =>{
    console.log(event.target.value)
    this.setState({access_id: event.target.value})
  }

  submitButton = () => {
    try {
          let message_name = Validate_Name(this.state.name)
          let message_mail = Validate_Email(this.state.email_username)
          let message_phone = Validate_Phone(this.state.phone_number)
          let message_password = Validate_Password(this.state.password)
          if(this.state.access_id!=='SAPTASHWA@ACCESS')
              alert('Invalid Authentication ID\nPLEASE CONTACT THE HOSPITAL MANAGEMENT')
          else if(message_name!=="Correct Name")
              alert(message_name)
          else if(message_mail!=="Correct Mail ID")
              alert(message_mail)
          else if(message_phone!=="Correct Phone number")
              alert(message_phone)
          else if(message_password!=="Correct Password")
              alert(message_password)
          else if (this.state.password !== this.state.confirm_password)
              alert('PASSWORD ENTERED IS NOT MATCHING WITH CONFIRM PASSWORD')
          else
          {
              console.log(this.state.name+"\t"+this.state.phone_number)
              console.log(this.state.email_username+"\t"+this.state.password)
              console.log(this.state.confirm_password+"\t"+this.state.access_id)
              // const navigate = useNavigate();
              // navigate('/login');
              Register_User(this.state.name, this.state.email_username, this.state.phone_number, this.state.password).then((res)=>{
                  console.log("Received response from DB: " + res)
                  if(res==='Account exits')
                      alert("Account already exists with this mail is")
                  else
                      {
                          console.log("Registered Successfully!!")
                          alert("Registered Successfully!!")
                      }
                  window.open('/',"_self");
              })
              
          }
      } catch (err)
      {
        alert(err)
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
            <h1>Register new Admin</h1>
            <div className='Login_Inputs'>
              <div className='grid-container'>

                    <label>Name: </label>
                    <input type="text" className="inputs" placeholder="Enter name" onChange={this.changeName} />
                
                    <label>Phone number: </label>
                    <input type="text" className="inputs" placeholder='Enter your phone number' onChange={this.changePhoneNumber} />
                
                    <label>Email or Userid: </label>
                    <input type="text" className="inputs" placeholder="Enter email id or userid" onChange={this.changeEmail} />
                
                    <label>Password: </label>
                    <input type="password" className="inputs" placeholder='Enter your password' onChange={this.changePassword} />

                    <label>Confirm Password: </label>
                    <input type="password" className="inputs" placeholder='Re-Enter your password' onChange={this.changeConfirmPassword} />

                    <label>Authentication ID: </label>
                    <input type="password" className="inputs" placeholder='Enter access ID sent by hospital management' onChange={this.changeAccessID} />
                
              </div>
                <button type='submit' className='Submit_button' onClick={this.submitButton}>REGISTER</button>
        <div className='nav'>
          <Link to='/' className='link'>Already registered? Please login</Link>
        </div>
            </div>
        </div>
    </>
  }
}
export {Register}