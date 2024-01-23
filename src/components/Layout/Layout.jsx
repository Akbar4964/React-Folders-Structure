import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Nav from "./Nav/Nav";

function Layout({ children }) {
  return (
    <>
      <Nav></Nav>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
}

export default Layout;
