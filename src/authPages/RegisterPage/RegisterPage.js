import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import AuthBox from "../../shared/components/AuthBox";
import RegisterPageFooter from "./RegisterPageFooter";
import RegisterPageInputs from "./RegisterPageInputs";
import { validateRegisterForm } from "../../shared/utils/validators";
import {connect} from 'react-redux';
import { getActions } from "../../store/actions/authAction";
import {useNavigate} from 'react-router-dom';


const RegisterPage = ({register}) => {
  const navigate = useNavigate();
  const [mail, setMail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isFormValid, setIsFormValid] = useState("");

  const handleRegister = () => {
    const userDetails ={
      mail,
      password,
      username
    };

    register(userDetails,navigate);
  };

  useEffect(() => {
    setIsFormValid(
      validateRegisterForm({
        mail,
        username,
        password,
      })
    );
  }, [mail, username, password, setIsFormValid]);

  return (
    <AuthBox>
      <Typography variant="h5" sx={{ color: "white" }}>
        Create an account
      </Typography>
      <RegisterPageInputs
        mail={mail}
        setMail={setMail}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
      <RegisterPageFooter
        handleRegister={handleRegister}
        isFormValid={isFormValid}
      />
      <h5>email doesn't have to be a real one, it just needs to be valid and password can be anything between 4-12 characters.</h5>
    </AuthBox>
  );
};

const mapActionsToProps = (dispatch)=>{
  return {
      ...getActions(dispatch)
  }
}

export default connect(null,mapActionsToProps)(RegisterPage);
