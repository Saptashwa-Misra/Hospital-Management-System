import React from 'react';
import '../index.css';
import header from './images/displayAdmin.jpg';
import {
    Link
  } from "react-router-dom";
import {getUsers} from '../apicalls'
import { isLoggedIn } from './loggedInOrNot';

class DisplayAdmin extends React.Component
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
    //let admin_users = <h1>Hello World</h1>
    //if(this.state.response==='')
    getUsers().then((res)=>{
        // admin_users = res.map (admin => {
        //     console.log(admin.name)
        //     return <>
        //         <div className='Admin_Div'>
        //             <div>Name: </div>
        //             <div>{admin.name}</div>
        //         </div>
        //     </>
        // })
        // console.log(admin_users)
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
    if(this.state.search.length===0)
        return <h2>Sorry!! No relevant admin found!!</h2>
    console.log(admin_users)
    return admin_users
  }

  search_admin = (event) => {
    try{
        console.log(event.target.value)
        //if(event.target.value==null)
            
        //if(event.target.value.leng)
        // let admin_users = this.state.response.map (admin => {
        //     console.log(admin.name)
        //     if(admin.name.toUpperCase().indexOf(event.target.value.toUpperCase())>=0 || admin.email.toUpperCase().indexOf(event.target.value.toUpperCase())>=0)
        //         return <>
        //             <div className='Admin_Div'>
        //                 <div>Name: {admin.name}</div>
        //                 <div>Email: {admin.email}</div>
        //                 <div>Phone: {admin.mobile}</div>
        //             </div>
        //         </>
        //     else
        //         return <></>
        // })
        // // console.log(admin_users)
        // this.setState({search:1})
        // return admin_users
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
    console.log(isLoggedIn())
    if(isLoggedIn()===true)
        return <>
            <div>
                <img className = 'Admin_Header' src={header} alt="Header" />
            </div>
            <div className='Body'>
                <h1>Display Admin!!</h1>
                <div className='Search_bar'>
                    <Link to = "/home_page/admin" className='LinktoHome'>&#x2190;</Link>
                    <input type="text" className="Search" id="Search" placeholder="Search by name, mail id or phone number......." onChange={this.search_admin}/>
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
export {DisplayAdmin}