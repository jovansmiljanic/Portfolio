import React from "react";

import { Column, Container, Row } from "src/components/grid";
import { Text } from "src/components/text";

// Vendors
import styled, { css } from "styled-components";

const ExpGroup = styled.div`
  ${({ theme: { colors, defaultRadius, defaultGutter, font } }) => css`
    margin: ${defaultGutter * 2}rem 0;
    display: flex;
    flex-direction: column;
  `}
`;

export default function About() {
  const expiriences = [
    {
      jobTitle: "Web developer at Consalta (Full-time)",
      jobDuration: "October 2021 - present",
    },
    {
      jobTitle: " Website administrator at AdStar - Digital Agency (Freelance)",
      jobDuration: " March 2021 - November 2021",
    },
    {
      jobTitle: "Frontend developer at KlikNova d.o.o (Full-time)",
      jobDuration: "June 2021 - October 2021",
    },
  ];

  const skills = [
    {
      skillTitle: "Basic skills:",
      skillValues: "HTML, CSS, JavaScript, TypeScript",
    },
    {
      skillTitle: "Frameworks:",
      skillValues: "ReactJS, NextJS",
    },
    {
      skillTitle: "Libraries and tools:",
      skillValues:
        "WordPress, Git, Docker, Tailwind, SASS, jQuery, Bootstrap...",
    },
  ];

  return (
    <Container
      id="about"
      justifyContent="center"
      alignItems="center"
      height="80"
    >
      <Row>
        <Column responsivity={{ md: 6, sm: 12 }}>
          <Text as="h4" color="secondary">
            &lt;experience&gt;
          </Text>

          {Array.isArray(expiriences)
            ? expiriences
              ? expiriences.map(expirience => (
                  <ExpGroup key={expirience.jobTitle}>
                    <Text as="h6" color="primary">
                      {expirience.jobTitle}
                    </Text>

                    <Text as="h6" color="secondary">
                      {expirience.jobDuration}
                    </Text>
                  </ExpGroup>
                ))
              : "Loading"
            : "Check back later"}

          <Text as="h4" color="secondary">
            &lt;/experience&gt;
          </Text>
        </Column>
        <Column responsivity={{ md: 1, sm: 0 }}></Column>
        <Column responsivity={{ md: 5, sm: 12 }}>
          <Text as="h4" color="secondary">
            &lt;skills&gt;
          </Text>

          {Array.isArray(skills)
            ? skills
              ? skills.map(skill => (
                  <ExpGroup key={skill.skillTitle}>
                    <Text as="h6" color="primary">
                      {skill.skillTitle} <span>{skill.skillValues}</span>
                    </Text>
                  </ExpGroup>
                ))
              : "Loading"
            : "Check back later"}

          <Text as="h4" color="secondary">
            &lt;/skills&gt;
          </Text>
        </Column>
      </Row>
    </Container>
  );
}
