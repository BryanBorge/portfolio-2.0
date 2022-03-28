import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const Landing = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" sx={{ ml: 10, mr: 10, mt: 5, mb: 20 }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", height: "100%" }}>
        <Typography variant="h5" gutterBottom color="secondary">
          Hi, my name is
        </Typography>
        <Typography variant="h3" style={{ fontSize: "60px" }} gutterBottom>
          Bryan Borgesano.
        </Typography>
        <div style={{ maxWidth: "540px", paddingBottom: "25px" }}>
          <Typography variant="p">
            I'm a New York based Software Developer specializing in building responsive web based experiences.
          </Typography>
        </div>
        <a href="https://github.com/BryanBorge" target="_blank" rel="noopener">
          <Button color="secondary" variant="outlined" style={{ width: "225px", height: "50px" }}>
            Check out my GitHub
          </Button>
        </a>
      </div>
    </Box>
  );
};

export default Landing;
