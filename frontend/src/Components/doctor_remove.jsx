import React from 'react';
import '../index.css';
import header from './images/Header.jpeg';
import {
    Link
  } from "react-router-dom";
import {Register_Doctors} from '../apicalls';

class DoctorRemove extends React.Component
{
  constructor(props) 
  {
    super(props)
    this.state={
        email_username: '',
        registration_number: ''
    }
  }


  changeEmail = (event) =>{
    console.log(event.target.value)
    this.setState({email_username: event.target.value})
  }


  changeRegistrationNumber = (event) =>{
    console.log(event.target.value)
    this.setState({registration_number: event.target.value})
  }

  submitButton = () => {
        console.log(this.state.email_username)
        console.log(this.state.registration_number)

        // Register_Doctors(this.state.url, this.state.name, this.state.email_username, this.state.phone_number, this.state.dob, this.state.department, this.state.registration_number).then((res)=>{
        //     console.log("Received response from DB: " + res)
        //     if(res==='Doctor with the entered mail id exits')
        //         alert("Doctor with the entered mail id exits")
        //     else
        //         {
        //             console.log("Registered Successfully!!")
        //             alert("Registered Successfully!!")
        //         }
        // })
        
    //}
  }

  render()
  {
    console.log('Render called')
    return <>
        <Link to = "/home_page/doctor" className='LinktoHome'>&#x2190;</Link>
        <div>
            <img src={header} alt="Header" />
        </div>
        <div class='Body'>
            <h1>Remove Doctor</h1>
            <div className='Login_Inputs'>
              <div className='grid-container'>
    
                    <label>Doctor's Email: </label>
                    <input type="text" className="inputs" placeholder="Enter email id" onChange={this.changeEmail} />

                    <label>Doctor's Registration number: </label>
                    <input type="text" className="inputs" placeholder="Enter registration number" onChange={this.changeRegistrationNumber} />
                
              </div>
                <button type='submit' className='Submit_button' onClick={this.submitButton}>REMOVE</button>
        <div className='nav'>
          <Link to='/home_page/doctor/search_doctor' className='link'>Unable to remove? Please search</Link>
        </div>
            </div>
        </div>
    </>
  }
}
export {DoctorRemove}