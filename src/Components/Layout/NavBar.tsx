// Core
import React from "react";

// Local images
import logo from "../../assets/logo.svg";

// Vendors
import styled, { css } from "styled-components";
import { Column, Container, Row } from "../grid";

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
    justify-content: center;
    align-items: center;

    a {
      color: black;
      text-decoration: none;
      padding: 0 20px;
    }
  `}
`;

export default function NavBar() {
  return (
    <Container fluid>
      <Row>
        <Nav>
          <Column responsivity={{ md: 6 }} textAlign={{ md: "center" }}>
            <Logo>
              <img src={logo} alt="logo" />
            </Logo>
          </Column>
          <Column responsivity={{ md: 6 }} textAlign={{ md: "center" }}>
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
