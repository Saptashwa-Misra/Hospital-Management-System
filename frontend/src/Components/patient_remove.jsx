import React from 'react';
import '../index.css';
import header from './images/Header.jpeg';
import {
    Link
  } from "react-router-dom";
import {Remove_Patients} from '../apicalls';

class PatientRemove extends React.Component
{
  constructor(props) 
  {
    super(props)
    this.state={
        email_username: '',
    }
  }

  changeEmail = (event) =>{
    console.log(event.target.value)
    this.setState({email_username: event.target.value})
  }

  submitButton = () => {
        console.log(this.state.email_username)

        Remove_Patients(this.state.name, this.state.email_username).then((res)=>{
            console.log("Received response from DB: " + res)
            alert(res)
        })
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
                   
                    <label>Patients's Email: </label>
                    <input type="text" className="inputs" placeholder="Enter email id" onChange={this.changeEmail} />

              </div>
                <button type='submit' className='Submit_button' onClick={this.submitButton}>REMOVE</button>
        <div className='nav'>
          <Link to='/home_page/patients/search_patient' className='link'>Unable to remove? Please search</Link>
        </div>
            </div>
        </div>
    </>
  }
}
export {PatientRemove}