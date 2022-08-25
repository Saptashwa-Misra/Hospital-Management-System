export const Validate_Name = (name) => {
    let pattern = /^[a-zA-Z ]{8,15}$/
    console.log(pattern.test(name))
    if(name==="")
        return("Kindly enter the Name")
    else if (pattern.test(name)===false)
        return("Name: Atleast 8 to 15 Character Required\nNumbers are not allowed.")
    else
        return("Correct Name")
}

export const Validate_Email = (email) => {
    let pattern = /^[a-zA-Z0-9]{1}[a-zA-Z0-9._]{1,}[a-zA-Z0-9]{1}[@]{1}[a-zA-Z]{1,}[.]{1}[a-zA-Z]{1,}$/
    if(email==="")
        return("Kindly enter the Email")
    else if(pattern.test(email)===false)
        return("Invalid mail address.\nMail address can have alphabets, numbers, .(dot), _(underscore) and @")
    else
        return("Correct Mail ID")
}

export const Validate_Phone = (phone) => {
    let pattern = /^[6-9]{1}\d{9}$/
    if(phone==="")
        return("Kindly enter the Phone Number")
    else if(pattern.test(phone)===false)
        return("Invalid Phone number")
    else
        return("Correct Phone number")
}

export const Validate_Password = (password) =>{
    let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]*$/
    if(password[0].value==="")
        return("Kindly enter the Password")
    else if(pattern.test(password)===false)
        return("Password should have atleast 1 upper case, 1 lower case, 1 number and 1 special character !@#$%^&*()")
    else
    return("Correct Password")
}