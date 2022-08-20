import React from 'react';
import '../index.css';
import header from './images/Header.jpeg';
import {
    Link
  } from "react-router-dom";
import {Register_Patient} from '../apicalls';

class PatientRemove extends React.Component
{
  constructor(props) 
  {
    super(props)
    this.state={
        phone_number: '',
        email_username: '',
    }
  }


  changePhoneNumber = (event) =>{
    console.log(event.target.value)
    this.setState({phone_number: event.target.value})
  }

  changeEmail = (event) =>{
    console.log(event.target.value)
    this.setState({email_username: event.target.value})
  }



  submitButton = () => {
        console.log(this.state.phone_number)
        console.log(this.state.email_username)

        // Register_Patient(this.state.name, this.state.email_username, this.state.phone_number, this.state.dob, this.state.gender).then((res)=>{
        //     console.log("Received response from DB: " + res)
        //     if(res==='Patient with the entered mail id exits')
        //         alert("Patient with the entered mail id exits")
        //     else
        //         {
        //             console.log("Registered Successfully!!")
        //             alert("Registered Successfully!!")
        //         }
        // })
  }

  render()
  {
    console.log('Render called')
    return <>
        <Link to = "/home_page/patients" className='LinktoHome'>&#x2190;</Link>
        <div>
            <img src={header} alt="Header" />
        </div>
        <div class='Body'>
            <h1>Remove Patient</h1>
            <div className='Login_Inputs'>
              <div className='grid-container'>
        
                    <label>Patient's Phone number: </label>
                    <input type="text" className="inputs" placeholder='Enter phone number' onChange={this.changePhoneNumber} />
                
                    <label>Patients's Email: </label>
                    <input type="text" className="inputs" placeholder="Enter email id" onChange={this.changeEmail} />

              </div>
                <button type='submit' className='Submit_button' onClick={this.submitButton}>REGISTER</button>
        <div className='nav'>
          <Link to='/home_page/patients/search_patient' className='link'>Unable to remove? Please search</Link>
        </div>
            </div>
        </div>
    </>
  }
}
export {PatientRemove}