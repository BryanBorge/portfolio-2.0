import React from "react";
import Box from "@mui/material/Box";
import { TEAL } from "../constants";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useMediaQuery } from "@mui/material";

const TabPanel = props => {
  const { children, value, index, ...other } = props;

  return (
    value === index && <Box sx={{p: 5}}>{children}</Box>
  );
};

const Experience = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const mediumViewport = useMediaQuery("(min-width:768px)");

  return (
    <>
      <Box
        display={mediumViewport && "flex"}
        alignItems="center"
        justifyContent="center"
        flexGrow={1}
        style={{ height: "500px", width: "100%", maxWidth: '2000px' }}>
        <Tabs
          orientation={mediumViewport ? "vertical" : "horizontal"}
          value={value}
          onChange={handleChange}
          textColor="primary"
          variant="scrollable"
          indicatorColor="secondary"
          style={{ margin: "30px" }}
          sx={{ borderRight: 1, borderColor: "divider" }}>
          <Tab label="Applied Visions" />
          <Tab label="Manic Kat Records" />
          <Tab label="Precipart" />
          <Tab label="Rink Management Services" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Typography variant="h5">Frontend Developer</Typography>
          <Typography variant="h6" color="secondary">
            Applied Visions
          </Typography>
          <Typography variant="p">June 2021 - Present</Typography>
          <List dense>
            <ListItem style={{maxWidth: '600px'}}>
              <ListItemIcon sx={{ color: TEAL }}>
                <ArrowForwardIosIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Primarily create and style front end components while implementing new functionality and bug fixes according to requirements and user stories" />
            </ListItem>{" "}
            <ListItem style={{maxWidth: '600px'}}>
              <ListItemIcon sx={{ color: TEAL }}>
                <ArrowForwardIosIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Member of a team of 12 people that work closely with QA and Product Specialists" />
            </ListItem>
            <ListItem style={{maxWidth: '600px'}}>
              <ListItemIcon sx={{ color: TEAL }}>
                <ArrowForwardIosIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Mostly utilize React with Material UI, JQuery and C# ASP.Net" />
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography variant="h5">Full Stack Developer </Typography>
          <Typography variant="h6" color="secondary">
            Manic Kat Records
          </Typography>
          <Typography variant="p">Sept 2020 - March 2021</Typography>
          <List dense>
            <ListItem style={{maxWidth: '600px'}}>
              <ListItemIcon sx={{ color: TEAL }}>
                <ArrowForwardIosIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Lead a team of 2 in the development of a React Native application using the Expo framework" />
            </ListItem>
            <ListItem style={{maxWidth: '600px'}}>
              <ListItemIcon sx={{ color: TEAL }}>
                <ArrowForwardIosIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Developed REST API and implemented JWT based authentication" />
            </ListItem>
            <ListItem style={{maxWidth: '600px'}}>
              <ListItemIcon sx={{ color: TEAL }}>
                <ArrowForwardIosIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Successfully intergrated payments using Stripe API" />
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Typography variant="h5">Digital Solutions Intern</Typography>
          <Typography variant="h6" color="secondary">
            Precipart
          </Typography>
          <Typography variant="p">Feb 2019 - April 2019</Typography>
          <List dense>
            <ListItem style={{maxWidth: '600px'}}>
              <ListItemIcon sx={{ color: TEAL }}>
                <ArrowForwardIosIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Supported the company in a Global migration to an upgraded ERP solution" />
            </ListItem>
            <ListItem style={{maxWidth: '600px'}}>
              <ListItemIcon sx={{ color: TEAL }}>
                <ArrowForwardIosIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Expedited the migration of users from Office 2010 to Office 365 and provided training" />
            </ListItem>
            <ListItem style={{maxWidth: '600px'}}>
              <ListItemIcon sx={{ color: TEAL }}>
                <ArrowForwardIosIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Expedited the migration of users from Office 2010 to Office 365 and provided training" />
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Typography variant="h5">Assistant Manager</Typography>
          <Typography variant="h6" color="secondary">
            Tanger Outlets
          </Typography>
          <Typography variant="p">Jan 2018 - March 2020</Typography>
          <List dense>
            <ListItem style={{maxWidth: '600px'}}>
              <ListItemIcon sx={{ color: TEAL }}>
                <ArrowForwardIosIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Head of ice maintenance and Zamboni operation" />
            </ListItem>
            <ListItem style={{maxWidth: '600px'}}>
              <ListItemIcon sx={{ color: TEAL }}>
                <ArrowForwardIosIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Oversee daily operations for an ice rink inside of an 800,000 square-foot outdoor mall" />
            </ListItem>
            <ListItem style={{maxWidth: '600px'}}>
              <ListItemIcon sx={{ color: TEAL }}>
                <ArrowForwardIosIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Ensured the safety and enjoyment of skaters on and off the ice" />
            </ListItem>
          </List>
        </TabPanel>
      </Box>
    </>
  );
};

export default Experience;
