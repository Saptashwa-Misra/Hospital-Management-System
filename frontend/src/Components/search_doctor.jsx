import React from 'react';
import '../index.css';
import header from './images/displayAdmin.jpg';
import {
    Link
  } from "react-router-dom";
import {getDoctors} from '../apicalls'

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
        //return admin_users
    })
    console.log(this.state.response)
    let admin_users = this.state.search.map (admin => {
        console.log(admin.name)
        return <>
            <div className='Admin_Div'>
                <div>Name: {admin.name}</div>
                <div>Email: {admin.email}</div>
                <div>Phone: {admin.mobile}</div>
            </div>
        </>
    })
    console.log(admin_users)
    return admin_users
  }

  search_admin = (event) => {
    try{
        console.log(event.target.value)
        let searched_admin = this.state.response.filter(admin => (admin.name.toUpperCase().indexOf(event.target.value.toUpperCase())>=0 || admin.email.toUpperCase().indexOf(event.target.value.toUpperCase())>=0 || admin.mobile.indexOf(event.target.value)>=0))
        console.log(searched_admin)
        this.setState({search: searched_admin})
    }
    catch (Exception)
    {
        this.setState({search: this.state.response})
    }
  }

  render()
  {
    console.log('Render called')
    return <>
        <div class='Body'>
            <h1>Search Doctors!!</h1>
            <div className='Search_bar'>
                <Link to = "/home_page/doctor" className='LinktoHome'>&#x2190;</Link>
                <input type="text" className="Search" id="Search" placeholder="Search by name, mail id or phone number......." onChange={this.search_admin}/>
            </div>
            <div className='DisplayRecords'>{this.Display_Records()}</div>
            
        </div>
    </>
  }
}
export {SearchDoctor}