import React from 'react';
import '../index.css';
import header from './images/Header.jpeg';
import {
    Link
  } from "react-router-dom";
import {Update_Doctor} from '../apicalls';
import {getDoctorSearchOne} from '../apicalls'

class DoctorUpdate extends React.Component
{
  constructor(props) 
  {
    super(props)
    this.state={
        url: '',
        name: '',
        phone_number: '',
        email_username: '',
        dob: '',
        department: '',
        registration_number: ''
    }
  }

  changeName = (event) =>{
    console.log(event.target.value)
    this.setState({name: event.target.value})
  }

  changeURL = (event) =>{
    console.log(event.target.value)
    this.setState({url: event.target.value})
  }

  changePhoneNumber = (event) =>{
    console.log(event.target.value)
    this.setState({phone_number: event.target.value})
  }

  changeEmail = (event) =>{
    console.log(event.target.value)
    this.setState({email_username: event.target.value})
  }

  changeDepartment = (event) =>{
    console.log(event.target.value)
    this.setState({department: event.target.value})
  }

  changeDOB = (event) =>{
    console.log(event.target.value)
    this.setState({dob: event.target.value})
  }

  changeRegistrationNumber = (event) =>{
    console.log(event.target.value)
    this.setState({registration_number: event.target.value})
  }

  AutofillButton = async (event) => {
    try{
      let res_doctor = await getDoctorSearchOne(this.state.email_username)
      console.log(res_doctor)
      if(res_doctor==="No doctors are registered")
          alert ("The entered mail id does not exist!!\nPlease enter the correct mail id or register")
      else
          this.setState ({url:res_doctor.url, name:res_doctor.name, phone_number:res_doctor.mobile, dob:res_doctor.dob, department:res_doctor.department, registration_number:res_doctor.registration_no})
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

        Update_Doctor(this.state.url, this.state.name, this.state.email_username, this.state.phone_number, this.state.dob, this.state.department, this.state.registration_number).then((res)=>{
            console.log("Received response from DB: " + res)
            if(res==='Doctor not found - Please register')
                alert("Doctor not found - Please register")
            else
                {
                    console.log("Doctor record updated successfully!!")
                    alert("Doctor record updated successfully!!")
                }
        })
        
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
            <h1>Update Doctor Details</h1>
            <div className='Login_Inputs'>
              <div className='grid-container'>

                    <label>Doctor's Image URL: </label>
                    <input type="text" className="inputs" placeholder="Enter doctor's picture URL (should be public)" onChange={this.changeURL} value={this.state.url}/>

                    <label>Doctor's Name: </label>
                    <input type="text" className="inputs" placeholder="Enter name" onChange={this.changeName} value={this.state.name}/>
                
                    <label>Doctor's Phone number: </label>
                    <input type="text" className="inputs" placeholder='Enter phone number' onChange={this.changePhoneNumber} value={this.state.phone_number}/>
                
                    <label>Doctor's Email: </label>
                    <div>
                      <input type="text" className="inputs" placeholder="Enter email id" onChange={this.changeEmail}/>
                      <button type='submit' className='Autofill_Button' onClick={this.AutofillButton}>AUTOFILL USING EMAIL</button>
                    </div>

                    <label>Date of Birth: </label>
                    <input type="date" className="inputs" placeholder="Enter email id" onChange={this.changeDOB} value={this.state.dob}/>
                    
                    <label>Department: </label>
                    <select className='inputs' id='doctorDepartment_Select' onChange={this.changeDepartment} value={this.state.department}>
                        <option value = "" selected disabled hidden>Choose Doctor's Department</option>
                        <option value = "Cardiologists">Cardiologists</option>
                        <option value = "Dermatolgists">Dermatolgists</option>
                        <option value = "Endocrinologists">Endocrinologists</option>
                        <option value = "Family Physicians">Family Physicians</option>
                        <option value = "Gastroenterologists">Gastroenterologists</option>
                        <option value = "Hematologists">Hematologists</option>
                        <option value = "Nephrologists">Nephrologists</option>
                        <option value = "Pediatricians">Pediatricians</option>
                        <option value = "Emergency">Emergency</option>
                    </select>

                    <label>Doctor's Registration number: </label>
                    <input type="text" className="inputs" placeholder="Enter registration number" onChange={this.changeRegistrationNumber} value={this.state.registration_number}/>
                
              </div>
                <button type='submit' className='Submit_button' id='update_button' onClick={this.submitButton}>UPDATE</button>
        <div className='nav'>
          <Link to='/home_page/doctor/search_doctor' className='link'>Want to check details? Please search</Link>
        </div>
            </div>
        </div>
    </>
  }
}
export {DoctorUpdate}