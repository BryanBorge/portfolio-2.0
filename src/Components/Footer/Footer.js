import { Box, Typography, Stack, Button, IconButton } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import React from "react";
import styled from "styled-components";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkTo from "../LinkTo";

const Footer = () => {
  const SocialIcons = (
    <>
      <LinkTo to="https://www.linkedin.com/in/bryan-borgesano/">
        <IconButton size="large" color="primary">
          <LinkedInIcon fontSize="inherit" />
        </IconButton>
      </LinkTo>
      <LinkTo to="https://github.com/BryanBorge">
        <IconButton size="large" color="primary">
          <GitHubIcon fontSize="inherit" />
        </IconButton>
      </LinkTo>
    </>
  );

  return (
    <Box style={{ width: "100%", backgroundColor: "#444260" }}>
      <Box display="flex" justifyContent="space-evenly" alignItems="flexStart" flexWrap="wrap" sx={{ pt: 2 }}>
        <Box display="flex" alignItems="flex-start" flexDirection="column" style={{ margin: "10px" }}>
          <Button startIcon={<LocationOnIcon color="secondary" />} style={{ textTransform: "none" }}>
            Long Island, New York
          </Button>
          <Button startIcon={<EmailIcon color="secondary" />} style={{ textTransform: "none" }}>
            BryanBorgesano98@gmail.com
          </Button>
        </Box>
        <Box display="flex" flexDirection="column" style={{ margin: "10px" }}>
          <TextContainer style={{ width: "300px" }}>
            <Stack direction="row" alignItems="center" spacing={8}>
              <Typography
                variant="p"
                gutterBottom
                color="secondary"
                style={{ fontWeight: "bold", paddingTop: "6px" }}>
                Get in touch
              </Typography>
              <Stack direction="row" alignItems="center" spacing={1}>
                {SocialIcons}
              </Stack>
            </Stack>
            <Typography variant="p" fontSize="16px">
              Thanks for checking out my site. Feel free to connect and react out to me on my socials!
            </Typography>
          </TextContainer>
        </Box>
      </Box>
      <Box justifyContent="center" display="flex" flexDirection="column" alignItems="center" sx={{ p: 3 }}>
        <Typography variant="p" fontSize="12px" style={{ opacity: 0.5 }}>
          Designed and Developed By Bryan Borgesano
        </Typography>
        <Typography variant="p" fontSize="12px" style={{ opacity: 0.5 }}>
          Last updated: 4/9/2022, 11:06:42 PM
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;

const TextContainer = styled(Box)`
  display: flex;
  flex-direction: column;
`;
