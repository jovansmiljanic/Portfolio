import React from "react";

import { ReactComponent as Github } from "../../assets/github.svg";
import { ReactComponent as Linkedin } from "../../assets/linkedin.svg";
import { Column, Container, Row } from "../Grid";
import { Text } from "../Text";

export default function Hero() {
  return (
    <Container id="hero">
      <Row justifyContent="center">
        <Column responsivity={{ md: 6 }} textAlign={{ md: "center" }}>
          <div>
            <div>
              <Text as="h2" color="black">
                Hi, I am <span>Jovan Smiljanic</span>
              </Text>
              <Text as="h4">Self-taught Frontend developer.</Text>
            </div>
            <div>
              <a href="./Jovan_Smiljanic_Resume.pdf" download>
                Resume
              </a>
              <a
                href="https://github.com/jovan999"
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
            </div>
          </div>
        </Column>
      </Row>
    </Container>
  );
}
