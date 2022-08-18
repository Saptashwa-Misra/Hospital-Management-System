const mongoose = require ('mongoose')
const DoctorSchema = new mongoose.Schema ( //Obj Creation
    {
        name:{type:String, default:" "},
        email:{type:String, required:true, lowercase:true},
        mobile:{type:String},
        qualification:{type:String}
    },
    {
         collection:'HMS_DoctorDetails'
    }
)
module.exports=mongoose.model('userModel',DoctorSchema)