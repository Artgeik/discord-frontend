import React from "react";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import { Tooltip } from "@mui/material";

const LoginPageFooter = ({ handleLogin, isFormValid }) => {

  const getFormNotValidMessage=()=>{
    return "Enter the correct email and password. the password should contain between 6 to 12 characters";
  }

  const getFormValidMessage=()=>{
    return "Press to log in";
  }

  return (
    <>
    <Tooltip title={ !isFormValid ? getFormNotValidMessage() : getFormValidMessage() }>
      
      <div>
        <CustomPrimaryButton
          label="Log In"
          additionalStyles={{ marginTop: "30px" }}
          disabled={isFormValid}
          onClick={handleLogin}
        />
      </div>
      </Tooltip>
      <RedirectInfo
        text="Need an account? "
        additionalStyles={{marginTop:"5px"}}
        redirectText="Create an account"
        to="/register"
      />
    </>
  );
};

export default LoginPageFooter;
