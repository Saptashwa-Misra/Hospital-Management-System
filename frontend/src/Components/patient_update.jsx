import React from 'react';
import '../index.css';
import header from './images/Header.jpeg';
import {
    Link
  } from "react-router-dom";
import {Update_Patient} from '../apicalls';
import { isLoggedIn } from './loggedInOrNot';
import {getPatientSearchOne} from '../apicalls';

class PatientUpdate extends React.Component
{
  constructor(props) 
  {
    super(props)
    this.state={
        name: '',
        phone_number: '',
        email_username: '',
        dob: '',
        gender: ''
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

  changeDOB = (event) =>{
    console.log(event.target.value)
    this.setState({dob: event.target.value})
  }

  changeGender = (event) =>{
    console.log(event.target.value)
    this.setState({gender: event.target.value})
  }

  AutofillButton = async (event) => {
    try{
      let res_patient = await getPatientSearchOne(this.state.email_username)
      console.log(res_patient)
      if(res_patient==="No patients are registered")
          alert ("The entered mail id does not exist!!\nPlease enter the correct mail id or register")
      else
          this.setState ({name:res_patient.name, phone_number:res_patient.mobile, dob:res_patient.dob, gender:res_patient.gender})
  }
  catch (Error)
  {
      console.log(Error)
      alert(Error)
  }
}

  submitButton = () => {
        console.log(this.state.name+"\t"+this.state.phone_number)
        console.log(this.state.email_username+"\t"+this.state.dob)
        console.log(this.state.url)
        console.log(this.state.registration_number+"\t"+this.state.department)

        Update_Patient(this.state.name, this.state.email_username, this.state.phone_number, this.state.dob, this.state.gender).then((res)=>{
            console.log("Received response from DB: " + res)
            if(res==='Patient not found - Please register')
                alert("Patient not found - Please register")
            else
                {
                    console.log("Patient record updated successfully!!")
                    alert("Patient record updated successfully!!")
                }
        })
  }

  render()
  {
    console.log('Render called')
    console.log(isLoggedIn())
    if(isLoggedIn()===true)
      return <>
          <Link to = "/home_page/patients" className='LinktoHome'>&#x2190;</Link>
          <div>
              <img src={header} alt="Header" />
          </div>
          <div class='Body'>
              <h1>Update Patient Details</h1>
              <div className='Login_Inputs'>
                <div className='grid-container'>

                      <label>Patient's Name: </label>
                      <input type="text" className="inputs" placeholder="Enter name" onChange={this.changeName} value={this.state.name} />
                  
                      <label>Patient's Phone number: </label>
                      <input type="text" className="inputs" placeholder='Enter phone number' onChange={this.changePhoneNumber} value={this.state.phone_number} />
                  
                      <label>Patients's Email: </label>
                      <div>
                        <input type="text" className="inputs" placeholder="Enter email id" onChange={this.changeEmail} />
                        <button type='submit' className='Autofill_Button' onClick={this.AutofillButton}>AUTOFILL USING EMAIL</button>
                      </div>

                      <label>Date of Birth: </label>
                      <input type="date" className="inputs" onChange={this.changeDOB} value={this.state.dob}/>

                      <label>Patient's Gender: </label>
                      <div className='RadioButtons'>
                          <div><input type="radio" name="gender" value="Male" onChange={this.changeGender}/>Male</div>
                          <div><input type="radio" name="gender" value="Female" onChange={this.changeGender}/>Female</div>
                      </div>
                </div>
                  <button type='submit' className='Submit_button' onClick={this.submitButton}>UPDATE</button>
          <div className='nav'>
            <Link to='/home_page/patients/search_patient' className='link'>Want to check details? Please search</Link>
          </div>
              </div>
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
export {PatientUpdate}