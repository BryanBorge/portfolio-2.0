import React from "react";
import Button from "@mui/material/Button";

const PrimaryButton = props => {
  return (
    <Button color="secondary" variant="outlined" style={{ ...props.style, textTransform: "none" }}>
      {props.children}
    </Button>
  );
  
};

export default PrimaryButton;
