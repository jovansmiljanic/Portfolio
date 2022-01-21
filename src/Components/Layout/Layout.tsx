// Core types
import React from "react";

// Components
import NavBar from "./NavBar";
import Footer from "./Footer";

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
