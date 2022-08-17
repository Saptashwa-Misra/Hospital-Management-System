var express = require('express');
var router = express.Router();
var User=require('../routes/schema')
var {hashPwd,hashCompare}=require('../routes/bcrypt')

/* GET users listing. */
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
module.exports = router;
