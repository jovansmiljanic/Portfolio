// Core types
import React from "react";

// Components
import NavBar from "./navBar";
import Footer from "./footer";

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <>
      <NavBar />
      {props.children}
      <Footer />
    </>
  );
}
