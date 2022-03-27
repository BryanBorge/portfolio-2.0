import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { List, Typography } from "@mui/material";
import CustomListItem from "../Components/CustomListItem/CustomListItem";

const AboutMe = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
      sx={{ ml: 5, mr: 5, mb: 20 }}>
      <div style={{ maxWidth: "700px", display: "flex", flexDirection: "column" }}>
        <Typography gutterBottom variant="p">
          Although I gratuated from <a href="">SUNY Farmingdale</a> with a B.S. in Computer Programming and
          Information Systems I am a self-taught web developer specializing in React.
        </Typography>
        <br />
        <Typography gutterBottom variant="p">
          I have had the opportunity to lead the development of a mobile application for an{" "}
          <a href="">independent record label</a>. Currently I'm working at <a href="">Applied Visions </a>
          as a Front End Developer building responsive and highly configurable software for a variety of
          clients.
        </Typography>
        <br />
        <Typography gutterBottom variant="p">
          Here are some technologies I work with everyday:{" "}
        </Typography>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <List>
              <CustomListItem text="Javascript (jQuery, ES6)" />
              <CustomListItem text="React" />
              <CustomListItem text="Material UI" />
            </List>
          </Grid>
          <Grid item xs={12} sm={6}>
            <List>
              <CustomListItem text="Git / BitBucket" />
              <CustomListItem text="SQL Server" />
              <CustomListItem text="C# ASP.Net" />
            </List>
          </Grid>
        </Grid>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}>
        <img
          style={{
            borderRadius: "50%",
            border: `2px solid`,
            height: "225px",
          }}
          src="https://avatars.githubusercontent.com/u/34038688?v=4"
        />
      </div>
    </Box>
  );
};

export default AboutMe;
