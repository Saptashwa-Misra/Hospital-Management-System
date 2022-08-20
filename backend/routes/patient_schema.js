const mongoose = require ('mongoose')
const PatientSchema = new mongoose.Schema ( //Obj Creation
    {
        name:{type:String, default:""},
        email:{type:String, required:true, lowercase:true},
        mobile:{type:String},
        dob:{type:String},
        gender:{type:String}
    },
    {
         collection:'HMS_PatientDetails'
    }
)
module.exports=mongoose.model('patientModel',PatientSchema)