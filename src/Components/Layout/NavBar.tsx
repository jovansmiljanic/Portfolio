// Core
import React from "react";

// Local images
import logo from "../../assets/logo.svg";

// Vendors
import styled, { css } from "styled-components";
import { Column, Container, Row } from "../Grid";

const Logo = styled.div`
  ${({ theme: { colors, defaultRadius, defaultGutter } }) => css`
    img {
      width: 60px;
      height: 60px;
    }
  `}
`;

const Nav = styled.div`
  ${({ theme: { colors, defaultRadius, defaultGutter } }) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`;

const NavLinks = styled.div`
  ${({ theme: { colors, defaultRadius, defaultGutter } }) => css`
    width: 100%;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    a {
      padding: 0 20px;
    }
  `}
`;

export default function NavBar() {
  return (
    <Container>
      <Row>
        <Nav>
          <Column responsivity={{ md: 6 }} textAlign={{ md: "start" }}>
            <Logo>
              <img src={logo} alt="logo" />
            </Logo>
          </Column>
          <Column responsivity={{ md: 6 }} textAlign={{ md: "end" }}>
            <NavLinks>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </NavLinks>
          </Column>
        </Nav>
      </Row>
    </Container>
  );
}
