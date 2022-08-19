const mongoose = require ('mongoose')
const DoctorSchema = new mongoose.Schema ( //Obj Creation
    {
        url:{type:String, default:""},
        name:{type:String, default:""},
        email:{type:String, required:true, lowercase:true},
        mobile:{type:String},
        dob:{type:String},
        department:{type:String},
        registration_no:{type:String}
    },
    {
         collection:'HMS_DoctorDetails'
    }
)
module.exports=mongoose.model('doctorModel',DoctorSchema)