import React from "react";

import { Column, Container, Row } from "src/components/Grid";
import { Text } from "src/components/Text";

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
  return (
    <Container
      id="about"
      justifyContent="center"
      alignItems="center"
      height="80"
    >
      <Row>
        <Column responsivity={{ md: 6, sm: 12 }}>
          <Text as="h3" color="secondary">
            &lt;experience&gt;
          </Text>

          <ExpGroup>
            <Text as="h5" color="primary">
              Web developer at Consalta (Full-time)
            </Text>
            <Text as="h6" color="secondary">
              October 2021 - present
            </Text>
          </ExpGroup>
          <ExpGroup>
            <Text as="h5" color="primary">
              Website administrator at AdStar - Digital Agency (Freelance)
            </Text>
            <Text as="h6" color="secondary">
              March 2021 - November 2021
            </Text>
          </ExpGroup>
          <ExpGroup>
            <Text as="h5" color="primary">
              Frontend developer at KlikNova d.o.o (Full-time)
            </Text>
            <Text as="h6" color="secondary">
              June 2021 - October 2021
            </Text>
          </ExpGroup>

          <Text as="h3" color="secondary">
            &lt;/experience&gt;
          </Text>
        </Column>

        <Column responsivity={{ md: 6, sm: 12 }}>
          <Text as="h2" color="secondary">
            &lt;skills&gt;
          </Text>
          <ExpGroup>
            <Text as="h5" color="primary">
              Basic skills:
              <span> HTML, CSS, JavaScript, TypeScript</span>
            </Text>
          </ExpGroup>
          <ExpGroup>
            <Text as="h5" color="primary">
              Frameworks:
              <span> ReactJS, NextJS</span>
            </Text>
          </ExpGroup>

          <ExpGroup>
            <Text as="h5" color="primary">
              Libraries and tools:
              <span>
                {" "}
                WordPress, Git, Docker, Tailwind, SASS, jQuery, Bootstrap...
              </span>
            </Text>
          </ExpGroup>

          <Text as="h2" color="secondary">
            &lt;/skills&gt;
          </Text>
        </Column>
      </Row>
    </Container>
  );
}
