import React from 'react';
import '../index.css';
import { isLoggedIn } from './loggedInOrNot';
import {
    Link
  } from "react-router-dom";
import {getPatients} from '../apicalls'

class SearchPatients extends React.Component
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
    getPatients().then((res)=>{
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
    let patient_users = this.state.search.map (patient => {
        console.log(patient.name)
        return <>
            <div className='Admin_Div'>
                <div>Name: {patient.name.toUpperCase()}</div>
                <div>Email: {patient.email}</div>
                <div>Phone: {patient.mobile}</div>
                <div>D.O.B.: {patient.dob}</div>
                <div>Gender: {patient.gender}</div>
            </div>
        </>
    })
    if(this.state.search.length===0)
        return <h2>Sorry!! No relevant patients found!!</h2>
    console.log(patient_users)
    return patient_users
  }

  search_patient = (event) => {
    try{
        console.log(event.target.value)
        let searched_patients = this.state.response.filter(patient => (patient.name.toUpperCase().indexOf(event.target.value.toUpperCase())>=0 || patient.email.toUpperCase().indexOf(event.target.value.toUpperCase())>=0 || patient.mobile.indexOf(event.target.value)>=0))
        console.log(searched_patients)
        this.setState({search: searched_patients})
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
                <h1>Search Patients!!</h1>
                <div className='Search_bar'>
                    <Link to = "/home_page/patients" className='LinktoHome'>&#x2190;</Link>
                    <input type="text" className="Search" id="Search" placeholder="Search by name, mail id or phone number......." onChange={this.search_patient}/>
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
export {SearchPatients}