import React from "react";
import { Navbar, Footer } from "../components";

export const Layout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};
