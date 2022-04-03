import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import classes from "../Navigation.module.css";

const NavItem = ({ text, onClick, selected }) => {
  return (
    <motion.div className={classes.navItem} onClick={onClick} animate={{ opacity: selected ? 1 : 0.5 }}>
      <Box>
        <Typography>{text}</Typography>
        {selected && <motion.div className={classes.underline} layoutId="underline" />}
      </Box>
    </motion.div>
  );
};

export default NavItem;
