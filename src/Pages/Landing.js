import React from "react";
import Box from "@mui/material/Box";
import { TEAL, DARKER_TEAL, DARK_BLUE, OFF_GRAY, DEFAULT_TEXT_COLOR, WHITE, GRAY } from "../constants";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const Landing = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" sx={{ ml: 10, mr: 10, mt: 30, mb: 30 }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", height: "100%" }}>
        <Typography variant="p" style={{ marginBottom: "0" }}>
          Hi, my name is
        </Typography>
        <Typography variant="h3" style={{ marginTop: "0", marginBottom: "0" }}>
          Bryan Borgesano.
        </Typography>
        <div style={{ maxWidth: "540px", marginTop: '20px', marginBottom: '20px'}}>
          <Typography variant="p">
            I'm a software developer specializing in building responsive web based experiences. Currently, I'm
            focused on building highly configurable and robust software at <a href="">Applied Visions</a>
          </Typography>
        </div>
        <Button color="inherit" variant="outlined">
          Check out my GitHub!
        </Button>
      </div>
    </Box>
  );
};

export default Landing;
