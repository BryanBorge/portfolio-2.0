import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { List, Typography } from "@mui/material";
import CustomListItem from "../Components/CustomListItem/CustomListItem";
import { PRIMARY_COLOR } from "../theme/contants";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";
import LinkTo from "../Components/LinkTo";

const AboutMe = () => {
  const mediumViewport = useMediaQuery("(min-width:768px)");

  return (
    <Box
      display="flex"
      alignItems="flex-start"
      justifyContent="space-evenly"
      flexWrap="wrap"
      style={{ width: "100%" }}
      sx={{ ml: 5, mr: 5, mb: 20, mt: mediumViewport ? 30 : 10 }}>
      <div style={{ maxWidth: "700px", display: "flex", flexDirection: "column", marginBottom: "20px" }}>
        <motion.div
          style={{ display: "flex", flexDirection: "column" }}
          transition={{ duration: 1 }}
          whileInView="visible"
          viewport={{ once: true }}
          initial="hidden"
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}>
          <Typography gutterBottom variant="p">
            Although I graduated from <LinkTo to="https://www.farmingdale.edu/">SUNY Farmingdale</LinkTo> with
            a B.S. in Computer Programming and Information Systems, I am a self-taught web developer
            specializing in <LinkTo to="https://reactjs.org/"> React</LinkTo>
          </Typography>
          <br />
          <Typography gutterBottom variant="p">
            I have had the opportunity to lead the development of a mobile application for an{" "}
            <LinkTo to="https://www.manickatrecords.com/">independent record label</LinkTo>. Currently I'm
            working at <LinkTo to="https://www.avi.com/">Applied Visions </LinkTo>
            as a Front End Developer building responsive and{" "}
            <LinkTo to="https://mealtrack.com/">highly configurable software</LinkTo> for a variety of
            clients.
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
                <CustomListItem text="React" />
                <CustomListItem text="Typescript" />
                <CustomListItem text="Material UI" />
                <CustomListItem text="jQuery" />
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
                <CustomListItem text="ASP.NET" />
                <CustomListItem text=".NET Core" />
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
            marginTop: "60px",
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
