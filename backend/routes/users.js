var express = require('express');
var router = express.Router();
var User=require('../routes/schema')
var Doctor_User=require('../routes/doctor_schema')
var Patient_User=require('../routes/patient_schema')
var book_Appointment=require('../routes/appointment_schema')
var {hashPwd,hashCompare}=require('../routes/bcrypt');

/* ADMIN BACKEND */
router.get('/display', async function(req, res) {
  try {
    const result = await User.find()
    res.send(result)
  }
  catch (err)
  {
    console.log(err);
  }
});
router.get('/admin/searchOne/:email', async function(req, res) {
  try {
    const result = await User.findOne({email:""+req.params.email})
    if(result===null)
      res.send("No admins are registered")
    else
      res.send(result)
  }
  catch (err)
  {
    console.log(err);
  }
});
router.post('/register', async function(req, res) {
  try {
    const {name, email, mobile, password} = req.body
    const result = await User.findOne({email:req.body.email}) //Email is already there
    if(result)
    {
      res.json({
        message:"Account exits"
      })
    }
    else{
      //console.log("Hello!!")
      let pwd = await hashPwd(req.body.password)
      req.body.password = pwd //Hash password will be stored.
      //const record = await new User({name,email,mobile,password}).save() //Create new Account
      const record = await new User(req.body).save() //Create new Account
      res.json({
        message:'Account Added'
      })
    }
  }
  catch (err)
  {
    console.log(err);
  }
});
router.post('/login', async function(req, res) {
  try {
    const {email, password} = req.body
    const result = await User.findOne({email:req.body.email}) //Email is already there
    if(result)
    {
      //let compare=result.password === req.body.password
      let compare = await hashCompare(result.password, req.body.password)
      if(compare)
      {
        res.json({
          message:"Login Success"
        })
      }
      else{
        res.json({
          message:'Wrong Password'
        })
      }
    }
    else{
      res.json({
        message:'Kindly register to continue'
      })
    }
  }
  catch (err)
  {
    console.log(err);
  }
});

/* DOCTOR BACKEND */
router.get('/doctor/display', async function(req, res) {
  try {
    const result = await Doctor_User.find()
    if(result.length==0)
      res.send("No doctors are registered")
    else
      res.send(result)
  }
  catch (err)
  {
    console.log(err);
  }
});
router.get('/doctor/searchOne/:email', async function(req, res) {
  try {
    const result = await Doctor_User.findOne({email:""+req.params.email})
    // console.log(req)
    // console.log(req.params.email)
    // console.log(result)
    if(result===null)
      res.send("No doctors are registered")
    else
      res.send(result)
  }
  catch (err)
  {
    console.log(err);
    res.send(err);
  }
});
router.post('/doctor/register', async function(req, res) {
  try {
    const {url, name, email, mobile, dob, department, registration_no} = req.body
    const result = await Doctor_User.findOne({email:req.body.email}) //Email is already there
    if(result)
    {
      res.json({
        message:"Doctor with the entered mail id exits"
      })
    }
    else{
      // let pwd = await hashPwd(req.body.password)
      // req.body.password = pwd //Hash password will be stored.
      //const record = await new User({name,email,mobile,password}).save() //Create new Account
      const record = await new Doctor_User(req.body).save() //Create new Account
      res.json({
        message:'New Doctor Added'
      })
    }
  }
  catch (err)
  {
    console.log(err);
  }
});
router.put('/doctor/update', async function(req, res) {
  try {
    const result = await Doctor_User.findOne({email:req.body.email}) //Email is present in DB
    if(result)
    {
      const record = await Doctor_User.updateOne({email:req.body.email}, {$set:req.body})
      res.json({
        response: record,
        message:"Doctor record updated successfully!!"
      })
    }
    else{
      res.json({
        message:'Doctor not found - Please register'
      })
    }
  }
  catch (err)
  {
    console.log(err);
  }
});
router.delete('/doctor/delete/:mail', async function(req, res) {
  try {
    const result = await Doctor_User.findOne({email:req.params.mail}) //Email is already there
    if(result)
    {
      const del_result = await Doctor_User.deleteOne({email:req.params.mail})
      res.json({
        message:"Doctor record deleted successfully!!"
      })
    }
    else{
      res.json({
        message:'Doctor record not found'
      })
    }
  }
  catch (err)
  {
    console.log(err);
  }
});

