import axios from 'axios'

const url = 'http://localhost:8000/'

export const getUsers = async () => {
    return await axios.get(`${url}users/display`).then(res=>res.data)
}

export const Register_User = async (name, email, mobile, password) => {
    let req_json = {
        "name": name,
        "email": email,
        "mobile": mobile,
        "password": password
    }
    //return await axios.post(`${url}users/register`,(name,email,mobile,password)).then(res=>res.data)
    // return await axios.post(`${url}users/register`,req_json).then(res=>res.data)
    const res =  await axios.post(`${url}users/register`,req_json)
    //const data = await res.json()
    console.log(res.data.message)
    return res.data.message
}