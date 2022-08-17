const mongoose = require ('mongoose')
const UserSchema = new mongoose.Schema ( //Obj Creation
    {
        name:{type:String, default:" "},
        email:{type:String, required:true, lowercase:true},
        mobile:{type:String},
        password:{type:String, required:true}
    },
    {
         collection:'HMS_AdminDetails'
    }
)
module.exports=mongoose.model('userModel',UserSchema)