import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import MotionButton from "../Components/MotionButton/MotionButton";
import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import ArrowCircleDownOutlinedIcon from "@mui/icons-material/ArrowCircleDownOutlined";
import IconButton from "@mui/material/IconButton";
import { scroller } from "react-scroll";

const Landing = () => {
  const largerDevices = useMediaQuery("(min-width:768px)");
  const smallerMobileDevices = useMediaQuery("(max-width:767px)");
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ ml: 10, mr: 10, mt: largerDevices ? 30 : 10 }}>
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
              <IconButton
                color="secondary"
                onClick={() =>
                  scroller.scrollTo("About", {
                    duration: 800,
                    delay: 0,
                    offset: smallerMobileDevices && -200,
                    smooth: "easeInOutQuart",
                  })
                }>
                <ArrowCircleDownOutlinedIcon sx={{ fontSize: "40px" }} />
              </IconButton>
            </MotionButton>
          </motion.div>
        </div>
      </motion.div>
    </Box>
  );
};

export default Landing;
