import React from "react";
import { motion } from "framer-motion";

const MotionButton = props => {
  return (
    <motion.button
      {...props}
      style={{ backgroundColor: "transparent", border: "none", margin: 0, padding: 0 }}>
      {props.children}
    </motion.button>
  );
};

export default MotionButton;
