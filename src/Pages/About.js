import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { List, Typography } from "@mui/material";
import CustomListItem from "../Components/CustomListItem/CustomListItem";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../theme/contants";
import { motion } from "framer-motion";
const AboutMe = () => {
  return (
    <Box
      display="flex"
      alignItems="flex-start"
      justifyContent="space-evenly"
      flexWrap="wrap"
      style={{ width: "100%" }}
      sx={{ ml: 5, mr: 5, mb: 20 }}>
      <div style={{ maxWidth: "700px", display: "flex", flexDirection: "column", marginBottom: "20px" }}>
        <motion.div
          style={{ display: "flex", flexDirection: "column" }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          initial={{ opacity: 0 }}>
          <Typography gutterBottom variant="p">
            Although I gratuated from{" "}
            <a href="https://www.farmingdale.edu/" target="_blank" rel="noopener">
              SUNY Farmingdale
            </a>{" "}
            with a B.S. in Computer Programming and Information Systems I am a self-taught web developer
            specializing in React.
          </Typography>
          <br />
          <Typography gutterBottom variant="p">
            I have had the opportunity to lead the development of a mobile application for an{" "}
            <a href="https://www.manickatrecords.com/" target="_blank" rel="noopener">
              independent record label
            </a>
            . Currently I'm working at{" "}
            <a href="https://www.avi.com/" target="_blank" rel="noopener">
              Applied Visions{" "}
            </a>
            as a Front End Developer building responsive and{" "}
            <a href="https://mealtrack.com/" target="_blank" rel="noopener">
              highly configurable software
            </a>{" "}
            for a variety of clients.
          </Typography>
          <br />
          <Typography gutterBottom variant="p">
            Here are some technologies I work with everyday:{" "}
          </Typography>
        </motion.div>

        <Grid container>
          <Grid item xs={12} sm={6}>
            <motion.div
              viewport={{ once: true }}
              transition={{ delay: 2 }}
              animate={{ x: [-100, 0], opacity: [0, 1] }}>
              <List>
                <CustomListItem text="Javascript (jQuery, ES6)" />
                <CustomListItem text="React" />
                <CustomListItem text="Material UI" />
              </List>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <motion.div
              viewport={{ once: true }}
              transition={{ delay: 2 }}
              animate={{ x: [100, 0], opacity: [0, 1] }}>
              <List>
                <CustomListItem text="Git / BitBucket" />
                <CustomListItem text="SQL Server" />
                <CustomListItem text="C# ASP.Net" />
              </List>
            </motion.div>
          </Grid>
        </Grid>
      </div>

      <motion.div
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 1.5 }}
        animate={{ scale: [1, 1.1, 0.9, 1], opacity: [0, 1] }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            margin: "20px",
          }}>
          <img
            style={{
              borderRadius: "50%",
              border: `2px solid ${PRIMARY_COLOR}`,
              height: "250px",
            }}
            alt="My Headshot"
            src="https://avatars.githubusercontent.com/u/34038688?v=4"
          />
        </div>
      </motion.div>
    </Box>
  );
};

export default AboutMe;
