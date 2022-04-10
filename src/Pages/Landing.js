import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import MotionButton from "../Components/MotionButton/MotionButton";
import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import PrimaryButton from "../Components/PrimaryButton";

const Landing = () => {
  const mediumViewport = useMediaQuery("screen and (min-width:768px)");

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ ml: 10, mr: 10, mt: mediumViewport ? 30 : 10 }}>
      <motion.div animate={{ y: [-200, 0], opacity: [0, 1] }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", height: "100%" }}>
          <Typography variant="h5" gutterBottom color="secondary">
            Hi, my name is
          </Typography>
          <Typography variant="h3" style={{ fontSize: "60px" }} gutterBottom>
            Bryan Borgesano.
          </Typography>
          <div style={{ maxWidth: "540px", paddingBottom: "25px" }}>
            <Typography variant="p">
              I'm a New York based Software Developer specializing in building responsive web based
              experiences.
            </Typography>
          </div>
          <motion.div
            transition={{ delay: 0.5 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            animate={{ scale: [1.1, 0.9, 1] }}>
            <MotionButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <a href="https://github.com/BryanBorge" target="_blank" rel="noreferrer">
                <PrimaryButton style={{ width: "225px", height: "50px" }}>
                  Check out my GitHub
                </PrimaryButton>
              </a>
            </MotionButton>
          </motion.div>
        </div>
      </motion.div>
    </Box>
  );
};

export default Landing;
