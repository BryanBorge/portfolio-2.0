import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import React from "react";
import { styled } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import NavItem from "../NavItem/NavItem";

const Header = () => {
  const mediumViewport = useMediaQuery("(min-width:768px)");

  return (
    <Box sx={{ flexGrow: 1, pb: 3 }}>
      <StyledAppBar position="fixed" color="transparent" elevation={0} sx={{ pl: "20px", pr: "20px" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BB
          </Typography>
          {mediumViewport && (
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <NavItem text="About" />
              <NavItem text="Experience" />
              <NavItem text="Projects" />
            </Box>
          )}
          <Button color="inherit" variant="outlined" style={{ textTransform: "none !important" }}>
            Resume
          </Button>
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
};

export default Header;

const StyledAppBar = styled(AppBar)({
  backgroundColor: "rgba(255,255,255, 0.85)",
});
