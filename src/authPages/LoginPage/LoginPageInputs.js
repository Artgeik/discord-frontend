import React from "react";
import InputWithLabel from "../../shared/components/InputWithLabel";


const LoginPageInputs = ({mail,setMail,password,setPassword}) => {
    return (
        <>
        <InputWithLabel
        value={mail}
        setValue={setMail}
        label="E-mail"
        type="text"
        placeholder="Enter Email Address" />
        <InputWithLabel
        value={password}
        setValue={setPassword}
        label="Password"
        type="Password"
        placeholder="Enter Password"/>
        </>
    );
};

export default LoginPageInputs;