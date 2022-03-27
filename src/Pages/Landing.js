import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const Landing = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" sx={{ ml: 10, mr: 10, mt: 5, mb: 20 }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", height: "100%" }}>
        <Typography variant="p" style={{ marginBottom: "0" }}>
          Hi, my name is
        </Typography>
        <Typography variant="h3" style={{ marginTop: "0", marginBottom: "0" }} color="secondary">
          Bryan Borgesano.
        </Typography>
        <div style={{ maxWidth: "540px", marginTop: "20px", marginBottom: "20px" }}>
          <Typography variant="p">
            I'm a New York based Software Developer specializing in building responsive web based experiences.
          </Typography>
        </div>
        <Button color="secondary" variant="outlined">
          Check out my GitHub!
        </Button>
      </div>
    </Box>
  );
};

export default Landing;
