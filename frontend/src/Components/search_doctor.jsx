import React from 'react';
import '../index.css';
import {
    Link
  } from "react-router-dom";
import {getDoctors} from '../apicalls'
import { isLoggedIn } from './loggedInOrNot';

class SearchDoctor extends React.Component
{

    constructor(props) 
    {
      super(props)
      this.state={
          response: [],
          search: []
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
                <h1>Search Doctors!!</h1>
                <div className='Search_bar'>
                    <Link to = "/home_page/doctor" className='LinktoHome'>&#x2190;</Link>
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
export {SearchDoctor}