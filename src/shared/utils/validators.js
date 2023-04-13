export const validateLoginForm =({mail,password})=>{
    const isMailValid=validateMail(mail);
    const isPasswordValid=validatePassword(password);
    return isMailValid && isPasswordValid; 
}

export const validateRegisterForm=({mail,password,username})=>{
    return(
        validateMail(mail) && validatePassword(password) && isUsernameValid(username)
    );
};

const isUsernameValid=(username)=>{
    return username.length>2 && username.length<13;
}

const validatePassword=(password)=>{
    return password.length>6 && password.length<12;
}

export const validateMail=(mail)=>{
    const regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(mail);
}