import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import NavItem from "../NavItem/NavItem";
import MotionButton from "../../MotionButton/MotionButton";
import { AnimateSharedLayout } from "framer-motion";
import { Link } from "react-scroll";
import PrimaryButton from "../../PrimaryButton";

const Header = () => {
  const mediumViewport = useMediaQuery("(min-width:768px)");
  const navItems = ["About", "Experience"];
  const [selected, setSelected] = useState(null);

  return (
    <Box sx={{ flexGrow: 1, pb: 8 }}>
      <StyledAppBar
        position="fixed"
        style={{ backgroundColor: "rgb(36, 35, 51, .8)" }}
        elevation={0}
        sx={{ pl: "20px", pr: "20px" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BB
          </Typography>
          {mediumViewport && (
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <AnimateSharedLayout>
                <Link to="Landing" spy={true} onSetActive={() => setSelected(null)} />
                {navItems.map((item, index) => (
                  <Link
                    to={item}
                    spy={true}
                    smooth={true}
                    duration={500}
                    onSetActive={() => setSelected(index)}>
                    <NavItem
                      text={item}
                      key={index}
                      selected={selected === index}
                      onClick={() => setSelected(index)}
                    />
                  </Link>
                ))}
              </AnimateSharedLayout>
            </Box>
          )}
          <MotionButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a
              href="https://docs.google.com/document/d/1ZaOCL9HNV2RNFFeiTGApiCXvs2RKhgyno198-pxQPgQ/edit?usp=sharing"
              target="_blank"
              rel="noreferrer">
              <PrimaryButton>
                Resume
              </PrimaryButton>
            </a>
          </MotionButton>
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
};

export default Header;

const StyledAppBar = styled(AppBar)({
  backgroundColor: "rgba(255,255,255, 0.85)",
});
