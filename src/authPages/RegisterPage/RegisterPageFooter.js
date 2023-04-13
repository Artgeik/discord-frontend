import React from "react";
import { Tooltip } from "@mui/material";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";


const RegisterPageFooter = ({ handleRegister, isFormValid }) => {

  const getFormNotValidMessage = () => {
    return "Enter the correct email and password. the password should contain between 6 to 12 characters";
  };

  const getFormValidMessage = () => {
    return "Press to Register";
  };

  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label="Register"
            additionalStyles={{ marginTop: "30px" }}
            disabled={isFormValid}
            onClick={handleRegister}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text=""
        additionalStyles={{ marginTop: "5px" }}
        redirectText="Already have an account?"
        to="/login"
      />
    </>
  );
};

export default RegisterPageFooter;
