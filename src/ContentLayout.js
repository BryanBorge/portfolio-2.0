import React from "react";
import AboutMe from "./Pages/About";
import Experience from "./Pages/Experience";
import Landing from "./Pages/Landing";
import styled from "styled-components";
import { Element } from "react-scroll";
import Footer from "./Components/Footer/Footer";
const ContentLayout = () => {
  return (
    <>
      <Element name="Landing">
        <LandingSection>
          <Landing />
        </LandingSection>
      </Element>

      <Element name="About">
        <Section>
          <AboutMe />
        </Section>
      </Element>

      <Element name="Experience">
        <Section>
          <Experience />
        </Section>
      </Element>
      <Footer />
      
    </>
  );
};

export default ContentLayout;

const LandingSection = styled.div`
  display: flex;
  height: 1000px;
  justify-content: center;
  align-items: flex-start;
`;

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1000px;
`;
