import React from "react";
import styled, { css } from "styled-components";

import logo from "../../assets/logo.svg";
import { Container, Row, Column } from "../grid";

const FooterLinks = styled.div`
  ${({ theme: { colors, defaultRadius, defaultGutter } }) => css`
    width: 60%;
    margin: auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    a {
      color: black;
      text-decoration: none;
    }
  `}
`;

const InfoGroup = styled.div`
  ${({ theme: { colors, defaultRadius, defaultGutter, font } }) => css`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  `}
`;

const FooterInfo = styled.div`
  ${({ theme: { colors, defaultRadius, defaultGutter, font } }) => css`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;

    svg {
      margin-right: 10px;
    }
  `}
`;

const Logo = styled.div`
  img {
    width: 60px;
  }
`;

export default function Footer() {
  const information = [
    {
      info: "smiljanicjovan9@gmail.com",
    },
    {
      info: "Ljubljana, Slovenija",
    },
    {
      info: "+386 30 760 375",
    },
  ];

  return (
    <Container>
      <Row justifyContent="center" alignItems="center">
        <Column
          responsivity={{ md: 12 }}
          textAlign={{ md: "center" }}
          padding={{ top: 4, bottom: 1 }}
        >
          <Logo>
            <img src={logo} alt="logo" />
          </Logo>
        </Column>

        <Column
          responsivity={{ md: 12 }}
          textAlign={{ md: "center" }}
          padding={{ top: 2, bottom: 1 }}
        >
          <FooterLinks>
            <a href="hero">Home</a>
            <a href="about">About</a>
            <a href="projects">Projects</a>
            <a href="contact">Contact</a>
          </FooterLinks>
        </Column>

        <Column
          responsivity={{ md: 12 }}
          textAlign={{ md: "center" }}
          padding={{ top: 2, bottom: 1 }}
        >
          <FooterInfo>
            {information &&
              information.map(info => (
                <InfoGroup key={info.info}>
                  <p>{info.info}</p>
                </InfoGroup>
              ))}
          </FooterInfo>
        </Column>
      </Row>
    </Container>
  );
}
