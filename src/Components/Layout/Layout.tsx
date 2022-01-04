// Core types
import React from "react";

// Components
import NavBar from "./NavBar";

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <>
      <NavBar />
      {props.children}
      <h1>footer</h1>
    </>
  );
}
