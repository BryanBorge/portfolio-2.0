import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const CustomListItem = ({ text, maxWidth }) => {
  return (
    <ListItem style={{ maxWidth: maxWidth }}>
      <ListItemIcon>
        <ArrowForwardIosIcon fontSize="small" />
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
};

export default CustomListItem;
