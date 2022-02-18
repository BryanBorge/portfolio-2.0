import React from "react";
import styled from "styled-components";
import Landing from "./Pages/Landing";
import Contact from "./Pages/Contact";
import AboutMe from "./Pages/AboutMe";
import Projects from "./Pages/Projects";
import Experience from "./Pages/Experience";
import Header from "./Components/Navigation/Header";
import { Element } from "react-scroll";
import { Typography } from "@mui/material";
const ContentLayout = () => {
  return (
    <>
      <Header />
      <LandingSection>
        <Landing style={{ height: "100vh" }} />
      </LandingSection>
      <Section>
        <Element name="About">
          <SectionTitle>
            <HorizontalLine />
            <Typography variant="h4">About me</Typography>
          </SectionTitle>
          <AboutMe />
        </Element>
      </Section>
      <Section>
        <Element name="Experience">
          <SectionTitle>
            <Typography variant="h4">Experience</Typography>
            <HorizontalLine />
          </SectionTitle>
          <Experience />
        </Element>
      </Section>
      <Section>
        <SectionTitle>
          <HorizontalLine />
          <Typography variant="h4">Projects</Typography>
        </SectionTitle>
        <Projects />
      </Section>
      <Section>
        <SectionTitle>
          <Typography variant="h4">Contact</Typography>
          <HorizontalLine />
        </SectionTitle>
        <Contact />
      </Section>
    </>
  );
};

export default ContentLayout;

const HorizontalLine = styled.div`
  border: 1px solid TEAL;
  width: 100px;
  height: 0px;
  margin-right: 20px;
  margin-left: 20px;
`;

const SectionTitle = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  padding-left: 50px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 100px;
  width: 100%;
`;

const LandingSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;
