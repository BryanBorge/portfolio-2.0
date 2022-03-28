import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const NavItem = ({ text }) => {
  return (
    <Box sx={{ mr: 3 }}>
      <Typography>{text}</Typography>
    </Box>
  );
};

export default NavItem;
