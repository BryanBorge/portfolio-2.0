import React from "react";
import AboutMe from "./Pages/About";
import Experience from "./Pages/Experience";
import Landing from "./Pages/Landing";
import styled from "styled-components";

const ContentLayout = () => {
  return (
    <>
      <LandingSection>
        <Landing />
      </LandingSection>
      <Section>
        <AboutMe />
      </Section>
      <Section>
        <Experience />
      </Section>
    </>
  );
};

export default ContentLayout;

const LandingSection = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  min-height: -webkit-fill-available;
`;

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: -webkit-fill-available;
`;