/* PATIENT BACKEND */
router.get('/patient/display', async function(req, res) {
  try {
    const result = await Patient_User.find()
    if(result.length==0)
      res.send("No patients are registered")
    else
      res.send(result)
  }
  catch (err)
  {
    console.log(err);
  }
});
router.get('/patient/searchOne/:email', async function(req, res) {
  try {
    // console.log(req.params.email)
    const result = await Patient_User.findOne({email:""+req.params.email})
    // console.log(req)
    // console.log(req.params.email)
    // console.log(result)
    if(result===null)
      res.send("No patients are registered")
    else
      res.send(result)
  }
  catch (err)
  {
    console.log(err);
  }
});
router.post('/patient/register', async function(req, res) {
  try {
    const {name, email, mobile, dob, gender} = req.body
    const result = await Patient_User.findOne({email:req.body.email}) //Email is already there
    if(result)
    {
      res.json({
        message:"Patient with the entered mail id exits"
      })
    }
    else{
      // let pwd = await hashPwd(req.body.password)
      // req.body.password = pwd //Hash password will be stored.
      //const record = await new User({name,email,mobile,password}).save() //Create new Account
      const record = await new Patient_User(req.body).save() //Create new Account
      res.json({
        message:'New Patient Added'
      })
    }
  }
  catch (err)
  {
    console.log(err);
  }
});
router.put('/patient/update', async function(req, res) {
  try {
    const result = await Patient_User.findOne({email:req.body.email}) //Email is present in DB
    if(result)
    {
      const record = await Patient_User.updateOne({email:req.body.email}, {$set:req.body})
      res.json({
        response: record,
        message:"Patient record updated successfully!!"
      })
    }
    else{
      res.json({
        message:'Patient not found - Please register'
      })
    }
  }
  catch (err)
  {
    console.log(err);
  }
});
router.delete('/patient/delete/:mail', async function(req, res) {
  try {
    const result = await Patient_User.findOne({email:req.params.mail}) //Email is already there
    if(result)
    {
      const del_result = await Patient_User.deleteOne({email:req.params.mail})
      res.json({
        message:"Patient record deleted successfully!!"
      })
    }
    else{
      // let pwd = await hashPwd(req.body.password)
      // req.body.password = pwd //Hash password will be stored.
      //const record = await new User({name,email,mobile,password}).save() //Create new Account
      //const record = await new Patient_User(req.body).save() //Create new Account
      res.json({
        message:'Patient record not found'
      })
    }
  }
  catch (err)
  {
    console.log(err);
  }
});

/* APPOINTMENT BACKEND */

router.get('/getAppointmentDetails', async function (req, res) {
  try{
    let result = await book_Appointment.find()
    if(result.length===0)
      res.send("No appointments are booked!! Enjoy your free time!!")
    else
      res.send(result)
  }
  catch (err)
  {
    console.log(err)
  }
})
router.post('/bookAppointment', async function(req, res) {
  try {
    const result = await book_Appointment.findOne({PatientEmail:req.body.PatientEmail}) //Patient Email is already there
    if(result)
    {
      res.json({
        message:"Patient with the entered mail already has an active appointment booked"
      })
    }
    else{
      const record = await new book_Appointment(req.body).save() //Create new Appointment
      res.json({
        message:'Appointment booked successfully!! Wish you a speedy recovery!!'
      })
    }
  }
  catch (err)
  {
    console.log(err);
  }
});
router.delete('/appointment/cancel/:_id', async function(req, res) {
  try {
    const result = await book_Appointment.findOne({_id:req.params._id}) //Email is already there
    if(result)
    {
      const del_result = await book_Appointment.deleteOne({_id:req.params._id})
      res.json({
        message:"Appointment cancelled successfully!!"
      })
    }
    else{
      res.json({
        message:'Appointment record not found!!'
      })
    }
  }
  catch (err)
  {
    console.log(err);
  }
});

module.exports = router;
console.log("Backend of Hospital Management System - Saptashwa Misra")