import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";

const RedirectText = styled("span")({
  color: "#00AFF4",
  fontWeight: 500,
  cursor: "pointer",
});

const RedirectInfo = ({
  text,
  redirectText,
  additionalStyles,
  to
}) => {
  const navigate=useNavigate();
  function redirectHandle(){
    navigate(to);
  }

  return (
    <Typography
      sx={{ color: "#72767d" }}
      style={additionalStyles ? additionalStyles : {}}
      variant="subtitle2"
    >
      {text}
      <RedirectText onClick={redirectHandle}>
        {redirectText}
      </RedirectText>
    </Typography>
  );
};

export default RedirectInfo;
