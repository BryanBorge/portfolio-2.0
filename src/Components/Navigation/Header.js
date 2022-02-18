import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import React from "react";
import { styled } from "@mui/material/styles";
import { Link } from "react-scroll";
import { useMediaQuery } from "@mui/material";

const Header = () => {
  const mediumViewport = useMediaQuery("(min-width:768px)");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="fixed" color="transparent" elevation={0} sx={{ pl: "30px", pr: "20px" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BB
          </Typography>
          {mediumViewport && (
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Box sx={{ ml: 1, mr: 1 }}>
                <Link activeClass="active" to="About" spy={true} smooth={true} offset={-60}>
                  <Typography>About</Typography>
                </Link>
              </Box>
              <Box sx={{ ml: 1, mr: 1 }}>
                <Link activeClass="active" to="Experience" spy={true} smooth={true} offset={-60}>
                  <Typography>Experience</Typography>
                </Link>
              </Box>
              <Box sx={{ ml: 1, mr: 1 }}>
                <Link activeClass="active" to="Projects" spy={true} smooth={true} offset={-250}>
                  <Typography>Projects</Typography>
                </Link>
              </Box>
              <Box sx={{ ml: 1, mr: 1 }}>
                <Link activeClass="active" to="Contact" spy={true} smooth={true} offset={-250}>
                  <Typography>Contact</Typography>
                </Link>
              </Box>
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
