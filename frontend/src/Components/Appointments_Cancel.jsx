import React from 'react';
import '../index.css';
import {
    Link
  } from "react-router-dom";
import {getAppointments} from '../apicalls'
import {CancelAppointment} from '../apicalls'
import { isLoggedIn } from './loggedInOrNot';

class AppointmentCancel extends React.Component
{

    constructor(props) 
    {
      super(props)
      this.state={
          response: [],
          search: [],
          cancel: 0
      }
    }

    cancel_Appointment = async (event) => {
        try{
            let res= await CancelAppointment(event.target.id)
            alert(res)
            this.setState({cancel:this.state.cancel+1})
        }
        catch (err)
        {
            console.log(err)
            alert(err)
        }
    }

  
  Display_Records = (event) =>{
    getAppointments().then((res)=>{
        console.log("Res.length: "+res.length)
        console.log(this.state.response.length)
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
    let booked_appointments = this.state.search.map (appointment => {
        console.log(appointment.name)
        return <>
            <div className='Admin_Div' id='AppointmentMain_Div'>
            <div>Appointment ID: {appointment._id}</div>
            <div>Appointment Date: {appointment.AppointmentDate}</div>
            <div>Appointment Time: {appointment.AppointmentTime}</div>
                <div className='Appointment_Div'>
                    <div className='DoctorAppointment_Div'>
                    <h4>Doctor Details</h4>
                        <div><img className='DoctorProfilePhoto_Appointment' src={appointment.DoctorUrl} alt="DoctorPhoto" /></div>
                        <div> Dr. {appointment.DoctorName.toUpperCase()}</div>
                        <div> {appointment.DoctorEmail}</div>
                        <div>Phone: {appointment.DoctorMobile}</div>
                        <div> {appointment.DoctorDepartment}</div>
                        <div> {appointment.DoctorRegistration_no}</div>
                    </div>
                    <div>
                        <div className='Appointment_Seperator'>     
                        </div>
                    </div>
                    <div className='PatientAppointment_Div'>
                    <h4>Patient Details</h4>
                        <div>{appointment.Patientname.toUpperCase()}</div>
                        <div> {appointment.PatientEmail}</div>
                        <div>Phone: {appointment.PatientMobile}</div>
                        <div>D.O.B.: {appointment.PatientDOB}</div>
                        <div>Gender: {appointment.PatientGender}</div>
                    </div>
                </div>
                <button type='submit' className='CancelAppointment_Button' id={appointment._id} onClick={this.cancel_Appointment}>CANCEL APPOINTMENT</button>
            </div>
        </>
    })
    if(this.state.search.length===0)
        return <h2>Sorry!! No relevant appointments found!!</h2>
    console.log(booked_appointments)
    return booked_appointments
  }

  search_doctor = (event) => {
    try{
        console.log("Search:" + event.target.value)
        let searched_appointment = this.state.response.filter(appointment => (appointment.DoctorName.toUpperCase().indexOf(event.target.value.toUpperCase())>=0 || appointment.DoctorEmail.toUpperCase().indexOf(event.target.value.toUpperCase())>=0 || appointment.DoctorMobile.indexOf(event.target.value)>=0 || appointment.DoctorDepartment.toUpperCase().indexOf(event.target.value.toUpperCase())>=0 || appointment.Patientname.toUpperCase().indexOf(event.target.value.toUpperCase())>=0 || appointment.PatientEmail.toUpperCase().indexOf(event.target.value.toUpperCase())>=0 || appointment.PatientMobile.indexOf(event.target.value)>=0))
        console.log("Searched Appointments"+searched_appointment)
        this.setState({search: searched_appointment})
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
            <div className='Body'>
                <h1>Cancel Appointments!</h1>
                <div className='Search_bar'>
                    <Link to = "/home_page/patients" className='LinktoHome'>&#x2190;</Link>
                    <input type="text" className="Search" id="Search" placeholder="Search by appointment id, name, mail id, doctor's department or phone number......." onChange={this.search_doctor}/>
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
export {AppointmentCancel}