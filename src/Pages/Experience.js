import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Typography } from "@mui/material";
import List from "@mui/material/List";
import { useMediaQuery } from "@mui/material";
import CustomListItem from "../Components/CustomListItem/CustomListItem";

const TabPanel = props => {
  const { children, value, index, ...other } = props;

  return value === index && <Box sx={{ p: 5 }}>{children}</Box>;
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
        style={{
          height: "400px",
          width: "100%",
        }}
        sx={{ mb: 20 }}>
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
            <CustomListItem
              text="Primarily create and style front end components while implementing new functionality and bug fixes according to requirements and user stories"
              maxWidth="600px"
            />
            <CustomListItem
              text="Member of a team of 12 people that work closely with QA and Product Specialists"
              maxWidth="600px"
            />
            <CustomListItem
              text="Mostly utilize React with Material UI, JQuery and C# ASP.Net"
              maxWidth="600px"
            />
          </List>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography variant="h5">Full Stack Developer </Typography>
          <Typography variant="h6" color="secondary">
            Manic Kat Records
          </Typography>
          <Typography variant="p">Sept 2020 - March 2021</Typography>
          <List dense>
            <CustomListItem
              text="Lead a team of 2 in the development of a React Native application using the Expo framework"
              maxWidth="600px"
            />
            <CustomListItem
              text="Developed REST API and implemented JWT based authentication"
              maxWidth="600px"
            />
            <CustomListItem text="Successfully intergrated payments using Stripe API" maxWidth="600px" />
          </List>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Typography variant="h5">Digital Solutions Intern</Typography>
          <Typography variant="h6" color="secondary">
            Precipart
          </Typography>
          <Typography variant="p">Feb 2019 - April 2019</Typography>
          <List dense>
            <CustomListItem
              text="Supported the company in a Global migration to an upgraded ERP solution"
              maxWidth="600px"
            />
            <CustomListItem
              text="Expedited the migration of users from Office 2010 to Office 365 and provided training"
              maxWidth="600px"
            />
          </List>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Typography variant="h5">Assistant Manager</Typography>
          <Typography variant="h6" color="secondary">
            Tanger Outlets
          </Typography>
          <Typography variant="p">Jan 2018 - March 2020</Typography>
          <List dense>
            <CustomListItem text="Head of ice maintenance and Zamboni operation" maxWidth="600px" />
            <CustomListItem
              text="Oversee daily operations for an ice rink inside of an 800,000 square-foot outdoor mall"
              maxWidth="600px"
            />
            <CustomListItem
              text="Ensured the safety and enjoyment of skaters on and off the ice"
              maxWidth="600px"
            />
          </List>
        </TabPanel>
      </Box>
    </>
  );
};

export default Experience;
