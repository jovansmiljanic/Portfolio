// Core
import React, { useState } from "react";

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
  ${({ theme: { colors, defaultRadius, defaultGutter, breakpoints } }) => css`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    a {
      color: black;
      text-decoration: none;
      padding: 0 20px;
    }

    @media (max-width: ${breakpoints.md}px) {
      justify-content: end;
    }
  `}
`;

const LinksMobile = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  a {
    color: black;
    text-decoration: none;
    padding: 0 20px;
  }
`;

export default function NavBar() {
  let isPhone = window.matchMedia("(max-width: 768px)").matches;
  const [navbarOpen, setNavbarOpen] = useState(false);

  const Hamburger = styled.button`
    position: absolute;
    top: 10%;
    right: 30px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    width: 2rem;
    height: 2rem;
    background: transparent;

    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;

    &:focus {
      outline: none;
    }

    div {
      width: 2rem;
      height: 0.25rem;
      background: black;
      border-radius: 10px;
      transition: all 0.5s linear;
      position: relative;
      transform-origin: 1px;

      &:first-child {
        transform: ${navbarOpen ? "rotate(45deg)" : "rotate(0)"};
      }

      &:nth-child(2) {
        opacity: ${navbarOpen ? "0" : "1"};
        transform: ${navbarOpen ? "translateX(20px)" : "translateX(0)"};
      }

      &:nth-child(3) {
        transform: ${navbarOpen ? "rotate(-45deg)" : "rotate(0)"};
      }
    }
  `;

  const handleToggle = () => {
    setNavbarOpen(prev => !prev);
  };
  return (
    <Container fluid>
      <Row>
        <Nav>
          <Column responsivity={{ sm: 6 }} textAlign={{ md: "center" }}>
            <Logo>
              <img src={logo} alt="logo" />
            </Logo>
          </Column>
          <Column responsivity={{ sm: 6 }} textAlign={{ sm: "center" }}>
            <NavLinks>
              {!isPhone ? (
                <>
                  <a href="#about">About</a>
                  <a href="#projects">Projects</a>
                  <a href="#contact">Contact</a>
                </>
              ) : (
                <Hamburger onClick={handleToggle}>
                  <div></div>
                  <div></div>
                  <div></div>
                </Hamburger>
              )}
            </NavLinks>
          </Column>
        </Nav>
        {isPhone && navbarOpen ? (
          <LinksMobile>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </LinksMobile>
        ) : (
          ""
        )}
      </Row>
    </Container>
  );
}
