import axios from 'axios'

//const url = 'http://localhost:8000/'
const url = 'https://hms-backend-saptashwa-misra.herokuapp.com/' 

//Admin
export const getUsers = async () => {
    //return await axios.get(`${url}users/display`).then(res=>res.data)
    const res = await axios.get(`${url}users/display`)
    console.log(res.data)
    return res.data
}

export const getAdminName = async () => {
    let email = sessionStorage.getItem('Email')
    console.log(email)
    const res = await axios.get(`${url}users/admin/searchOne/${email}`)
    console.log(res.data.name)
    sessionStorage.setItem('AdminName',res.data.name.toUpperCase())
    return res.data.name.toUpperCase()
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

export const Login_User = async (email, password) => {
    let req_json = {
        "email": email,
        "password": password
    }
    //return await axios.post(`${url}users/register`,(name,email,mobile,password)).then(res=>res.data)
    // return await axios.post(`${url}users/register`,req_json).then(res=>res.data)
    const res =  await axios.post(`${url}users/login`,req_json)
    //const data = await res.json()
    console.log(res.data.message)
    return res.data.message
}

//Doctors
export const getDoctors = async () => {
    const res = await axios.get(`${url}users/doctor/display`)
    console.log(res.data)
    return res.data
}

export const getDoctorSearchOne = async (email) => {
    console.log(email)
    const res = await axios.get(`${url}users/doctor/searchOne/${email}`)
    console.log(res.data)
    return res.data
}

export const Register_Doctors = async (picture_url, name, email, mobile, dob, department, registration_no) => {
    let req_json = {
        "url":picture_url,
        "name": name,
        "email": email,
        "mobile": mobile,
        "dob":dob,
        "department":department,
        "registration_no":registration_no
    }
    console.log(`${url}users/doctor/register`)
    const res =  await axios.post(`${url}users/doctor/register`,req_json)
    console.log(res.data.message)
    return res.data.message
}
export const Update_Doctor = async (picture_url, name, email, mobile, dob, department, registration_no) => {
    let req_json = {
        "url":picture_url,
        "name": name,
        "email": email,
        "mobile": mobile,
        "dob":dob,
        "department":department,
        "registration_no":registration_no
    }
    console.log(`${url}users/doctor/update`)
    const res =  await axios.put(`${url}users/doctor/update`,req_json)
    console.log(res.data.message)
    return res.data.message
}
export const Remove_Doctors = async (email) => {
    console.log(email)
    console.log(`${url}users/doctor/delete/${email}`)
    const res =  await axios.delete(`${url}users/doctor/delete/${email}`)
    console.log(res.data.message)
    return res.data.message
}

//Patients
export const getPatients = async () => {
    const res = await axios.get(`${url}users/patient/display`)
    console.log(res.data)
    return res.data
}

export const getPatientSearchOne = async (email) => {
    console.log(email)
    const res = await axios.get(`${url}users/patient/searchOne/${email}`)
    console.log(res.data)
    return res.data
}

export const Register_Patient = async (name, email, mobile, dob, gender) => {
    let req_json = {
        "name": name,
        "email": email,
        "mobile": mobile,
        "dob":dob,
        "gender":gender,
    }
    const res =  await axios.post(`${url}users/patient/register`,req_json)
    console.log(res.data.message)
    return res.data.message
}

export const Update_Patient = async (name, email, mobile, dob, gender) => {
    let req_json = {
        "name": name,
        "email": email,
        "mobile": mobile,
        "dob":dob,
        "gender":gender,
    }
    const res =  await axios.put(`${url}users/patient/update`,req_json)
    console.log(res.data.message)
    return res.data.message
}
export const Remove_Patients = async (email) => {
    console.log(email)
    console.log(`${url}users/patient/delete/${email}`)
    const res =  await axios.delete(`${url}users/patient/delete/${email}`)
    console.log(res.data.message)
    return res.data.message
}

//Appointments
export const getAppointments = async () => {
    const res = await axios.get(`${url}users/getAppointmentDetails`)
    console.log(res.data)
    return res.data
}

export const Book_Appointment = async (picture_url, doctorName, doctorEmail, doctorMobile, doctorDepartment, doctorRegistration_no, patientName, patientEmail, patientMobile, patientDOB, patientGender, appointmentDate, appointmentTime) => {
    let req_json = {
        "DoctorUrl":picture_url,
        "DoctorName":doctorName,
        "DoctorEmail":doctorEmail,
        "DoctorMobile":doctorMobile,
        "DoctorDepartment":doctorDepartment,
        "DoctorRegistration_no":doctorRegistration_no,
        "Patientname":patientName,
        "PatientEmail":patientEmail,
        "PatientMobile":patientMobile,
        "PatientDOB":patientDOB,
        "PatientGender":patientGender,
        "AppointmentDate":appointmentDate,
        "AppointmentTime":appointmentTime
    }
    console.log(`${url}/bookAppointment`)
    const res =  await axios.post(`${url}users/bookAppointment`,req_json)
    console.log(res.data.message)
    return res.data.message
}
export const CancelAppointment = async (_id) => {
    console.log(_id)
    console.log(`${url}users/appointment/cancel/${_id}`)
    const res =  await axios.delete(`${url}users/appointment/cancel/${_id}`)
    console.log(res.data.message)
    return res.data.message
}