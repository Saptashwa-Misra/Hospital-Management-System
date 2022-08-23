import React from 'react';
import '../index.css';
import {
    Link
  } from "react-router-dom";
import {getDoctors} from '../apicalls'
import {getPatientSearchOne} from '../apicalls'
import {getDoctorSearchOne} from '../apicalls'
import {Book_Appointment} from '../apicalls'
import { isLoggedIn } from './loggedInOrNot';

class BookAppointment extends React.Component
{

    constructor(props) 
    {
      super(props)
      this.state={
          response: [],
          search: [],
          email_username: '',
          appointmentDate: '',
          appointmentTime: ''
      }
    }

    changeEmail = (event) =>{
        console.log(event.target.value)
        this.setState({email_username: event.target.value})
      }

    changeAppointmentDate = (event) =>{
    console.log(event.target.value)
    this.setState({appointmentDate: event.target.value})
    }

    changeAppointmentTime = (event) =>{
        console.log(event.target.value)
        this.setState({appointmentTime: event.target.value})
    }

  bookAppointment = async (event) => {
    console.log(event.target.id)
    console.log(this.state.appointmentDate)
    try{
        // let res_doctor = await getDoctors()
        //TODO: New Backend to be created for searching a single doctor
        //console.log(res_doctor +"\n"+this.state.email_username)
        let res_doctor = await getDoctorSearchOne(event.target.id)
        console.log(res_doctor)
        let res_patient = await getPatientSearchOne(this.state.email_username)
        console.log(res_patient)
        if(res_patient==="No patients are registered")
            alert ("Patient with the entered mail id is not registered.\nPlease register before booking an appointment.")
        else
        {
            let res_bookAppointment = await Book_Appointment (res_doctor.url, res_doctor.name, res_doctor.email, res_doctor.mobile, res_doctor.department, res_doctor.registration_no, res_patient.name, res_patient.email, res_patient.mobile, res_patient.dob, res_patient.gender, this.state.appointmentDate, this.state.appointmentTime)
            alert (res_bookAppointment)
        }
        //After receiving doctor JSON and patient JSON create the new backend for appointment and call it in apicalls
    }
    catch (Error)
    {
        console.log(Error)
        alert(Error)
    }
  }

  Display_Records = (event) =>{
    getDoctors().then((res)=>{
        console.log("Res.length: "+res.length)
        console.log(this.state.response.length)
        console.log(res.length!==this.state.response.length)
        console.log(1===2)
        if(res.length!==this.state.response.length)
            this.setState({response:res, search:res})
        else
            {
                console.log("For Loop")
                for(let i=0; i<res.length; i++ )
            //console.log(res[i].name)
                    if(this.state.response[i].name!==res[i].name)
                        this.setState({response:res, search:res})
            }
    })
    console.log(this.state.response)
    let doctor_users = this.state.search.map (doctor => {
        console.log(doctor.name)
        return <>
            <div className='Admin_Div'>
                <div><img className='DoctorProfilePhoto' src={doctor.url} alt="DoctorPhoto" /></div>
                <div>Name: Dr. {doctor.name.toUpperCase()}</div>
                <div>Email: {doctor.email}</div>
                <div>Phone: {doctor.mobile}</div>
                <div>D.O.B.: {doctor.dob}</div>
                <div>Department: {doctor.department}</div>
                <div>Registration NO: {doctor.registration_no}</div>
                <button type='submit' className='BookAppointment_Button' id={doctor.email} onClick={this.bookAppointment}>BOOK APPOINTMENT</button>
            </div>
        </>
    })
    if(this.state.search.length===0)
        return <h2>Sorry!! No relevant doctors found!!</h2>
    console.log(doctor_users)
    return doctor_users
  }

  search_doctor = (event) => {
    try{
        console.log(event.target.value)
        let searched_doctor = this.state.response.filter(doctor => (doctor.name.toUpperCase().indexOf(event.target.value.toUpperCase())>=0 || doctor.email.toUpperCase().indexOf(event.target.value.toUpperCase())>=0 || doctor.mobile.indexOf(event.target.value)>=0 || doctor.department.toUpperCase().indexOf(event.target.value.toUpperCase())>=0))
        console.log(searched_doctor)
        this.setState({search: searched_doctor})
    }
    catch (Exception)
    {
        this.setState({search: this.state.response})
    }
  }

  render()
  {
    console.log('Render called')
    console.log(isLoggedIn())
    if(isLoggedIn()===true)
        return <>
            <div class='Body'>
                <h1>Book Appointments!!</h1>
                
                <div className='grid-container'>
                    <label>Patients's Email: </label>
                    <input type="text" className="inputs" placeholder="Enter email id" onChange={this.changeEmail} />

                    <label>Date of Appointment: </label>
                    <input type="date" className="inputs" onChange={this.changeAppointmentDate} />

                    <label>Time of Appointment: </label>
                    <input type="time" className="inputs" id="" onChange={this.changeAppointmentTime}/>
                
                </div>
                <div className='Search_bar'>
                    <Link to = "/home_page/patients" className='LinktoHome'>&#x2190;</Link>
                    <input type="text" className="Search" id="Search" placeholder="Search by name, mail id, department or phone number......." onChange={this.search_doctor}/>
                </div>
                <div className='DisplayRecords'>{this.Display_Records()}</div>
                
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
export {BookAppointment}