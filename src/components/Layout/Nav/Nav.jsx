import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/contact"}>Contact</NavLink>
      <NavLink to={"/service"}>Service</NavLink>
    </>
  );
}

export default Nav;
