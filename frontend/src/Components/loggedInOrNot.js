//Check Logged In or Not
export const isLoggedIn = () => {
    console.log(sessionStorage.getItem('Email'))
    if(sessionStorage.getItem('Email')==null)
        return false;
    else
        return true;
}

export const LoggedIn = (email) => {
    sessionStorage.setItem('Email',email)
}