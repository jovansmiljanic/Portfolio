import React from "react";

import { ReactComponent as Github } from "../../assets/github.svg";
import { ReactComponent as Linkedin } from "../../assets/linkedin.svg";
import { Container, Row, Column } from "../../Components/Grid";
import { Text } from "../../Components/Text";

// Vendors
import styled, { css } from "styled-components";

const HeroTitle = styled.div`
  ${({ theme: { colors, defaultRadius, defaultGutter, font } }) => css`
    color: ${colors.primary};
    font-weight: ${font.weight.extraBold};
    span {
      color: ${colors.secondary};
    }
  `}
`;

const HeroLinks = styled.div`
  ${({ theme: { colors, defaultRadius, defaultGutter, font } }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: ${defaultGutter * 2}rem;
    a {
      text-decoration: none;
      color: black;
      margin: 0 10px;

      &:first-child {
        border: 2px solid black;
        padding: 10px 25px;
      }
    }
  `}
`;

export default function Hero() {
  return (
    <Container
      id="hero"
      justifyContent="center"
      alignItems="center"
      height="80"
    >
      <Row justifyContent="center">
        <Column responsivity={{ md: 12 }} textAlign={{ md: "center" }}>
          <HeroTitle>
            <Text as="h1" fontSize="40">
              Hi, I am <span>Jovan Smiljanic</span>
            </Text>
            <Text as="h4">Self-taught Frontend developer.</Text>
          </HeroTitle>
          <HeroLinks>
            <a href="./Jovan_Smiljanic_Resume.pdf" download>
              Resume
            </a>
            <a
              href="https://github.com/jovansmiljanic"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/jovansmiljanic/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
          </HeroLinks>
        </Column>
      </Row>
    </Container>
  );
}
