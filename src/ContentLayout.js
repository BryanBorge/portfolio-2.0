import React from "react";
import AboutMe from "./Pages/About";
import Experience from "./Pages/Experience";
import Landing from "./Pages/Landing";
import styled from "styled-components";

const ContentLayout = () => {
  return (
    <>
      <LandingSection>
        <Landing  id="Landing"/>
      </LandingSection>

      <Section id="About">
        <AboutMe />
      </Section>

      <Section id="Experience">
        <Experience />
      </Section>
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
  min-height: -webkit-fill-available;
`;
