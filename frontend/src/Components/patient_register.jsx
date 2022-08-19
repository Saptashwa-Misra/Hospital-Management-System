import React from 'react';
import '../index.css';
import header from './images/Header.jpeg';
import {
    Link
  } from "react-router-dom";
import {Register_Doctors} from '../apicalls';

class PatientRegister extends React.Component
{
  constructor(props) 
  {
    super(props)
    this.state={
        name: '',
        phone_number: '',
        email_username: '',
        dob: '',
        department: '',
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

  changeDepartment = (event) =>{
    console.log(event.target.value)
    this.setState({department: event.target.value})
  }

  changeDOB = (event) =>{
    console.log(event.target.value)
    this.setState({dob: event.target.value})
  }

  changeGender = (event) =>{
    console.log(event.target.value)
    this.setState({gender: event.target.value})
  }

  submitButton = () => {
        console.log(this.state.name+"\t"+this.state.phone_number)
        console.log(this.state.email_username+"\t"+this.state.dob)
        console.log(this.state.url)
        console.log(this.state.registration_number+"\t"+this.state.department)

        // Register_Doctors(this.state.url, this.state.name, this.state.email_username, this.state.phone_number, this.state.dob, this.state.department, this.state.registration_number).then((res)=>{
        //     console.log("Received response from DB: " + res)
        //     if(res==='Doctor with the entered mail id exits')
        //         alert("Doctor with the entered mail id exits")
        //     else
        //         {
        //             console.log("Registered Successfully!!")
        //         }
        // })
        
    //}
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
            <h1>Register new Patient</h1>
            <div className='Login_Inputs'>
              <div className='grid-container'>

                    <label>Patient's Name: </label>
                    <input type="text" className="inputs" placeholder="Enter name" onChange={this.changeName} />
                
                    <label>Patient's Phone number: </label>
                    <input type="text" className="inputs" placeholder='Enter phone number' onChange={this.changePhoneNumber} />
                
                    <label>Patients's Email: </label>
                    <input type="text" className="inputs" placeholder="Enter email id" onChange={this.changeEmail} />

                    <label>Date of Birth: </label>
                    <input type="date" className="inputs" placeholder="Enter email id" onChange={this.changeDOB} />
                    
                    <label>Department: </label>
                    <select className='inputs' id='doctorDepartment_Select' onChange={this.changeDepartment}>
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
                    <label>Patient's Gender: </label>
                    <div className='RadioButtons'>
                        <div><input type="radio" name="gender" value="Male" onChange={this.changeGender}/>Male</div>
                        <div><input type="radio" name="gender" value="Female" onChange={this.changeGender}/>Female</div>
                    </div>
              </div>
                <button type='submit' className='Submit_button' onClick={this.submitButton}>REGISTER</button>
        <div className='nav'>
          <Link to='/' className='link'>Already registered? Please search</Link>
        </div>
            </div>
        </div>
    </>
  }
}
export {PatientRegister}