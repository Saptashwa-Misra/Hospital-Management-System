const mongoose = require ('mongoose')
const AppointmentSchema = new mongoose.Schema ( //Obj Creation
    {
        DoctorUrl:{type:String, default:""},
        DoctorName:{type:String, default:""},
        DoctorEmail:{type:String, required:true, lowercase:true},
        DoctorMobile:{type:String},
        DoctorDepartment:{type:String},
        DoctorRegistration_no:{type:String},
        Patientname:{type:String, default:""},
        PatientEmail:{type:String, required:true, lowercase:true},
        PatientMobile:{type:String},
        PatientDOB:{type:String},
        PatientGender:{type:String},
        AppointmentDate:{type:String},
        AppointmentTime:{type:String}
    },
    {
         collection:'HMS_AppointmentDetails'
    }
)
module.exports=mongoose.model('appointmentModel',AppointmentSchema)