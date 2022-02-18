import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { TEAL, GRAY } from "../constants";
import { Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const AboutMe = () => {
  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="center" sx={{ ml: 10, mr: 10, mt: 5, mb: 20 }}>
        <Grid container spacing={12}>
          <Grid item xs={12} md={7}>
            <div style={{ maxWidth: "800px", display: "flex", flexDirection: "column" }}>
              <Typography variant="p">
                Hello! My name is Bryan and I enjoy creating things for the internet. My interest in web
                development started in 2019 when I graduated college - After working with C++ for most of my
                schooling, I wanted to build something more modern and accessible.
              </Typography>
              <br />
              <br />
              <Typography variant="p">
                Since then, I have had the opportunity to lead the development of a mobile app and the
                privilege of working at a commercial software company. My main focus today is building
                responsive, highly configurable meal delivery systems at Applied Visions for a variety of
                clients.
              </Typography>
              <br />
              <Typography variant="p">Here are some technologies I work with everyday: </Typography>
              <br />
              <Grid container>
                <Grid item xs={12} sm={6}>
                  <List dense>
                    <ListItem>
                      <ListItemIcon sx={{ color: TEAL }}>
                        <ArrowForwardIosIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Javascript (ES6+)" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon sx={{ color: TEAL }}>
                        <ArrowForwardIosIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="React" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon sx={{ color: TEAL }}>
                        <ArrowForwardIosIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Material UI" />
                    </ListItem>
                  </List>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <List dense>
                    <ListItem>
                      <ListItemIcon sx={{ color: TEAL }}>
                        <ArrowForwardIosIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Git / BitBucket" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon sx={{ color: TEAL }}>
                        <ArrowForwardIosIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="SQL Server" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon sx={{ color: TEAL }}>
                        <ArrowForwardIosIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="C# ASP.Net" />
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={12} md={5}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img
                style={{
                  borderRadius: "50%",
                  border: `2px solid ${GRAY}`,
                  height: "300px",
                  maxInlineSize: "100%",
                }}
                src="https://avatars.githubusercontent.com/u/34038688?v=4"
              />
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AboutMe;
